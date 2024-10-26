import React from 'react'
import { assets } from '../../assets/assets'

const AppDownlode = () => {
  return (
    <div className='app-downlode text-[max(3vw,20px)] text-center font-medium'>
        <p>For Better Experince Downlode <br/>Tomato App</p>
        <div className='flex justify-center gap-[max(2vw,10px)] mt-10'>
            <img src={assets.play_store} alt="" className=' downlode-img w-[max(30vw,120px)] max-w-[180px] transition-[0.5s] cursor-pointer hover:scale-105'/>
            <img src={assets.app_store} alt="" className=' downlode-img w-[max(30vw,120px)] max-w-[180px] cursor-pointer transition-all hover:scale-105'/>
        </div>
    </div>
  )
}

export default AppDownlode