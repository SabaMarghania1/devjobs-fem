import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./store/themeSlice";
import filterReducer from "./store/filterSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
  },
});
