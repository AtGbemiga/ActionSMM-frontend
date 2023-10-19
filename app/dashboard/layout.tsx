import styles from "./page.module.css";
import { NavMenu } from "../components/Dashboard/NavSection/menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | ActionSMM",
  description: "Affordable and powerful social media management",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <article className={styles.main}>
      <nav>
        <NavMenu />
      </nav>
      <section>{children}</section>
    </article>
  );
}
