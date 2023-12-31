import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from '../../data/products';

const Slider = () => {
    return (
        <div className='s-container'>
            <Swiper
                className='myswiper'
                slidesPerView={3}
                spaceBetween={40}
                slidesPerGroup={1}
                loop={true}
            >
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide>
                        <div className="leftslide">
                            <div className="info">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>
                        </div>
                        <img src={slide.img} alt='product' className='img-p' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;