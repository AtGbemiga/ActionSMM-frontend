import styles from "./HowItWorks.module.css";
import Image from "next/image";
import Img from "../../../../public/testLogo.jpg";
export const HowItWorks = () => {
  return (
    <>
      <section className={`${styles.section} py-5`}>
        <Image src={Img} alt="Img" width={200} height={200} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur nisi ea accusantium blanditiis corrupti, voluptates ipsam
          quos.
        </p>
      </section>
      <section className={`${styles.section_reverse} py-5`}>
        <Image src={Img} alt="Img" width={200} height={200} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur nisi ea accusantium blanditiis corrupti, voluptates ipsam
          quos.
        </p>
      </section>
      <section className={`${styles.last_section} py-5`}>
        <Image src={Img} alt="Img" width={200} height={200} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur nisi ea accusantium blanditiis corrupti, voluptates ipsam
          quos.
        </p>
      </section>
    </>
  );
};