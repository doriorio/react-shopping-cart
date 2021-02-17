import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

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

export const removeFromCart = (product, num) => (dispatch, getState) => {
 /*
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);
    */
    var counter  = 0;
    var cartDupe = [];

    let cartItems = getState()
    .cart.cartItems;
    console.log(cartItems);
    for (const item in cartItems) {
      if (cartItems[item]['_id'] !== product._id) {
        cartDupe.push(cartItems[item])
      } else if (counter < num) {
        cartItems[item]['count'] -=1;
        counter+=1;
        if (cartItems[item]['count'] <= 1) {
          cartDupe.push(cartItems[item])
        } 

      }
    }
    cartItems = cartDupe;
    console.log(cartItems);  


  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};