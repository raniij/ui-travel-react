import { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import iconActivity from '../../../assets/images/main/icon_activity.svg'
import iconAir from '../../../assets/images/main/icon_air.svg'
import iconBenefit from '../../../assets/images/main/icon_benefit.svg'
import iconHotel from '../../../assets/images/main/icon_hotel.svg'
import iconJeju from '../../../assets/images/main/icon_jeju.svg'
import iconMap from '../../../assets/images/main/icon_map.svg'
import iconOverseahotel from '../../../assets/images/main/icon_overseahotel.svg'
import iconPackage from '../../../assets/images/main/icon_package.svg'
import iconTop from '../../../assets/images/main/icon_top.svg'
import iconTrophy from '../../../assets/images/main/icon_trophy.svg'
import iconMore from '../../../assets/images/main/icon_more.svg'

import './CategoryMenu.scss'

const categoryMenus = [
  { text: "항공", icon: iconAir },
  { text: "국내숙소", icon: iconHotel },
  { text: "해외숙소", icon: iconOverseahotel },
  { text: "패키지여행", icon: iconPackage },
  { text: "투어·티켓", icon: iconActivity },
  { text: "TOP여행지", icon: iconTop },
  { text: "여행혜택존", icon: iconBenefit },
  { text: "제주도", icon: iconJeju },
  { text: "1등 특가", icon: iconTrophy },
  { text: "숙박페스타", icon: iconMap },
  { text: "더보기", icon: iconMore, more: true }
]

const CategoryMenu = () => {
  const [isFixed, setIsFixed] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const categoryRef = useRef(null)

  // 스크롤시 카테고리 메뉴 fixed
  useEffect(() => {
    if (!categoryRef.current) return

    const categoryBottom =
      categoryRef.current.offsetTop + categoryRef.current.offsetHeight

    const handleScroll = () => {
      setIsFixed(window.scrollY >= categoryBottom)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // 스크롤 잠금
  useEffect(() => {   
    isOpen 
      ? document.body.classList.add('scrollLock')
      : document.body.classList.remove('scrollLock')

    return () => {
      document.body.classList.remove('scrollLock')
    }
  }, [isOpen])

  return (
    <nav 
      ref={categoryRef}
      className={`categoryMenu${isFixed ? ' fixed' : ''}${isOpen ? ' active' : ''}`}
    >
      <ul>
        {categoryMenus.map(({ text, icon, more }) => (
          <li 
            key={text}
            className={more ? 'more' : ''}
          >
            {more ? (
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
              >
                <span className="menuIcon">
                  <img src={icon} alt="" />
                </span>
                <span className="menuTitle">
                  {text}
                </span>
              </button>
            ) : (
              <Link to=".">
                <span className="menuIcon">
                  <img src={icon} alt="" />
                </span>
                <span className="menuTitle">
                  {text}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="btnClose"
        onClick={() => setIsOpen(false)}
      >
        닫기
      </button>
    </nav>
  )
}

export default CategoryMenu
