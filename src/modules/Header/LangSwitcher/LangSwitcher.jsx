import useDropdown from "../../../shared/hooks/useDropdown";
import DropdownArrow from "../../../shared/components/DropdownArrow";
import styles from "./langSwitcher.module.css";

const LangSwitcher = ({ langs }) => {
  const { idx, boxVisible, toggleBox, changeIdx } = useDropdown();

  const elements = langs.map((lang, index) => (
    <li className={styles.item} key={lang} onClick={() => changeIdx(index)}>
      {lang}
    </li>
  ));
  return (
    <div className={styles.wrapper}>
      <span className={styles.lang} onClick={toggleBox}>
        {langs[idx]}
      </span>
      <DropdownArrow boxVisible={boxVisible} toggleBox={toggleBox} size="12" />
      {boxVisible && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default LangSwitcher;
