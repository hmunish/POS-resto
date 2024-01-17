import { createContext, useReducer } from "react";

const CartContext = createContext();

const defaultCartState = {
  isVisible: false,
  items: {},
  totalAmount: 0,
  totalItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "show") {
    return { ...state, isVisible: true };
  }
  if (action.type === "hide") {
    return { ...state, isVisible: false };
  }
  if (action.type === "add") {
    let updatedState = {};

    const updatedItems = { ...state.items };

    // Checking if the group exist else creating an empty array for the new group
    if (!updatedItems[`${action.category}`]) {
      updatedItems[`${action.category}`] = {};
    }
    // Checking if item already exist in the cart
    if (!updatedItems[`${action.category}`][action.item.id]) {
      // If false adding new item in the cart
      const newItem = { ...action.item, qty: 1 };
      updatedItems[`${action.category}`][action.item.id] = newItem;
      updatedState = { ...state, items: updatedItems };
      // Increasing total number of items
      const newTotalItems = state.totalItems + 1;
      // Updating new state total number of items
      updatedState.totalItems = newTotalItems;
    } else {
      // If true increasing item qty by 1
      updatedItems[`${action.category}`][action.item.id].qty += 1;
      updatedState = { ...state, items: updatedItems };
    }

    // Increasing total amount for cart
    updatedState.totalAmount = +(
      updatedState.totalAmount + action.item.price
    ).toFixed(2);

    return updatedState;
  }
  if (action.type === "update") {
    // Selecting item to be updated
    const item = state.items[action.category][action.id];

    // State copy which is to be updated
    const updatedState = { ...state };

    // Subtracting total amount for cart
    updatedState.totalAmount = +(
      updatedState.totalAmount
      - item.price * item.qty
    ).toFixed(2);

    // Updating cart item qty
    updatedState.items[action.category][action.id].qty = +action.newQty;

    // Adding new item total to cart total
    updatedState.totalAmount = +(
      updatedState.totalAmount
      + item.price * action.newQty
    ).toFixed(2);

    // Returning updated state
    return updatedState;
  }

  if (action.type === "delete") {
    // Selecting item to be deleted
    const item = state.items[action.category][action.id];

    // State copy which is to be updated
    const updatedState = { ...state };

    // Subtracting item total from cart total
    updatedState.totalAmount = +(
      updatedState.totalAmount
      - item.price * item.qty
    ).toFixed(2);

    // Deleting selected item
    delete updatedState.items[action.category][action.id];

    // Reducing cart total items count by 1
    updatedState.totalItems -= 1;

    // Returning update state
    return updatedState;
  }

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const showCart = () => {
    dispatchCartAction({ type: "show" });
  };

  const hideCart = () => {
    dispatchCartAction({ type: "hide" });
  };

  const addItem = (category, item) => {
    dispatchCartAction({ type: "add", category, item });
  };

  const updateItem = (category, id, newQty) => {
    dispatchCartAction({
      type: "update",
      category,
      id,
      newQty,
    });
  };

  const deleteItem = (category, id) => {
    dispatchCartAction({
      type: "delete",
      category,
      id,
    });
  };

  const cart = {
    isVisible: cartState.isVisible,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItems: cartState.totalItems,
    show: showCart,
    hide: hideCart,
    add: addItem,
    update: updateItem,
    delete: deleteItem,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
