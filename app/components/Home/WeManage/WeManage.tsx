import styles from "./WeManage.module.css";
import {
  faFacebookSquare,
  faInstagramSquare,
  faSquareXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const WeManage = (): JSX.Element => {
  return (
    <>
      <h3 className="text-dark text-center">We Manage</h3>
      <div className={styles.icons_section}>
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className={`${styles.icon}`}
          title="Facebook"
        />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className={`${styles.icon}`}
          title="Instagram"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${styles.icon}`}
          title="Linkedin"
        />
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          className={`${styles.icon}`}
          title="X(formerly Twitter)"
        />
      </div>
    </>
  );
};
