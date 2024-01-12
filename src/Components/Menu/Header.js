import { useMemo } from "react";
import Search from "./Search";
import "./Header.css";
import CartButton from "../UI/CartButton";

const Header = () => {
  const dateString = useMemo(
    () => new Date().toLocaleDateString("en-us", {
      dateStyle: "full",
    }),
    [],
  );

  return (
    <div id="menu_header">
      <div id="menu_header__wrapper">
        <h1 id="menu_header__title">Jaegar Resto</h1>
        <p id="menu_header__date">{dateString}</p>
      </div>
      <div id="menu_header__actions__wrapper">
        <Search />
        <CartButton />
      </div>
    </div>
  );
};

export default Header;
