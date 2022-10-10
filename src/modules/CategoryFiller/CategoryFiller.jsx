import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import productInfo from "../../data/productInfo";
import styles from "./categoryFiller.module.css";

const CategoryFiller = () => {
  const { category } = useParams();
  const filteredProducts =
    category === "catalogue"
      ? productInfo
      : productInfo.filter(
          ({ category: productCategory }) => productCategory === category
        );
  const elements = filteredProducts.map(
    ({ id, manufacturer, name, img, pastPrice, price, top, seller }) => {
      const { location, name: sellerName, img: sellerImg } = seller;
      return (
        <li key={id}>
          <ProductCard
            manufacturer={manufacturer}
            name={name}
            img={img}
            pastPrice={pastPrice}
            price={price}
            top={top}
            location={location}
            sellerName={sellerName}
            sellerImg={sellerImg}
          />
        </li>
      );
    }
  );
  return <ul className={styles.list}>{elements}</ul>;
};

export default CategoryFiller;
