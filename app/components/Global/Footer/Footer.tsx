import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = (): JSX.Element => {
  return (
    <>
      <ul className={styles.ul}>
        <section>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>
            <Link href="/login">Log in</Link>
          </li>
          <li> test</li>
        </section>
        <section>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
          <li>
            <Link href="/#">Influencer</Link>
          </li>
        </section>
      </ul>
    </>
  );
};
