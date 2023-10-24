import { Card } from "./Card";
import { data } from "@/app/mockPlansData";

// add different "Recommended" class if index === 3
export const MappedCard = (): JSX.Element => {
  const mappedResult = data.map((plan, index) => {
    const cardProps = {
      name: plan.name,
      accounts: plan.accounts,
      frequency: plan.frequency,
      inboxComments: plan.inboxComments,
      influencer: plan.influencer,
      customerSupport: plan.customerSupport,
      performance: plan.performance,
      price: plan.price,
    };

    return <Card key={plan.name} {...cardProps} index={index} />;
  });
  return <>{mappedResult}</>;
};
