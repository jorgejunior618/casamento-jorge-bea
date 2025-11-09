import BotaoSuspenso from "@/components/BotaoSuspenso";
import ViewListaPresentes from "@/components/views/ListaPresentes";

import { listarPresentes } from "@/servicos/presentes";
import { PresenteType } from "@/types/presente";

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
  return (
    <>
      <ViewListaPresentes estaLogado listaPresentes={listaPresentes} />
      <BotaoSuspenso>Adicionar</BotaoSuspenso>
    </>
  );
}
