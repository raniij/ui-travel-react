import { useState } from 'react'
import { Link } from 'react-router-dom'

import './MobileFooter.scss'

const moFooterMenus = [
  { text: '이용약관' },
  { text: '개인정보 처리 방침', isBold: true },
  { text: '위치기반서비스 이용약관' },
  { text: '분쟁해결기준' },
  { text: '여행약관' },
  { text: '여행자보험 가입안내' },
  { text: '공지사항' },
  { text: '로그아웃' },
]

const MobileFooter = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false)

  const handleInfoToggle = () => {
    setIsInfoOpen(!isInfoOpen)
  }

  return (
    <footer className="mobileFooter">
      <div className="footerInner">
        <ul className="menuList">
          {moFooterMenus.slice(0, 3).map(item => (
            <li key={item.text}>
              <Link
                to="."
                className={item.isBold ? 'bold' : ''}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="menuList">
          {moFooterMenus.slice(3).map(item => (
            <li key={item.text}>
              <Link
                to="."
                className={item.isBold ? 'bold' : ''}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footerInfo">
          <button 
            type="button"
            className="btnCompany"
            onClick={handleInfoToggle}
            aria-expanded={isInfoOpen}
          >
            <strong>(주)Travel</strong> 사업자정보
          </button>

          {isInfoOpen && (
            <div className="infoContent">
              <p>서울시 강남구 테헤란로 123 Travel빌딩 8층</p>
              <p>호스팅서비스제공자 (주)Travel | 대표이사 홍길동</p>
              <p>사업자등록번호 123-45-67890
                <a href="#none" className="linkText">사업자정보확인</a>
              </p>
              <p>통신판매업신고 2026-서울강남-01234</p>
              <p>관광사업증 등록번호 : 제2026-001호</p>
              <p>투어 1588-1234 | 티켓 1544-5678</p>
              <p>해외항공 02-3456-7890 | 국내항공 02-3456-7891</p>
              <p>이메일 help@travelui.com</p>
            </div>
          )}
        </div>

        <div className="footerNotice">
          <p>(주)Travel은 항공사 및 여행사가 제공하는 일부 여행상품에 대해 통신판매중개자의 지위를 가지며, 해당 상품의 계약, 상품 정보, 거래에 관한 의무와 책임은 판매자에게 있습니다. 항공권 또는 항공권이 포함된 여행상품의 경우 표시되는 상품요금은 예상 유류할증료 및 제세공과금이 포함된 금액이며, 예약 시점, 발권일, 환율 등에 따라 변동될 수 있습니다. (주)Travel은 통신판매중개자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한 상품에 대한 책임은 해당 판매자에게 있습니다.</p>
        </div>
      </div>
    </footer>
  )
}

export default MobileFooter