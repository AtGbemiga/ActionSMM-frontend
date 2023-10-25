import { Mapped } from "../components/Dashboard/plansDetails/Mapped";
import styles from "./page.module.css";

function DashboardPage() {
  return (
    <main className={`${styles.main}`}>
      <Mapped />
    </main>
  );
}
export default DashboardPage;
