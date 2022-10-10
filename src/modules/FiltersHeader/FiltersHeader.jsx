import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import styles from "./filtersHeader.module.css";

const FiltersHeader = () => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filters}>Фільтри</h3>
      <div className={styles.sortWrapper}>
        <span className={styles.sortText}>Сортувати за:</span>
        <Dropdown as={ButtonGroup}>
          <Button className={styles.dropdownBtn}>За замовчуванням</Button>

          <Dropdown.Toggle
            className={styles.toggle}
            split
            id="dropdown-split-basic"
          />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default FiltersHeader;
