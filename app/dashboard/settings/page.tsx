"use client";
import { useEffect, useState } from "react";
import { Form } from "@/app/components/settings/Form";
import styles from "./page.module.css";

function Settings(): JSX.Element {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, []);

  return (
    <main className={`${styles.main}`}>
      <section className={`mt-5 shadow ${styles.formParent}`}>
        <Form loginEmail={email ?? ""} />
      </section>
    </main>
  );
}

export default Settings;
