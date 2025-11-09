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
import { editarPresente } from "@/servicos/presentes";
import ModalSucesso from "@/components/ModalSucesso";
import ModalErro from "@/components/ModalErro";

interface ViewListaPresentesProps {
  listaPresentes: PresenteType[];
  atualizarLista: () => void;
  estaLogado?: boolean;
}
interface DadosModal {
  aberto: boolean;
  loading: boolean;
  presenteID: string;
  comprador: string;
}
export default function ViewListaPresentes({
  listaPresentes,
  atualizarLista,
  estaLogado = false,
}: ViewListaPresentesProps) {
  const redirecionador = useRouter();
  const [dadosModal, setDadosModal] = useState<DadosModal>({
    aberto: false,
    loading: false,
    presenteID: "",
    comprador: "",
  });
  const [modalConfirmacaoAberto, setConfirmacaoAberto] =
    useState<boolean>(false);
  const [modalSucessoAberto, setModalSucesso] = useState<boolean>(false);
  const [modalErroAberto, setModalErro] = useState<boolean>(false);

  const abrirModalConfirmacao = (presenteID: string) => {
    setDadosModal({ aberto: true, loading: false, presenteID, comprador: "" });
  };

  const perguntarConfirmacao = (presenteID: string, comprador: string) => {
    setDadosModal({ aberto: true, loading: true, presenteID, comprador });
    setConfirmacaoAberto(true);
  };
  const confirmarConfirmacao = async () => {
    setConfirmacaoAberto(false);
    const resp = await editarPresente({
      presenteID: dadosModal.presenteID,
      presente: { comprador: dadosModal.comprador, confirmado: true },
    });

    if (resp.success) {
      setDadosModal({
        aberto: false,
        loading: false,
        presenteID: "",
        comprador: "",
      });
      setModalSucesso(true);
      atualizarLista();
      return setTimeout(() => setModalSucesso(false), 3000);
    } else {
      setModalErro(true);

      return setTimeout(() => setModalErro(false), 7000);
    }
  };
  const cancelarConfirmacao = () => {
    setDadosModal({
      aberto: false,
      loading: false,
      presenteID: "",
      comprador: "",
    });
  };
  const voltarConfirmacao = () => {
    setConfirmacaoAberto(false);
    setDadosModal((prev) => ({ ...prev, loading: false }));
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
      <ModalSucesso aberto={modalSucessoAberto} />
      <ModalErro aberto={modalErroAberto} />
    </main>
  );
}
