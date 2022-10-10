import { Link } from "react-router-dom";
import styles from "./footerLinks.module.css";

const FooterLinks = ({ links }) => {
  const elements = links.map(({ id, text }) => (
    <li className={styles.item} key={id}>
      <Link className={styles.link}>{text}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default FooterLinks;
