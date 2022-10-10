import provideID from "../helpers/provideID";

const navItems = [
  { link: "main", text: "Головна" },
  { link: "main/catalogue", text: "Каталог" },
  { link: "main/women", text: "Жінкам" },
  { link: "main/men", text: "Чоловікам" },
  { link: "main/kids", text: "дИТЯЧі речі" },
  { link: "auction", text: "Аукціон" },
  { link: "brands", text: "Бренди" },
  { link: "actions", text: "Акції" },
  { link: "auth", text: "Аутентифікація" },
  { link: "blog", text: "Блог" },
];

provideID(navItems, 3);

export default navItems;
