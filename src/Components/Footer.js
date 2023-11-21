import React from 'react'
import { AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import '../App.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer '>
            <div className='sb_footer section_padding'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div'>
                        <h4>For Business</h4>
                        <a href='/employer'>
                            <p>Employer</p>
                        </a>
                        <a href='/healthplan'>
                            <p>Health Plan</p>
                        </a>
                        <a href='/individual'>
                            <p>Individual</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Resources</h4>
                        <a href='/resource'>
                            <p>Resource center</p>
                        </a>
                        <a href='/resource'>
                            <p>Testimonials</p>
                        </a>
                        <a href='/resource'>
                            <p>STV</p>
                        </a>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Partners</h4>
                        <a href='/about'>
                            <p>About</p>
                        </a>
                        <a href='/pressr'>
                            <p>Press</p>
                        </a>
                        <a href='/career'>
                            <p >Career</p>
                        </a>

                        <Link to='/contactus'>

                            <p className='text-white hover:cursor-pointer '>Contact</p>

                        </Link>
                    </div>
                    <div className='sb_footer-links-div'>
                        <h4>Coming soon on</h4>
                        <div className='socialmedia'>
                            <p><AiFillFacebook /></p>
                            <p><AiFillTwitterCircle /></p>
                            <p><BsInstagram /></p>
                            <p><BsLinkedin /></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright'>
                        <p>
                            @{new Date().getFullYear()}CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                        <a href='/privacy'><div><p>Privacy</p></div></a>
                        <a href='/security'><div><p>Security</p></div></a>
                        <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer