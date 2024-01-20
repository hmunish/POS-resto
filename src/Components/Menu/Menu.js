import "./Menu.css";
import { memo } from "react";
import MenuTitle from "./Header";
import MenuItemAccordian from "./MenuItemAccordian/MenuItemAccordian";

const Menu = () => (
  <section id="menu">
    <MenuTitle />
    <MenuItemAccordian />
  </section>
);

export default memo(Menu);
