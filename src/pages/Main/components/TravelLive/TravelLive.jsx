import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import thumbImage from '../../../../assets/images/main/travelLive01.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import './TravelLive.scss'

const travelLives = [
  { 
    id: 1,
    image: thumbImage,
    title: '영상으로 보고 특가로 체크인!',
    subText: '여행TV 신라스테이 지역편 최대 86% 할인'
  },
  { 
    id: 2,
    image: thumbImage,
    title: '지금 떠나기 좋은 제주 호캉스',
    subText: '오션뷰 객실과 조식이 포함된 제주 숙소 특가'
  },
  { 
    id: 3,
    image: thumbImage,
    title: '방콕 여행, 영상으로 먼저 만나봐요',
    subText: '인기 호텔과 야시장 코스를 한 번에 확인'
  },
  { 
    id: 4,
    image: thumbImage,
    title: '가족과 함께 떠나는 여름휴가',
    subText: '워터파크와 키즈룸이 포함된 리조트 추천'
  },
  { 
    id: 5,
    image: thumbImage,
    title: '유럽 감성 가득한 스페인 여행',
    subText: '바르셀로나와 마드리드 핵심 명소 미리보기'
  }
]

const TravelLive = () => {
  return (
    <section className="travelLive">
      <div className="sectionTitleWrap">
        <h2 className="sectionTitle">여행 LIVE</h2>
      </div>

      <div className="travelLiveList">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.liveSwiperBtn .btnPrev',
            nextEl: '.liveSwiperBtn .btnNext'
          }}
          slidesPerView="auto"
          spaceBetween={12}
          breakpoints={{
            1025: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        >
          {travelLives.map(({ id, image, title, subText }) => (
            <SwiperSlide key={id}>
              <Link to=".">
                <div className="itemImage">
                  <img src={image} alt="" />
                </div>
                <div className="itemInfo">
                  <p className="title">{title}</p>
                  <p className="subText">{subText}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiperBtn liveSwiperBtn">
          <button type="button" className="btnPrev">이전</button>
          <button type="button" className="btnNext">다음</button>
        </div>
      </div>
    </section>
  )
}

export default TravelLive
