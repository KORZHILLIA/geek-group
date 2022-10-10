import { useSelector } from "react-redux";
import { getLikes } from "../../../redux/likes/likesSelectors";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./reactions.module.css";

const Reactions = ({ reactions, size }) => {
  const likes = useSelector(getLikes);

  const elements = reactions.map((reaction) => (
    <li key={reaction} className={styles.item}>
      <svg className={styles.icon} width={size} height={size}>
        <use href={sprite + `#icon-${reaction}`}></use>
      </svg>
      <span className={styles.badge}>{reaction === "heart" ? likes : 8}</span>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Reactions;
