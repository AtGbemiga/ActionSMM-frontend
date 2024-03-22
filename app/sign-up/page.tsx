import { ExtraInfo } from "../components/authForm/ExtraInfo";
import { Form } from "../components/authForm/Form";
import { GoogleBtn } from "../components/authForm/GoogleBtn";
import { Logo } from "../components/authForm/Logo";
import styles from "./page.module.css";

export default function SignUp() {
  return (
    <main className={styles.main}>
      <article className="my-5 w-40 shadow-lg">
        <section>
          <Logo />
        </section>
        {/* <section>
          <GoogleBtn />
        </section> */}
        <section className={styles.form}>
          <Form />
        </section>
        <section className={styles.extra_info}>
          <ExtraInfo />
        </section>
      </article>
      <section></section>
    </main>
  );
}
