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
      const cartArr = state.items;
      let index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let matchingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      cartArr.splice(index, 1, {
        ...matchingProduct,
        quantity: matchingProduct.quantity + 1,
        total: matchingProduct.total + matchingProduct.price,
      });

      return { ...state, items: cartArr };
    case DECREMENT:
      const cartArrDecre = state.items;
      let indexDecre = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let matchingProductDecre = state.items.find(
        (item) => item.id === action.payload.id
      );
      cartArrDecre.splice(indexDecre, 1, {
        ...matchingProductDecre,
        quantity: matchingProductDecre.quantity - 1,
        total: matchingProductDecre.total + matchingProductDecre.price,
      });

      return { ...state, items: cartArrDecre };
    default:
      return state;
  }
};

export default cartReducer;
