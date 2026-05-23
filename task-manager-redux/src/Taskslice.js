// taskSlice.js
// A "slice" manages one piece of state — in this case, the task list.
// It holds the data AND the functions that change that data.

import { createSlice } from "@reduxjs/toolkit";

// Starting state: an empty task list
const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // addTask runs when we call dispatch(addTask("some task"))
    addTask: (state, action) => {
      const newTask = action.payload.trim(); // Remove extra spaces

      // If the task is empty, do nothing
      if (newTask === "") return;

      // Add the task to the list
      state.taskList.push(newTask);
    },
  },
});

// Export the action so App.js can use it
export const { addTask } = taskSlice.actions;

// Export the reducer so store.js can use it
export default taskSlice.reducer;