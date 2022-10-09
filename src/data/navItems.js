import { nanoid } from "nanoid";

const navItems = [
  { link: "main", text: "Головна" },
  { link: "catalogue", text: "Каталог" },
  { link: "women", text: "Жінкам" },
  { link: "men", text: "Чоловікам" },
  { link: "kids", text: "дИТЯЧі речі" },
  { link: "auction", text: "Аукціон" },
  { link: "brands", text: "Бренди" },
  { link: "actions", text: "Акції" },
  { link: "auth", text: "Аутентифікація" },
  { link: "blog", text: "Блог" },
];

navItems.forEach((item) => (item.id = nanoid(3)));

export default navItems;
