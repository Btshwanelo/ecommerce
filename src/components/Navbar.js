import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../State/actions";

const Navbar = ({ cart, users, logOut }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="nav__cart">
        <Link to="/cart">
          <FiShoppingCart /> ({cart.items.length})
        </Link>
      </div>
      <div className="nav__user">
        <button>
          {users.session.name ? (
            <Link onClick={() => logOut()}>Log Out</Link>
          ) : (
            <Link to="/login">{users.session.name ? "Log Out" : "Log In"}</Link>
          )}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    users: state.users,
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    logOut,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Navbar);
