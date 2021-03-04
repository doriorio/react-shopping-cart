import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, REMOVE_PRODUCT_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeProductFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
  .cart.cartItems.slice()
  .filter((x) => x._id !== product._id);
  dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const removeItemFromCart = (product, num) => (dispatch, getState) => {
 /*
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
    */
    var counter  = 0;
    var cartDupe = [];

    let cartItems = getState()
    .cart.cartItems;

    for (const item in cartItems) {
      
      if (cartItems[item]['_id'] !== product._id) {
        cartDupe.push(cartItems[item])
      } else if (cartItems[item]['_id'] == product._id && counter < num) {
          cartItems[item]['count'] -=1;
          counter+=1;      
        if (cartItems[item]['count'] >= 1) {
          cartDupe.push(cartItems[item]);

        } 
        

      }
    }
    cartItems = cartDupe;



  dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};