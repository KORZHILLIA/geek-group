import sprite from "../../../images/svg/sprite.svg";
import styles from "./reactions.module.css";

const Reactions = ({ reactions, size }) => {
  const elements = reactions.map((reaction) => (
    <li key={reaction} className={styles.item}>
      <svg className={styles.icon} width={size} height={size}>
        <use href={sprite + `#icon-${reaction}`}></use>
      </svg>
      <span className={styles.badge}>8</span>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Reactions;
