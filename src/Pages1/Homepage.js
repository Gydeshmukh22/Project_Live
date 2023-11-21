import React from 'react'
import Header from '../Components/Header'

import ImageSlideshow from '../Components/ImageSlideshow'
import FAQs from '../Components/FAQs'
import Footer from '../Components/Footer'


function Homepage() {
    return (
        <div className='bg-slate-200'>

            <Header />


            {/* images slideshow */}
            <ImageSlideshow />


            {/*Frequesntly asked questions  */}

            <FAQs />

            {/* footer */}
            <Footer />

        </div>
    )
}

export default Homepage