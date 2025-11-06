"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

// Chave secreta para JWT (em produção, use uma variável de ambiente)
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

// Tempo de expiração do cookie (1 dia)
// const EXPIRATION_TIME = 24 * 60 * 60; // 24 horas em milissegundos

export interface DadosSessao {
  login: string;
  senha: string;
}

/**
 * Criptografa os dados da sessão em JWT
 */
export async function criptografarSessao(dados: DadosSessao): Promise<string> {
  try {
    const jwt = await new SignJWT({
      login: dados.login,
      senha: dados.senha,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      // .setExpirationTime("24h")
      .sign(JWT_SECRET);

    return jwt;
  } catch (error) {
    console.error("Erro ao criptografar sessão:", error);
    throw new Error("Falha ao criptografar dados da sessão");
  }
}

/**
 * Descriptografa o JWT e retorna os dados da sessão
 */
export async function descriptografarSessao(jwt: string): Promise<DadosSessao> {
  try {
    const { payload } = await jwtVerify(jwt, JWT_SECRET, {
      algorithms: ["HS256"],
    });

    return {
      login: payload.login as string,
      senha: payload.senha as string,
    };
  } catch (error) {
    console.error("Erro ao descriptografar sessão:", error);
    throw new Error("Sessão inválida ou expirada");
  }
}

/**
 * Salva a sessão criptografada em cookies
 */
export async function salvarSessao(dados: DadosSessao): Promise<void> {
  try {
    const jwt = await criptografarSessao(dados);
    const cookieStore = await cookies();

    cookieStore.set("sessao_usuario", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date("2026-03-31"),
      path: "/",
      domain:
        process.env.NODE_ENV === "production"
          ? ".casamento-jorge-bea.vercel.app"
          : "localhost",
    });
  } catch (error) {
    console.error("Erro ao salvar sessão:", error);
    throw new Error("Falha ao salvar sessão");
  }
}

/**
 * Obtém e retorna a sessão descriptografada
 */
export async function obterSessao(): Promise<DadosSessao | null> {
  try {
    const cookieStore = await cookies();
    const jwt = cookieStore.get("sessao_usuario")?.value;

    if (!jwt) {
      return null;
    }

    const dados = await descriptografarSessao(jwt);
    return dados;
  } catch (error) {
    console.error("Erro ao obter sessão:", error);
    // Se a sessão for inválida, remove o cookie
    removerSessao();
    return null;
  }
}

/**
 * Remove a sessão (logout)
 */
export async function removerSessao(): Promise<void> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("sessao_usuario");
  } catch (error) {
    console.error("Erro ao remover sessão:", error);
  }
}

/**
 * Verifica se existe uma sessão ativa
 */
export async function verificarSessao(): Promise<boolean> {
  try {
    const sessao = await obterSessao();

    return sessao !== null;
  } catch (error) {
    console.log({ error });

    return false;
  }
}

/**
 * Atualiza a sessão com novos dados
 */
export async function atualizarSessao(
  novosDados: Partial<DadosSessao>
): Promise<void> {
  try {
    const sessaoAtual = await obterSessao();

    if (!sessaoAtual) {
      throw new Error("Nenhuma sessão ativa para atualizar");
    }

    const dadosAtualizados: DadosSessao = {
      ...sessaoAtual,
      ...novosDados,
    };

    await salvarSessao(dadosAtualizados);
  } catch (error) {
    console.error("Erro ao atualizar sessão:", error);
    throw new Error("Falha ao atualizar sessão");
  }
}
