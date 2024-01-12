import { memo, useContext, useRef } from "react";
import { MenuContext } from "../../../Store/Menu";
import { CartContext } from "../../../Store/Cart";
import Notification from "../../UI/Notification";

const MenuItemCard = ({
  dataId, category, name, price, stock, bgImg,
}) => {
  const menuCtx = useContext(MenuContext);
  const cartCtx = useContext(CartContext);
  const card = useRef();

  const handleClick = (id) => {
    cartCtx.add(category, menuCtx.items[category][id]);
    menuCtx.reduceStock(category, id);
  };

  return (
    <>
      {stock < 0 && <Notification type="error" message="Negative Stock" />}
      <li
        className="menu_item__card"
        data-id={dataId}
        onClick={() => handleClick(dataId)}
        onKeyDown={() => handleClick(dataId)}
        tabIndex={-1}
        role="presentation"
        ref={card}
      >
        <div style={{ backgroundImage: `url(${bgImg})` }} />
        <h3 className="menu_item__name">{name}</h3>
        <p className="menu_item__details">
          $
          {price}
        </p>
        <p className="menu_item__details stock_qty">
          {stock}
          {' '}
          Bowls available
        </p>
      </li>
    </>
  );
};

export default memo(MenuItemCard);
