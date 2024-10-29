import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contant absolute flex items-start gap-[1.5vw] max-w-[50%] flex-col bottom-[10%] left-[6vw] lg:max-w-[45%] md:max-w-[65%]'>
            <h2 className='font-medium text-white text-[max(3vw, 17px)] sm:text-[max(4.5vw,22px)]'>Order your Favourite Food</h2>
            <p className='text-white hidden text-[1vw] sm:flex'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <button className='text-[#747474] font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] rounded-full md:py-[2vw] md:px-[4vw]'>View Menu</button>
        </div>
    </div>
  )
}

export default Header