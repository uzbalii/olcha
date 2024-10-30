import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Headertop from "./Headertop"; import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { BiBarChart } from 'react-icons/bi';



function Header() {
  return (
    <div className="header">

      <Headertop />
      <header>
        <div className="nav1">
          <Link className="logo" to="/"><h2>Olcha</h2></Link>

          <button className="btn5" ><FaBars /> Katalog</button>

          <div>

          <input type="text" placeholder="Katalog bo'yicha qidirish" />
            <div className="search">
          <IoSearchSharp  />
          </div>
          </div>
        </div>

        <nav>
          <Link to="/compare"><BiBarChart className="icons" />Taqqoslash</Link>
          <Link to="/heart"><FaRegHeart className="icons" />Sevimlilar</Link>
          <Link to="/korzina"><PiShoppingCartSimpleBold className="icons" />Savatcha</Link>
          <Link to="/login"><LuUser2 className="icons" /> Kirish</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
