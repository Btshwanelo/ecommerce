import React from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
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

HomeContainer.propTypes = {
  products: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(HomeContainer);
