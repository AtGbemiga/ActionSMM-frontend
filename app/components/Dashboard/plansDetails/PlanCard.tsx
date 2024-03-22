"use client";
import { SinglePlan } from "@/app/typesAndInterfaces/planDashboard";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import style from "../dashboard.module.css";
import { ToolTipIcon } from "../../Global/assets/toolTipIcon";

export const PlanCard = ({
  planName,
  status,
  startDate,
  dueDate,
  businessName,
  website,
  accounts,
  aboutYourBusiness,
  cta,
}: SinglePlan): JSX.Element => {
  const [open, setOpen] = useState(false);
  const Link = ({
    id,
    children,
    title,
  }: {
    id: string;
    children: React.ReactNode;
    title: string;
  }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  function nameFormat(planName: string) {
    if (planName === "starterPlus") {
      return "Starter Plus";
    } else if (planName === "proPlus") {
      return "Pro Plus";
    } else if (planName === "supremePlus") {
      return "Supreme Plus";
    } else {
      return planName.slice(0, 1).toUpperCase() + planName.slice(1);
    }
  }

  return (
    <article className="my-4">
      <div className="card">
        <div className={`card-header ${style.cardHeader}`}>
          <h5>{nameFormat(planName)}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            Status: {status}{" "}
            <Link
              title="This usually takes less than 24 hours."
              id="t-1"
            >
              <ToolTipIcon
                width="16"
                height="16"
                className="bi bi-info-circle-fill"
              />
            </Link>{" "}
          </h6>
          <p className="card-text">
            Start date:{" "}
            {startDate ? new Date(startDate).toLocaleDateString() : "N/A"} Due
            date: {dueDate ? new Date(dueDate).toLocaleDateString() : "N/A"}
          </p>
        </div>
        <>
          <a
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {open ? (
              <div className="d-flex justify-content-end ">
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="mt-1 text-primary"
                />
                <p className={`ps-1 text-primary pe-3 ${style.see}`}>
                  See less
                </p>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="mt-1 pe-1 text-primary"
                />
                <p className={`text-primary pe-3 ${style.see}`}>See more</p>
              </div>
            )}
          </a>
          <Collapse in={open}>
            <section id="example-collapse-text">
              <div className="card-body">
                <p>Business name: {businessName}</p>
                <p>Website: {website}</p>
                <section>
                  <h6>Accounts</h6>
                  {accounts.one && <p>{accounts.one}</p>}
                  {accounts.two && <p>{accounts.two}</p>}
                  {accounts.three && <p>{accounts.three}</p>}
                  {accounts.four && <p>{accounts.four}</p>}
                </section>
                <h6>About your business</h6>
                <p>{aboutYourBusiness}</p>
                <h6>CTA</h6>
                <p>{cta}</p>
                <section>
                  {status !== "Processing" && (
                    // This button leads to a chat between the user and the admin about this specific plan
                    // onclick displays pop up chat component, which can be expanded to full screen
                    <Button
                      variant="primary"
                      onAbort={() => null}
                    >
                      Open chat
                    </Button>
                  )}
                </section>
              </div>
            </section>
          </Collapse>
        </>
      </div>
    </article>
  );
};
