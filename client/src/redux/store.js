import { configureStore } from "@reduxjs/toolkit";
import bazaarReducer from "./bazaarSlice";

export const store = configureStore({
  reducer: {
    bazaar: bazaarReducer,
  },
});
