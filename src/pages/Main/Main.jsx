import Layout from '../../components/layout/Layout'
import CategoryMenu from './components/CategoryMenu/CategoryMenu'
import MainBanner from './components/MainBanner/MainBanner'
import UserTicket from './components/UserTicket/UserTicket'
import SpecialPrice from './components/SpecialPrice/SpecialPrice'
import StrategyMenu from './components/StrategyMenu/StrategyMenu'
import SesesePromotion from './components/SesesePromotion/SesesePromotion'
import AdBanner from './components/AdBanner/AdBanner'
import PopularTravel from './components/PopularTravel/PopularTravel'
import TravelLive from './components/TravelLive/TravelLive'
import UsefulInfo from './components/UsefulInfo/UsefulInfo'
import Notice from './components/Notice/Notice'

import './Main.scss'

const Main = () => {
  return (
    <Layout>
      <main className="travelMain">
        <h2 className="blind">투어 메인</h2>
        {/* 카테고리 메뉴 (모바일) :: categoryMenu */}
        {/* 메인배너 :: mainBanner */}
        {/* 예매티켓 & 배너 :: userTicket */}
        {/* 투어특가 :: specialPrice */}
        {/* 전략메뉴 :: strategyMenu */}
        {/* 쎼쎼쎼 할인특가 :: sesesePromotion */}
        {/* 광고배너 :: adBanner */}
        {/* 인기 여행지 :: popularTravel */}
        {/* 여행 LIVE :: travelLive */}
        {/* 유용한 정보 :: usefulInfo */}
        {/* 공지사항 :: notice */}

        <CategoryMenu />
        <MainBanner />
        <UserTicket />
        <SpecialPrice />
        <StrategyMenu />
        <SesesePromotion />
        <AdBanner />
        <PopularTravel />
        <TravelLive />
        <UsefulInfo />
        <Notice />
      </main>
    </Layout>
  )
}

export default Main
