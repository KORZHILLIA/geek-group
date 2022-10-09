import sprite from "../../../images/svg/sprite.svg";
import styles from "./dropdownArrow.module.css";

const DropdownArrow = ({ boxVisible, toggleBox, size }) => {
  return (
    <svg
      className={boxVisible ? styles.arrowRotated : styles.arrow}
      onClick={toggleBox}
      width={size}
      height={size}
    >
      <use href={sprite + "#icon-arrow"}></use>
    </svg>
  );
};

export default DropdownArrow;
