import { products } from "../../assets/products";

const initialState = products;

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

export default productReducer;
