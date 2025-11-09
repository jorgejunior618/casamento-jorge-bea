"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import VoltarIcon from "@/assets/voltar-icon.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { PresenteType } from "@/types/presente";
import { cadastrarPresente, editarPresente } from "@/servicos/presentes";

interface FormPresenteProps {
  presente?: PresenteType;
}

export default function FormPresente({ presente }: FormPresenteProps) {
  const redirecionador = useRouter();

  const redirecionarLista = () => {
    redirecionador.push("/casal/lista-de-presentes");
  };

  const handleEditPresente: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const inputs = Array.from(
      (event.target as Document).getElementsByTagName("input")
    );

    const novoPresente: Partial<PresenteType> = {};

    novoPresente.item = inputs[0].value;
    novoPresente.imagem = inputs[1].value;
    novoPresente.url = inputs[2].value;
    novoPresente.confirmado =
      inputs[3].value.toLowerCase() === "sim" ||
      inputs[3].value.toLowerCase() === "s";
    novoPresente.comprador =
      inputs[4].value.length === 0 ? null : inputs[4].value;

    if (presente) {
      await editarPresente({ presente: novoPresente, presenteID: presente.id });
    } else {
      await cadastrarPresente(novoPresente as PresenteType);
    }
    redirecionarLista();
  };

  return (
    <main className="container">
      <LinkButton type="texto" onClick={redirecionarLista}>
        <div className="BotaoVoltar">
          <Image src={VoltarIcon} alt="voltar" width={14} height={14} />{" "}
          <span>VOLTAR</span>
        </div>
      </LinkButton>
      <form className={styles.InfoPresente} onSubmit={handleEditPresente}>
        <h2>Edite este presente</h2>
        <div className={styles.FormField}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            name="titulo"
            placeholder="Título do presente"
            defaultValue={presente?.item}
            type="text"
          />
        </div>
        <div className={styles.FormField}>
          <label htmlFor="imagem">Imagem</label>
          <input
            id="imagem"
            name="imagem"
            placeholder="Link da imagem do presente"
            defaultValue={presente?.imagem}
            type="text"
          />
        </div>
        <div className={styles.FormField}>
          <label htmlFor="link">Link</label>
          <input
            id="link"
            name="link"
            placeholder="Link para o presente"
            defaultValue={presente?.url ?? ""}
            type="text"
          />
        </div>
        <div className={styles.FormField}>
          <label htmlFor="confirmado">Confirmado</label>
          <input
            id="confirmado"
            name="confirmado"
            placeholder="Se não foi confirmado não preencha NADA"
            defaultValue={presente?.confirmado ? "sim" : "não"}
            type="text"
          />
        </div>
        <div className={styles.FormField}>
          <label htmlFor="comprador">Comprador</label>
          <input
            id="comprador"
            name="comprador"
            placeholder="Se não foi confirmado não preencha NADA"
            defaultValue={presente?.comprador ?? ""}
            type="text"
          />
        </div>

        <LinkButton submit>
          {presente ? "Atualizar" : "Adicionar à"} lista
        </LinkButton>
      </form>
    </main>
  );
}
