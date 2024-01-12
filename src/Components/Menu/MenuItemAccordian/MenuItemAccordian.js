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
        id="menu_item_accordian__items"
        key={category[0]}
        ref={index === 0 ? firstAccordianTab : null}
      >
        {category[1].map((item, index) => (
          <MenuItemCard
            key={item.id}
            category={category[0]}
            dataId={index}
            name={item.name}
            price={item.price}
            stock={item.stock}
            bgImg={item.img}
          />
        ))}
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
          {/* <li>Hot Dishes</li>
          <li>Cold Dishes</li>
          <li>Soup</li>
          <li>Grill</li>
          <li>Appetizer</li>
          <li>Dessert</li> */}
          {tabListMarkup}
          <div id="menu_item__active_tab_border" ref={activeTabBorder} />
        </ul>
      </div>
      <div id="menu_item_accordian__item__list">
        <h2>Choose Dishes</h2>
        <div id="accordian__wrapper">
          {/* <ul id="menu_item_accordian__items" ref={firstAccordianList}>
            {menuCtx.items.map((item, index) => (
              <MenuItemCard
                key={item.id}
                dataId={index}
                name={item.name}
                price={item.price}
                stock={item.stock}
                bgImg={item.img}
              />
            ))}
          </ul>
          <ul id="menu_item_accordian__items">
            {menuCtx.items.map((item, index) => (
              <MenuItemCard
                key={item.id}
                dataId={index}
                name={item.name}
                price={item.price}
                stock={item.stock}
                bgImg={item.img}
              />
            ))}
          </ul> */}
          {menuListMarkup}
        </div>
      </div>
    </div>
  );
};

export default memo(MenuItemAccordian);
