import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer w-full    text-[#d9d9d9] bg-[#323232] flex flex-col  gap-5  pt-20 mt-[100px]'>
            <div className='footer-content block w-[100%] sm:flex gap-5 lg:flex lg:justify-between lg:items-start'>
                <div className='footer-content-left flex flex-col gap-5 items-start '>
                    <img src={assets.logo} alt="" />    
                    <p>Duds Choudhary</p>
                    <div className='footer-social-icon flex'>
                        <img src={assets.facebook_icon} alt="" className='w-10 me-4' />
                        <img src={assets.twitter_icon} alt="" className='w-10 me-4' />
                        <img src={assets.linkedin_icon} alt="" className='w-10 me-4' />
                    </div>
                </div>
                <div className='footer-content-center flex flex-col sm:gap-5 items-start'>
                    <h2 className='text-white mt-6 gap-0'>COMPANY</h2>
                    <ul>
                        <li className='my-2.5 cursor-pointer'>Home</li>
                        <li className='my-2.5 cursor-pointer'>About us</li>
                        <li className='my-2.5 cursor-pointer'>Delivery</li> 
                        <li className='my-2.5 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right flex flex-col sm:gap-5 items-start gap-0'>
                    <h2 className='text-white mt-4'>GET IN TOUCH</h2>
                    <ul>
                        <li className='my-2.5 cursor-pointer'>info123@gmail.com</li>
                        <li className='my-2.5 cursor-pointer'>+123-3455-5656</li>
                    </ul>
                </div>
            </div>
            <hr className='h-0.5 w-[100%] my-5 bg-gray-600 border-none'/>
            <p className='items-center flex justify-center mt-6 md:text-center'>Copyright 2024 @ Tomato.com - All Right ReserVed.</p>
        </div>
    )
}

export default Footer