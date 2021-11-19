import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";
import { connect } from "react-redux";
import { increment, decrement, removeFromCart } from "../State/actions";

const CartCard = ({ item, removeFromCart, increment, decrement }) => {
  return (
    <div className="cart__card" key={item.id}>
      <div className="cart__card__delete">
        <span class="delete-btn" onClick={() => removeFromCart(item.id)}>
          <RiDeleteBin3Line style={{ height: "25px", width: "25px" }} />
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
          class="plus-btn"
          type="button"
          name="button"
          onClick={() => increment(item)}
        >
          <AiOutlinePlus />
        </button>
        <input type="text" name="name" value={item.quantity} />
        <button
          class="minus-btn"
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    removeFromCart,
    increment,
    decrement,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CartCard);
