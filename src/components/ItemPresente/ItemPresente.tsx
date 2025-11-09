"use client";
import { PresenteType } from "@/types/presente";
import styles from "./styles.module.scss";
import Image from "next/image";
import EditIcon from "@/assets/pen-mark.svg";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";
import { useCallback } from "react";

interface ItemPresenteProps {
  estaLogado?: boolean;
  presente: PresenteType;
  adicionarComprador: (presenteID: string) => void;
}

export default function ItemPresente({
  presente,
  estaLogado = false,
  adicionarComprador,
}: ItemPresenteProps) {
  const verPresente = useCallback(() => {
    if (presente.url) window.open(presente.url, "_blank");
  }, [presente]);
  return (
    <div
      className={`${styles.ItemWrapper} ${
        estaLogado && presente.confirmado ? styles.comprado : ""
      }`}
    >
      <Image
        className={styles.ImageStyled}
        src={presente.imagem}
        alt={presente.item}
        width={125}
        height={125}
      />
      {estaLogado && (
        <Link
          className={styles.EditItemBtn}
          href={`/casal/lista-de-presentes/presente?id=${presente.id}`}
        >
          <Image src={EditIcon} alt="Editar item" width={15} height={15} />
        </Link>
      )}
      <span>{presente.item}</span>

      <LinkButton onClick={verPresente} width={230}>
        {presente.url ? "Comprar presente" : "Compre em uma loja"}
      </LinkButton>
      <LinkButton
        onClick={() => adicionarComprador(presente.id)}
        width={230}
        type="cancelamento"
      >
        {
          estaLogado
            ? presente.confirmado
              ? `"${presente.comprador}" já comprou!\nDeseja cancelar?`
              : 'Marcar como "Comprado"'
            : "Já comprei este para o casal"
          /* Confirmar que derei este presente */
        }
      </LinkButton>
    </div>
  );
}
