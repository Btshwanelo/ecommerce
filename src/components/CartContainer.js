import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import PropTypes from 'prop-types';

const CartContainer = ({ cart }) => {
  return (
    <>
      {cart.items.map((item) => (
        <CartCard item={item} key={item.id} />
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
