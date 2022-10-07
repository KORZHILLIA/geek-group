import { Link } from "react-router-dom";
import sprite from "../../images/svg/sprite.svg";
import HeaderInput from "./HeaderInput";
import Btn from "../../shared/components/Btn";
import LangSwitcher from "./LangSwitcher";
import Reactions from "./Reactions";
import langs from "../../data/langs";
import reactions from "../../data/reactions-icons";

const Header = () => {
  return (
    <header>
      <Link to="/main">
        <svg width="151" height="23">
          <use href={sprite + "#icon-logo"}></use>
        </svg>
      </Link>
      <HeaderInput />
      <Btn type="button" text="Додати товар" isInversed={true} />
      <LangSwitcher langs={langs} />
      <Reactions reactions={reactions} size={24} />
    </header>
  );
};

export default Header;
