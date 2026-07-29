import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'

import banner01 from '../../../assets/images/common/banner01.png'
import banner02 from '../../../assets/images/common/banner02.png'
import banner03 from '../../../assets/images/common/banner03.png'

import 'swiper/css'
import 'swiper/css/effect-fade'
import './PcHeader.scss'

const banners = [
  {
    image: banner01,
    alt: "국내여행 특가 모음"
  },
  {
    image: banner02,
    alt: "해외여행 초특가 기획전"
  },
  {
    image: banner03,
    alt: "해외여행 인기 BEST"
  },
]

const HeaderBanner = () => {
  return (
    <div className="headerBanner">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map(({ image, alt }, index) => (
          <SwiperSlide key={index}>
            <Link to="/">
              <img src={image} alt={alt} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeaderBanner