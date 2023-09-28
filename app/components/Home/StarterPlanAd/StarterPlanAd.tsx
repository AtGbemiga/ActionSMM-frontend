"use client";
import AdImg from "../../../../public/testLogo.jpg";
import Image from "next/image";
import styles from "./StarterPlanAd.module.css";
import Button from "react-bootstrap/Button";
export const StarterPlanAd = () => {
  return (
    <>
      <div className={styles.ad_img}>
        <Image src={AdImg} alt="Ad" width={200} height={200} />
      </div>
      <div className="ps-md-5">
        <h3 className="text-dark text-start">Starter Plan</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque
          aliquid saepe modi commodi, reprehenderit voluptatum mollitia
          architecto distinctio. Provident, mollitia fugit.
        </p>
        <div className="text-end ">
          <Button className="btn-lg">Start</Button>
        </div>
      </div>
    </>
  );
};
