import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.png';
import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneOutbound } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className="cFooterWrapper">
            <hr />
            <div className="cFooter">
                <div className="clogo">
                    <img src={Logo} alt="" />
                    <span>rabba</span>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Contact Us</span>
                        <span className='pngLine'>
                            <CiLocationOn className='icon' />
                            <span>Dhulabari, Jhapa</span>
                            <br />
                            <BsTelephoneOutbound className='icon' />
                            <span>977981234567</span>
                        </span>
                    </div>
                </div>
                <div className="block">
                    <div className="details">
                        <span>Mail</span>
                        <span className='pngLine'>
                            <CiMail className='icon' />
                            <span>rabba13@gmail.com</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;