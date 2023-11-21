import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

function Staffing() {
    return (
        <div className='bg-slate-200'>
            <Header />

            <div className='mt-20'>
                <div className="bg-[url(https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974)] h-[400px] w-full  border-4   contain  relative ">
                    <div className=" p-14 m-10 bg-gray-500/50 w-2/3 text-center rounded-full">
                        <h1 className="text-indigo-950  p-3 m-5 text-3xl"> INSTITUTE FOR SOFTWARE TRAINING AND DEVELOPMENT</h1>
                        <p className="text-indigo-950 font-semibold  text-4xl">
                            ONE STEP AHEAD TO SUCCESS
                        </p>
                    </div>
                </div>
                <div className="flex items-center bg-slate-200 justify-center p-10">
                    <img src="https://media.istockphoto.com/id/1413375076/photo/minimal-style-modern-white-classroom-with-blue-chairs-3d-render.webp?b=1&s=170667a&w=0&k=20&c=HjW0gcYTAX76lJFfevFbNPRUl6AUQDxfhH2Tj3gZAzI=" className='w-[450px] h-[330px] z-10 mr-5 border-indigo-950 border-2' />
                    <div className=' px-20 bg-slate-100  border-4 border-indigo-950 w-[600px] h-[400px] ml-[-104px]'>
                        <div className='ml-5  text-center mt-20'>
                            <strong className='text-center m-3 text-indigo-950 text-2xl'>Welcome to SOFTRONIX<br /> </strong>
                            <span className='leading-8  justify-space-around font-medium text-indigo-950 text-xl'>

                                The Best Software Training Institute!
                                Increase your Market Value and Employability with softronix Job-Oriented Courses!

                                softronix provides a range of job-oriented courses in Nagpur that include

                            </span>
                        </div>
                    </div>
                </div>

                <h1 className='text-center text-5xl p-8 bg-slate-200 text-indigo-950  text-bold '>Featured Courses</h1>
                <div className='grid grid-cols-3 gap-4  border-4 items-center p-4  bg-slate-200'>
                    <div className=' border-4  w-[160px] h-[135px]'>
                        <div className='grid  w-[150px] h-[130px] contain  border-4  '>
                            <img className=' contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className=' text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Full Stack developer</h1>

                        </div>
                    </div>
                    {/* 2nd image */}
                    <div className=' border-4   w-[160px] h-[135px]'>
                        <div className='grid w-[150px] h-[130px] contain  border-4  '>
                            <img className='contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className=' text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Language</h1>

                        </div>
                    </div>
                    {/* 3rd image */}
                    <div className=' border-4   w-[160px] h-[135px]'>
                        <div className='grid w-[150px] h-[130px] contain  border-4  '>
                            <img className='contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className='  text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Language</h1>

                        </div>
                    </div>
                    {/* 4th image */}
                    <div className=' border-4   w-[160px] h-[135px]'>
                        <div className='grid w-[150px] h-[130px] contain  border-4  '>
                            <img className='contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className='  text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Language</h1>

                        </div>
                    </div>
                    {/* 5th image */}
                    < div className=' border-4   w-[160px] h-[135px]'>
                        <div className='grid w-[150px] h-[130px] contain  border-4  '>
                            <img className='contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className='  text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Language</h1>

                        </div>
                    </div>
                    {/* 6th image */}
                    <div className=' border-4   w-[160px] h-[135px]'>
                        <div className='grid w-[150px] h-[130px] contain  border-4  '>
                            <img className='contain w-[150px] h-[130px] bg-blue-800 ' src='https://cdn-icons-png.flaticon.com/512/5968/5968282.png' />
                        </div>
                        <div className='  text-center ' >
                            <h1 className='w-[150px]  mb-4 p-6  bg-blue-800  text-white text-sm text-bold border-4 '   >Java Language</h1>

                        </div>
                    </div>



                </div >
                <div className='mt-40'>
                    <Testimonial />
                </div>
                <div className='mt-6'> <Footer /></div>
            </div>

        </div>
    )
}

export default Staffing