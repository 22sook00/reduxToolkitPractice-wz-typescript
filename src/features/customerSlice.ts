import { createSlice,PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
  value : Customer[];
}
interface Customer {
  id : string;
  name : string;
  food : string[];
}

interface AddFoodToCustomerPayLoad {
  food :string;
  id : string;
}
interface RemoveFoodPayLoad {
  idx :number;
  cardIdx : number;
}


const initialState:CustomerState = {
  value : [],
};

export const customerSlice = createSlice({
  name : 'customer',
  initialState,
  reducers : {
    addCustomer : (state,action:PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToCustomer : (state, action:PayloadAction<AddFoodToCustomerPayLoad>) => {
      state.value.forEach((customer =>{
        if(customer.id === action.payload.id){
          customer.food.push(action.payload.food)
        }
      }))

      // const filtered = state.value.filter((customer)=>{
      //   return customer.id === action.payload.id
      // })
      // console.log('filter::',filtered)
    },
    //해당 food의 인덱스 필요.
    removeFood : (state,action:PayloadAction<RemoveFoodPayLoad>) => {
      console.log('particular number::',action.payload)
      state.value[action.payload.cardIdx].food.splice(action.payload.idx,1)
    }
  }, 
});

export const { addCustomer,addFoodToCustomer,removeFood } = customerSlice.actions
export default customerSlice.reducer;