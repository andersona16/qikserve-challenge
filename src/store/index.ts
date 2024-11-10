import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import menuReducer from "./menuSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
