"use client";
import { useEffect, useState } from "react";
import { Form } from "@/app/components/settings/Form";

function Settings(): JSX.Element {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, []);

  return (
    <main>
      <Form loginEmail={email ?? ""} />
    </main>
  );
}

export default Settings;
