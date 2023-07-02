import React from 'react';
import './Main.css';
import MainImg from '../../assets/main.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Main = () => {
    const transition = { duration: 3, type: 'spring' }
    return (
        <div className="container2">

            <div className="sides">
                <span className="text1">skin protection cream</span>
                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                </div>
            </div>

            <div className="center">
                <motion.div initial={{ bottom: "2rem" }} whileInView={{ bottom: "0rem" }} className="blueCircle" transition={transition}></motion.div>
                <motion.img
                    transition={transition}
                    initial={{ bottom: '-2rem' }}
                    whileInView={{ bottom: "0rem" }}
                    src={MainImg} alt="" width={600} />
                <motion.div
                    transition={transition}
                    initial={{ right: "4%" }}
                    whileInView={{ right: "2%" }}
                    className="cart2">
                    <RiShoppingBagFill />
                    <div className="signup">
                        <span>Best Signup Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>

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