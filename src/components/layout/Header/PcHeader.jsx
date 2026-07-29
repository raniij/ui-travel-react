import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderBanner from './HeaderBanner'
import SearchLayer from './SearchLayer'

import logo from '../../../assets/images/common/logo.png'

import './PcHeader.scss'

const utilMenus = [
  "로그인",
  "회원가입",
  "마이페이지",
  "예약확인/취소",
]

const navigationMenus = [
  "항공",
  "국내숙소",
  "해외숙소",
  "투어·티켓",
  "해외패키지",
  "국내/제주도",
  "허니문",
  "골프",
]

const seasonMenus = [
  "여행혜택존",
  "1등특가",
  "쎈항공딜",
]

const PcHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const searchRef = useRef(null)
  const searchInputRef = useRef(null)

  const handleSearchOpen = () => {
    setIsSearchOpen(true)
  }

  // 검색창 클릭시 input 포커스
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isSearchOpen])

  // 검색 레이어 닫기
  useEffect(() => {
    const handleClickOutside = e => {
      if (!searchRef.current) return

      if (!searchRef.current.contains(e.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <header className="travelHeader pcHeader">
      <div className="headerWrapper">
        <div className="headerInner">
          <h1 className="headerLogo">
            <Link 
              to="/travel/main"
              className="logoBtn"
            >
              <img src={logo} alt="travel" />
            </Link>
          </h1>

          <div 
            ref={searchRef}            
            className={`headerSearch ${isSearchOpen ? 'active' : ''}`}
          >
            <div 
              className="searchForm"
              onClick={handleSearchOpen}
            >
              <input 
                ref={searchInputRef}
                type="search"
                className="searchInput" 
                placeholder="여행할 도시나 상품을 검색해 보세요."
              />
              <button type="button" className="searchBtn">검색</button>

              {!isSearchOpen && (
                <span className="searchAD">그랜드 하얏트 제주 룸 업그레이드!</span>
              )}
            </div>

            {isSearchOpen && <SearchLayer />}
          </div>

          <div className="headerUtil">
            <ul className="utilMenu">
              {utilMenus.map(item => (
                <li key={item}><Link to=".">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <nav className="navigationWrapper">
          <div className="navigationInner">
            <div className="navigation">
              <ul className="navigationList">
                {navigationMenus.map(item => (
                  <li key={item}><Link to=".">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div className="seasonMenu">
              {seasonMenus.map(item => (
                <Link key={item} to=".">{item}</Link>
              ))}
            </div>

            <div className="bannerAD">
              <HeaderBanner />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default PcHeader