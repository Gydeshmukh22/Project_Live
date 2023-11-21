
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function ProductServices() {

    const people = [
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in Java',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in ReactJS',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in DJANGHO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in PYTHON',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in PHP',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Leslie Alexander',
            role: '10 years of experience in SQL SERVER',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]
    return (
        <div className='bg-slate-200'>
            <Header />
            <>
                <div className=" bg-slate-100  rounded-lg border-4   w-full" >

                    <h2 className=' text-3xl text-center bg-slate-200 w-screen font-bold  text-sky-950  h-[60px]'>PRODUCTS AND SERVICES WE OFFER</h2>
                    {/* group of 3 div */}
                    <div className='flex  flex-row gap-8 bg-slate-150 p-8 justify-center  rounded-lg'>
                        <div className=' flex-row w-3/5'>
                            <img className='' src='https://media.istockphoto.com/id/904867650/photo/pensive-afro-american-female-entrepreneur-in-stylish-eyewear-pondering-on-business-plan-making.jpg?s=612x612&w=0&k=20&c=u_NSJNDM511VqfJR7wbl4r62tFrw8Td_Lo3aUGlFqG8=' alt='' />
                            <div className='flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded '>
                                <Link to='/training'>
                                    <h2 className='text-black text-center  text-xl font-bold mt-4 hover:underline cursor-pointer '>IT Training</h2>
                                </Link>
                                <p className='text-justify p-8 justify-center text-black overflow-hidden'>We have a team of Certified Architects to provide best solution in the industry.akshckashk chaskchk ahskhck ashckash kch askchk</p>
                            </div>
                        </div>
                        <div className=' flex-row w-3/5'>
                            <img className='z-10' src='https://media.istockphoto.com/id/1185878322/photo/theres-no-better-way-to-stay-organized.jpg?s=1024x1024&w=is&k=20&c=X2FwTfhP61ATc_ASmobehgOSKL12SiYkiuwILQPtcj4=' alt='' />
                            <div className='flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded '>
                                <Link to='/staffing'>
                                    <h2 className='text-center text-xl font-bold mt-4 hover:underline cursor-pointer text-black'>IT Staffing</h2>
                                </Link>
                                <p className='text-justify p-8 justify-center  overflow-hidden'>We have a team of Certified Architects to provide best solution in the industry.akshckashk chaskchk ahskhck ashckash kch askchk</p>
                            </div>
                        </div>
                        <div className=' flex-row w-3/5'>
                            <img className='z-10' src='https://media.istockphoto.com/id/1316372335/photo/shot-of-a-young-businessman-using-a-digital-tablet-during-a-late-night-in-a-modern-office.jpg?s=1024x1024&w=is&k=20&c=J_YkB5iwIJ5FSn9V_-R9Uh2-8mnuxyBXsgtpJ03kx70=' alt='' />
                            <div className='flex-row m-auto transition  duration-300 ease-in-out hover:scale-110 hover:cursor-pointer -mt-14 opacity-80  bg-white w-80 border-2  border-white-500 rounded '>
                                <Link to='/solutions'>
                                    <h2 className=' text-center  text-xl font-bold mt-4 hover:underline cursor-pointer text-black'>IT Solution</h2>
                                </Link>
                                <p className='text-center p-8 justify-center overflow-hidden'>We have a team of Certified Architects to provide best solution in the industry.akshckashk chaskchk ahskhck ashckash kch askchk</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* our Trainer */}


                <div className=' bg-slate-200 rounded-lg border-4     '>
                    {/* <h2 className='mx-8 text-lg  font-bold text-white m-5 '>Trainers</h2> */}
                    <h1 className='text-3xl font-bold text-center text-sky-950  m-5 p-4'>Our trainers have over 15 years of combined web development experience.</h1>
                    <div>
                        <img className='items-center mx-80 pl-10' src='https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1512011844458-BETSXFQFKXNV9M6Z45Y9/DL3mBuaVoAEYhVt.jpg?format=1500w' width={'500px'} height={'400px'} />


                    </div>
                    <div className='  bg-slate-200 h-[150px] '>
                        <h1 className=' text-3xl font-bold text-sky-950  m-5 p-4 '>WHERE OUR TRAINERS WORK</h1>
                        {/* IMG */}
                        <div className='flex flex-row font justify-center gap-8 '>
                            <img src='https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029220-6N6IL1PXQ3YP94P7OEWA/1280px-Bit.ly_Logo.svg.png?format=100w' />
                            <img src='https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208030175-WQHD65FGE33I35S4BHWT/PayPal_logo.svg.png?format=100w' />
                            <img src='https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029444-XZGS4UWWEYCJES5AZWPG/Adobe-Large.png?format=100w' />
                            <img src='https://images.squarespace-cdn.com/content/v1/5a0b7c429f8dce33490beef4/1511208029081-UAL0XRF6G2CAHXUX42M5/500px-EBay_logo.svg.png?format=100w' />
                        </div>
                    </div>
                </div>

                {/* group of trainer */}
                <div className="bg-gray-200 py-24 sm:py-32 ">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className=" text-center">
                            <h2 className="text-3xl  font-bold tracking-tight text-sky-950 sm:text-4xl">Meet our leadership</h2>
                            <p className="mt-1  leading-8 text-black text-xl">
                                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                                suspendisse.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 ml-20 sm:gap-y-16  items-center xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex gap-x-6">
                                        <img className="h-16 w-16 hover:h-20 hover:w-20 rounded-full" src={person.imageUrl} alt="" />
                                        <div>
                                            <h3 className="text-xl font-semibold leading-7 tracking-tight text-sky-950">{person.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-indigo-950">{person.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </>
            <div className='mt-6'> <Footer /></div>
        </div>

    )
}

export default ProductServices