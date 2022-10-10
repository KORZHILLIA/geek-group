import styles from "./subNav.module.css";

const SubNav = () => {
  return (
    <div className={styles.subnav}>
      <span>Головна</span>
      <span className={styles.afterSlash}> / Каталог одягу</span>
    </div>
  );
};

export default SubNav;
