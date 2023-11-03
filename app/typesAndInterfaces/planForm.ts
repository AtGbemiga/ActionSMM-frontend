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

// type for text input error refs
export type InputRefs = {
  [key: string]: React.MutableRefObject<HTMLInputElement | null>;
};
