import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import thumbImage from '../../../../assets/images/main/travelDiscovery01.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import './TravelDiscovery.scss'

const travelDiscoverys = [
  {
    id: 1,
    image: thumbImage,
    title: "타이베이로 떠나야 할\n다섯가지 이유"
  },
  {
    id: 2,
    image: thumbImage,
    title: "7월에 꼭 가야 할\n당일치기 근교여행지",
    isDarkText: true
  },
  {
    id: 3,
    image: thumbImage,
    title: "2026 일본 여행 기념품,\n전 000은 꼭 사와요!"
  },
  {
    id: 4,
    image: thumbImage,
    title: "8월에 꼭 가야 할\n당일치기 근교여행지",
    isDarkText: true
  },
  {
    id: 5,
    image: thumbImage,
    title: "9월에 꼭 가야 할\n당일치기 근교여행지"
  }
]

const TravelDiscovery = () => {
  return (
    <section className="travelDiscovery">
      <div className="sectionTitleWrap">
        <h2 className="sectionTitle">여행의 발견</h2>
      </div>

      <div className="travelDiscoveryList">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.discoverySwiperBtn .btnPrev',
            nextEl: '.discoverySwiperBtn .btnNext'
          }}
          slidesPerView="auto"
          spaceBetween={12}
          breakpoints={{
            1025: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }}
        >
          {travelDiscoverys.map(({ id, image, title, isDarkText }) => (
            <SwiperSlide key={id}>
              <Link to=".">
                <div className="itemImage">
                  <img src={image} alt="" />
                </div>
                <p className={`itemTitle${isDarkText ? ' black' : ''}`}>
                  {title}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiperBtn discoverySwiperBtn">
          <button type="button" className="btnPrev">이전</button>
          <button type="button" className="btnNext">다음</button>
        </div>
      </div>
    </section>
  )
}

export default TravelDiscovery
