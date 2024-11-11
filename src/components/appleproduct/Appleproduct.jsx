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
        <img src={image} alt="" />
        <div className="noutbook_item">
          <div className="noutbook_item_left"><img src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-05-20/N6u7M5ch87s5PkARnrTiwVeEo87y5hoxmsuCIBhlP2yAJr7QQ1Huse3gPffx.jpg" alt="" /> </div>
          <div className="noutbook_item_right">
            <h3>Magic Keyboard Russian 12.9-inch 2021 Oq</h3>
            <b>5 864 725 so'm</b>
            <p>687 000 so'm x 12 oyga Muddatli tolov</p>
          </div>
        </div>
      </div>

        <div className="apple_item_bottom">
          <div className="airpods_item">
          <img src="https://olcha.uz/image/220x220/products/2021-10-28/besprovodnye-naushniki-apple-airpods-3-26384-0.jpeg" alt="" />
            <IoMdHeartEmpty className='heart_icon' />
            <BiBarChart className='chart_icon' />
          <h3>Беспроводные наушники Apple Airpods 3</h3>
            <p>
            2 250 368 сум</p>
          <a href="">264 000 сум / 12 мес
</a>
          </div>

        <div className="airpods_item">
          <img src="https://olcha.uz/image/220x220/products/2022-06-14/besprovodnye-naushniki-apple-airpods-max-white-58621-0.jpeg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Беспроводные наушники Apple AirPods Max White</h3>
          <p>
            7 358 131 сум</p>
          <a href="">264 000 сум / 12 мес
          </a>
        </div>

        <div className="airpods_item">
          <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-05-24/PICza77c6oC9pwoP6duGBCRYUtZIAYbfSOyPStAJE82gGRCIzkOpevYlTjOB.jpg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Беспроводные calonka HomePod Mini White</h3>
          <p>
            2 250 368 сум</p>
          <a href="">264 000 сум / 12 мес
          </a>
        </div>

        <div className="airpods_item">
          <img src="https://olcha.uz/image/220x220/products/2022-11-14/apple-watch-series-8-45mm-silver-168582-0.jpeg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Apple watch Series 8 45mm Silver</h3>
          <p>
            2 250 368 сум</p>
          <a href="">264 000 сум / 12 мес
          </a>
        </div>

        </div>

    </div>
  )
}

export default Appleproduct