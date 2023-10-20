import Button from "react-bootstrap/esm/Button";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const HomeBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/" className={styles.button}>
        Home
      </Link>
    </>
  );
};
