import sprite from "../../../images/svg/sprite.svg";
import styles from "./headerInput.module.css";

const HeaderInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Знайти речі або бренди"
      />
      <svg className={styles.lense} width="20" height="20">
        <use href={sprite + "#icon-lense"}></use>
      </svg>
    </div>
  );
};

export default HeaderInput;
