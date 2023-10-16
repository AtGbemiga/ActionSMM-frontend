"use client";

import { useSearchParams } from "next/navigation";
import { Paystack } from "../components/Paystack/paystack";

function Payment(): JSX.Element {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  // change price to number, remove commas
  const num = Number(price?.replace(/,/g, ""));
  console.log(typeof num);

  return (
    <div>
      <Paystack name={name} price={num} />
    </div>
  );
}
export default Payment;
