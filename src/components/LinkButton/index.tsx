import styles from "./styles.module.scss";

interface LinkButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  type?: "primario" | "secundario" | "cancelamento" | "texto";
  width?: number;
}
export default function LinkButton({
  children,
  onClick,
  type = "primario",
  width,
}: LinkButtonProps) {
  return (
    <button
      className={`${styles.LinkButton} ${styles[type]}`}
      style={{ width }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
