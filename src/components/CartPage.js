import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCartPage from './EmptyCartPage';
import { clearItems, removeItem } from '../utils/store/cartSlice';
import RestrauntCard from './RestuarantCard';
import CartRestrauntCard from './CartRestrauntCard';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cartItems= useSelector((store)=>store.cart.items);
    const [isOrderOpen,setIsOrderOpen]= useState(false);
    const [bill,setBill]=useState(0);
    const dispatch=useDispatch();
    const removeCart=()=>{
        dispatch(removeItem());
    }
    const clearCart= ()=>{
        dispatch(clearItems());
    }
    useEffect(()=>
    {
        getBill();
    },[cartItems]);
    const getBill= ()=>{
        let bills=0;
        for(let i=0; i<cartItems.length; i++)
        {
            bills+=cartItems[i].price;
        }
        setBill(bills);
    }
    return  (cartItems.length===0)? <EmptyCartPage/> :
  (
    <div className='cart_main'>
        <h1>Cart Items - {cartItems.length}</h1>
        <button onClick={()=>clearCart()}>Clear Cart</button>
        <div className='cart_div'>
            {cartItems.map((item,index)=>(
                <CartRestrauntCard {...item} key={index} />
            ))}
        </div>
        <hr></hr>
        <p>Total Items: {cartItems.length}</p>
        <p>Total Bill:{bill/100} rs</p>
        
        <Link to="/payment"><p className='hello'>Order Now</p></Link>
        
    </div>
  )
}

export default CartPage
