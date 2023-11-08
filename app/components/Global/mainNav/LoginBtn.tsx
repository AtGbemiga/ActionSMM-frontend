import Link from "next/link";
import styles from "./navbar.module.css";

export const LoginBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/login" className={styles.button}>
        Login
      </Link>
    </>
  );
};
