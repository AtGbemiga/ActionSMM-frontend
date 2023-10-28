"use client";
import styles from "./StarterPlanAd.module.css";
import Button from "react-bootstrap/Button";
import { payStackFunc } from "@/lib/payStack";
import { useEffect, useState } from "react";
import { BiPaperPlane } from "react-icons/bi";

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
      <div className={styles.ad_img_container}>
        <BiPaperPlane className={styles.adIcon} />
      </div>
      <div className="ps-md-5">
        <h3 className="text-dark text-start">Starter Plan</h3>
        <p>
          This plan is intended to get your business up and running. Make your
          mark on social media and start doing business.
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
