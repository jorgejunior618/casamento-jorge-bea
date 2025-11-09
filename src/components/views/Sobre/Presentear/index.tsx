"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import LinkButton from "@/components/LinkButton";

export default function Presentear() {
  const redirecionador = useRouter();
  const redirecionar = () => {
    redirecionador.push("/lista-de-presentes");
  };

  return (
    <section className={styles.Presentear}>
      <h2>O que nos presentear?</h2>
      <LinkButton onClick={redirecionar}>
        <span>VER LISTA</span>
      </LinkButton>
    </section>
  );
}
