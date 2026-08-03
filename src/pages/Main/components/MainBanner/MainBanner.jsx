import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import banner01 from '../../../../assets/images/main/main_banner01.png'
import banner02 from '../../../../assets/images/main/main_banner02.png'
import banner03 from '../../../../assets/images/main/main_banner03.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './MainBanner.scss'

const mainBanners = [
  {
    image: banner01,
    alt: '설레는 여행 특가모음! 국내·해외 인기 여행을 특별한 가격으로!'
  },
  {
    image: banner02,
    alt: '지금이 여행 타이밍! 항공+호텔+투어 한 번에 예약하고 더 알뜰하게 떠나요'
  },
  {
    image: banner03,
    alt: '힐링이 필요한 순간, 바다로 떠나요 푸른 바다와 함께하는 완벽한 휴식'
  }
]

const MainBanner = () => {
  return (
    <section className="mainBanner">
      <h2 className="blind">메인배너</h2>
      
      <div className="banner">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.bannerSwiperBtn .btnPrev',
            nextEl: '.bannerSwiperBtn .btnNext'
          }}
          pagination={{
            clickable: true
          }}
          slidesPerView={1}
          spaceBetween={20}
          loop
          breakpoints={{
            590: {
              slidesPerView: 'auto'
            },
            1025: {
              slidesPerView: 2,
              spaceBetween: 28
            }
          }}
        >
          { mainBanners.map(({ image, alt }, index) => (
            <SwiperSlide key={index}>
              <Link to=".">
                <img src={image} alt={alt} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiperBtn bannerSwiperBtn">
          <button type="button" className="btnPrev">이전</button>
          <button type="button" className="btnNext">다음</button>
        </div>
      </div>
    </section>
  )
}

export default MainBanner
