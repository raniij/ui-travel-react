import { Link } from 'react-router-dom'

import MobileFooter from './MobileFooter'

import './Footer.scss'

const pcFooterMenus = [
  { text: "회사소개" },
  { text: "이용약관" },
  { text: "개인정보처리방침", isBold: true },
  { text: "위치기반서비스 이용약관" },
  { text: "여행약관" },
  { text: "여행자보험 가입내역" },
  { text: "티켓판매안내" },
  { text: "공지사항" },
  { text: "고객센터" },
  { text: "Language" },
]

const Footer = () => {
  return (
    <>
      {/* PC Footer */}
      <footer className="travelFooter pcFooter">
        <div className="footerMenu">
          <ul className="menuList">
            {
              pcFooterMenus.map(item => (
                <li key={item.text}>
                  <Link 
                    to="."
                    className={item.isBold ? 'bold' : ''}
                  >
                    {item.text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="footerInfo">
          <div className="infoCol">
            <h2>(주)Travel</h2>
            <div className="infoContent">
              <p>주소 서울시 강남구 테헤란로 123 Travel빌딩 8층</p>
              <p>사업자등록번호 123-45-67890
                <a href="#none" className="linkText">사업자정보확인</a>
              </p>
              <p>통신판매업신고 2026-서울강남-01234</p>
              <p>관광사업증 등록번호 : 제2026-001호</p>
              <p>호스팅서비스제공자 (주)Travel | 대표이사 홍길동</p>
            </div>
          </div>

          <div className="infoCol">
            <h2>고객센터</h2>
            <div className="infoContent">
              <p>투어 1588-1234 | 티켓 1544-5678</p>
              <p>팩스 02-1234-5678 | 이메일 help@travelui.com</p>
              <p>해외항공 02-3456-7890 | 국내항공 02-3456-7891</p>
              <p><a href="#none" className="linkText">투어 1:1문의</a> | <a href="/" className="linkText">티켓 1:1문의</a></p>
            </div>
          </div>

          <div className="infoCol">
            <h2>전자금융거래 분쟁처리 담당정보</h2>
            <div className="infoContent">
              <p>투어 1588-1234 | 티켓 1544-5678</p>
              <p>팩스 02-1234-5678 | 이메일 help@travelui.com</p>
              <p>개인정보보호책임자 privacy@travelui.com</p>
            </div>
          </div>
        </div>

        <div className="footerNotice">
          <p>(주)Travel은 항공사 및 여행사가 제공하는 일부 여행상품에 대해 통신판매중개자의 지위를 가지며, 해당 상품의 계약 및 책임은 판매자에게 있습니다.</p>
          <p>항공권 또는 여행상품의 가격은 예약 시점 및 공급사의 정책에 따라 변동될 수 있으며, 최종 결제 금액은 예약 단계에서 확인하실 수 있습니다.</p>
          <p>(주)Travel은 통신판매중개자로서 거래 당사자가 아니며, 개별 판매자가 등록한 상품에 대한 책임은 해당 판매자에게 있습니다.</p>
          <p>Copyright © Travel UI Co., Ltd. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Mobile Footer */}
      <MobileFooter />
    </>
  )
}

export default Footer