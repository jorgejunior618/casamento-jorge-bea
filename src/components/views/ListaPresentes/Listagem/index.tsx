import ItemPresente from "@/components/ItemPresente/ItemPresente";
import { PresenteType } from "@/types/presente";

import styles from "./styles.module.scss";

interface ListagemProps {
  listaPresentes: PresenteType[];
  abrirModalConfirmacao: (presenteID: string) => void;
  abrirModalEncaminhamento: (url?: string | null) => void;
  estaLogado?: boolean;
}

export default function Listagem({
  listaPresentes,
  abrirModalConfirmacao,
  abrirModalEncaminhamento,
  estaLogado,
}: ListagemProps) {
  return (
    <ul className={styles.ListaPresentes}>
      {listaPresentes.map((presente, idx) => (
        <ItemPresente
          key={idx}
          presente={presente}
          estaLogado={estaLogado}
          adicionarComprador={abrirModalConfirmacao}
          abrirModalEncaminhamento={abrirModalEncaminhamento}
        />
      ))}
    </ul>
  );
}
