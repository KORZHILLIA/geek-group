import FooterLinks from "./FooterLinks";
import footerLinks from "../../data/footer";
import google from "../../images/footer/google-play.jpg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.upper}>
          <div className={styles.wrapper}>
            <FooterLinks links={footerLinks.linksBuyers} />
          </div>
          <div className={styles.wrapper}>
            <FooterLinks links={footerLinks.linksSellers} />
          </div>
          <div className={styles.wrapper}>
            <FooterLinks links={footerLinks.linksInfo} />
          </div>
          <div className={styles.app}>
            <p className={styles.mobile}>Мобільний додаток</p>
            <img src={google} alt="google-play" width="146" height="44" />
          </div>
        </div>
        <p className={styles.lower}>
          <span>&#169;</span> 2022 Monvalise
        </p>
      </div>
    </footer>
  );
};

export default Footer;
