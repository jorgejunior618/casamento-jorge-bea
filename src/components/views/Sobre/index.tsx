import Link from "next/link";

import styles from "./styles.module.scss";
import InfoPrincipal from "./InfoPrincipal";
import Local from "./Local";
import Presentear from "./Presentear";
import InfoPIX from "./InfoPIX";
import Duvidas from "./Duvidas";

export default function SobreView() {
  return (
    <>
      <InfoPrincipal />
      <Local />
      <Presentear />
      <InfoPIX />
      <Duvidas />
    </>
  );
}
