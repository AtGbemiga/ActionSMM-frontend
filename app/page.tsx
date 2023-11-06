import { HeroImg } from "./components/Home/HeroImg";
import { StarterPlanAd } from "./components/Home/StarterPlanAd/StarterPlanAd";
import { Stats } from "./components/Home/Stats/Stats";
import PostShowcase from "./components/Home/SwiperSocialPosts/Swiper";
import { SwiperHeading } from "./components/Home/SwiperSocialPosts/heading";
import { WeManage } from "./components/Home/WeManage/WeManage";
import FAQ from "./components/fAQ/fAQ";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={`${styles.main}`}>
      <section className="position-relative">
        <HeroImg />
      </section>
      <section className={styles.we_manage_container}>
        <WeManage />
      </section>
      <article className={styles.starter_plan_ad_container}>
        <StarterPlanAd />
      </article>
      {/* put this in PostShowcase section when better CSS skills are aquired */}
      <div className={styles.swiper_heading_container}>
        <SwiperHeading />
      </div>
      <section className={styles.post_showcase_container}>
        <PostShowcase />
      </section>
      <article className={styles.faq_container}>
        <FAQ />
      </article>
      <section className={`${styles.stats}`}>
        <Stats />
      </section>
    </main>
  );
}
