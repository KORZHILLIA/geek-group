import styles from "./btn.module.css";
const Btn = ({ type, text, isInversed }) => {
  return (
    <button
      type={type}
      className={isInversed ? styles.btnInversed : styles.btn}
    >
      {text}
    </button>
  );
};

export default Btn;
