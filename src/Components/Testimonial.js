import React, { useState } from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarIcon from '@mui/icons-material/Star';




function MySlider() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const Testimonials_array = [
        {
            name: "John",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',

            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
            post: "Web Designer",


        },

        {
            name: "Smith",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',

            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",

            post: "Web Developer"
        },

        {
            name: "Poll",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',

            Feedback: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            post: "Creative Leader"
        },

        {
            name: "Charlie",
            ImageLink: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
            // Image:
            //     <img className='' src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg' alt='' />,
            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            post: "Sales Manager"
        },
        {
            name: "Gale",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            post: "Data Analytics"
        },
        {
            name: "Karl",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',

            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            post: ""
        },
        {
            name: "Shrijan",
            ImageLink: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',

            Feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            post: "Web Developer"
        },
    ]






    const Client_array = [
        {

            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/mitsubishi-power.svg"

        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/harkins.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/neurogazer.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/melco-with-subtitle.svg"
        },
        {

            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/mitsubishi-power.svg"

        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/harkins.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/neurogazer.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/melco-with-subtitle.svg"
        },
        {

            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/mitsubishi-power.svg"

        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/harkins.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/neurogazer.svg"
        },
        {
            logo: "https://www.intellectsoft.net/assets/3cf7fbc/img/clients-logo/melco-with-subtitle.svg"
        },

    ]

    return (
        <div className='w-3/4 m-auto'>
            <h1 className=' text-2xl font-bold h-12 text-indigo-950 bg-slate-400 border-indigo-950 border-2 text-4x1 font-f m-2 text-center p-2'>What Clients Say About Us</h1>
            <p className='m-5 text-indigo-950 text-xl'>Take a glimse of drop from the ocean of our student's satisfactory reviews that might be helpful for you</p>

            <div className='mt-10'>
                {/* <Slider {...settings}> */}
                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                    slidesToShow={3} swipeToSlide={true} focusOnSelect={true}
                    dots={true}
                    infinite={true}

                    slidesToScroll={2}
                    autoplay={true}
                    speed={5000}
                    autoplaySpeed={5000}

                >
                    {Testimonials_array.map((d) => (
                        <div className='bg-white h-[450px] text-black rounded-xl'>
                            <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img src={d.ImageLink} className='h-44 w-44 rounded-full' alt='err' />


                            </div>

                            <div className='flex flex-col justify-center items-center gap-2 p-4'>
                                <p>{d.name}</p>
                                <p>{d.Feedback}</p>
                                <p>{d.post}</p>
                                {/* <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
                                <div className=' flex flex-row  text-orange-500 justify-center items-center gap-2 p-4'>

                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>


                            </div>

                        </div>
                    )
                    )}
                </Slider>
                {/* </Slider> */}
            </div>

            <div>
                <div className='w-3/4 text-center  m-auto'>

                    <h1 className='text-2xl font-bold h-12 text-indigo-950 bg-slate-400 border-indigo-950 border-2 text-4x1 m-7  p-2 py-2'>OUR CLIENTS</h1>
                    <p className='m-5 text-xl'>Our IT consulting services have helped businesses and world-class brands in the Fortune 500 to enhance their digital strategies and develop comprehensive product roadmaps.</p>
                    <div className='mt-20'>
                        {/* <Slider {...settings}> */}
                        <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={3} swipeToSlide={true}

                            // centerMode={true}
                            infinite={true}
                            // centerPadding={60}
                            focusOnSelect={true}
                            speed={3000}
                            rows={3}
                            slidesPerRow={1}
                            autoplay={true}
                            autoplaySpeed={5000}
                            dots={true}
                            slidesToScroll={3}
                        // cssEase={linear}


                        >
                            {Client_array.map((C) => (
                                <div className='bg-lightgray h-[100px] text-black rounded-xl m-5 '>

                                    <div className='flex flex-col justify-center items-center gap-2 p-4'>

                                        <img src={C.logo} alt='err' />

                                    </div>
                                </div>
                            ))}
                        </Slider>
                        {/* </Slider> */}
                    </div>


                </div>
            </div>
        </div >
    )
}




export default MySlider