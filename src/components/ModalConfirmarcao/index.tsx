import Modal from "antd/es/modal";
import LinkButton from "../LinkButton";
import Image from "next/image";
// import 'antd/es/modal/style/css';
import AlertaIcon from "@/assets/alerta-icon.png";
import styles from "./styles.module.scss";

interface ModalConfirmacaoProps {
  aberto: boolean;
  cancelar: () => void;
  confirmar: () => void;
}

export default function ModalConfirmacao({
  aberto,
  cancelar,
  confirmar,
}: ModalConfirmacaoProps) {
  return (
    <Modal
      open={aberto}
      onOk={confirmar}
      onCancel={cancelar}
      footer={
        <div className="btnsModal">
          <LinkButton width={175} onClick={confirmar}>
            Confirmar
          </LinkButton>
          <LinkButton width={175} onClick={cancelar} type="cancelamento">
            Cancelar
          </LinkButton>
        </div>
      }
      closeIcon={null}
      destroyOnHidden
    >
      <section className={styles.ConteudoModal}>
        <Image
          src={AlertaIcon}
          alt="Desenho de um formato de presente"
          width={115}
          height={105}
        />
        <h2>Atenção</h2>
        <p>
          Apenas confirme caso você já tenha comprado, ou tenha certeza que irá
          comprar este presente para o casal!
        </p>
        <p>Ao confirmar o item ficará indisponível para os demais</p>
      </section>
    </Modal>
  );
}
