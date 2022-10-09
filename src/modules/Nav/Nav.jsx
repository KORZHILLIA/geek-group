import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = ({ items }) => {
  const elements = items.map(({ id, text, link }) => {
    const upperText = text.toUpperCase();

    const getLinkClassName = ({ isActive }) => {
      return isActive ? styles.itemActive : styles.item;
    };
    return (
      <li key={id}>
        <NavLink className={getLinkClassName} to={`/${link}`}>
          {upperText}
        </NavLink>
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <ul className={styles.list}>{elements}</ul>
      </div>
    </div>
  );
};

export default Nav;
