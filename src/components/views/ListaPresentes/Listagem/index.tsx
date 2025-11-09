import ItemPresente from "@/components/ItemPresente/ItemPresente";
import { PresenteType } from "@/types/presente";

import styles from "./styles.module.scss";

interface ListagemProps {
  listaPresentes: PresenteType[];
  abrirModalConfirmacao: (presenteID: string) => void;
  estaLogado?: boolean;
}

export default function Listagem({
  listaPresentes,
  abrirModalConfirmacao,
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
        />
      ))}
    </ul>
  );
}
