import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';
import { getProductsBegin } from '../actions';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useSelector(
    (state) => state.filtered_products
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductsBegin());
  // }, []);

  const getProducts = () => {
    dispatch(getProductsBegin());
  };

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products match your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={getProducts} />;
  }

  return <GridView products={getProducts} />;
};

export default ProductList;
