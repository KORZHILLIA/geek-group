import FilterSexItem from "./FilterSexItem";
import productInfo from "../../data/productInfo";

const FilterSex = ({ labels }) => {
  const defineQuantity = (category) =>
    productInfo.filter(({ category: cat }) => cat === category).length;
  const elements = labels.map(({ id, label, category }) => (
    <FilterSexItem key={id} label={label} quantity={defineQuantity(category)} />
  ));
  return <ul>{elements}</ul>;
};

export default FilterSex;
