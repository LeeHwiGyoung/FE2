import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  expenseList: [],
};

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState,
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;

export default expenseSlice.reducer;
