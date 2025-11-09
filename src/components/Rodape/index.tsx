"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import Coracao from "@/assets/coracao-icon.svg";

export default function Rodape() {
  return (
    <footer className={styles.Rodape}>
      <section className="container">
        <Image src={Coracao} alt="Coração" width={65} height={59} />
        <span>Obrigada por fazer parte desse dia!</span>
      </section>
    </footer>
  );
}
