import React from 'react';
import '../Offers/Offers.css';
import exclusive_image from '../Assests/exclusive_image.png'
import { Link } from 'react-router-dom';

export const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
           <h1>Exclusive</h1>
           <h1>Offers For You</h1>
           <p>ONLY ON BEST SELLER PRODUCTS</p>
          <Link to='/check'> <button>Check Now</button> </Link>
      </div>
      <div className="offers-right">
      <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}
