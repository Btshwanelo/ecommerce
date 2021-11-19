import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";

const CartContainer = ({ cart }) => {
  return (
    <>
      {cart.items.map((item) => (
        <CartCard item={item} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(CartContainer);
