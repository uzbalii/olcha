import React from 'react'
import "./Aksesuars.css"
import { IoMdHeartEmpty } from "react-icons/io";
import { BiBarChart } from "react-icons/bi";



function Aksesuars() {
  return (
    <div className="aksesuars">
        <div className="left">
              <img src="https://olcha.uz/image/original/homePage/cdn_1/2024-06-21/yotr1FzMpoaa6nQ4DPpcXboD8v063uViSWkEgVw5Hmvgd2tFfAhGOHGwlvSj.jpg" alt="" />
        </div>
        <div className="right">
            <div className="aksesuar_item">
                  <img src="https://olcha.uz/image/220x220/products/fJUCbjhIo15C5srsC1cWoTcWqPcpSCjtHodfP6MSA7NT8DDE24EsJZRo6Naf.jpg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Ноутбук MSI Raider GE77HX 12UHS-082US i9-</h3>
          <p>
            55 732 496 сум</p>
          <a href="">6 527 000 сум / 12 мес.</a>
            </div>

        <div className="aksesuar_item">
          <img src="https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-13/pQIvLk5PqlF9p4Wcobtd6rNjLTBo67eltmac4OoVMgVKa2X13vSXN9cITv77.jpg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Apple iPhone 15 Pro Max 256GB Natural titanium</h3>
          <p>
            55 732 496 сум</p>
          <a href="">6 527 000 сум / 12 мес.</a>
        </div>


        <div className="aksesuar_item">
          <img src="https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-07/tqGChmLwX0hSVWVgVE9w74jCJgOuFRwgDQ0FXQLMA1mWoJhRi1zG9iOlaKtG.JPG" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Наушники Sony WH-CH720N Black</h3>
          <p>
            55 732 496 сум</p>
          <a href="">6 527 000 сум / 12 мес.</a>
        </div>


        <div className="aksesuar_item">
          <img src="https://olcha.uz/image/220x220/products/VyPgqUqD96sheF0OHYCf3rk14n9rMUyBrMaG9zFreCRAepW4k78ktVxIbd8f.jpg" alt="" />
          <IoMdHeartEmpty className='heart_icon' />
          <BiBarChart className='chart_icon' />
          <h3>Ноутбук MSI Raider GE77HX 12UHS-082US i9-</h3>
          <p>
            55 732 496 сум</p>
          <a href="">6 527 000 сум / 12 мес.</a>
        </div>


      
        </div>
    </div>
  )
}

export default Aksesuars