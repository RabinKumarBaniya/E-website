import React from 'react';
import './Main.css';
import MainImg from '../../assets/main.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';

const Main = () => {
    return (
        <div className="container2">
            {/*left */}
            <div className="sides">
                <span className="text1">skin protection cream</span>
                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                </div>
            </div>
            {/*middle */}
            <div className="center">
                <div className="blueCircle"></div>
                <img src={MainImg} alt="" width={600} />
                <div className="cart2">
                    <RiShoppingBagFill />
                    <div className="signup">
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            {/*right*/}
            <div className="sides">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Montly Traffic</span>
                </div>
                <div className="customers">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Main;