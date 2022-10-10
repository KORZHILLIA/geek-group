import { Outlet } from "react-router-dom";
import SubNav from "../../modules/SubNav";
import FiltersHeader from "../../modules/FiltersHeader";
import Filters from "../../modules/Filters";
import styles from "./mainPage.module.css";

const MainPage = () => {
  return (
    <main>
      <SubNav />
      <h2 className={styles.header}>Каталог одягу</h2>
      <FiltersHeader />
      <div className={styles.main}>
        <Filters />
        <Outlet />
      </div>
    </main>
  );
};

export default MainPage;
