import { useState } from "react";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "../../redux/likes/likesActions";
import sprite from "../../images/svg/sprite.svg";
import styles from "./productCard.module.css";

const ProductCard = ({
  manufacturer,
  name,
  img,
  pastPrice,
  price,
  top,
  organic,
  location,
  sellerName,
  sellerImg,
}) => {
  const [liked, setLiked] = useState(false);

  const productSrc = require(`../../images/cards/products/${img}.jpg`);
  const sellerSrc = require(`../../images/cards/sellers/${sellerImg}.jpg`);
  const dispatch = useDispatch();

  const toggleLikes = () => {
    if (liked) {
      dispatch(removeLike());
    } else {
      dispatch(addLike());
    }
    setLiked((prevState) => !prevState);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src={productSrc} alt={name} />
        <svg
          className={liked ? styles.heartColored : styles.heart}
          width="20"
          height="20"
          onClick={toggleLikes}
        >
          <use href={sprite + "#icon-union"}></use>
        </svg>
        {top && <span className={styles.top}>ТОП</span>}
        {organic && <span className={styles.organic}>organic</span>}
      </div>
      <div className={styles.meta}>
        <div className={styles.metaUpper}>
          <p className={styles.manuf}>{manufacturer}</p>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.metaLower}>
          <div className={styles.prices}>
            <span className={styles.pastPrice}>{pastPrice}</span>
            <span className={styles.price}>{price}</span>
          </div>
          <div className={styles.seller}>
            <div className={styles.location}>
              <svg width="12" height="12">
                <use href={sprite + "#icon-location"}></use>
              </svg>
              <span className={styles.locationName}>{location}</span>
            </div>
            <div className={styles.person}>
              <img
                className={styles.sellerImg}
                src={sellerSrc}
                alt={sellerName}
                width="20"
                height="20"
              />
              <span className={styles.sellerName}>{sellerName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
