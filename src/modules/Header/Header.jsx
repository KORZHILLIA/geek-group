import { Link } from "react-router-dom";
import HeaderInput from "./HeaderInput";
import Btn from "../../shared/components/Btn";
import LangSwitcher from "./LangSwitcher";
import Reactions from "./Reactions";
import UserDropdown from "./UserSwitcher";

import sprite from "../../images/svg/sprite.svg";
import reactions from "../../data/reactionsIcons";
import langs from "../../data/langs";
import userData from "../../data/userData";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/main" className={styles.logo}>
        <svg width="151" height="23">
          <use href={sprite + "#icon-logo"}></use>
        </svg>
      </Link>
      <HeaderInput />
      <div className={styles.addBtn}>
        <Btn type="button" text="Додати товар" isInversed={true} />
      </div>
      <LangSwitcher langs={langs} />
      <Reactions reactions={reactions} size="24" />
      <UserDropdown menu={userData} />
    </header>
  );
};

export default Header;
