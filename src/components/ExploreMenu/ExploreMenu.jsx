import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-4 lg:text-sm' id='exploreMenu'>
      <h1 className='text-[#262626] font-medium'>Explore Menu</h1>
      <p className='text-[#808080] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
      <div className="explore-menu flex justify-between items-center gap-[15px] sm:gap-[30px] text-center overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='explore-list-menu-item' key={index}>
              <img src={item.menu_image} className={ category === item.menu_name ? "active" : "gap-2 bg-red-600" } alt="" />
              <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className='my-[10px] h-[px] text-[#2e2e2e]' />
    </div>
  )
}

export default ExploreMenu