import React from "react";
import "./Products.css";
import { popularData } from "../../data/ProductData";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCompare, removeFromCompare } from "../../context/compareSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";

function Products() {
  const heartStore = useSelector((s) => s.heart);
  const compareStore = useSelector((s) => s.compare);
  const dispatch = useDispatch();
  console.log("compare >>>", compareStore);

  return (
    <div className="products">
      {popularData?.map((item, index) => (
        <div key={item.id || index} className="product_item">
          {item.discount > 0 && <p className="product_discount">17 %</p>}
          {heartStore.some((a) => a.id === item.id) ? (
            <button
              onClick={() => dispatch(removeFromHeart(item))}
              className="product_heart"
            >
              <FaHeart style={{ color: "#f00" }} />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToHeart(item))}
              className="product_heart"
            >
              <IoMdHeartEmpty />
            </button>
          )}
          {compareStore.some((b) => b.id === item.id) ? (
            <button
              onClick={() => dispatch(removeFromCompare(item))}
              className="product_chart"
            >
              <IoStatsChart style={{ color: "crimson" }} />
            </button>
          ) : (
            <button
              onClick={() => dispatch(addToCompare(item))}
              className="product_chart"
            >
              <IoStatsChart />
            </button>
          )}

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
    </div>
  );
}

export default Products;
