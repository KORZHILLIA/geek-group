import FilterDropdown from "../../shared/components/FilterDropdown";
import FilterPrice from "./FilterPrice";
import FilterSex from "../FilterSex";
import productInfo from "../../data/productInfo";
import filterLabels from "../../data/filterLabels";
import filterSexLabels from "../../data/filterSexLabels";
import styles from "./filters.module.css";

const Filters = () => {
  const elements = filterLabels.map(({ id, label }) => (
    <li className={styles.item} key={id}>
      <FilterDropdown label={label}>
        {label === "Стать" ? (
          <FilterSex labels={filterSexLabels} />
        ) : label === "Ціна" ? (
          <FilterPrice pricesRoot={productInfo} />
        ) : (
          <p>Content</p>
        )}
      </FilterDropdown>
    </li>
  ));
  return <ul className={styles.list}>{elements}</ul>;
};

export default Filters;
