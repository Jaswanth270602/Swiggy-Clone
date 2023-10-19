import React from 'react'
import { URL_USED } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../utils/store/cartSlice';

const CartRestrauntCard = (item) => {
    const dispatch= useDispatch();
    const addCart=  (item)=>{
        dispatch(addItem(item));
    }
    const removeCart= (item)=>{
        dispatch(removeItem(item));
    }
    const {name, imageId, price, description} = item;
  return (
    <div className='cartRestroCard'>
      
        <img alt='alt' src={
            URL_USED+imageId
        }  />
        <div className='CartRestroCard_in'>
        <p>{name}</p>
        <p>{price/100} /-</p>
        
        <button className="add_btn" onClick={()=>addCart(item)}>Add</button>
        <button className="rmv_btn" onClick={()=>removeCart(item)}>Remove</button>
      </div>
    </div>
  )
}

export default CartRestrauntCard
