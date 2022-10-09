import { Link } from "react-router-dom";
import useDropdown from "../../../shared/hooks/useDropdown";
import DropdownArrow from "../../../shared/components/DropdownArrow";
import avatar from "../../../images/header/avatar1.jpg";
import styles from "./userDropdown.module.css";

const UserSwitcher = ({ menu }) => {
  const { boxVisible, toggleBox, changeIdx } = useDropdown();

  const elements = menu.map((item, index) => {
    const link = item.toLowerCase();
    return (
      <li className={styles.item} key={item} onClick={() => changeIdx(index)}>
        <Link to={`/${link}`}>{item}</Link>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        width="32"
        height="32"
        src={avatar}
        alt="avatar"
        onClick={toggleBox}
      />
      <DropdownArrow boxVisible={boxVisible} toggleBox={toggleBox} size="12" />
      {boxVisible && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};

export default UserSwitcher;
