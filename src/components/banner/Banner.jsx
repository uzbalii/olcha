import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Banner() {
  const data = [
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-08-01/nmTGSvySh6B9NkfkIVnzn6edwuP4jf6n63DuRiCO6j4NIgdJk75uWcFGk6QN.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-10-21/HIuZHC3UV9Gz9d54KNYrZeHvDIOwVc93s98NLxqB7nl0ejZ44LRWFDSVmxra.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-02/V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-31/FSUhVDrgqfCzi8iHoW8S6OPL4DzYbSKNfgZOx6ABCmH6jRwwclh5wpHSZLqU.jpg",
    "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-09-16/6Xb1Rezh5jpkkz2uEMdq8TFgp4USJtXBNTPn6zHwI82mU4AZqhGjVT23GVYk.jpg",
  ];

  const days = [
    {
      name: "Kun Mahsuloti",
      hours: "03:54:16",
      images: [
        "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-04-04/xbkChYb0eflj6IVq0wFlZtH4TprX1hPdnM4nZrKPW6ShhhPTL1sZW3SwfW1f.jpg",
      ],
      malumot: "Qo‘lda bug‘lash mashinasi Haley HY- 312",
      price: "46 000 so'm / 12 oy.",
    },
    {
      name: "Kun Mahsuloti",
      hours: "03:54:16",
      images: [
        "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-12/zPGugxXi8HakvVG8criJDcIroEVJs04acVmTTdF1XKO0OVrd830whk7DZY3N.jpg",
      ],
      malumot: "Qo‘lda bug‘lash mashinasi Haley HY- 312",
      price: "46 000 so'm / 12 oy.",
    },
    {
      name: "Kun Mahsuloti",
      hours: "03:54:16",
      images: [
        "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-10-21/kMLV9QOfYqTZR9dX8F8ewgI2OqqAFny7OF21o6hZr2sAxvsZqRBotcNCzcdc.jpg",
      ],
      malumot: "Qo‘lda bug‘lash mashinasi Haley HY- 312",
      price: "46 000 so'm / 12 oy.",
    },
  ];

  return (
    <div className="banner">
      <div className="banner_left">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide className="carousel_item" key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="banner_right">
        <div className="banner_right_timer">
          <h3>Kun Mahsuloti</h3>
          <div className="timer">
            <span>12</span>:<span>54</span>:<span>36</span>
          </div>
        </div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="days_product"
        >
          {days?.map((item, index) => (
            <SwiperSlide className="days_product_item" key={index}>
              <div className="days_product_item_img">
                <img src={item.images} alt="" />
                <p>{item.malumot}</p>

                <div className="sum">{item.price}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
