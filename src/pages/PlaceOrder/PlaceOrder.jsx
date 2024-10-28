import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order flex items-start justify-between gap-12 mt-[100px]'>
      <div className="place-order-left w-[100%] max-w-[max(30%,500px)] ">
        <p className="title text-3xl font-medium mb-12">Delivery Information</p>
        <div className='multi-fields flex gap-2.5'>
          <input type="text"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='First Name' />
          <input type="text"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]" placeholder='Street' />
        <div className='multi-fields flex gap-2.5'>
          <input type="text"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='City' />
          <input type="text"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='State' />
        </div>
        <div className='multi-fields flex gap-2.5'>
          <input type="text" className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]" placeholder='Zip Code' />
          <input type="text"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='Country' />
        </div>
        <input type="number"  className="mb-[15px] w-full p-2.5 border rounded outline-[#ff6347]"placeholder='Phone' />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5' />
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()=== 0 ?0 :2}</p>
            </div>
            <hr className='my-2.5' />
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <b>Toal</b>
              <b>${getTotalCartAmount()===0?0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className='border-none text-white bg-[#ff6347] w-[max(15vw,200px)] py-3 rounded cursor-pointer mt-7'>PROSRRD TO PAYMENT</button>
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder