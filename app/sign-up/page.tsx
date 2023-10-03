import { ExtraInfo } from "../components/SignUpPage/ExtraInfo";
import { Form } from "../components/SignUpPage/Form";
import { GoogleBtn } from "../components/SignUpPage/GoogleBtn";
import { Logo } from "../components/SignUpPage/Logo";
import styles from "./page.module.css";

export default function SignUp() {
  return (
    <main className={styles.main}>
      <article className="my-5 w-40 shadow-lg">
        <section>
          <Logo />
        </section>
        <section>
          <GoogleBtn />
        </section>
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
