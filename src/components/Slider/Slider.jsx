import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slider1 from '../../assets/slider (5).jpg';
import slider2 from '../../assets/slider (2).jpg';
import slider3 from '../../assets/slider (3).jpg';
import slider4 from '../../assets/slider (4).jpg';
import slider5 from '../../assets/slider (5).jpg';
import banner from '../../assets/slider (6).jpg';
import banner2 from '../../assets/slider (7).jpg';


const Slider = () => {
    return (
        <div className='lg:w-3/4 mx-auto py-6 lg:px-0 px-5'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
            </Swiper>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-7 md:gap-7'>
                <img className='w-full lg:h-72 h-60 pt-6' src={banner} alt="" />
                <img className='w-full lg:h-72 h-60 pt-6' src={banner2} alt="" />
            </div>
        </div>
    );
};

export default Slider;