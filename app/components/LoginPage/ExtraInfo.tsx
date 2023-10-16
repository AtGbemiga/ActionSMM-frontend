import Link from "next/link";
import styles from "./LoginPage.module.css";

export const ExtraInfo = (): JSX.Element => {
  return (
    <>
      <div className="pt-4">
        Don&apos;t have an account? <br />{" "}
        <Link
          href="/sign-up"
          className={`${styles.login} text-decoration-none`}
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};
