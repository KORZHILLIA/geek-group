import { useState } from "react";
import DropdownArrow from "../DropdownArrow";
import styles from "./filterDropdown.module.css";

const FilterDropdown = ({ children, label }) => {
  const [state, setState] = useState(false);

  const toggleBox = () => {
    setState((prevState) => !prevState);
  };
  return (
    <div className={styles.generalWrapper} onClick={toggleBox}>
      <div className={styles.visibleWrapper}>
        <span className={styles.label}>{label}</span>
        <div className={styles.arrowWrapper}>
          <DropdownArrow boxVisible={state} toggleBox={toggleBox} size="20" />
        </div>
      </div>
      {state && <div className={styles.child}>{children}</div>}
    </div>
  );
};

export default FilterDropdown;
