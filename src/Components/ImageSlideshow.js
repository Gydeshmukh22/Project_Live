import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                style={{
                    marginTop: '80px',
                    '--swiper-navigation-color': 'white',
                    '--swiper-pagination-color': 'white',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            'url(https://swiperjs.com/demos/images/nature-1.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>

                    <div className="text" >
                        <div className="bg-[url('https://media.istockphoto.com/id/1480095869/photo/student-or-man-use-computer-for-elearning-education-online-internet-technology-webinar-online.webp?b=1&s=170667a&w=0&k=20&c=lAFPQOr_Bvjfr1235EcosGYhr4KgUtuBW1jzMqMU05w=')]
                         h-96 w-screen bg-cover bg-center text-white">
                            <div className=' absolute inset-x-0 bottom-20  h-[180px] ml-20 mr-10 w-[610px] '>
                                <h1 className="title text-3xl" data-swiper-parallax="-300">
                                    INFORMATION TECHNOLOGY (IT) CONSULTING SERVICES
                                </h1>
                                <p className="text text-base" data-swiper-parallax="-100" >
                                    Intellectsoft stands at the forefront of technological innovation. With a team steeped in deep tech expertise,
                                    we're more than just consultants. We're your partners in shaping a future-ready IT roadmap. Our approach is tailored,
                                    ensuring your business not only adapts but thrives.
                                </p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="text" >
                        <div className="bg-[url('https://media.istockphoto.com/id/1349104991/photo/e-learning-online-education-concept.webp?b=1&s=170667a&w=0&k=20&c=OeYLvIbs1nXT4HC5lvYypLWRULv-CarzhMcpPbSIv3M=')]
                         h-96 w-screen bg-cover bg-center text-white">
                            <div className=' absolute inset-x-0 bottom-20  h-[180px] ml-20 mr-10 w-[610px]   '>
                                <h1 className="title text-3xl" data-swiper-parallax="-300">
                                    IT Staffing & Tech Recruitment Company
                                </h1>
                                <p className="text text-base" data-swiper-parallax="-100" >
                                    Our comprehensive family of brands address the complex workforce challenges organizations face today,
                                    from contingent and permanent staffing to talent management, outsourcing, and talent development.
                                    We deliver the solutions that drive your business forward.
                                </p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className="text" >
                        <div className="bg-[url('https://images.unsplash.com/photo-1555963153-11ff60182d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTY3MTIyMnx8ZW58MHx8fHx8&dpr=2&auto=format&fit=crop&w=294&h=294&q=60')]
                         h-96 w-screen bg-cover bg-center text-white">
                            <div className=' absolute inset-x-0 bottom-20  h-[180px] ml-20 mr-10 w-[610px] '>
                                <h1 className="title text-3xl" data-swiper-parallax="-300">
                                    We Provide Best Professional Certification For IT Courses
                                </h1>
                                <p className="text text-base" data-swiper-parallax="-100" >
                                    Intellectsoft stands at the forefront of technological innovation. With a team steeped in deep tech expertise,
                                    we're more than just consultants. We're your partners in shaping a future-ready IT roadmap. Our approach is tailored,
                                    ensuring your business not only adapts but thrives.
                                </p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>



            </Swiper >
        </>
    );
}
