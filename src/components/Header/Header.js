import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';

const Header = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
                <span>rabba</span>
            </div>
            <div className='right'>
                <div className='menu'>
                    <ul className='menu'>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>Eng</li>
                    </ul>
                </div>
                <input type="text" className='search' placeholder='search here' />
                <CgShoppingBag className='cart' />
            </div>
        </div>
    )
}

export default Header;