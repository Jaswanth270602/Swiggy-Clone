import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../utils/store/cartSlice';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [isPaymentOptionsOpen,setIsPaymentOptionsOpen]= useState(false);
    const [ordered,setOrdered]= useState(false);
    const cartItems= useSelector(store=> store.cart.items);
    const toggleOption = () =>{
        setIsPaymentOptionsOpen(!isPaymentOptionsOpen);
    }
    const dispatch= useDispatch();
    const clearCart= ()=>{
        dispatch(clearItems());
    }
    const handlePayment= ()=>{ 
        setOrdered(true);
    }
    const handlenope = ()=>{
        setOrdered(false);
    }
  return (
    <div className='payments'>
      <div onClick={()=>toggleOption()} className='optionsforPay'>
        <p>Choose your payment method !!</p>
        {isPaymentOptionsOpen && 
        <div>
            <p className='payp' onClick={()=>{handlePayment();toggleOption()}}>Cash On Dlivery</p>
            <p className='payp' onClick={()=>{handlePayment();toggleOption()}}>Phone Pe</p>
            <p className='payp' onClick={()=>{handlePayment();toggleOption()}}>UPI processing</p>
            <p className='payp' onClick={()=>{handlePayment();toggleOption()}}>Net Banking</p>
            </div>}
      </div>
      {(!ordered || cartItems.length===0) && <img className="payimg" alt="alt" src="https://static.vecteezy.com/system/resources/previews/000/684/243/original/online-payment.jpg"/>}
      {(cartItems.length>0) && ordered && <img className="payimg" alt="alt" src="https://www.pngarts.com/files/7/Food-Delivery-Service-PNG-Image.png"/>}
      <div  className='indiv'><button className='cancelbtn' onClick={()=>{clearCart();handlenope();}}>Cancel Order</button></div>
    </div>
  )
}

export default Payment
