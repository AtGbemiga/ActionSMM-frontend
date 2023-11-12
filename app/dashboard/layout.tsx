import styles from "./page.module.css";
import {
  NavMenu,
  NavMenuMobile,
} from "../components/Dashboard/navSection/DashboardMenu";
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
  // tags are added for styling purpose only. Change these when better CSS skills are acquired
  return (
    <article className={styles.layout}>
      <nav>
        <NavMenu />
        <NavMenuMobile />
      </nav>
      <section>{children}</section>
    </article>
  );
}
