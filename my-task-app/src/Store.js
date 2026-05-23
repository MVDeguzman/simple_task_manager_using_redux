import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Taskslice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;