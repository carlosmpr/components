
import styles from "./Section.module.css";
type SectionProps = {
    children?: JSX.Element | JSX.Element[];
};
export default function Section({ children }: SectionProps) {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>{children}</div>
    </div>
  );
}
