import React from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
 
  incrementQuantity,
  decrementQuantity,
} from "../../context/cartSlice";

import { accessoryData } from "../../data/ProductData";

function Cart() {
  const dispatch = useDispatch();
  const accessoryData = useSelector((s) => s.cart);
  let totalPrice = accessoryData.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className="Cart">
      {!accessoryData?.length ? (
        <div className="empty_block">
          <img src="https://olcha.uz/_nuxt/cart.DYGF4swC.png" alt="" />
          <h1>Savatchangiz bo'sh</h1>
          <p>Lekin siz uni har doim to'ldirishingiz mumkin</p>
          <button>
            <Link to="/">Asosiy sahifaga</Link>
          </button>
        </div>

      ) : (

        <div className="cart_left">
          <div className="cart_products">
            <h1>Savatchada 2ta mahsulot bor</h1>
            {accessoryData?.map((item, index) => (
              <div className="cart_item" key={index}>
                <div className="cart_item_img">
                  <img src={item.images} alt={""} />
                </div>
                <div className="cart_item_info">
                  <p>{item.name}</p>
                  <p className='Brend'>{item.brend}</p>
                  <span>
                  <Link to="/heart">
                    <button>Sevimlilarga qo'shish</button>
                    </Link>

                    <Link>
                    <button>o'chirish</button>
                    </Link>
                    </span>
                </div>
                <div className="cart_item_action">

                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    <FaMinus />
                  </button >

                  <p>{item.quantity}</p>

                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    <FaPlus />
                  </button>

                </div>
                <div className="cart_item_price">

                <p>{item.price}</p>
                </div>
              </div>


            ))}
          </div>
          <div className="cart_payments">
            <h1>Sizning ma'lumotlaringiz</h1>
            <form>
              <div className="input_box">
                <label htmlFor="">Ism va Familiya</label>
                <input type="text" />
              </div>

              <div className="input_box">
                <label className='input_phone' htmlFor="">Telefon raqam</label>
                <span> <button>+998</button> <input className='last_input' type="number" /></span>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="cart_total">

      </div>

    </div>
  )
}

export default Cart;