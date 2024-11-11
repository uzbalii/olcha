import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./router/main/Main";
import Cart from "./router/cart/Cart"
import Login from "./router/login/Login";
import Heart from "./router/heart/Heart";
import Compare from "./router/compare/Compare";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
}

export default App;
