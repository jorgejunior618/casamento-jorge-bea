"use client";

import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import VoltarIcon from "@/assets/voltar-icon.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { PresenteType } from "@/types/presente";

interface FormPresenteProps {
  presente: PresenteType;
}

export default function FormPresente({ presente }: FormPresenteProps) {
  const redirecionador = useRouter();

  const redirecionarLista = () => {
    redirecionador.push("/casal/lista-de-presentes");
  };

  const handleEditPresente: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(event);
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
      </form>
    </main>
  );
}
