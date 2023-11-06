import Image from "next/image";
import Hero from "public/bannerImg.svg";
import bannerImgLivePlaceholder from "public/bannerImgLivePlaceholder.svg";
import styles from "./home.module.css";
export const HeroImg = () => (
  <>
    <Image
      src={Hero}
      alt="Hero image"
      sizes="100vw"
      className={`m-0 ${styles.bannerImg}`}
      priority
      // placeholder="blur"
      // blurDataURL={bannerImgLivePlaceholder}
    />
    <h3 className={`position-absolute ${styles.heroHeading}`}>
      <span className={styles.heroSpan}>Powerful</span> and{" "}
      <span className={styles.heroSpan}>affordable</span> social media
      management
    </h3>
  </>
);
