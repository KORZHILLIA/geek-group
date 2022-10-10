import thumb from "../../../images/slogan/thumb-up.png";
import dress from "../../../images/slogan/dress.png";
import styles from "./slogan.module.css";

const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.inner}>
        <div className={styles.imgs}>
          <img src={thumb} alt="thumb" />
          <img src={dress} alt="dress" />
        </div>
        <span className={styles.text}>Брендовий верхній одяг від 899 грн</span>
      </div>
    </div>
  );
};

export default Slogan;
