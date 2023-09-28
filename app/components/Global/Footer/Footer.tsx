import styles from "./Footer.module.css";
export const Footer = (): JSX.Element => {
  return (
    <>
      <ul className={styles.ul}>
        <section>
          <li>Home</li>
          <li>Plans</li>
          <li>Log in</li>
        </section>
        <section>
          <li>Sign up</li>
          <li>Influencer</li>
        </section>
      </ul>
    </>
  );
};
