import { nanoid } from "nanoid";

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

filterLabels.forEach((label) => (label.id = nanoid(5)));

export default filterLabels;
