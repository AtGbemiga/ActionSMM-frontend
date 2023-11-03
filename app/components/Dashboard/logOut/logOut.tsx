"use client";
import { logOutFunc } from "@/lib/logOut";
import styles from "../dashboard.module.css";
import { useRouter } from "next/navigation";
export const LogOut = (): JSX.Element => {
  const router = useRouter();
  async function handleClick() {
    await logOutFunc();
    // add check for failure
    router.push("/");
  }
  return (
    <div className={`${styles.logOut}`} onClick={handleClick}>
      log out
    </div>
  );
};
