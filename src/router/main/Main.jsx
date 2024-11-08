import React from "react";
import "./Main.css";
import Banner from "../../components/banner/Banner";
import Catalogs from "../../components/catalogs/Catalogs";
import Products from "../../components/products/Products";
import Seasonal from "../seasonal/Seasonal";
import Sparepart from "../../components/sparepart/Sparepart";
import Brends from "../../components/brends/Brends";
import Aksesuars from "../../components/aksesuars/Aksesuars";
import Appleproduct from "../../components/appleproduct/Appleproduct";

function Main() {
  return(

    <div className="main">
      <Banner />
      <Catalogs />
      <div className="seasonal">
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/DOHX11eYPGJbBgi5KpKogEI16SDBd7BGb2oYHkatS0qWlqlUXQR7RfFq8IkN.png" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/papmi5rckat4tVD7VcgdgKPS3GRSCuTxHGNtCJqgdrt2tyzp4HW4ZnsqmFk1.jpg" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/WVsz5SUie4Gp7bYuCLCTSJzXSIt8I1M11eU8893bRr3RPvPC59hMSbTjhoud.jpg" alt="" />
      </div>
      <Products />
      <Seasonal/>
      <Sparepart/>
      <Brends />
      <Aksesuars />
      <Appleproduct/>
    </div>
    )
}

export default Main;
