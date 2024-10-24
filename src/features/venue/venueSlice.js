import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRooms: [0, 0, 0, 0, 0],
};

const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.selectedRooms[action.payload]++;
    },
    decrement: (state, action) => {
      if (state.selectedRooms[action.payload] > 0) {
        state.selectedRooms[action.payload]--;
      }
    },
  },
});

export const { increment, decrement } = venueSlice.actions;
export default venueSlice.reducer;
