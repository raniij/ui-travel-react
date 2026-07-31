import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import banner01 from '../../../assets/images/main/ticket_banner01.png'
import banner02 from '../../../assets/images/main/ticket_banner02.png'

import 'swiper/css'
import './UserTicket.scss'

const userTickets = [
  {
    type: 'ticket',
    start: {
      code: 'ICN',
      place: '인천',
      date: '26.7.1(토)'
    },
    arrive: {
      code: 'MAD',
      place: '마드리드',
      date: '26.7.7(금)'
    },
    flight: {
      way: '직항',
      dDay: 'D-12'
    }
  },
  {
    type: 'banner',
    image: banner01,
    alt: '얼리버드 15% 할인'
  },
  {
    type: 'banner',
    image: banner02,
    alt: '국내·해외 항공권 특가로 떠나세요!'
  }
]

const UserTicket = () => {
  return (
    <section className="userTicket">
      <h2 className="blind">예매티켓 & 배너</h2>

      <div className="ticketWrap">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          breakpoints={{
            1025: {
              spaceBetween: 0,
              enabled: false
            }
          }}
        >
          {userTickets.map(({ type, start, arrive, flight, image, alt }, index) => (
            type === 'ticket' ? (
              <SwiperSlide className="myTicket" key={index}>
                <span className="ticketDday">{flight.dDay}</span>
                <Link to=".">
                  <div className="start">
                    <p className="airCode">{start.code}</p>
                    <p className="airPlace">{start.place}</p>
                    <p className="airInfo">
                      <b>출발</b>
                      <span>{start.date}</span>
                    </p>
                  </div>
                  <div className="flight oneWay">
                    <span className="airFlight">{flight.way}</span>
                  </div>
                  <div className="arrive">
                    <p className="airCode">{arrive.code}</p>
                    <p className="airPlace">{arrive.place}</p>
                    <p className="airInfo">
                      <b>도착</b>
                      <span>{arrive.date}</span>
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={index}>
                <Link to=".">
                  <img src={image} alt={alt} />
                </Link>
              </SwiperSlide>
            )
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default UserTicket
