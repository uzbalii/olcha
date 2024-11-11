import React, { useRef } from "react";
import "./Favourites.css";
import emptyFavouritesImg from "../../assets/sevimlilar/sevimlilarEmptyImg.png";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiBarChart } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { removeFromHeart } from "../../context/heartSlice";
import { useReactToPrint } from "react-to-print";

function Favourites() {
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  const favouritesData = useSelector((s) => s.heart);

  const printWindow = useReactToPrint({ contentRef });

  return (
    <div ref={contentRef} className="favourites">
      <h2>
        Sevimli mahsulotlar <button onClick={printWindow}>Print</button>{" "}
      </h2>
      {!favouritesData?.length ? (
        <div className="favourites-container">
          <img src={emptyFavouritesImg} alt="" />
          <h2>Sevimli mahsulotlar yo'q</h2>
        </div>
      ) : (
        <div className="cards-container">
          {favouritesData?.map((product, index) => (
            <Link key={index} className="favourite-card">
              <div className="favourite-card-top">
                {product.discount && (
                  <span className="discount">-{product.discount}%</span>
                )}
                <figure>
                  <img src={product.img[0]} alt="" />
                </figure>
                <div className="favourites-actions">
                  <button onClick={() => dispatch(removeFromHeart(product))}>
                    <RiDeleteBinLine />
                  </button>
                  <button
                    onClick={() => {
                      console.log("addToCompare");
                    }}
                  >
                    <BiBarChart />
                  </button>
                </div>
              </div>
              <div className="favourite-card-bottom">
                <p className="favourite-product-title">{product.name}</p>
                <div className="price-discount">
                  <div className="old-price">
                    <b style={{ color: product.discount ? "#da002b" : "#111" }}>
                      {product.discount
                        ? Math.floor(
                            product.price -
                              (product.price / 100) * product.discount
                          ).toLocaleString()
                        : product.price.toLocaleString()}
                      so'm
                    </b>
                    {product.discount && (
                      <s>
                        {product.price.toLocaleString()}
                        so'm
                      </s>
                    )}
                  </div>
                  <span className="yearly-payment">
                    {Math.floor(
                      ((product.price / 100) * 40 + product.price) / 12
                    ).toLocaleString()}
                    so'm x 12 oy
                  </span>
                </div>
                <div className="sale-buttons-favourites">
                  <button>
                    <IoCartOutline />
                  </button>
                  <button>Mudattli to'lov</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourites;
