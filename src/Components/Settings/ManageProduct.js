import { memo, useContext, useRef } from "react";
import { MenuContext } from "../../Store/Menu";
import ManageProductItemCard from "./ManageProductItemCard";

const ManageProduct = () => {
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
    const div = (
      <div
        className="card__wrapper"
        key={category[0]}
        ref={index === 0 ? firstAccordianTab : null}
      >
        <div className="add__item__card">
          <button type="button" className="add__item">
            +
            {' '}
            <br />
            {' '}
            Add new dish
          </button>
        </div>
        {Object.values(category[1]).map((item) => (
          <ManageProductItemCard
            key={item.id}
            category={category[0]}
            dataId={item.id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            img={item.img}
          />
        ))}
      </div>
    );
    menuListMarkup.push(div);
  });

  const handleTabClick = (e) => {
    // Checking if clicked target is an <li>
    if (e.target.tagName === "LI") {
      e.target.parentElement
        .querySelector(".active")
        ?.classList.remove("active");
      const marginLeft = (e.target.offsetLeft / tabList.current.offsetWidth) * 100;
      activeTabBorder.current.style.marginLeft = `${marginLeft}%`;
      e.target.classList.add("active");
      firstAccordianTab.current.style.marginLeft = `${
        e.target.dataset.tabno * -100
      }%`;
    }
  };

  return (
    <div className="product__management">
      <div id="product__management__header">
        <h2 className="product__management title">Products Management</h2>
        <select className="product__management">
          <option>Manage Categories</option>
        </select>
      </div>
      <div className="product_management accordian">
        <ul
          className="product_management accordian"
          onClick={handleTabClick}
          onKeyDown={handleTabClick}
          tabIndex={0}
          role="tablist"
          ref={tabList}
        >
          {tabListMarkup}
          <div id="menu_item__active_tab_border" ref={activeTabBorder} />
        </ul>
        <div id="card__slider__wrapper">{menuListMarkup}</div>
      </div>
    </div>
  );
};

export default memo(ManageProduct);
