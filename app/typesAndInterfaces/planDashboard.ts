import { PlanForm } from "./planForm";

export interface SinglePlan extends PlanForm {
  chat?: string[];
  status: string;
  _id: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface PlanDashboard {
  plan: SinglePlan[];
  count: number;
}
