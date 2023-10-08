export interface PlanForm {
  readonly planName: string;
  readonly price?: string;
  personalName: string;
  businessName: string;
  website?: string;
  aboutYourBusiness: string;
  cta: string[];
  startDate: Date | null;
  dueDate: Date | null;
  socialMediaPics?: string[];
  accounts: {
    one?: string;
    two?: string;
    three?: string;
    four?: string;
  };
}
