import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { promotionProducts } from './SesesePromotionData'

import 'swiper/css'
import 'swiper/css/navigation'
import './SesesePromotion.scss'

const SesesePromotion = () => {
  return (
    <section className="sesesePromotion">
      <div className="sectionTitleWrap">
        <h2 className="sectionTitle">쎄쎄쎄 할인특가</h2>
        <p className="sectionDesc">쎈 가격에 쎈 할인을 더한 쎈특가!</p>
      </div>

      <div className="sesesePromotionList">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={12}
          navigation={{
            prevEl: '.promotionSwiperBtn .btnPrev',
            nextEl: '.promotionSwiperBtn .btnNext'
          }}
          breakpoints={{
            1025: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {promotionProducts.map(product => (
            <SwiperSlide key={product.id}>
              <Link to=".">
                <div className="itemImage">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="itemInfo">
                  <div className="itemInfoInner">
                    <span className="badge">{product.category}</span>
                    <p className="title">{product.title}</p>
                    <div className="priceWrap">
                      <div className="price">
                        <em>{product.price.toLocaleString()}</em>
                        <span className="currency">원~</span>
                      </div>
                      {product.priceOrigin && (
                        <div className="priceOrigin">
                          <em>{product.priceOrigin.toLocaleString()}</em>
                          <span className="currency">원</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiperBtn promotionSwiperBtn">
          <button type="button" className="btnPrev">이전</button>
          <button type="button" className="btnNext">다음</button>
        </div>
      </div>

      <div className="categoryMoreBtnWrap">
        <Link to="." className="categoryMoreBtn">
          <span>특가상품 더보기</span>
        </Link>
      </div>
    </section>
  )
}

export default SesesePromotion
