import Link from "next/link";
import styles from "./navbar.module.css";

export const SignUpBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/sign-up" className={styles.button}>
        Sign up
      </Link>
    </>
  );
};
