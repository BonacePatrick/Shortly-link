import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                    <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Features</a></li>
                    <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a></li>
                    <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Resources</a></li>
                    
                </ul>
                </div>
                <a className="lg:ml-10"><img className='w-3/4 lg:w-full' src="./assets/logo.svg" alt="logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex lg:-translate-x-48">
                <ul className="menu menu-horizontal px-1">

                <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Features</a></li>
                <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a></li>
                <li><a className='text-grayishViolet hover:text-veryDarkViolet'>Resources</a></li>
                
                </ul>
            </div>
            <div className="items-center space-x-6 font-bold text-grayishViolet lg:flex lg:ml-20">
                <label className='hover:text-veryDarkViolet'>Login</label>
                <Link to='/SignUp'className='px-6 py-2 lg:px-8 lg:py-3 font-bold text-white bg-cyan 
                rounded-full hover:opacity-70'>Sign Up</Link>
            </div>
        </div>
        
    </>
  )
}

export default Navbar