import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from '../features/reservationSlice'
import customerReducer from '../features/customerSlice';

export const store = configureStore({
  reducer : {
    //all difference slices in here!
    reservations : reservationsReducer,
    customer : customerReducer,
  }
})

//javascript 가 아닌, typescript 에서 필요한것!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;