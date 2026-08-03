import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { specialPriceTabs } from './specialPriceData'

import 'swiper/css'
import 'swiper/css/navigation'
import './SpecialPrice.scss'

const SpecialPrice = () => {
  const [activeTab, setActiveTab] = useState('lastMinute')
  const swiperRef = useRef(null)

  const currentTab = 
    specialPriceTabs.find(tab => tab.id === activeTab) 
      ?? specialPriceTabs[0]

  const handleTabOpen = id => {
    setActiveTab(id)
    swiperRef.current?.slideTo(0)
  }

  return (
    <section className="specialPrice">
      <h2 className="sectionTitle">투어특가</h2>

      <div className="tab" role="tablist">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          breakpoints={{
            1025: {
              enabled: false
            }
          }}
        >
          {specialPriceTabs.map(({ id, name }) => (
            <SwiperSlide key={id}>
              <button 
                type="button"
                className="tabBtn"
                aria-selected={activeTab === id}
                onClick={() => handleTabOpen(id)}
                role="tab"
              >
                {name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="specialPriceList">
        <div 
          className="tabContent"
          role="tabpanel"
        >
          <Swiper
            modules={[Navigation]}
            onSwiper={swiper => {
              swiperRef.current = swiper
            }}
            slidesPerView="auto"
            spaceBetween={12}
            navigation={{
              prevEl: '.tabSwiperBtn .btnPrev',
              nextEl: '.tabSwiperBtn .btnNext'
            }}
            breakpoints={{
              1025: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }}
          >
            {currentTab.products.map(product => (
              <SwiperSlide key={product.id}>
                <Link to=".">
                  <div className="itemImage">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="itemInfo">
                    <span className="badge">{product.category}</span>
                    <p className="benefit">{product.benefit}</p>
                    <p className="title">{product.title}</p>
                    <div className="price">
                      <em>{product.price.toLocaleString()}</em>
                      <span className="currency">원~</span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiperBtn tabSwiperBtn">
            <button type="button" className="btnPrev">이전</button>
            <button type="button" className="btnNext">다음</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialPrice
