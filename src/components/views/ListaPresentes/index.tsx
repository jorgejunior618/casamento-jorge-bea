"use client";

import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import VoltarIcon from "@/assets/voltar-icon.svg";
import ModalConfirmarCompra from "@/components/ModalConfirmarCompra";
import { useState } from "react";
import ModalConfirmacao from "@/components/ModalConfirmarcao";
import Listagem from "./Listagem";
import { PresenteType } from "@/types/presente";

interface ViewListaPresentesProps {
  listaPresentes: PresenteType[];
  estaLogado?: boolean;
}
interface DadosModal {
  aberto: boolean;
  presenteID: string;
  comprador: string;
}
export default function ViewListaPresentes({
  listaPresentes,
  estaLogado = false,
}: ViewListaPresentesProps) {
  const redirecionador = useRouter();
  const [dadosModal, setDadosModal] = useState<DadosModal>({
    aberto: false,
    presenteID: "",
    comprador: "",
  });
  const [modalConfirmacaoAberto, setConfirmacaoAberto] =
    useState<boolean>(false);

  const abrirModalConfirmacao = (presenteID: string) => {
    setDadosModal({ aberto: true, presenteID, comprador: "" });
  };

  const perguntarConfirmacao = (presenteID: string, comprador: string) => {
    setDadosModal({ aberto: true, presenteID, comprador });
    setConfirmacaoAberto(true);
  };
  const confirmarConfirmacao = () => {
    const presenteSelecionado = listaPresentes.findIndex(
      (pres) => pres.id === dadosModal.presenteID
    );

    if (presenteSelecionado === -1)
      return alert("Ocorreu um erro, tente novamente mais tarde");

    [...listaPresentes][presenteSelecionado] = {
      ...listaPresentes[presenteSelecionado],
      confirmado: true,
      comprador: dadosModal.comprador,
    };
    setDadosModal({ aberto: false, presenteID: "", comprador: "" });
    setConfirmacaoAberto(false);
  };
  const cancelarConfirmacao = () => {
    setDadosModal({ aberto: false, presenteID: "", comprador: "" });
  };
  const voltarConfirmacao = () => {
    setConfirmacaoAberto(false);
  };

  const redirecionarHome = () => {
    redirecionador.push("/sobre-o-casamento");
  };
  return (
    <main className="container">
      <div className={styles.Pagina}>
        <LinkButton type="texto" onClick={redirecionarHome}>
          <div className="BotaoVoltar">
            <Image src={VoltarIcon} alt="voltar" width={14} height={14} />{" "}
            <span>VOLTAR</span>
          </div>
        </LinkButton>
        <h1 className={styles.TituloLista}>Lista de presentes</h1>
        <Listagem
          listaPresentes={listaPresentes}
          abrirModalConfirmacao={abrirModalConfirmacao}
          estaLogado={estaLogado}
        />
      </div>
      <ModalConfirmarCompra
        aberto={dadosModal.aberto}
        presenteID={dadosModal.presenteID}
        confirmar={perguntarConfirmacao}
        cancelar={cancelarConfirmacao}
      />
      <ModalConfirmacao
        aberto={modalConfirmacaoAberto}
        confirmar={confirmarConfirmacao}
        cancelar={voltarConfirmacao}
      />
    </main>
  );
}
