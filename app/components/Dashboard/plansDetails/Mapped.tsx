"use client";
import { useEffect, useState } from "react";
import { getPlansFunc } from "@/lib/getPlans";
import { PlanDashboard } from "@/app/typesAndInterfaces/planDashboard";
import { PlanCard } from "./PlanCard";
import Link from "next/link";
import styles from "../dashboard.module.css";

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
  if (plans?.plan.length === 0)
    return (
      <section className={`text-center pt-5 ${styles.noPlan}`}>
        <h4>No plan yet</h4>
        <Link href="/plans" className="btn btn-primary">
          Pick one
        </Link>
      </section>
    );
  return (
    <section className={`text-white ${styles.plan}`}>
      <div style={{ width: "100%", border: "2px solid red" }}>
        {plans?.plan.map((plan) => (
          <PlanCard key={plan._id} {...plan} />
        ))}{" "}
      </div>
    </section>
  );
};
