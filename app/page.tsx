import { HeroImg } from "./components/Home/HeroImg";
import { HowItWorks } from "./components/Home/HowItWorks/HowItWorks";
import { StarterPlanAd } from "./components/Home/StarterPlanAd/StarterPlanAd";
import { Stats } from "./components/Home/Stats/Stats";
import PostShowcase from "./components/Home/SwiperSocialPosts/Swiper";
import { WeManage } from "./components/Home/WeManage/WeManage";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <section className="border border-black">
        <HeroImg />
      </section>
      <main className={`${styles.main} `}>
        <section className={styles.we_manage_container}>
          <WeManage />
        </section>
        <article className={styles.starter_plan_ad_container}>
          <StarterPlanAd />
        </article>
        {/* <section style={{ border: "3px solid red" }}>
          <PostShowcase />
        </section> */}
        <article>
          <h3 className="text-dark text-center">How it works</h3>
          <HowItWorks />
        </article>
        <section className={`${styles.stats}`}>
          {/* style={{ border: "3px solid green" }} */}
          <Stats />
        </section>
      </main>
    </>
  );
}
