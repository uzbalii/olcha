import React from "react";
import "./AddToCompare.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import EmptyImage from "../../assets/compare/compareEmpty.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { removeFromCompare } from "../../context/compareSlice";
import { removeFromHeart, addToHeart } from "../../context/heartSlice";
import { FaHeart } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";

function Compare() {
  const dispatch = useDispatch();
  const compareData = useSelector((s) => s.compare);
  const heartStore = useSelector((s) => s.heart);

  return (
    <div className="add-to-compare">
      <div className="compare-title">
        <h2>Tovarlarni solishtirish</h2>
      </div>
      {compareData.length ? (
        <div className="property-and-products">
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={5}
            spaceBetween={32}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="property-swiper"
          >
            <div className="compare-products-container">
              {compareData?.map((product, index) => (
                <SwiperSlide className=".compare-card">
                  <Link key={index} className="compare-card">
                    <div className="compare-card-top">
                      {product.discount && (
                        <span className="discount">-{product?.discount}%</span>
                      )}
                      <figure>
                        <img src={product.img[0]} alt="" />
                      </figure>
                      <div className="compare-actions">
                        {heartStore.some((a) => a.id === product.id) ? (
                          <button
                            onClick={() => dispatch(removeFromHeart(product))}
                          >
                            <FaHeart style={{ color: "#f00" }} />
                          </button>
                        ) : (
                          <button onClick={() => dispatch(addToHeart(product))}>
                            <IoMdHeartEmpty />
                          </button>
                        )}
                        <button
                          onClick={() => dispatch(removeFromCompare(product))}
                        >
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                    <div className="compare-card-bottom">
                      <p className="compare-product-title">{product.name}</p>
                      <div className="price-discount">
                        <div className="old-price">
                          <b
                            style={{
                              color: product.discount ? "#da002b" : "#111",
                            }}
                          >
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
                      <div className="sale-buttons-compare">
                        <button>
                          <IoCartOutline />
                        </button>
                        <button>Mudattli to'lov</button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="properties">
            <h2>Xususiyatlari</h2>
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={5}
            spaceBetween={32}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="property-cover"
          >
            {compareData.map((p, i) => (
              <SwiperSlide>
                <div key={i} className="properties_container">
                  <div className="property-item">salom</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="empty-compare">
          <img src={EmptyImage} alt="surat yuklanmadi " />
          <h3>Afsuski, bunday mahsulot hozirda mavjud emas.</h3>
          <p>
            Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi
            mumkin
          </p>
          <Link to={"/"} className="move-to-home-page">
            Asosiy sahifaga
          </Link>
        </div>
      )}
    </div>
  );
}

export default Compare;
