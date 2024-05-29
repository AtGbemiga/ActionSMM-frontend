"use client";
import styles from "./Card.module.css";
import { PlanDetails } from "@/app/typesAndInterfaces/planDetails";
import Link from "next/link";
import Cookies from "js-cookie";
import { GiAlliedStar } from "react-icons/gi";

export const Card = ({
  name,
  accounts,
  frequency,
  inboxComments,
  influencer,
  customerSupport,
  performance,
  price,
  index,
}: PlanDetails): JSX.Element => {
  const token = Cookies.get("token");
  return (
    <div className={`card ${styles.card} shadow`}>
      <div className="card-body d-flex">
        <h5 className="card-title me-auto">{name}</h5>
        {index === 2 && (
          <p
            className={`card-title bg-primary text-white px-2 py-1 rounded ${styles.recommended}`}
          >
            Recommended
          </p>
        )}
      </div>
      <ul className={`${styles.ul} list-group list-group-flush`}>
        <li className="list-group-item">{accounts}</li>
        <li className="list-group-item ">{frequency}</li>
        <li className="list-group-item ">{inboxComments}</li>
        <li className="list-group-item">{influencer}</li>
        <li className="list-group-item">{customerSupport}</li>
        <li className="list-group-item">
          {performance}
          <GiAlliedStar className={`ms-2 ${styles.star}`} />
        </li>
        <li className="list-group-item">
          <h5>&#8358;{price}</h5>
        </li>
      </ul>

      <Link
        type="button"
        href={token ? `/form/${name}` : "/login"}
        className="btn btn-primary w-100"
      >
        Choose
      </Link>
    </div>
  );
};
