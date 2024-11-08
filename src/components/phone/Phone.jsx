import React from 'react';
import "./Phone.css";
import { phoneData } from "../../data/ProductData"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function phone() {
  return (
    <div className="phone">
      {phoneData?.map((item, index) => (  
        <div key={item.id || index} className="product_item_phone">
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
            style={{ color: item.discount > 0 ? "#f00" : "000" }}
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
    
    </div>
  )
}

export default phone;