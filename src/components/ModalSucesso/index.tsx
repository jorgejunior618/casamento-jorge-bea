import Modal from "antd/es/modal";
import Image from "next/image";
// import 'antd/es/modal/style/css';
import OkIcon from "@/assets/ok.png";
import styles from "./styles.module.scss";

interface ModalConfirmacaoProps {
  aberto: boolean;
}

export default function ModalSucesso({ aberto }: ModalConfirmacaoProps) {
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
          src={OkIcon}
          alt="Icone de sucesso em formato de V"
          width={105}
          height={105}
        />
        <h2>
          Tudo certo!
          <br />
          Muito obrigado pelo presente 🎁
        </h2>
      </section>
    </Modal>
  );
}
