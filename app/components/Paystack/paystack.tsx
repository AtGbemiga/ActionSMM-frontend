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
  const [email, setEmail] = useState(localStorage.getItem("email"));

  useEffect(() => {
    async function handleSubmit() {
      let multiplier;
      if (price) multiplier = price * 100;

      const amount = multiplier?.toString();
      console.log("amountString", amount);

      if (!amount || !name || !email) return;

      const res = await payStackFunc(email, amount, name);
      console.log("res", res);
      if (res) {
        window.location.href = res.data.authorization_url;
      }
    }
    handleSubmit();
  }, [price, name, email]);

  return null;
};
