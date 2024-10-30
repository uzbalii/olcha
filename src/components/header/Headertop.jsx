import React from "react";
import "./Headertop.css";
import { Link } from "react-router-dom";

function Headertop() {
  return (
    <div className="header_top">
      <nav>
        <Link to={"/"} className="bg-white">
          0% Muddatli to'lov
        </Link>
        <Link to={"/"} className="header_top_btn">
          Chegirmalar
        </Link>
        <Link to={"/"} className="bg-white">
          Yutuqli o'yinlar
        </Link>
        <Link className="header_top_map_btn" to={"/"}>
          Sayt xaritasi
        </Link>
      </nav>

      <div className="header_top_right">
        <a className="header_top_phone" href="tel:+998(71)2022021">
          +998 (71) 202 2021
        </a>
        <button className="header_top_btn sale ">olcha da soting</button>
        <div className="lang">
          <Link to={"/"}>Ўзб</Link>
          <Link className="active" to={"/"}>
            O'z
          </Link>
          <Link to={"/"}>Рус</Link>
        </div>
      </div>
    </div>
  );
}

export default Headertop;
