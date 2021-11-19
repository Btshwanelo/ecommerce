import {
  ADD_CART,
  CHECKOUT,
  DECREMENT,
  INCREMENT,
  REMOVE_CART,
} from "../actions/actionType";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let product = {
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      return { ...state, items: [product, ...state.items] };
    case REMOVE_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CHECKOUT:
      return { ...state, items: [] };
    case INCREMENT:
      let matchingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      let updated = {
        ...matchingProduct,
        quantity: matchingProduct.quantity + 1,
        total: matchingProduct.total + matchingProduct.price,
      };
      return {
        ...state,
        items: [
          updated,
          ...state.items.filter((item) => item.id !== action.payload.id),
        ],
      };
    case DECREMENT:
      let matchingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      let updatedItem = {
        ...matchingItem,
        quantity: matchingItem.quantity - 1,
        total: matchingItem.total - matchingItem.price,
      };
      return {
        ...state,
        items: [
          updatedItem,
          ...state.items.filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default cartReducer;
