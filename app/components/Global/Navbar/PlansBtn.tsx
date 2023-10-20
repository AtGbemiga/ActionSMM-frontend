import Button from "react-bootstrap/esm/Button";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const PlansBtn = (): JSX.Element => {
  return (
    <>
      <Link href="/plans" className={styles.button}>
        Plans
      </Link>
    </>
  );
};
