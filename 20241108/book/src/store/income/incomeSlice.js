import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: 0,
};
const incomeSlice = createSlice({
  name: "incomeSlice",
  initialState,
  reducers: {
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { setIncomeAction } = incomeSlice.actions;
export default incomeSlice.reducer;
