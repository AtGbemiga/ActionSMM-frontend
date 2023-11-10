"use client";
import Link from "next/link";
import styles from "./Footer.module.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export const Footer = (): JSX.Element => {
  const [token, setToken] = useState("");
  // use mounted state to decide if the conditional redendering gets to show at all
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setToken(Cookies.get("token") ?? "");
  }, []);

  return (
    <>
      <ul className={styles.ul}>
        <section>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>
            {!token ? (
              <Link href="/login">Log in</Link>
            ) : (
              <Link href="/dashboard">Dashboard</Link>
            )}
          </li>
        </section>
        <section>
          <li>{!token && <Link href="/sign-up">Sign up</Link>}</li>
          <li>
            <Link href="/#">Influencer</Link>
          </li>
        </section>
      </ul>
    </>
  );
};
