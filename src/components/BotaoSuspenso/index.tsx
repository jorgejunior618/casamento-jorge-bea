"use client";

import { ReactNode } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function BotaoSuspenso({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <button
      className={styles.BotaoSuspenso}
      onClick={() => router.push("/casal/lista-de-presentes/presente")}
    >
      {children}
    </button>
  );
}
