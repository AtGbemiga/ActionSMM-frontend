import Link from "next/link";
import styles from "./Navbar.module.css";

export const LoginBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/login" className={styles.button}>
        Login
      </Link>
    </>
  );
};
