# Current issue --

Issue with saga that loads products from api. The action call is in `components/ProductList`. The `products` array is stored in `products_reducer`

Error shows that `featured products` is undefined, but it is derived from `products`. `featured products` will show when `products` load.

There is one other fetch that may throw an error because I haven't set it up as a saga.

#### View at: https://comfy-sloth-cl.netlify.app/

A full React ecommerce site.

- Auth0
- Stripe payments
- React router
- Netlify serverless functions
- ContextAPI / useReducer for state management
