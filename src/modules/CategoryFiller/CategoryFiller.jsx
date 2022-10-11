import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import UserPagination from "../../shared/components/UserPagination";
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
  const length = filteredProducts.length;

  const elements = filteredProducts.map(
    ({
      id,
      manufacturer,
      name,
      img,
      pastPrice,
      price,
      top,
      organic,
      seller,
    }) => {
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
            organic={organic}
            location={location}
            sellerName={sellerName}
            sellerImg={sellerImg}
          />
        </li>
      );
    }
  );
  return (
    <div className={styles.categoryWrapper}>
      <ul className={styles.list}>{elements}</ul>
      <div className={styles.pagination}>
        <UserPagination length={length} />
      </div>
    </div>
  );
};

export default CategoryFiller;
