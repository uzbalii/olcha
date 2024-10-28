import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Headertop from "./Headertop";

function Header() {
  return (
    <div className="header">

      <Headertop/>
    <header>
      <Link className="logo" to="/">
        <h2>Olcha</h2>
      </Link>
      <nav>
        <Link to="/compare">Taqqoslash</Link>
        <Link to="/heart">Sevimlilar</Link>
        <Link to="/korzina">Savatcha</Link>
        <Link to="/login">Kirish</Link>
      </nav>
    </header>
    </div>
  );
}

export default Header;
