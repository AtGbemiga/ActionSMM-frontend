import styles from "./page.module.css";
import { MappedCard } from "../components/PlansPage/MappedCard";
import { EnterpriseAd } from "../components/PlansPage/EnterpriseAd";
export default function Plans(): JSX.Element {
  return (
    <main>
      <section className={`${styles.mappedCard} my-5`}>
        <MappedCard />
      </section>
      <section className={`${styles.enterpriseAd}`}>
        <EnterpriseAd />
      </section>
    </main>
  );
}
