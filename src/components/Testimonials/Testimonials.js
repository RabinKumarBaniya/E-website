import React from 'react';
import './Testimonials.css';
import Hero from '../../assets/testimonialHero.png';


const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className="wrapper">
                <img src={Hero} alt="" />
            </div>
        </div>
    )
}

export default Testimonials;