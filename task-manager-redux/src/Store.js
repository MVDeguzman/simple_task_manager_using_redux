// store.js
// This file creates the Redux store.
// The store holds ALL the data (state) for the entire app.

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;