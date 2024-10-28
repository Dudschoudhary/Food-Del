import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartitem, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext)
  console.log("remove data",removeFromCart);
  

  const navigate = useNavigate()
  return (
    <div className='cart mt-[100px]'>
      <div className="cart-items">
        <div className="cart-items-title grid items-center text-gray-600 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <>
                <div className='cart-items-title grid items-center text-[max(1vw,12px)] mt-2.5 text-black'>
                  <img src={item.image} alt="" className='w-[50px] rounded' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price * cartitem[item._id]}</p>
                  <button onClick={removeFromCart} className='cursor-pointer'>x</button>
                </div>
                <hr className='h-[1px] ' />
              </>
            )
          }
        })}
      </div>
      <div className="cart-buttom mt-20  gap-[max(12vw,20px)] lg:flex lg:justify-between">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2.5'/>
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='my-2.5'/>
            <div className="cart-toalt-deatil flex justify-between text-[#555]">
              <b>Toal</b>
              <b>${getTotalCartAmount()=== 0?0 :getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=> navigate('/order')} className='border-none text-white bg-[#ff6347] w-[max(15vw,200px)] py-3 rounded cursor-pointer'>PROSRRD TO CHECKOUT</button>
        </div>
        <div className="cart-promocode flex-1 justify-start mt-6 md:mt-0">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded'>
              <input type="text" name="" id="" placeholder='Promo Code' className='bg-transparent border-none outline-none pl-2.5 w-[max(10vw,130px)]'/>
              <button className=' py-[5px] px-3 bg-black border-none rounded text-white w-[max(10vw,150px)] '>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart