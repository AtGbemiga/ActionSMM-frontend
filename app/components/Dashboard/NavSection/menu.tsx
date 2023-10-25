"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import styles from "../dashboard.module.css";
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { BsPersonSquare } from "react-icons/bs";
import { AiOutlineFile, AiOutlineSetting, AiOutlineLine } from "react-icons/ai";

export const NavMenu = (): JSX.Element => {
  return (
    <section className={styles.linkContainer}>
      <Link href="/dashboard">
        <GoHome className={styles.icon} /> Home
      </Link>

      <Link href="/dashboard/profile">
        {" "}
        <BsPersonSquare className={styles.icon} /> Profile
      </Link>

      <Link href="/dashboard/secondOption">
        {" "}
        <AiOutlineFile className={styles.icon} /> Draft
      </Link>

      <Link href="/dashboard/settings">
        <AiOutlineSetting className={styles.icon} /> Settings
      </Link>
    </section>
  );
};

export const NavMenuMobile = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <section className={styles.navMenuMobile}>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className={`d-flex p-3 align-items-center justify-content-center ${styles.mobileNavButton}`}
      >
        <div className={styles.mobileNavButtonLine}></div>
      </Button>
      <Collapse in={open}>
        <section
          id="example-collapse-text"
          className={styles.mobileNavInnerSection}
        >
          <Link href="/dashboard">
            <GoHome className={styles.icon} /> Home
          </Link>

          <Link href="/dashboard/profile">
            {" "}
            <BsPersonSquare className={styles.icon} /> Profile
          </Link>

          <Link href="/dashboard/secondOption">
            {" "}
            <AiOutlineFile className={styles.icon} /> Draft
          </Link>

          <Link href="/dashboard/settings">
            <AiOutlineSetting className={styles.icon} /> Settings
          </Link>
        </section>
      </Collapse>
    </section>
  );
};
