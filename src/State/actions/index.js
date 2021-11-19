import { ADD_CART, REMOVE_CART, EDIT_CART, REGISTER, LOGIN, INCREMENT, DECREMENT, CHECKOUT, LOGOUT, CLEAN_ERROR_MESSAGE } from "./actionType";

export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CART,
      payload: item,
    });
  };
};

export const removeFromCart = (productId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CART,
      payload: productId,
    });
  };
};

export const increment = (item) => {
  return (dispatch) => {
    dispatch({
      type: INCREMENT,
      payload: item,
    });
  };
};

export const decrement = (item) => {
  return (dispatch) => {
    dispatch({
      type: DECREMENT,
      payload: item,
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: user,
    });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER,
      payload: user,
    });
  };
};

export const checkout = () => {
  return (dispatch) => {
    dispatch({
      type: CHECKOUT,
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};

export const cleanErrorMessage = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAN_ERROR_MESSAGE,
    });
  };
};