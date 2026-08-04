import { Link } from 'react-router-dom'

import iconAxe from '../../../../assets/images/main/icon_axe.svg'
import iconCoupon from '../../../../assets/images/main/icon_coupon.svg'
import iconAir from '../../../../assets/images/main/icon_d_air.svg'
import iconHoneymoon from '../../../../assets/images/main/icon_honeymoon.svg'
import iconGolf from '../../../../assets/images/main/icon_golf.svg'

import './StrategyMenu.scss'

const strategyMenus = [
  { name: '금도끼딜', image: iconAxe },
  { name: '할인쿠폰', image: iconCoupon },
  { name: '할인항공', image: iconAir },
  { name: '허니문', image: iconHoneymoon },
  { name: '골프', image: iconGolf }
]

const StrategyMenu = () => {
  return (
    <section className="strategyMenu">
      <h2 className="blind">전략메뉴</h2>

      <ul className="strategyMenuList">
        {strategyMenus.map(({ name, image }) => (
          <li key={name}>
            <Link to=".">
              <span className="icon">
                <img src={image} alt="" />
              </span>
              <span className="title">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default StrategyMenu
