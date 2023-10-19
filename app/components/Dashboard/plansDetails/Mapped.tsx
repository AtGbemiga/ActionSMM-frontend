"use client";
import { useEffect, useState } from "react";
import { getPlansFunc } from "@/lib/getPlans";
import { PlanDashboard } from "@/app/typesAndInterfaces/planDashboard";
import { PlanCard } from "./PlanCard";

export const Mapped = () => {
  const [plans, setPlans] = useState<PlanDashboard | undefined>(undefined);
  const [count, setCount] = useState<PlanDashboard | undefined>(undefined);
  useEffect(() => {
    const test = async () => {
      const res = await getPlansFunc();
      console.log("res", res.plan);
      console.log("count", res.count);

      //   const data = res;
      setPlans(res);
      // setCount(res.count ?? 0);
    };
    test();
  }, []);
  return (
    <div className="text-white">
      {plans?.plan.map((plan) => (
        <PlanCard key={plan._id} {...plan} />
      ))}{" "}
    </div>
  );
};
