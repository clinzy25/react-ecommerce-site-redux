import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  getProductsBegin,
  getProductsSuccess,
  getProductsError,
  getSingleProductBegin,
  getSingleProductSuccess,
  getSingleProductError,
} from './actions';
import fetchProducts from './api';

function* fetchProductsFlow() {
  yield put(getProductsBegin);
  const response = yield call(fetchProducts);
  yield put(getProductsSuccess(response));
}

export default function* productsSaga() {
  yield takeLatest(getProductsBegin, fetchProductsFlow);
}

// const fetchSingleProduct = useCallback(async (url) => {
//   dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
//   try {
//     const response = await axios.get(url);
//     const single_product = response.data;
//     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: single_product });
//   } catch (error) {
//     dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
//   }
// }, []);

// function* fetchSingleProduct(url) {
//   yield put(getSingleProductBegin());
//   try {
//     const response = yield call(axios.get(url));
//     const single_product = response.data;
//     yield put(getSingleProductSuccess(single_product));
//   } catch (error) {
//     yield put(getSingleProductError());
//   }
// }

// const getLocalStorage = () => {
//   const cart = localStorage.getItem('cart');
//   if (cart) {
//     return JSON.parse(localStorage.getItem('cart'));
//   }
//   return [];
// };

// function* getLocalStorage() {
//   const cart = yield call(localStorage.get('cart'));
//   if (cart) {
//     return JSON.parse(localStorage.getItem('cart'));
//   }
//   return [];
// }
