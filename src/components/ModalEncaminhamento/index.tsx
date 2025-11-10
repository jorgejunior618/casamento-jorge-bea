import Modal from "antd/es/modal";
import Image from "next/image";
// import 'antd/es/modal/style/css';
import DicaIcon from "@/assets/dica.png";
import styles from "./styles.module.scss";
import LinkButton from "../LinkButton";

interface ModalEncaminhamentoProps {
  aberto: boolean;
  url?: string | null;
  fechar: () => void;
}

export default function ModalEncaminhamento({
  aberto,
  url,
  fechar,
}: ModalEncaminhamentoProps) {
  const redirecionarLoja = () => {
    if (url) window.open(url, "_blank");
    fechar();
  };
  return (
    <Modal
      open={aberto}
      onOk={() => null}
      onCancel={() => null}
      footer={
        <div className="btnsModal">
          <LinkButton onClick={redirecionarLoja}>Entendi</LinkButton>
        </div>
      }
      closeIcon={null}
      destroyOnHidden
    >
      <section className={styles.ConteudoModal}>
        <Image
          src={DicaIcon}
          alt="Icone de dica representado por lampada"
          width={105}
          height={105}
        />
        <h2>Uma dica!</h2>
        <p>
          {url
            ? "Iremos te encaminhar para uma recomendação de loja"
            : "Não encontramos este produto em uma loja online"}
          , sinta-se livre para presentear o casal com um produto{" "}
          <strong>similar</strong> de onde preferir ☺️🍃
        </p>
      </section>
    </Modal>
  );
}
