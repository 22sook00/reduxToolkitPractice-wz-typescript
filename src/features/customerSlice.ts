import { createSlice,PayloadAction } from '@reduxjs/toolkit';
//value 의 타입을 지정해줘야 한다.
interface CustomerState {
  value : Customer[];
}

interface Customer {
  id : string;
  name : string;
  food : string[];
}

const initialState:CustomerState = {
  value : [],
};

export const customerSlice = createSlice({
  name : 'customer',
  initialState,
  //reducers : for update particular state
  reducers : {
    addCustomer : (state,action:PayloadAction<Customer>) => {
      state.value.push(action.payload)
    }
  }, 
});

export const { addCustomer } = customerSlice.actions
export default customerSlice.reducer;