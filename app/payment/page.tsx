"use client";

import { useSearchParams } from "next/navigation";

function Payment(): JSX.Element {
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  console.log(price);

  return <div>Payment: {price} </div>;
}
export default Payment;
