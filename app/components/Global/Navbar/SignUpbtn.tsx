import Button from "react-bootstrap/esm/Button";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const SignUpBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/sign-up" className={styles.button}>
        Sign up
      </Link>
    </>
  );
};
