import styles from "./styles.module.scss";
import Link from "next/link";

export default function Duvidas() {
  return (
    <section className={styles.Duvidas}>
      <h2>Alguma dúvida?</h2>
      <Link href={"https://w.app/v4q9pu"} target="_blank">
        <span>Fale com os noivos</span>
      </Link>
    </section>
  );
}
