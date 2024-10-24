import React, { useState } from 'react'
import { assets } from '../../assets/assets'
const Navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar flex py-10 justify-between items-center">
            <img src={assets.logo} alt="" className="logo w-[150px]" />
            <ul className="navbar-menu flex gap-10 text-[#49557e] text-[18px]">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : "cursor-pointer"}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : "cursor-pointer"}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : "cursor-pointer"}>Mobile-App</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : "cursor-pointer"}>Contact Us</li>
            </ul>
            <div className="navbar-right flex gap-10 items-center">
                <img src={assets.search_icon} alt="search icon" />
                <div className="navbar-search-icon relative">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot absolute min-h-[10px] min-w-[10px] bg-pink-700 -top-3 -right-3 rounded"></div>
                </div>
                <button className='border bg-transparent text-[#49557e] px-4 py-1 rounded-full cursor-pointer text-[16px] hover:bg-[#fff4f2] transition-all '>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar