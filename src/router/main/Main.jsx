import React from 'react'
import "./Main.css"
import img1 from "./V93XmQz6ogMIJMPe7ryY3edqaQLa8A8lu5Q1aDk28VgP8NLxkRuzAlZjupCN.jpg"
import img2 from "./image.png"
import Product from './Product'

function Main() {
  return (
    <div className="main">
      <div className="img">
        <img src={img1} alt="" />

      <div className="day_product">
        <div>
          <h4>Kun mahsuloti</h4>
          <p>03:54:16</p>
        </div>
        <img src={img2} alt="" />
        <h3>Qo‘lda bug‘lash mashinasi Haley HY- 312</h3>
        <div className='sum'>46 000 so'm / 12 oy.</div>
      </div>
      </div>

      <h1 className='dot'>.....</h1>

      <div className="product_item">
        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png" alt="" />
          <p>Sport Anjomlari</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png" alt="" />
          <p>Gozallik va salomatlik</p>
        </div>


        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/rMtg5ExOxyyExZageLhA2AZ2CfgYYfkzqtZ5butpO8HCG1oFndTZAYFF8V4M.png" alt="" />
          <p>Chet eldan tovarlar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png" alt="" />
          <p>Avto jihozlar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png" alt="" />
          <p>Barcha ofis uy va bog' uchun</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png" alt="" />
          <p>Bolalar uchun o‘yinchoq va mahsulotlar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/kYlDnf1YPCTeu1CukaSt24EaWdr5QpW648eNtpeaFuxiFZLIfUOW9uGlg7df.png" alt="" />
          <p>Kiyim va poyabzallar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/bMNspthi79FTau9LHHWwROUmJxcI9s67zBhAw7hPxONfHOpouAPSz1XBmg0Q.png" alt="" />
          <p>Kitoblar</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/adqzcIrhpWBLdv7My9MHp7DblhCNpQg2KkpsoeRQZdvKe5OR01jO2oXkKgcn.png" alt="" />
          <p>Mebel</p>
        </div>

        <div className="card">
          <img src="https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/H36mM5MMLXtOjeOWB3Qm4FVp2ePbeijqE7VciIfLRsU5E4AAoPmf9avFASAg.png" alt="" />
          <p>Geymerlar uchun</p>
        </div>
      </div>

      <div className="mavsumiy">
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/DOHX11eYPGJbBgi5KpKogEI16SDBd7BGb2oYHkatS0qWlqlUXQR7RfFq8IkN.png" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/papmi5rckat4tVD7VcgdgKPS3GRSCuTxHGNtCJqgdrt2tyzp4HW4ZnsqmFk1.jpg" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/cdn_1/2024-08-30/WVsz5SUie4Gp7bYuCLCTSJzXSIt8I1M11eU8893bRr3RPvPC59hMSbTjhoud.jpg" alt="" />
      </div>

      <Product/>

    </div>
  )
}

export default Main;