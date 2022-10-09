import Header from "./modules/Header";
import Nav from "./modules/Nav";
import MainPage from "./modules/MainPage/MainPage";

import navItems from "./data/navItems";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Nav items={navItems} />
      <div className="container">
        <MainPage />
      </div>
    </>
  );
}

export default App;
