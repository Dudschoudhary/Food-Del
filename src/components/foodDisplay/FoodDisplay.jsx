import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)

  
  return (
    <div className='mt-[30px]'>
      <h2 className='text-[max(2vw,24px)] font-semibold'>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay