import styles from "./Card.module.css";
import star from "../../../public/star.svg";
import Image from "next/image";
import { PlanDetails } from "@/app/typesAndInterfaces/planDetails";
export const Card = ({
  name,
  accounts,
  frequency,
  inboxComments,
  influencer,
  customerSupport,
  performance,
  price,
}: PlanDetails): JSX.Element => {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className={`${styles.ul} list-group list-group-flush`}>
        <li className="list-group-item text-white">{accounts}</li>
        <li className="list-group-item ">{frequency}</li>
        <li className="list-group-item ">{inboxComments}</li>
        <li className="list-group-item">{influencer}</li>
        <li className="list-group-item">{customerSupport}</li>
        <li className="list-group-item">
          {performance}
          <Image
            src={star}
            alt="star"
            width={20}
            height={20}
            className="ms-2"
          />
        </li>
        <li className="list-group-item">
          <h5>&#8358;{price}</h5>
        </li>
      </ul>
      <div className="card-body">
        <a href="#" className="btn btn-primary w-100">
          Card link
        </a>
      </div>
    </div>
  );
};