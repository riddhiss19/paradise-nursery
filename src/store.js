import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './features/venue/venueSlice';
import addOnsReducer from './features/addOns/addOnsSlice';
import mealsReducer from './features/meals/mealsSlice';
import cartSlice from './features/cart/cartSlice';


export const store = configureStore({
  reducer: {
    venue: venueReducer,
    addOns: addOnsReducer,
    meals: mealsReducer,
    cart: cartSlice,
  },
});

export default store;
