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

  return (
    <article className="my-4">
      <div className="card">
        <div className={`card-header ${style.cardHeader}`}>
          <h5>{planName}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-title">
            Status: {status}{" "}
            <Link title="This usually takes less than 24 hours." id="t-1">
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-info" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
              </svg>
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
                    <Button variant="primary">Open chat</Button>
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
