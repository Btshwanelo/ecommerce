import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import CartContainer from "../components/CartContainer";
import PropTypes from "prop-types";
import {
  removeFromCart,
  increment,
  decrement,
  checkout,
} from "../State/actions";
import { connect } from "react-redux";

const Cart = ({ cart, users, checkout }) => {
  let total = 0;
  for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].total;
  }

  const successCheckout = () => {
    Swal.fire({
      text: "Your order has been processed",
      icon: "success",
    });
    checkout();
  };

  const failCheckout = () => {
    Swal.fire({
      text: "You need to log in before you can checkout",
      icon: "error",
    });
  };

  return (
    <div className="cart">
      <Navbar />
      <div className="contents">
        <div className="contents__heading">Shooping Cart</div>
        <div className="cart">
          <CartContainer />
          <div className="cart__checkout">
            <div>Total: R{total}</div>
            <button
              className={cart.items.length >= 1
                ? "cart__checkout__button"
                : "cart__checkout__button--false"}
              onClick={users.session.name ? successCheckout : failCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Cart.propTypes = {
  users: PropTypes.object,
  cart: PropTypes.object,
  checkout: PropTypes.func,
};

const mapStateToProps = ({cart, users}) => {
  return {
    cart,
    users,
  };
};

const mapDispatchToProps = () => {
  return {
    removeFromCart,
    increment,
    decrement,
    checkout,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Cart);
