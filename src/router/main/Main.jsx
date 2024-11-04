import React from 'react'
import "./Main.css"
import img1 from "./V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg"
import img2 from "./image.png"
import CardList from './Product'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



function Main() {
  const data = [
    {
      images: [
        "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-08-01/nmTGSvySh6B9NkfkIVnzn6edwuP4jf6n63DuRiCO6j4NIgdJk75uWcFGk6QN.jpg",
      ],
    },
    {
      images: [
        "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-10-21/HIuZHC3UV9Gz9d54KNYrZeHvDIOwVc93s98NLxqB7nl0ejZ44LRWFDSVmxra.jpg",
      ],
    },
    {
      images: [
        "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-02/V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg",
      ],
    },
    {
      images: [
        "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-07-31/FSUhVDrgqfCzi8iHoW8S6OPL4DzYbSKNfgZOx6ABCmH6jRwwclh5wpHSZLqU.jpg",
      ],

    },
    {
      images: [
        "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-09-16/6Xb1Rezh5jpkkz2uEMdq8TFgp4USJtXBNTPn6zHwI82mU4AZqhGjVT23GVYk.jpg",
      ],

    },


  ];

  console.log(data);


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

  ]


  return (
    <div className="main">
      <div className="img">
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide className="product_item" key={index}>
              <img className='carousel_img' src={item.images} alt="" />
            </SwiperSlide>
          ))}

        </Swiper>

        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="cardSwiper">
          {days?.map((item, index) => (
            <SwiperSlide className="product_item" key={index}>

              <div className="day_product">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.hours}</p>
                </div>
                <img src={item.images} alt="" />
                <h3>{item.malumot}</h3>
                <div className='sum'>{item.price}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



      </div>

      <h1 className='dot'>.....</h1>

      <div className="product_item">
        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png" alt="" />
          <p>Sport Anjomlari</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png" alt="" />
          <p>Gozallik krem</p>
        </div>


        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png" alt="" />
          <p>Chet tovarlari</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png" alt="" />
          <p>Avto jihozlar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png" alt="" />
          <p> uy va bog' uchun</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png" alt="" />
          <p>Bolalar uchun </p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/kYlDnf1YPCTeu1CukaSt24EaWdr5QpW648eNtpeaFuxiFZLIfUOW9uGlg7df.png" alt="" />
          <p>Kiyimlar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/bMNspthi79FTau9LHHWwROUmJxcI9s67zBhAw7hPxONfHOpouAPSz1XBmg0Q.png" alt="" />
          <p>Kitoblar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/adqzcIrhpWBLdv7My9MHp7DblhCNpQg2KkpsoeRQZdvKe5OR01jO2oXkKgcn.png" alt="" />
          <p>Mebel</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/H36mM5MMLXtOjeOWB3Qm4FVp2ePbeijqE7VciIfLRsU5E4AAoPmf9avFASAg.png" alt="" />
          <p>Geymerlar uchun</p>
        </div>
      </div>

      <div className="mavsumiy">
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/DOHX11eYPGJbBgi5KpKogEI16SDBd7BGb2oYHkatS0qWlqlUXQR7RfFq8IkN.png" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/papmi5rckat4tVD7VcgdgKPS3GRSCuTxHGNtCJqgdrt2tyzp4HW4ZnsqmFk1.jpg" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/WVsz5SUie4Gp7bYuCLCTSJzXSIt8I1M11eU8893bRr3RPvPC59hMSbTjhoud.jpg" alt="" />
      </div>

      < CardList />
      < CardList />
      < CardList />

    </div>
  )
}

export default Main;

