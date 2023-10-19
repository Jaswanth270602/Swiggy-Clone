import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCartPage = () => {
  return (
    <div className='empty_cart'>
      <img alt="empty" src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png' />
      <Link to="/"><button className='emp_cart_btn'>Go Back To Shop</button></Link>
    </div>
  )
}

export default EmptyCartPage
