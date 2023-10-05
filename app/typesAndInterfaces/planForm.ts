export interface PlanForm {
  planName: string;
  price?: string;
  personalName: string;
  businessName: string;
  website?: string;
  aboutYourBusiness?: string;
  cta?: string[];
  startDate?: string;
  dueDate?: string;
  socialMediaPics?: string[];
  accounts?: {
    facebook?: string;
    instagram?: string;
    linkedIn?: string;
    x?: string;
  };
}
