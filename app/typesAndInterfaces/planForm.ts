export interface PlanForm {
  readonly planName: string;
  readonly price?: string;
  personalName: string;
  businessName: string;
  website?: string;
  aboutYourBusiness: string;
  cta: string[];
  startDate: Date | undefined;
  dueDate: Date | undefined;
  accounts: {
    one?: string;
    two?: string;
    three?: string;
    four?: string;
  };
}
