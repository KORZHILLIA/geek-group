import styles from "./valueIndicator.module.css";

const ValueIndicator = ({ text, value }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{text}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default ValueIndicator;
