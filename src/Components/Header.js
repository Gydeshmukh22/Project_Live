import React from 'react'
// import Login from '../Pages1/Login'
import { Link } from 'react-router-dom'
import { BiSolidUserCircle } from "react-icons/bi";

function Header() {
    return (
        <div>
            <div className="flex flex-row  justify-around  items-center shadow-lg bg-indigo-950 fixed top-0 z-50 w-full p-5" >
                <Link to='/home'>
                    <h1 className="flex ml-2 text-4xl font-bold text-white">Softronix</h1>
                </Link>
                <ul className="flex space-x-10 text-lg font-semibold ">

                    <Link to='/productsandservises'>
                        <li className='text-white'>Product & Services</li>
                    </Link>

                    <Link to='/about'>
                        <li className='text-white'>About Us</li>
                    </Link>

                    <Link to='/registration'>
                        <button className='bg-red-600 p-1 items-center rounded-md   text-white transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer'>
                            Registration
                        </button>
                    </Link>

                    <Link to='/login'>
                        <button className='bg-red-600 p-1 items-center rounded-md  m-1 text-white transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer flex flex-row' >
                            Login
                            <BiSolidUserCircle className='text-2xl' />
                        </button>
                    </Link>


                </ul>
            </div>

        </div>
    )
}

export default Header