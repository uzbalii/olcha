import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./router/main/Main";
import Korzina from "./router/korzina/Korzina";
import Login from "./router/login/Login";
import Heart from "./router/heart/Heart";
import Compare from "./router/compare/Compare";

function App() {
  console.log("ok");

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/login" element={<Login />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  );
}

export default App;
