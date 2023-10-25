import styles from "./page.module.css";
export default function Loading(): JSX.Element {
  return (
    <main className="d-flex justify-content-center align-items-center h-100 w-100">
      <div className={`${styles.customLoader}`}></div>
    </main>
  );
}
