import Link from "next/link";
import styles from "./navbar.module.css";

export const HomeBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/" className={styles.button}>
        Home
      </Link>
    </>
  );
};
