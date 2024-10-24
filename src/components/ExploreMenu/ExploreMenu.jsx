import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='flex flex-col gap-4' id='exploreMenu'>
        <h1 className='text-[#262626] font-medium'>Explore Menu</h1>
        <p className='max-w-[60%] text-[#808080]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
        <div className="explore-menu flex justify-between items-center gap-[30px] text-center mx-[20px] overflow-x-scroll">
            {menu_list.map((item,index) =>{
              return(
                <div className='' key={index}>
                  <img src={item.menu_image} className='w-[7.5vw] min-w-[80px] cursor-pointer rounded-full' alt="" />
                  <p className='mt-[10px] text-[#747474] text-[max(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                </div>
              )
            })}
        </div>
        <hr className='my-[10px] h-[px] text-[#2e2e2e]'/>
    </div>
  )
}

export default ExploreMenu