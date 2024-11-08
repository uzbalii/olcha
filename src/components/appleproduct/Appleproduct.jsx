import React from 'react'
import "./Appleproduct.css"
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiBarChart } from 'react-icons/bi'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import image from "./image.png"

function Appleproduct() {
  return (
    <div className="appleproduct">
      <div className="apple_item_left">
        <h1>Apple texnikasi</h1>
        <div className="mouse_item">
          <img src="https://olcha.uz/image/220x220/products/oeOsArYZhSFQeIFhNzxJpcrKS6IIfgYx8UAor7Qk51Y9xjkUY3t8zJdu29ve.jpg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Apple Magic mouse 3</h3>
          <p>
            1 389 486 so'm</p>
          <a href="">163 000 so'm / 12 oy.</a>
          <div className="product_item_action">
            <button>
              <PiShoppingCartSimpleBold />
            </button>
            <button>Muddatli to'lov</button>
          </div>
        </div>
        <div className="watch_item">
          <div>
            <img src="https://olcha.uz/image/220x220/products/2022-12-20/smart-chasy-apple-watch-ultra-183720-0.jpeg" alt="" />
          </div>
          <div className='watch_text'>
            <h3>Aqlli soat Apple Watch Ultra</h3>
            <p>11 917 066 so'm</p>
            <a href="">1 396 000 so'm / 12 oy.</a>
          </div>
        </div>
      </div>

      <div className="apple_item_right">
        <video src="https://youtu.be/eDqfg_LexCQ" controls ></video>
      </div>

    </div>
  )
}

export default Appleproduct