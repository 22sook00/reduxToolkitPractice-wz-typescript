import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer, removeFood } from '../features/customerSlice';

interface CustomerCardType{
  id : string,
  name : string,
  food : string[],
  cardIdx : number,

}

function CustomerCard({id,name,food,cardIdx}:CustomerCardType) {

  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState('')

  const onChangeAddFood = (e:any) => {
    setCustomerFoodInput(e.target.value)
  }
  const addFoodHandler = () => {
    if(!customerFoodInput) return;
    dispatch(addFoodToCustomer({id,food : customerFoodInput}))
    setCustomerFoodInput('');
  }
  const removeFoodHandler = (idx:number) => {
    dispatch(removeFood({cardIdx, idx}))
  }

  return (
    <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">{food.map((food,idx)=>{
                return (
                  <p 
                  key = {food}
                  onClick = {()=>removeFoodHandler(idx)}>{food}</p>
                )
              })}</div>
              <div className="customer-food-input-container">
                <input 
                value = {customerFoodInput}
                onChange = {onChangeAddFood}
                />
                <button onClick  = {addFoodHandler}>Add</button>
              </div>
            </div>
          </div>
  )
}

export default CustomerCard
