import Slogan from "./shared/components/Slogan";
import Header from "./modules/Header";
import Nav from "./modules/Nav";
import UserRoutes from "./UserRoutes";
import Footer from "./modules/Footer";
import navItems from "./data/navItems";

function App() {
  return (
    <>
      <Slogan />
      <div className="container">
        <Header />
      </div>
      <Nav items={navItems} />
      <div className="container">
        <UserRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
