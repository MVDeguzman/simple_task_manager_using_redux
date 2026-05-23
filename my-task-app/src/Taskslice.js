import { createSlice } from "@reduxjs/toolkit";
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