import { PlanDashboard } from "@/app/typesAndInterfaces/planDashboard";
import Cookies from "js-cookie";

export const getPlansFunc = async (): Promise<PlanDashboard> => {
  const url = "http://127.0.0.1:3000/api/v1/plan/details";

  const token = Cookies.get("token");

  // attempt fetch
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  // check for if res fails
  if (!res.ok) {
    const exactErrorMsg = await res.json();
    throw new Error(
      `Request failed with status ${Object.entries(
        res.status
      )}, ${Object.entries(exactErrorMsg)}`
    );
  }

  // get good res at this stage
  const data: PlanDashboard = await res.json();

  return data;
};
