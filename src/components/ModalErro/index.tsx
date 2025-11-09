import Modal from "antd/es/modal";
import Image from "next/image";
// import 'antd/es/modal/style/css';
import ErroIcon from "@/assets/erro.svg";
import styles from "./styles.module.scss";

interface ModalConfirmacaoProps {
  aberto: boolean;
}

export default function ModalErro({ aberto }: ModalConfirmacaoProps) {
  return (
    <Modal
      open={aberto}
      onOk={() => null}
      onCancel={() => null}
      footer={null}
      closeIcon={null}
      destroyOnHidden
    >
      <section className={styles.ConteudoModal}>
        <Image
          src={ErroIcon}
          alt="Icone de sucesso em formato de V"
          width={105}
          height={105}
        />
        <h2>
          Algo deu errado 😕
          <br />
          Tente novamente mais tarde, ou fale com o casal
        </h2>
      </section>
    </Modal>
  );
}
