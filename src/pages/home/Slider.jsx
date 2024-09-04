import React from 'react';
// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";

const Slider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={s1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={s2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={s3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={s4} alt="" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;