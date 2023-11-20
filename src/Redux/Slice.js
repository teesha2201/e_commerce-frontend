import { createSlice } from "@reduxjs/toolkit";

const AddtoCart = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, increase its quantity and total
        existingItem.quantity += 1;
        existingItem.total = existingItem.price * existingItem.quantity;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1 and calculate the total
        state.cart.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    RemoveItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    IncreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.total = item.price * item.quantity;
      }
    },
    DecreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.total = item.price * item.quantity;
      }
    },
    
  },
});
//searchbar context.js
// const Searchbar = createSlice({
//   name:"search",
//   initialState:{

//   }
// })

export default AddtoCart.reducer;
export const { addtoCart, RemoveItem, IncreaseQuantity, DecreaseQuantity } = AddtoCart.actions;