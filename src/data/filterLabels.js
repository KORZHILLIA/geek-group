import provideID from "../helpers/provideID";

const filterLabels = [
  { label: "Категорії" },
  { label: "Ціна" },
  { label: "Продавець" },
  { label: "Стать" },
  { label: "Розмір" },
  { label: "Колір" },
  { label: "Матеріал" },
  { label: "Сезон" },
  { label: "Стиль" },
];

provideID(filterLabels, 5);

export default filterLabels;
