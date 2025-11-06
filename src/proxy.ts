import { NextResponse, NextRequest } from "next/server";
import { removerSessao, verificarSessao } from "@/utils/sessao";

const rotasPublicas: string[] = [
  "/",
  "/lista-de-presentes",
  "/lista-de-presentes/presentear",
];

export async function proxy(req: NextRequest) {
  const estaLogado = await verificarSessao();
  const { pathname } = req.nextUrl;
  const ehRotaPublica = rotasPublicas.includes(pathname);

  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/lista-de-presentes", req.url));
  }
  if (!ehRotaPublica && !estaLogado) {
    return NextResponse.redirect(new URL("/sobre-o-casamento", req.url));
  }
  // if (req.nextUrl.pathname === "/login" && estaLogado) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
  if (req.nextUrl.pathname === "/logout" && estaLogado) {
    removerSessao();
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Capturando todas a rotas, e excluindo à navegaçoes em arquivos estáticos:
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|woff|woff2|ttf|eot)$).*)",
  ],
};
