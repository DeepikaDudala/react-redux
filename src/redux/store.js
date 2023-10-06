import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slicies/counter/counterSlice";
import formSlice from "./slicies/form/formSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    form : formSlice
  },
});