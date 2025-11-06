"use client";
import { PresenteType } from "@/types/presente";
import { ImageStyled, ItemWrapper, LinkButton } from "../styles";

export default function ItemPresente({ presente }: { presente: PresenteType }) {
  return (
    <ItemWrapper>
      <ImageStyled
        src={presente.imagem}
        alt={presente.item}
        width={125}
        height={125}
      />
      <span>{presente.item}</span>
      <LinkButton
        href={`lista-de-presentes/presentear?com=${presente.id}`}
        target="_blank"
      >
        Ver presente
      </LinkButton>
    </ItemWrapper>
  );
}
