import Rodape from "@/components/Rodape";
import ViewListaPresentes from "@/components/views/ListaPresentes";
import Duvidas from "@/components/views/Sobre/Duvidas";

import { listarPresentes } from "@/servicos/presentes";
import { PresenteType } from "@/types/presente";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const atualizarListaPresentes = async () => {
  const resp = await listarPresentes();

  if (!resp.success) {
    return [];
  }
  return resp.data as PresenteType[];
};

export default async function ListaPresentes() {
  const listaPresentes = await atualizarListaPresentes();

  const atualizarLista = async () => {
    "use server";
    revalidatePath("/lista-de-presentes");
  };

  return (
    <>
      <ViewListaPresentes
        listaPresentes={listaPresentes}
        atualizarLista={atualizarLista}
      />
      <Duvidas />
      <Rodape />
    </>
  );
}
