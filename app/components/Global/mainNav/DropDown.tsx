import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { LogOut } from "../../Dashboard/logOut/logOut";

function DropDownBtn() {
  const [isVisible, setIsVisible] = useState(false);

  const handleSvgClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleDocumentClick = (event: Event) => {
    const toggleElement = document.querySelector(".dropdown-btn");
    if (
      toggleElement instanceof Node &&
      !toggleElement.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [isVisible]);

  return (
    <div className={`dropdown-btn  ${styles.dropdownBtn}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className={`bi bi-chevron-down text-white ${styles.dropDown}`}
        viewBox="0 0 16 16"
        onClick={handleSvgClick}
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>

      {isVisible && <LogOut />}
    </div>
  );
}

export default DropDownBtn;
