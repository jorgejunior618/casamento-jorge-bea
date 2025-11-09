import styles from "./styles.module.scss";

export default function InfoPrincipal() {
  return (
    <section className={styles.InfoPrincipal}>
      <div className={styles.informacoes}>
        <h1>Jorge & Beatriz</h1>

        <span>Chá de casa nova</span>

        <section className={styles.data}>
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
        </section>
      </div>
    </section>
  );
}
