import { Link } from 'react-router-dom'

import './UiPreview.scss'

const UiPreview = () => {
  return (
    <main className="uiPreview">
      <section className="introArea">
        <p className="introAreaText">REACT UI PORTFOLIO</p>
        <h1 className="pageTitle">Travel Website</h1>
        <p className="pageDescription">
          React와 SCSS를 기반으로 재사용 가능한 컴포넌트를 설계하고,<br />
          유지보수성을 고려한 반응형 여행 사이트 UI를 구현한 프로젝트입니다.
        </p>
      </section>

      <section className="project">
        <h2 className="projectTitle">Travel React</h2>
        <p className="projectDescription">메인, 상품 목록, 상품 상세 화면을 구현합니다.</p>
        <strong className="projectLinkTitle">UI Preview</strong>

        <ul className="projectList">
          <li className="projectListItem">
            <Link to="/travel/main">메인</Link>
          </li>

          <li className="projectListItem">
            <Link to="/travel/list">상품 목록</Link>
          </li>

          <li className="projectListItem">
            <Link to="/travel/detail">상품 상세</Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default UiPreview