import { useState } from "react";
import sprite from "../../../images/svg/sprite.svg";
import styles from "./langSwitcher.module.css";

const LangSwitcher = ({ langs }) => {
  const [idx, setIdx] = useState(0);
  const [boxVisible, setBoxVisible] = useState(false);

  const toggleBox = () => {
    setBoxVisible((prevBox) => !prevBox);
  };

  const changeIdx = (index) => {
    setIdx(index);
    toggleBox();
  };

  const elements = langs.map((lang, index) => (
    <li className={styles.item} key={lang} onClick={() => changeIdx(index)}>
      {lang}
    </li>
  ));
  return (
    <div className={styles.wrapper}>
      <span className={styles.lang}>{langs[idx]}</span>
      <svg
        className={boxVisible ? styles.arrowRotated : styles.arrow}
        onClick={toggleBox}
        width="12"
        height="12"
      >
        <use href={sprite + "#icon-arrow"}></use>
      </svg>
      {boxVisible && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default LangSwitcher;
