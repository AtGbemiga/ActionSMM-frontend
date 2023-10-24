"use client";
import AdImg from "../../../../public/testLogo.jpg";
import Image from "next/image";
import styles from "./StarterPlanAd.module.css";
import Button from "react-bootstrap/Button";
import { payStackFunc } from "@/lib/payStack";
import { useEffect, useState } from "react";
export const StarterPlanAd = () => {
  const [email, setEmail] = useState("");
  // get email from local storage
  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, [email]);
  async function handleClick() {
    const res = await payStackFunc(email, "20000", "Starter");

    // redirect to paystack checkout
    if (res) {
      window.location.href = res.data.authorization_url;
    }
  }
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
          <Button className="btn-lg" onClick={handleClick}>
            Start
          </Button>
        </div>
      </div>
    </>
  );
};
