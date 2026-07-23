import { Link } from 'react-router-dom'
import logo from '../../../assets/images/common/logo.png'
import './MobileHeader.scss'

const MobileHeader = () => {
  return (
    <header className="mobileHeader">
      <div className="mobileHeaderInner">
        <h1 className="mobileLogo">
          <Link to="/travel/main">
            <img src={logo} alt="travel" />
          </Link>
        </h1>

        <div className="mobileUtil">
          <button type="button" className="mobileSearchBtn">
            검색
          </button>

          <button type="button" className="mobileMenuBtn">
            전체 메뉴
          </button>
        </div>
      </div>
    </header>
  )
}

export default MobileHeader