const getMinMax = (arr) => {
  const pricesArr = arr.map((el) => {
    const { price } = el;
    const number = [...price].filter((el) => el !== " ").join("");
    return number;
  });
  const min = Math.min(...pricesArr);
  const max = Math.max(...pricesArr);
  return [min, max];
};

export default getMinMax;
