import { FaShoppingCart } from "react-icons/fa";
import "./CartButton.css";
import { memo, useContext } from "react";
import { CartContext } from "../../Store/Cart";

const CartButton = () => {
  const cart = useContext(CartContext);
  return (
    <div id="cart__button__box">
      <div id="cart__total__items">
        <p>{cart.totalItems || 0}</p>
      </div>
      <FaShoppingCart className="cart_btn" onClick={cart.show} />
    </div>
  );
};

export default memo(CartButton);
