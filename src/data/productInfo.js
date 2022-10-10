import provideID from "../helpers/provideID";

const productInfo = [
  {
    category: "women",
    manufacturer: "LOUIS VUITTON",
    name: "Клатч Louis Vuitton Limelight",
    img: "clatch",
    pastPrice: "4 999",
    price: "3 499",
    top: false,
    seller: {
      location: "Дніпро",
      name: "Brandear",
      img: "brandear",
    },
  },
  {
    category: "men",
    manufacturer: "LOUIS VUITTON",
    name: "Темно-сині джинси Louis Vuitton",
    img: "jeans",
    pastPrice: "5 499",
    price: "3 799",
    top: true,
    seller: {
      location: "Херсон",
      name: "LoveBrand",
      img: "lovebrand",
    },
  },
  {
    category: "men",
    manufacturer: "THOM BROWNE",
    name: "Чорний піджак Thom Browne",
    img: "blazer-browne",
    pastPrice: "11 999",
    price: "8 599",
    top: true,
    seller: {
      location: "Хмельницький",
      name: "Sell_For_Men",
      img: "sellformen",
    },
  },
];

provideID(productInfo, 10);

export default productInfo;
