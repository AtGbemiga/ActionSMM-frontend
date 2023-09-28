"use client";
import styles from "./Stats.module.css";
import { useRouter } from "next/navigation";
export const Stats = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/plans");
  }
  return (
    <>
      <section className={`${styles.item_container}`}>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className={`${styles.item_container} pt-md-5`}>
        <div></div>
        <div></div>
        <div onClick={handleClick}></div>
      </section>
    </>
  );
};
