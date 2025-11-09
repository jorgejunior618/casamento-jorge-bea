import BotaoSuspenso from "@/components/BotaoSuspenso";
import ViewListaPresentes from "@/components/views/ListaPresentes";

export default function ListaPresentes() {
  return (
    <>
      <ViewListaPresentes estaLogado />
      <BotaoSuspenso>Adicionar</BotaoSuspenso>
    </>
  );
}
