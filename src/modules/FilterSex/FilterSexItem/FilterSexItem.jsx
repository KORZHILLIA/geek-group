import { useState } from "react";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./filterSexItem.module.css";

const FilterSexItem = ({ label, quantity }) => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return (
    <li className={styles.item} onClick={toggleState}>
      {
        <svg className={styles.checkbox} width="20" height="20">
          <use
            href={sprite + `#icon-filter-${state ? "checked" : "unchecked"}`}
          ></use>
        </svg>
      }
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>({quantity})</span>
    </li>
  );
};

export default FilterSexItem;
