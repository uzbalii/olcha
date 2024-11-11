import React from 'react'
import "./News.css"
import { Link } from 'react-router-dom'
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";


function News() {
    return (
        <div className="news">
            <div className="news_top">
                <h2>Новости</h2>
                <Link to={"/"} >Barchasini ko'rish<IoChevronForwardOutline /></Link>
            </div>

            <div className="news_items">
                <div className="news_item">
                    <img src="https://olcha.uz/uploads/312x184/blogs/images/geDqpXRucjyEbv7KGZuKa83bKUrrQQFBoDrimn3T.png" alt="" />
                    <div className='date' >
                        <p>10.09.2024 14:25:33</p>
                        <div className='eye' ><FaRegEye />77</div>
                    </div>
                    <h3>ReTimer 3 - Endi hech kim <br /> uyqusizlikdan aziyat chekmaydi!</h3>
                    <span>ReTimer 3 - Endi hech kimuyqusizlikni <br /> Zamonaviy texnologiyalar hayotimizga <br /> juda ko‘p qulayliklar olib keldi</span>
                </div>

                <div className="news_item">
                    <img src="https://olcha.uz/uploads/312x184/blogs/images/auCBXkAqFMWHDdJqHKUC7zjyrFEbwvyASrwCemUf.png" alt="" />
                    <div className='date' >
                        <p>10.09.2024 14:25:33</p>
                        <div className='eye' ><FaRegEye />77</div>
                    </div>
                    <h3>2024 yilda noutbukni qanday tanlash mumkin
                    </h3>
                    <span>ReTimer 3 - Endi hech kimuyqusizlikni <br /> Zamonaviy texnologiyalar hayotimizga <br /> juda ko‘p qulayliklar olib keldi</span>
                </div>

                <div className="news_item">
                    <img src="https://olcha.uz/uploads/312x184/blogs/images/9XUOi2mw52nWGwQ7ZRnWROruSxPjkKFT6Nu6jo5B.png" alt="" />
                    <div className='date' >
                        <p>10.09.2024 14:25:33</p>
                        <div className='eye' ><FaRegEye />77</div>
                    </div>
                    <h3>Parij 2024: O‘zbekiston sportchilari oltin medallarga erishishdi</h3>
                    <span>ReTimer 3 - Endi hech kimuyqusizlikni <br /> Zamonaviy texnologiyalar hayotimizga <br /> juda ko‘p qulayliklar olib keldi</span>
                </div>

                <div className="news_item">
                    <img src="https://olcha.uz/uploads/312x184/blogs/images/eEhDbNLH39LxBILyIEvmaDOTgrgHJWSoJMorpwkC.gif" alt="" />
                    <div className='date' >
                        <p>10.09.2024 14:25:33</p>
                        <div className='eye' ><FaRegEye />77</div>
                    </div>
                    <h3>iPhone 16 taqdimotini kutayotganlar soni ko‘pchilikni tashkil qilmoqda!</h3>
                    <span>ReTimer 3 - Endi hech kimuyqusizlikni <br /> Zamonaviy texnologiyalar hayotimizga <br /> juda ko‘p qulayliklar olib keldi</span>
                </div>
            </div>

            <div className="about_cherry">
                <h3>Olcha marketpleysi -  xarid qilish uchun qulay gipermarket</h3>
                <p>Har qanday insoning hayoti va qulay sharoitlarini zamonaviy texnologiyalarsiz tasavvur qilib bo'lmaydi. Ish va shaxsiy savollar - smartfonda, sevimli filmlar, seriallar va teleko'rsatuvlar - televizor, tozalash, yig’ishtirish – changyutgich, pishirish, tayyorlash - pechka, pech va ko'plab kichikroq, ammo undan kam bo'lmagan foydali qurilmalar va mahsulotlar. Bundan tashqari, texnologiyalar rivojlanmoqda va shuning uchun jihozlar muntazam yangilanishlarni talab qiladi, men yangi modellarni sinab, tekshirib ko'rishni xohlayman lekin mavjud qurilmalar va texnikalarning kuchi yetarli emas. Shu nuqtai nazardan, maishiy texnika sotib olish uchun xavfsiz va qulay joy, marketpleys bo'lishi foydalidir. Agar siz hali o'zingiz uchun mahsulot - tovar topa olmagan bo'lsangiz, biz sizni web-saytimizda bir necha daqiqa qolishga taklif qilamiz. Sizni ishontirib aytamizki, vaqtingizni behuda sarf qilmaganligingizga ishonch hosil qilasiz.</p>
            </div>


        </div>
    )
}

export default News 