import React from "react";
import Swal from "sweetalert2";
import { addToCart } from "../State/actions";
import { connect } from "react-redux";

const ProductCard = ({ item, addToCart, cart }) => {
  const handleAddToCart = (item) => {
    if (cart.items.find((x) => x.id === item.id)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        width: "200px",
        title: "Already added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      width: "200px",
      showConfirmButton: false,
      timer: 1500,
    });
    addToCart(item);
  };
  return (
    <div className="item" key={item.id}>
      <div className="item__image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item__title">{item.title}</div>
      <div className="item__price">R{item.price}</div>
      <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = () => {
  return {
    addToCart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ProductCard);
