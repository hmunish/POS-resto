import { memo, useContext } from "react";
import "./CartItem.css";
import { FaTrash } from "react-icons/fa";
import { CartContext } from "../../../Store/Cart";
import { MenuContext } from "../../../Store/Menu";

const CartItem = ({
  id, category, name, price, qty, img,
}) => {
  const menuCtx = useContext(MenuContext);
  const cartCtx = useContext(CartContext);

  const handleQtyChange = (e) => {
    menuCtx.addStock(category, id, qty);
    cartCtx.update(category, id, e.target.value);
    menuCtx.reduceStock(category, id, e.target.value);
  };

  const handleItemDelete = () => {
    menuCtx.addStock(category, id, qty);
    cartCtx.delete(category, id);
  };

  return (
    <tr>
      <td colSpan={3} className="cart__item">
        <div className="cart__item__wrapper">
          <div className="cart__item__details">
            <img src={img} alt="Item" />
            <div>
              <h5 className="cart__item__name">{name}</h5>
              <p className="cart__item__price">
                $
                {price}
              </p>
            </div>
          </div>
          <input
            type="number"
            className="cart__item__qty"
            value={qty}
            min={1}
            onChange={handleQtyChange}
          />
          <p className="cart__item__total">{(qty * price).toFixed(2)}</p>
          <input
            type="text"
            className="cart__item__note"
            placeholder="Order Note..."
          />
          {/* eslint-disable-next-line */}
          <button
            type="button"
            className="cart__item__delete"
            onClick={handleItemDelete}
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default memo(CartItem);
