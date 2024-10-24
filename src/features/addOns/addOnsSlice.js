import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAddOns: [0, 0, 0, 0, 0],
};

const addOnsSlice = createSlice({
  name: 'addOns',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.selectedAddOns[action.payload]++;
    },
    decrement: (state, action) => {
      if (state.selectedAddOns[action.payload] > 0) {
        state.selectedAddOns[action.payload]--;
      }
    },
  },
});

export const { increment, decrement } = addOnsSlice.actions;
export default addOnsSlice.reducer;
