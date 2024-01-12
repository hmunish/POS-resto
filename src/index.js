// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import CartProvider from "./Store/Cart";
import MenuProvider from "./Store/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <StrictMode>
  <BrowserRouter>
    <MenuProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MenuProvider>
  </BrowserRouter>,
  // </StrictMode>,
);
