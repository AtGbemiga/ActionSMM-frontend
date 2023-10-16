"use client";
import { payStackFunc } from "@/lib/payStack";
import { useState, useEffect } from "react";

export const Paystack = ({
  name,
  price,
}: {
  name: string | null;
  price: number | null;
}): null => {
  const [email, setEmail] = useState("example@example.com");

  useEffect(() => {
    async function handleSubmit() {
      let multiplier;
      if (price) multiplier = price * 100;

      const amount = multiplier?.toString();
      console.log("amountString", amount);

      const res = await payStackFunc(email, amount as string);
      console.log("res", res);
      if (res) {
        window.location.href = res.data.authorization_url;
      }
    }
    handleSubmit();
  }, [price, name, email]);

  return null;
};
