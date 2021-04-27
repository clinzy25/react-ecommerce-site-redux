import axios from 'axios';
// import { products_url as url } from './utils/constants';

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      'https://course-api.com/react-store-products'
    );
    const products = response.data;
    return products;
  } catch (error) {
    console.log(error);
  }
};

export default fetchProducts;
