import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import banner01 from '../../../../assets/images/main/ad_banner01.png'
import banner02 from '../../../../assets/images/main/ad_banner02.png'
import banner03 from '../../../../assets/images/main/ad_banner03.png'
import banner04 from '../../../../assets/images/main/ad_banner04.png'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './AdBanner.scss'

const adBanners = [
  {
    image: banner01,
    alt: '전 세계 렌터카 최저가 예약'
  },
  {
    image: banner02,
    alt: '전 세계 와이파이 최저가 예약'
  },
  {
    image: banner03,
    alt: '전 세계 여행 최저가 예약'
  },
  {
    image: banner04,
    alt: '전 세계 여행 최저가 예약'
  }
]

const AdBanner = () => {
  return (
    <section className="adBanner">
      <h2 className="blind">광고배너</h2>

      <div className="banner">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.adBannerSwiperBtn .btnPrev',
            nextEl: '.adBannerSwiperBtn .btnNext'
          }}
          pagination={{
            type: 'fraction'
          }}
          slidesPerView={1}
          loop
          breakpoints={{
            1025: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {adBanners.map(({ image, alt }, index) => (
            <SwiperSlide key={index}>
              <Link to=".">
                <img src={image} alt={alt} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiperBtn adBannerSwiperBtn">
          <button type="button" className="btnPrev">이전</button>
          <button type="button" className="btnNext">다음</button>
        </div>
      </div>
    </section>
  )
}

export default AdBanner
