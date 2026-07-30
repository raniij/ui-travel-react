import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import banner01 from '../../../assets/images/main/main_banner01.png'
import banner02 from '../../../assets/images/main/main_banner02.png'
import banner03 from '../../../assets/images/main/main_banner03.png'
import banner04 from '../../../assets/images/main/main_banner04.png'

import 'swiper/css'
import 'swiper/css/navigation'
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
  },
  {
    image: banner04,
    alt: '야경이 아름다운 도시 BEST! 낮보다 빛나는 도시의 밤을 만나보세요'
  },
]

const MainBanner = () => {
  return (
    <section className="mainBanner">
      <h2 className="blind">메인배너</h2>
      
      <div className="banner">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.btnPrev',
            nextEl: '.btnNext'
          }}
          slidesPerView={2}
          spaceBetween={28}
          loop
        >
          { mainBanners.map(({ image, alt }, index) => (
            <SwiperSlide key={index}>
              <Link to=".">
                <img src={image} alt={alt} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button type="button" className="btnPrev">이전</button>
        <button type="button" className="btnNext">다음</button>
      </div>
    </section>
  )
}

export default MainBanner
