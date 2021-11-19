import {
  CLEAN_ERROR_MESSAGE,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../actions/actionType";

const initialState = {
  list: [{ name: "123", email: "123@gmail.com", password: "123" }],
  session: {},
  message: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      let userAccount = state.list.find(
        (itm) =>
          itm.email === action.payload.email &&
          itm.password === action.payload.password
      );

      if (userAccount) {
        return { ...state, message: "", session: userAccount };
      }
      return { ...state, message: "Couldnt find user" };

    case REGISTER:
      let user = state.list.find((itm) => itm.email === action.payload.email);

      if (user) {
        return { ...state, message: "User already exist" };
      }
      return {
        ...state,
        message: "",
        list: [...state.list, action.payload],
      };
    case LOGOUT:
      return {
        ...state,
        session: {},
      };
    case CLEAN_ERROR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};

export default usersReducer;
