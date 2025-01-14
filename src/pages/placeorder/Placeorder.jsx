import React, { useContext } from 'react'
import './placeorder.css'
import { Storecontext } from '../../context/Storecontext'

const Placeorder = () => {

   const {gettotalcartamount} = useContext(Storecontext)

  return (
    <form className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
             <input type="text" placeholder='First name' />
             <input type="text" placeholder='last name' />
          </div>
          <input type="text" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
             <input type="text" placeholder='City' />            
             <input type="text" placeholder='State' />            
          </div>
          <div className="multi-fields">
             <input type="text" placeholder='Zip code' />            
             <input type="text" placeholder='Country' />            
          </div>
          <input type="text" placeholder='Phone' />
        </div>
       <div className="place-order-right">
       <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{gettotalcartamount()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{gettotalcartamount()===0?0:gettotalcartamount()+20}</b>
            </div>
              </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
       </div>
    </form>
  )
}

export default Placeorder