import styles from "../dashboard.module.css";
import Link from "next/link";

export const NavMenu = (): JSX.Element => {
  return (
    <section className={styles.linkContainer}>
      <Link href="/dashboard">Home</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/secondOption">second Option</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </section>
  );
};
