import FilterDropdown from "../../shared/components/FilterDropdown";
import filterLabels from "../../data/filterLabels";
import styles from "./filters.module.css";

const Filters = () => {
  const elements = filterLabels.map(({ id, label }) => (
    <li className={styles.item} key={id}>
      <FilterDropdown label={label}>
        <p>Content</p>
      </FilterDropdown>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Filters;
