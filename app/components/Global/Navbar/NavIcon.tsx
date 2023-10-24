import Link from "next/link";
import styles from "./Navbar.module.css";
export const NavIcon = (): JSX.Element => {
  return (
    <Link href="/" className={`text-decoration-none ${styles.logo}`}>
      ActionSMM
    </Link>
  );
};
