import styles from "./styles.module.scss";

interface LinkButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "primario" | "secundario" | "cancelamento" | "texto";
  width?: number;
  submit?: boolean;
}
export default function LinkButton({
  children,
  onClick,
  type = "primario",
  width,
  submit,
}: LinkButtonProps) {
  return (
    <button
      className={`${styles.LinkButton} ${styles[type]}`}
      style={{ width }}
      onClick={onClick}
      type={submit ? "submit" : undefined}
    >
      {children}
    </button>
  );
}
