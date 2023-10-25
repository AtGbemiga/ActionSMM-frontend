"use client";
import { useEffect, useState } from "react";
import { getPlansFunc } from "@/lib/getPlans";
import { PlanDashboard } from "@/app/typesAndInterfaces/planDashboard";
import { PlanCard } from "./PlanCard";
import Link from "next/link";
import styles from "../dashboard.module.css";
import Loading from "@/app/loading";

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
  if (!plans) {
    return <Loading />;
  } else if (plans?.plan.length === 0) {
    return (
      <section className={`text-center pt-5 ${styles.noPlan}`}>
        <h4>No plan yet</h4>
        <Link href="/plans" className="btn btn-primary">
          Pick one
        </Link>
      </section>
    );
  } else
    return (
      <section className={`${styles.plan}`}>
        <div className="p-4">
          {plans?.plan.map((plan) => (
            <PlanCard key={plan._id} {...plan} />
          ))}{" "}
        </div>
      </section>
    );
};
