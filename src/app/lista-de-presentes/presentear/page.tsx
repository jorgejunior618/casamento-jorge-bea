"use client";

import ItemPresente from "@/components/views/ItemPresente";
import listaPresentes from "@/mocks/lista-presentes";
import { PresenteType } from "@/types/presente";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function Presentear() {
  const parametrosURL = useSearchParams();
  const presente: PresenteType | undefined = useMemo(() => {
    const presID = parametrosURL.get("com");
    return listaPresentes.find((item) => item.id === presID);
  }, [parametrosURL]);

  return presente ? (
    <ItemPresente presente={presente} />
  ) : (
    <h1>Presente nao encontrado</h1>
  );
}
