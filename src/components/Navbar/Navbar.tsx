import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar flex py-10 justify-between items-center">
            <Link to="/">
                <img src={assets.logo} alt="" className="logo w-[100px] md:w-[120px] lg:w-[150px]" />
            </Link>
            <ul className="navbar-menu hidden gap-10 text-[#49557e] text-[18px] md:gap-3 md:text-[15px] md:flex lg:gap-5 lg:text-[17px]">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : "cursor-pointer"}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "cursor-pointer"}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "cursor-pointer"}>Mobile-App</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : "cursor-pointer"}>Contact Us</li>
            </ul>
            <div className="navbar-right flex gap-10 items-center md:gap-6 lg:gap-7">
                <img src={assets.search_icon} alt="search icon" className=' md:w-4 lg:w-5' />
                <div className="navbar-search-icon relative">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="" className='md:w-4 lg:w-5' />
                    </Link>
                    <div className="dot absolute min-h-[10px] min-w-[10px] bg-pink-700 -top-3 -right-3 rounded"></div>
                </div>
                <button onClick={() => setShowLogin(true)} className='border bg-transparent text-[#49557e] px-4 py-1 rounded-full cursor-pointer text-[16px] hover:bg-[#fff4f2] transition-all md:px-5 md:py-1 md:text-lg lg:px-6 lg:py-2'>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar