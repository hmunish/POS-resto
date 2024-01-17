import { useContext, useMemo, useState } from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";
import { CartContext } from "../../../Store/Cart";
import CartItem from "./CartItem";
import Payment from "./Payment/Payment";

const Cart = () => {
  const [isPayment, setIsPayment] = useState(false);
  const cart = useContext(CartContext);

  const cartListMarkup = useMemo(() => {
    const markup = [];
    Object.entries(cart.items).forEach(([key, item]) => Object.values(item).forEach(({
      id, name, price, img, qty,
    }) => markup.push(
      <CartItem
        key={`${key}-${id}`}
        id={id}
        name={name}
        price={price}
        img={img}
        qty={qty}
        category={key}
      />,
    )));
    return markup;
  }, [cart]);

  if (isPayment) return <Payment backToCart={setIsPayment} />;

  return (
    <section id="cart">
      <div id="cart__header">
        <h4>Order #34562</h4>
        <FaTimes onClick={cart.hide} />
      </div>
      <div id="cart__list">
        <table>
          <thead>
            <tr>
              <th id="cart__list__head">Item</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{cartListMarkup}</tbody>
        </table>
      </div>
      <div id="cart__summary">
        <p>Discount</p>
        <p>$0</p>
        <p>Sub total</p>
        <p>
          $
          {cart.totalAmount}
        </p>
        <button
          type="button"
          id="to_payment"
          onClick={() => setIsPayment(true)}
          disabled={!(cart.totalAmount > 0)}
        >
          Continue to Payment
        </button>
      </div>
    </section>
  );
};

export default Cart;
