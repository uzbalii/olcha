import React from "react";
import "./Product.css";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const smartfonlar = [
  {
    name: "O‘yin konsoli Sony PlayStation 5",
    price: 7300000,
    images: [
      "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-10-29/ZceOitABHblx8Wp0HBQo1xdGsuOjYeZwWt3T0yiX9HSXUaE834QbZRYjb8Az.jpg",
    ],
  },
  {
    name: "Xiaomi Redmi 14C",
    price: 1935872,
    images: [
      "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-10-29/LDzBeCfxXWQme7AFq4NIjmdttVPUTGLaraNahgbviRrffO73q5EMFRYAZBDg.jpg",
    ],
  },
  {
    name: "Apple iPhone 15 Pro",
    price: 14719817,
    images: [
      "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-10-29/igxSauEdydM2GgnumKjD6WjPFpzBNROgGM1KPuR7KZLaNYhrAeskeMehymWL.jpg",
    ],
  },
  {
    name: "Samsung Galaxy A15 ",
    price: 2289131,
    images: [
      "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-10-29/Ha1rIGIYeJatAssMl3J2BTgRzw39GGILNRFoNAKblo7pmEcXrCKmNHfuNQGt.jpg",
    ],
  },
  {
    name: "Samsung Galaxy A15 ",
    price: 2289131,
    images: [
      "https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2024-10-29/Ha1rIGIYeJatAssMl3J2BTgRzw39GGILNRFoNAKblo7pmEcXrCKmNHfuNQGt.jpg",
    ],
  },
];

const Card = ({ name, price, image }) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={image} alt={name} className="img1" />
        <FaRegHeart className="icon_heart" />
        <BiBarChart className="icon_chart" />
        <h2>{name}</h2>
        <p>{price.toLocaleString()} so‘m</p>
        <div>855 000 som x 12 oy</div>
      </div>
      <div className="btn">
        <PiShoppingCartSimpleBold className="card_icon" />{" "}
        <button className="Olish_Btn">Muddatli tolov</button>
      </div>
    </div>
  );
};


const CardList = () => {
  return (
    <div className="product">
      {smartfonlar.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          price={item.price}
          image={item.images[0]}
        />
      ))}
    </div>
  );
};

export default CardList;
