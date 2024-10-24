import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numPeople: 0,
  selectedMeals: [false, false, false, false],
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    toggleMeal: (state, action) => {
      state.selectedMeals[action.payload] = !state.selectedMeals[action.payload];
    },
    setNumPeople: (state, action) => {
      state.numPeople = action.payload;
    },
  },
});

export const { toggleMeal, setNumPeople } = mealsSlice.actions;
export default mealsSlice.reducer;
