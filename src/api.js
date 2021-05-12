import axios from 'axios';

export const fetchProducts = async () => {
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

export const fetchSingleProduct = async (url) => {
  try {
    const response = await axios.get(url);
    const single_product = response.data;
    return single_product;
  } catch (error) {
    console.log(error);
  }
};
