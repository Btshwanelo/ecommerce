import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

const HomeContainer = ({products}) => {
  return (
    <>
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(HomeContainer);
