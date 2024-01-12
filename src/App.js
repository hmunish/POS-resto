import { useContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Menu/Cart/Cart";
import { CartContext } from "./Store/Cart";

const App = () => {
  const cart = useContext(CartContext);

  return (
    <main>
      <Sidebar />
      <Menu />
      {cart.isVisible && <Cart />}
    </main>
  );
};

export default App;
