import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import ValueIndicator from "../../../shared/components/ValueIndicator";
import getMinMax from "../../../helpers/getMinMax";
import styles from "./filterPrice.module.css";

const PriceFilter = ({ pricesRoot }) => {
  const [min, max] = getMinMax(pricesRoot);

  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const handleInput = (event) => {
    setMinValue(event.minValue);
    setMaxValue(event.maxValue);
  };
  return (
    <>
      <MultiRangeSlider
        style={{ boxShadow: "none", border: "none" }}
        min={min}
        max={max}
        step={100}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
        ruler={false}
        label={false}
        barLeftColor="#C4C7C7"
        barRightColor="#C4C7C7"
        barInnerColor="#8E9192"
        thumbLeftColor="#5C5F60"
        thumbRightColor="#5C5F60"
      />
      <div className={styles.indicators}>
        <ValueIndicator text="Від" value={minValue} />
        <ValueIndicator text="До" value={maxValue} />
      </div>
    </>
  );
};

export default PriceFilter;
