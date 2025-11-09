import Modal from "antd/es/modal";
import Image from "next/image";
import { useState } from "react";
// import 'antd/es/modal/style/css';

import styles from "./styles.module.scss";

import PresenteIcon from "@/assets/presente-icon.svg";
import LinkButton from "../LinkButton";

interface ModalConfirmarCompraProps {
  aberto: boolean;
  cancelar: () => void;
  confirmar: (presenteID: string, comprador: string) => void;
  presenteID: string;
}

export default function ModalConfirmarCompra({
  aberto,
  cancelar,
  confirmar,
  presenteID,
}: ModalConfirmarCompraProps) {
  const [comprador, setComprador] = useState("");
  const onOk = () => {
    if (comprador.length < 4) return alert("Digite seu nome por favor!");
    confirmar(presenteID, comprador);
  };
  const onCancel = () => {
    setComprador("");
    cancelar();
  };
  return (
    <Modal
      open={aberto}
      onOk={onOk}
      onCancel={onCancel}
      width={590}
      footer={
        <div className="btnsModal">
          <LinkButton width={175} onClick={onOk}>
            Confirmar
          </LinkButton>
          <LinkButton width={175} onClick={onCancel} type="cancelamento">
            Cancelar
          </LinkButton>
        </div>
      }
      closeIcon={null}
      destroyOnHidden
    >
      <section className={styles.ConteudoModal}>
        <Image
          src={PresenteIcon}
          alt="Desenho de um formato de presente"
          width={115}
          height={105}
        />
        <h3>Você vai nos presentear com este item?</h3>
        <p>
          Informe seu nome para que possamos agradecer depois! 💖
          <br />
          Este registro é apenas para sabermos quem escolheu entregar este
          presente — a compra não é feita por aqui.
        </p>
        <div className={styles.input}>
          <label htmlFor="comprador">informe seu nome:</label>
          <input
            type="text"
            id="comprador"
            name="comprador"
            value={comprador}
            onChange={(event) => setComprador(event.target.value)}
            placeholder="Nome de quem está presenteando"
          />
        </div>
      </section>
    </Modal>
  );
}
