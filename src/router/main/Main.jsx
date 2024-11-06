import React from "react";
import "./Main.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Products from "../../components/products/Products";
import Phone from "../../components/phone/Phone";

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
      <Banner />
      <Catalogs />
      <Products />
      <Phone />

    </div>
  );
}

export default Main;
