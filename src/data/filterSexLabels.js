import provideID from "../helpers/provideID";

const filterSexLabels = [
  {
    category: "women",
    label: "Жінкам",
  },
  {
    category: "men",
    label: "Чоловікам",
  },
  {
    category: "unisex",
    label: "Унісекс",
  },
];

provideID(filterSexLabels, 10);

export default filterSexLabels;
