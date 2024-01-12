import { createContext, useReducer } from "react";
import img1 from "../images/item-1.png";
import img2 from "../images/item-2.png";
import img3 from "../images/item-3.png";
import img4 from "../images/item-4.png";
import img5 from "../images/item-5.png";

const dummyMenuItems = {
  "Hot Dishes": [
    {
      id: 1,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 2,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 3,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 4,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 5,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
    {
      id: 6,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 7,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 8,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 9,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 10,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
  ],
  "Cold Dishes": [
    {
      id: 11,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 12,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 13,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 14,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 15,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
    {
      id: 16,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 17,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 18,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 19,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 20,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
  ],
  Soup: [
    {
      id: 21,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 22,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 23,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 24,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 25,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
    {
      id: 26,
      name: "Spicy seasoned seafood noodles",
      price: 2.29,
      stock: 20,
      img: img1,
    },
    {
      id: 27,
      name: "Salted Pasta with mushroom sauce",
      price: 2.69,
      stock: 11,
      img: img2,
    },
    {
      id: 28,
      name: "Beef dumpling in hot and sour soup",
      price: 2.99,
      stock: 16,
      img: img3,
    },
    {
      id: 29,
      name: "Healthy noodle with spinach leaf",
      price: 3.29,
      stock: 22,
      img: img4,
    },
    {
      id: 30,
      name: "Hot spicy fried rice with omelet",
      price: 3.49,
      stock: 13,
      img: img5,
    },
  ],
};

// // Dummy menu items should be replaced with real data
// const dummyMenuItems = [
//   {
//     id: 1,
//     name: "Spicy seasoned seafood noodles",
//     price: 2.29,
//     stock: 20,
//     img: img1,
//   },
//   {
//     id: 2,
//     name: "Salted Pasta with mushroom sauce",
//     price: 2.69,
//     stock: 11,
//     img: img2,
//   },
//   {
//     id: 3,
//     name: "Beef dumpling in hot and sour soup",
//     price: 2.99,
//     stock: 16,
//     img: img3,
//   },
//   {
//     id: 4,
//     name: "Healthy noodle with spinach leaf",
//     price: 3.29,
//     stock: 22,
//     img: img4,
//   },
//   {
//     id: 5,
//     name: "Hot spicy fried rice with omelet",
//     price: 3.49,
//     stock: 13,
//     img: img5,
//   },
//   {
//     id: 6,
//     name: "Spicy seasoned seafood noodles",
//     price: 2.29,
//     stock: 20,
//     img: img1,
//   },
//   {
//     id: 7,
//     name: "Salted Pasta with mushroom sauce",
//     price: 2.69,
//     stock: 11,
//     img: img2,
//   },
//   {
//     id: 8,
//     name: "Beef dumpling in hot and sour soup",
//     price: 2.99,
//     stock: 16,
//     img: img3,
//   },
//   {
//     id: 9,
//     name: "Healthy noodle with spinach leaf",
//     price: 3.29,
//     stock: 22,
//     img: img4,
//   },
//   {
//     id: 10,
//     name: "Hot spicy fried rice with omelet",
//     price: 3.49,
//     stock: 13,
//     img: img5,
//   },
// ];

const MenuContext = createContext();

const defaultMenuState = {
  items: dummyMenuItems,
};

const menuReducer = (state, action) => {
  if (action.type === "add") {
    return { ...state };
  }

  if (action.type === "addStock") {
    const updatedState = { ...state };

    updatedState.items[action.category][action.id].stock += action.qty;

    return updatedState;
  }

  if (action.type === "reduceStock") {
    const updatedState = { ...state };

    updatedState.items[action.category][action.id].stock -= action.qty;

    return updatedState;
  }

  return defaultMenuState;
};

const MenuProvider = ({ children }) => {
  const [menuState, dispatchMenuAction] = useReducer(
    menuReducer,
    defaultMenuState,
  );

  const add = (item) => {
    dispatchMenuAction({ type: "add", item });
  };

  const reduceStock = (category, id, qty = 1) => {
    dispatchMenuAction({
      type: "reduceStock",
      category,
      id,
      qty,
    });
  };

  const addStock = (category, id, qty = 1) => {
    dispatchMenuAction({
      type: "addStock",
      category,
      id,
      qty,
    });
  };

  const menu = {
    items: menuState.items,
    addItem: add,
    reduceStock,
    addStock,
  };

  return <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
};

export { MenuContext };
export default MenuProvider;
