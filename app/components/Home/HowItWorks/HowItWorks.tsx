import styles from "./HowItWorks.module.css";
import Image from "next/image";
import Img from "../../../../public/testLogo.jpg";
import {
  PiNumberSquareOneBold,
  PiNumberSquareTwoBold,
  PiNumberSquareThreeBold,
} from "react-icons/pi";
export const HowItWorks = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        <PiNumberSquareOneBold />
        <p>Fill the form</p>
      </section>
      <section className={`${styles.section_reverse}`}>
        <PiNumberSquareTwoBold />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur nisi ea accusantium blanditiis corrupti, voluptates ipsam
          quos.
        </p>
      </section>
      <section className={`${styles.last_section}`}>
        <PiNumberSquareThreeBold />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aspernatur nisi ea accusantium blanditiis corrupti, voluptates ipsam
          quos.
        </p>
      </section>
    </>
  );
};
