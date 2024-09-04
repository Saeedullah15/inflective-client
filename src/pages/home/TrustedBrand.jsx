import React from 'react';
import Marquee from "react-fast-marquee";

const TrustedBrand = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-center font-bold text-3xl text-black mb-8'>Information Verified By</h2>
            <Marquee>
                <img src="https://www.akeneo.com/wp-content/uploads/2016/02/logo-nuxe@2x-1.png" alt="" />
                <img src="https://www.akeneo.com/wp-content/uploads/2021/07/logo-staples@2x-1.png" alt="" />
                <img src="https://www.akeneo.com/wp-content/uploads/2019/05/logo-rural-king@2x-1.png" alt="" />
                <img src="https://www.akeneo.com/wp-content/uploads/2022/01/logo-franklin-electric@2x-1.png" alt="" />
                <img src="https://www.akeneo.com/wp-content/uploads/2021/02/logo-city-furniture@2x-2.png" alt="" />
                <img src="https://www.akeneo.com/wp-content/uploads/2023/11/Kurt-Geiger.png" alt="" />
            </Marquee>
        </div>
    );
};

export default TrustedBrand;