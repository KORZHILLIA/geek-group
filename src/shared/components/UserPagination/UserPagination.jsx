import { useState } from "react";
import { Pagination } from "react-bootstrap";
import styles from "./userPagination.module.css";

const UserPagination = ({ length }) => {
  const [active, setActive] = useState(1);
  const elements = [];

  for (let i = 1; i <= length; i += 1) {
    elements.push(
      <Pagination.Item
        className={styles.item}
        key={i}
        active={i === active}
        onClick={() => setActive(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className={styles.general}>
      <span className={styles.prev}>Попередня</span>
      {elements}
      <span className={styles.next}>Наступна</span>
    </Pagination>
  );
};

export default UserPagination;
