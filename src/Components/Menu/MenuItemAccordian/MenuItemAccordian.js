import { memo, useContext, useRef } from "react";
import { MenuContext } from "../../../Store/Menu";
import MenuItemCard from "./MenuItemCard";
import "./MenuItemAccordian.css";

const MenuItemAccordian = () => {
  const activeTabBorder = useRef();
  const firstAccordianTab = useRef();
  const tabList = useRef();
  const menuCtx = useContext(MenuContext);

  const tabListMarkup = [];
  const menuListMarkup = [];

  Object.entries(menuCtx.items).forEach((category, index) => {
    tabListMarkup.push(
      <li data-tabno={index} key={category[0]}>
        {category[0]}
      </li>,
    );
    const ul = (
      <ul
        className="menu_item_accordian__items"
        key={category[0]}
        ref={index === 0 ? firstAccordianTab : null}
      >
        {Object.values(category[1]).map((item) => (
          <MenuItemCard
            key={item.id}
            category={category[0]}
            dataId={item.id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            bgImg={item.img}
          />
        ))}
        <div className="space" />
      </ul>
    );
    menuListMarkup.push(ul);
  });

  const handleTabClick = (e) => {
    // Checking if clicked target is an <li>
    if (e.target.tagName === "LI") {
      e.target.parentElement
        .querySelector(".active")
        ?.classList.remove("active");
      const tabWidth = `${
        (e.target.offsetWidth / tabList.current.offsetWidth) * 100
      }%`;
      activeTabBorder.current.style.width = tabWidth;
      const marginLeft = (e.target.offsetLeft / tabList.current.offsetWidth) * 100;
      activeTabBorder.current.style.marginLeft = `${marginLeft}%`;
      e.target.classList.add("active");
      firstAccordianTab.current.style.marginLeft = `${
        e.target.dataset.tabno * -100
      }%`;
    }
  };

  return (
    <div id="menu_item_accordian">
      <div id="menu_item_accordian__header">
        <ul
          id="menu_item_accordian__tab__list"
          onClick={handleTabClick}
          onKeyDown={handleTabClick}
          tabIndex={0}
          role="tablist"
          ref={tabList}
        >
          {tabListMarkup}
          <div id="menu_item__active_tab_border" ref={activeTabBorder} />
        </ul>
      </div>
      <div id="menu_item_accordian__item__list">
        <h2>Choose Dishes</h2>
        <div id="accordian__wrapper">{menuListMarkup}</div>
      </div>
    </div>
  );
};

export default memo(MenuItemAccordian);
