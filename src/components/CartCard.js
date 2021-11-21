import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment, decrement, removeFromCart } from "../State/actions";

const CartCard = ({ item, removeFromCart, increment, decrement }) => {
  return (
    <div className="cart__card">
      <div className="cart__card__delete">
        <span className="delete-btn" onClick={() => removeFromCart(item.id)}>
          <AiOutlineDelete style={{ height: "25px", width: "25px" }} />
        </span>
      </div>
      <div className="cart__card__image">
        <img
          src={item.image}
          style={{ height: "100px", width: "100px" }}
          alt=""
        />
      </div>
      <div className="cart__card__title">
        <span>{item.title}</span>
      </div>
      <div className="cart__card__qnty">
        <button
          className="plus-btn"
          type="button"
          name="button"
          onClick={() => increment(item)}
        >
          <AiOutlinePlus />
        </button>
        <input type="text" name="name" placeholder={item.quantity} />
        <button
          className="minus-btn"
          type="button"
          name="button"
          onClick={() => {
            item.quantity > 1 && decrement(item);
          }}
        >
          <AiOutlineMinus />
        </button>
      </div>
      <div className="cart__card__price">R{item.total}</div>
    </div>
  );
};

const mapStateToProps = () => {
  return {
  };
};

const mapDispatchToProps = () => {
  return {
    removeFromCart,
    increment,
    decrement,
  };
};

export default connect( mapStateToProps,mapDispatchToProps())(CartCard);
