import SubNav from "./SubNav";
import FiltersHeader from "./FiltersHeader";
import Filters from "./Filters";
import styles from "./mainPage.module.css";

const MainPage = () => {
  return (
    <>
      <SubNav />
      <h2 className={styles.header}>Каталог одягу</h2>
      <FiltersHeader />
      <Filters />
    </>
  );
};

export default MainPage;
