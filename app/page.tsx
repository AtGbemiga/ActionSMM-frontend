import { HeroImg } from "./components/Home/HeroImg";
import { HowItWorks } from "./components/Home/HowItWorks/HowItWorks";
import { StarterPlanAd } from "./components/Home/StarterPlanAd/StarterPlanAd";
import { Stats } from "./components/Home/Stats/Stats";
import PostShowcase from "./components/Home/SwiperSocialPosts/Swiper";
import { SwiperHeading } from "./components/Home/SwiperSocialPosts/heading";
import { WeManage } from "./components/Home/WeManage/WeManage";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <section className="border border-black">
        <HeroImg />
      </section>
      <main className={`${styles.main}`}>
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
        <article className={styles.how_it_works_container}>
          <h3 className="text-dark text-center pb-3">How it works</h3>
          <HowItWorks />
        </article>
        <section className={`${styles.stats}`}>
          <Stats />
        </section>
      </main>
    </>
  );
}
