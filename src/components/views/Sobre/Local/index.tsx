import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import Mapinha from "@/assets/mapa.png";

export default function Local() {
  return (
    <section className={styles.Local}>
      <section className="container">
        <div>
          <h2>Onde vai ser?</h2>
          <span>Restaurante Frederico Aldeota</span>
          <span>Av. Barão de Studart, 855</span>
          <span>Aldeota - Fortaleza</span>
        </div>

        <Link href="https://maps.app.goo.gl/MXpYmMwvhWitjh7e9" target="_blank">
          <Image
            src={Mapinha}
            alt="Imagem com a localização e proximidades"
            width={442}
            height={307}
          />
        </Link>
      </section>
    </section>
  );
}
