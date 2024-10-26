import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  
  const {cartitem,food_list,removeFromCart } = useContext(StoreContext)
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
          <br/>
          <hr/>
          {food_list.map((item,index)=>{
            if(cartitem[item._id] > 0){
              return(
                <>
                <div className='cart-items-title grid items-center text-gray-600 text-[max(1vw,12px)] mt-2.5 text-black'>
                  <img src={item.image} alt=""  className='w-[50px] rounded'/>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>{item.price * cartitem[item._id]}</p>
                  <p>x</p>
                </div>
                <hr className='h-[1px] '/>
                </>
              )
            }
          })}
        </div>
    </div>
  )
}

export default Cart