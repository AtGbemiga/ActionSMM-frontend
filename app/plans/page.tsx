import styles from "./page.module.css";
import { MappedCard } from "../components/PlansPage/MappedCard";
import { EnterpriseAd } from "../components/PlansPage/EnterpriseAd";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans | ActionSMM",
  description: "Affordable and powerful social media management",
};

export default function Plans(): JSX.Element {
  return (
    <main>
      <section className={`${styles.mappedCard} my-5`}>
        <MappedCard />
      </section>
      {/* <section className={`${styles.enterpriseAd}`}>
        <EnterpriseAd />
      </section> */}
    </main>
  );
}
