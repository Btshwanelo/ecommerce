import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";

const HomeContainer = ({products}) => {
  return (
    <>
      {products.map((item) => (
        <ProductCard item={item} />
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
