"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import Mapinha from "@/assets/mapa.png";
import FotoCasal from "@/assets/casal-mini.png";
import QRCodePix from "@/assets/qr-pix.png";
import LinkButton from "@/components/LinkButton";
import { useRouter } from "next/navigation";
import Rodape from "@/components/Rodape";

export default function SobreCasamento() {
  const redirecionador = useRouter();
  const redirecionar = () => {
    redirecionador.push("/lista-de-presentes");
  };
  return (
    <main className="sobre">
      <section className={styles.InfoPrincipal}>
        <div className={styles.informacoes}>
          <h1>Jorge & Beatriz</h1>

          <span>Chá de casa nova</span>

          {/* <section className={styles.data}>
            <span>23/01/2026</span>

            <div className={styles.contagem}>
              <div>
                <span className={styles.tamTitulo}>2</span>
                <span>meses</span>
              </div>
              <div>
                <span className={styles.tamTitulo}>12</span>
                <span>dias</span>
              </div>
            </div>
          </section> */}
        </div>
      </section>
      {/* <section className={styles.Local}>
        <section className="container">
          <div>
            <h2>Onde vai ser?</h2>
            <span>Restaurante Frederico Aldeota</span>
            <span>Av. Barão de Studart, 855</span>
            <span>Aldeota - Fortaleza</span>
          </div>

          <Link
            href="https://maps.app.goo.gl/MXpYmMwvhWitjh7e9"
            target="_blank"
          >
            <Image
              src={Mapinha}
              alt="Imagem com a localização e proximidades"
              width={442}
              height={307}
            />
          </Link>
        </section>
      </section> */}

      <section className={styles.Presentear}>
        <h2>O que nos presentear?</h2>
        <LinkButton onClick={redirecionar}>
          <span>VER LISTA</span>
        </LinkButton>
      </section>

      <section className={styles.InfoPIX}>
        <section className="container">
          <div>
            <h3>Para onde enviar o presente?</h3>
            <span>CEP 60750-090</span>
            <span>Avenida J, 1770</span>
            <span>José Walter - Fortaleza</span>
          </div>

          <div className={styles.fotoCasal2}>
            <Image
              src={FotoCasal}
              alt="Foto do casal"
              width={364}
              height={364}
            />
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

      <section className={styles.Duvidas}>
        <h2>Alguma dúvida?</h2>
        <Link href={"https://w.app/v4q9pu"} target="_blank">
          <span>Fale com os noivos</span>
        </Link>
      </section>

      <Rodape />
    </main>
  );
}
