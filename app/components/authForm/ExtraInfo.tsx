import Link from "next/link";
import styles from "./SignUpPage.module.css";

export const ExtraInfo = (): JSX.Element => {
  return (
    <>
      <div>
        By creating an account, you are agreeing to our <br />{" "}
        <Link href="#" className="text-decoration-none">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-decoration-none">
          Privacy Policy.
        </Link>
      </div>
      <div className="pt-4">
        Already have an account? <br />{" "}
        <Link href="/login" className={`${styles.login} text-decoration-none`}>
          Login
        </Link>
      </div>
    </>
  );
};
