import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image, category }) => {

  const {cartitem,addToCart, removeFromCart} = useContext(StoreContext)
  
  return (
    <div className=' food-item w-[100%] m-auto rounded-2xl'>
      <div className='relative'>
        <img src={image} className='w-[100%] rounded-t-lg' alt="" />
        {!cartitem[id]
          ? <img onClick={() =>addToCart(id)} src={assets.add_icon_white} alt="" className='w-[34px] absolute bottom-4 right-4 cursor-pointer rounded-full' />

          : <div className='absolute right-3.5 bottom-4 flex items-center gap-2.5 p-1.5 rounded-full bg-white'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-7' />
            <p>{cartitem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" className='w-7'/>
          </div>
        }
      </div>
      <div className='p-5'>
        <div className='flex justify-between items-center  mb-2.5'>
          <p className='text-xl font-medium'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-[70px]' />
        </div>
        <p className='text-xs text-[#676767]'>{description}</p>
        <button  className='text-[22px] text-[#ff6347] font-medium my-2.5'>${price}</button>
      </div>
    </div>
  )
}

export default FoodItem