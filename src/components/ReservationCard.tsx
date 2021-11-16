import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from 'uuid';

interface ReservationCardTypes {
  name : string,
  index : number,
}

function ReservationCard({name,index}:ReservationCardTypes) {

  const dispatch = useDispatch();

  const dispatchHandler = () => {
    dispatch(removeReservation(index))
    dispatch(addCustomer({id:uuid(),name,food:[]}))
  }

  return (
    <div 
    onClick = {dispatchHandler}
    className="reservation-card-container">{name}</div>
  )
}

export default ReservationCard
