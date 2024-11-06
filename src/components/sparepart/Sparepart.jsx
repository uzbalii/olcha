import React from 'react'
import "./Sparepart.css"
import { carData } from '../../data/ProductData'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

function Sparepart() {
  return (
    <div className="sparepart">
          <Swiper
              slidesPerView={7}
              spaceBetween={1}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
          >
              {carData.map((item, index) => (
                  <SwiperSlide key={index}>
                      <div className="catalogs__item">
                        <div className='bg' >
                          <img src={item.url} alt="" />
                        </div>
                          <p>{item.name}</p>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
    </div>
  )
}

export default Sparepart