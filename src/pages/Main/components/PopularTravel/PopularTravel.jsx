import { Link } from 'react-router-dom'

import iconTaipei from '../../../../assets/images/main/icon_taipei.jpg'
import iconSaipan from '../../../../assets/images/main/icon_saipan.jpg'
import iconBangkok from '../../../../assets/images/main/icon_bangkok.jpg'
import iconNewyork from '../../../../assets/images/main/icon_newyork.jpg'
import iconHawaii from '../../../../assets/images/main/icon_hawaii.jpg'
import iconBusan from '../../../../assets/images/main/icon_busan.jpg'
import iconJeju from '../../../../assets/images/main/icon_jeju.jpg'

import './PopularTravel.scss'

const popularTravels = [
  { name: '타이페이', image: iconTaipei },
  { name: '사이판', image: iconSaipan },
  { name: '방콕', image: iconBangkok },
  { name: '뉴욕', image: iconNewyork },
  { name: '하와이', image: iconHawaii },
  { name: '부산', image: iconBusan },
  { name: '제주', image: iconJeju },
  { name: '더보기', isMore: true }
]

const PopularTravel = () => {
  return (
    <section className="popularTravel">
      <h2 className="sectionTitle">인기 여행지</h2>

      <ul className="popularTravelList">
        {popularTravels.map(({ name, image, isMore }) => (
          <li key={name} className={isMore ? 'more' : ''}>
            <Link to=".">
              <span className="icon">
                {image && (
                  <img src={image} alt="" />
                )}
              </span>
              <span className="title">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PopularTravel
