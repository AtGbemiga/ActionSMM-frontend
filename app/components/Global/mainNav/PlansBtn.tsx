import Link from "next/link";
import styles from "./navbar.module.css";

export const PlansBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/plans" className={styles.button}>
        Plans
      </Link>
    </>
  );
};
