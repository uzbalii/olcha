import React from "react";
import { seasonalData } from "../../data/ProductData";
import "./Seasonal.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Seasonal() {
  return (
    <div className="seasonal">
      {seasonalData?.map((item, index) => (
        <div key={index} className="product_item">
          {item.discount > 0 && <p className="product_discount">17 %</p>}
          <button className="product_heart">
            <IoMdHeartEmpty />
          </button>
          <button className="product_chart">
            <IoStatsChart />
          </button>

          <figure>
            <img src={item.img[0]} alt="" />
          </figure>

          <p className="product_title">{item.name}</p>

          <p
            style={{ color: item.discount > 0 ? "#f00" : "#000" }}
            className="product_price"
          >
            {item.price.toLocaleString()} so'm
          </p>
          {item.discount > 0 && (
            <p className="product_price_old">
              {item.price.toLocaleString()} so'm
            </p>
          )}
          <p className="product_price_credit">
            {Math.round(item.price * 0.17).toLocaleString()} so'm x 12 oy
          </p>
          <div className="product_item_action">
            <button>
              <PiShoppingCartSimpleBold />
            </button>
            <button>Muddatli to'lov</button>
          </div>
        </div>
      ))}
      <img
        className="left_img"
        src="https://olcha.uz/image/272x444/homePage/cdn_1/2024-10-21/l8PPzsrJpBNpjXe7ddr8p4tzDwYpSzz2rywiHn29ljRm2CqXBCvHZU52kdly.jpg"
        alt=""
      />
    </div>
  );
}

export default Seasonal;
