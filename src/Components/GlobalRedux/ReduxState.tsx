import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  email: string;
  password: string;
  _id: string;
}

interface cartData {
  title: string;
  price: string;
  desc: string;
  category: string;
  _id: string;
  cartQuantity: number;
}

const initialState = {
  currentUser: {} as userData | null,
  cart: [] as Array<cartData>,
  totalPrice: 0,
  totalQuantity: 0,
};

export const ReduxState = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    logInUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
    logOutUser: (state) => {
      state.currentUser = null;
    },
    addToCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[0].cartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
      state.totalQuantity += 1;
    },

    removeFromCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (state.cart[check].cartQuantity > 1) {
        state.cart[check].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }
      state.totalQuantity -= 1;
    },
    clearCart: (state, { payload }: PayloadAction<cartData>) => {
      state.cart = state.cart.filter((el) => el._id !== payload._id);
      const check = state.cart.findIndex((el) => el._id === payload._id);
      state.totalQuantity -= state.cart[check].cartQuantity;
    },
    removeItem: (state, { payload }: PayloadAction<cartData>) => {
      state.cart = state.cart.filter((el) => el._id !== payload._id);
    },
    // getTotal: (state, { payload }: PayloadAction<cartData>) => {
    //   state.totalPrice = state.totalQuantity * state.totalPrice;
    // },
  },
});

export const {
  logInUser,
  logOutUser,
  addToCart,
  removeFromCart,
  clearCart,
  removeItem,
  // getTotal,
} = ReduxState.actions;

export default ReduxState.reducer;
