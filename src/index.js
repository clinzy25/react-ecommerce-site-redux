import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
// import { ProductsProvider } from './context/products_context';
// import { FilterProvider } from './context/filter_context';
// import { CartProvider } from './context/cart_context';
import store from './reducers/root_reducer';

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN}
      clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
      cacheLocation='localstorage'
      redirectUri={window.location.origin}
    >
      {/* <UserProvider> */}
        {/* <ProductsProvider>
      <FilterProvider>
    <CartProvider> */}
        <App />
        {/* </CartProvider>
        </FilterProvider>
        </ProductsProvider> */}
      {/* </UserProvider> */}
    </Auth0Provider>
  </Provider>,
  document.getElementById('root')
);
