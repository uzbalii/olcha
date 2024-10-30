import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Headertop from "./Headertop";
import { FaBars } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";
import { BiBarChart } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { useTypewriter } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["Televiroz", "Smartfonlar", "Kompyuterlar", "Televizorlar"],
    loop: 0,
  });
  return (
    <>
      <Headertop />
      <header>
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>

        <button className="katalogBtn">
          <FaBars /> Katalog
        </button>

        <div className="search_bar">
          <input type="text" placeholder={text} />
          <button>
            <IoSearchSharp />
          </button>
        </div>

        <div className="header_links">
          <Link to="/compare">
            <BiBarChart />
            Taqqoslash
          </Link>
          <Link to="/heart">
            <FaRegHeart />
            Sevimlilar
          </Link>
          <Link to="/korzina">
            <PiShoppingCartSimpleBold />
            Savatcha
          </Link>
          <button>
            <LuUser2 /> Kirish
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
