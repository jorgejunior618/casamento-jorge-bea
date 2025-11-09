import Image from "next/image";

import styles from "./styles.module.scss";
import FotoCasal from "@/assets/casal-mini.png";
import QRCodePix from "@/assets/qr-pix.png";

export default function InfoPIX() {
  return (
    <section className={styles.InfoPIX}>
      <section className="container">
        <div>
          <h3>Para onde enviar o presente?</h3>
          <span>CEP 60750-090</span>
          <span>Avenida J, 1770</span>
          <span>José Walter - Fortaleza</span>
        </div>

        <div className={styles.fotoCasal2}>
          <Image src={FotoCasal} alt="Foto do casal" width={364} height={364} />
        </div>

        <div className={styles.chave}>
          <h3>Chave PIX</h3>

          <Image
            src={QRCodePix}
            alt="QR Code do pix do casal"
            width={200}
            height={200}
          />
          <span>jorgeebea@gmail.com</span>
        </div>
      </section>
    </section>
  );
}
