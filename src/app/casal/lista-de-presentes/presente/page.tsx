"use client";

import listaPresentes from "@/mocks/lista-presentes";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useMemo } from "react";
import VoltarIcon from "@/assets/voltar-icon.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export default function Presente() {
  const parametrosURL = useSearchParams();
  const presID = parametrosURL.get("id");
  const redirecionador = useRouter();

  const redirecionarLista = () => {
    redirecionador.push("/casal/lista-de-presentes");
  };
  const presente = useMemo(() => {
    const encontrado = listaPresentes.find((item) => item.id === presID);
    return encontrado;
  }, [presID]);

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
      {presID && !presente ? (
        <h1>Presente nao encontrado</h1>
      ) : (
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
        </form>
      )}
    </main>
  );
}
