import { createSlice,PayloadAction } from '@reduxjs/toolkit';

//value 의 타입을 지정해줘야 한다.
interface ReservationState {
  //array 형태 안에있는 스트링의 타입.
  value : string[]
}

const initialState:ReservationState = {
  value : [],
};

export const reservationSlice = createSlice({
  name : 'reservation',
  initialState,
  //reducers : for update particular state
  reducers : {
    addReservation : (state,action:PayloadAction<string> ) => {
      state.value.push(action.payload)
    },
    //particular index 에 해당하는것 지우기.
    removeReservation : (state,action:PayloadAction<number>) => {
      state.value.splice(action.payload,1)
    }
  }, 
});

export const {addReservation,removeReservation} = reservationSlice.actions
export default reservationSlice.reducer;