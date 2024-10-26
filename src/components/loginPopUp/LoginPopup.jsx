import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login")
  return (
    <div className='absolute z-10 w-[100%] h-[100%] bg-[#00000090] grid'>
        <form className='login-popup-container place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm'>
            <div className="login-popup-title flex justify-between items-center text-black">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" className='w-4 cursor-pointer' />
            </div>
            <div className="login-popup-input flex flex-col gap-5">
                {currentState === "Login" ? <></> :<input type="text" placeholder='Your Name' required />}
                <input className='outline-none border p-2.5 rounded-md' type="email" placeholder='Your email'required />
                <input className='outline-none border p-2.5 rounded-md' type="password" placeholder='Password' required />
            </div>
            <button className='border-none  p-2.5 rounded-md text-white bg-[#ff6347] text-[15px] cursor-pointer '>{currentState==="Sign Up" ?"Create Account":"Login"}</button>
            <div className="login-popup-cond flex items-start gap-2 -mt-4">
                <input type="checkbox" required className='mt-1'/>
                <p>Duds Choudhary</p>
            </div>
            {currentState === "Login"
            ?<p className='text-[#ff6347] font-medium cursor-pointer'>Create a new account? <span onClick={()=>setCurrentState("Sign In")}>Click here</span></p>
            :<p className='text-[#ff6347] font-medium cursor-pointer'>Already hane an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup