import { memo } from "react";
import "./Header.css";

const dateString = new Date().toLocaleDateString("en-us", {
  dateStyle: "full",
});

const Header = ({ title }) => (
  <header id="section__header">
    <h1 id="section__title">{title}</h1>
    <p id="title__date">{dateString}</p>
  </header>
);

export default memo(Header);
