import { useContext } from "react";
import { CartContext } from "../../Store/Cart";
import Menu from "../Menu/Menu";
import Cart from "../Menu/Cart/Cart";

const Home = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <Menu />
      {cart.isVisible && <Cart />}
    </>
  );
};

export default Home;
