"use client";
import styles from "./Stats.module.css";
import { useRouter } from "next/navigation";
export const Stats = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/plans");
  }
  // content of each div is a social media action
  return (
    <>
      <section className={`${styles.item_container}`}>
        <div>
          <p className="text-white">#Tweet</p>
        </div>
        <div>
          <p className="text-white">#Like</p>
        </div>
        <div>
          <p className="text-white">#Comment</p>
        </div>
      </section>
      <section className={`${styles.item_container} pt-md-5`}>
        <div>
          <p className="text-white">#Share</p>
        </div>
        <div>
          <p className="text-white">#Repost</p>
        </div>
        <div onClick={handleClick}>
          <p>#Start</p>
        </div>
      </section>
    </>
  );
};
