"use client";
import { PresenteType } from "@/types/presente";
import styles from "./styles.module.scss";
import Image from "next/image";
import EditIcon from "@/assets/pen-mark.svg";
import Link from "next/link";
import LinkButton from "@/components/LinkButton";

interface ItemPresenteProps {
  presente: PresenteType;
  adicionarComprador: (presenteID: string) => void;
  abrirModalEncaminhamento: (url?: string | null) => void;
  estaLogado?: boolean;
  emLista?: boolean;
}

export default function ItemPresente({
  presente,
  estaLogado = false,
  emLista = false,
  adicionarComprador,
  abrirModalEncaminhamento,
}: ItemPresenteProps) {
  return (
    <div
      className={`${styles.ItemWrapper} ${
        estaLogado && presente.confirmado ? styles.comprado : ""
      } ${emLista ? styles.emLista : ""}`}
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

      <LinkButton
        onClick={() => abrirModalEncaminhamento(presente.url)}
        width={emLista ? 100 : 230}
      >
        {estaLogado
          ? "Ver"
          : presente.url
          ? "Comprar presente"
          : "Compre em uma loja"}
      </LinkButton>
      <LinkButton
        onClick={() => adicionarComprador(presente.id)}
        width={emLista ? 260 : 230}
        type="cancelamento"
      >
        {
          estaLogado
            ? presente.confirmado
              ? emLista
                ? presente.comprador
                : `"${presente.comprador}" já comprou!\nDeseja cancelar?`
              : "Marcar Comprador"
            : "Já comprei este para o casal"
          /* Confirmar que derei este presente */
        }
      </LinkButton>
    </div>
  );
}
