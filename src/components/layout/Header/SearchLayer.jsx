import { Link } from 'react-router-dom'

import './SearchLayer.scss'

const recentKeywords = [
  "제주도",
  "힐튼호텔",
  "곤지암",
  "여수",
  "강릉",
  "사이판",
  "괌",
  "이탈리아 패키지 여행",
  "국내리조트",
]

const popularKeywords = [
  {
    keyword: "괌",
    state: {
      text: "상승",
      type: "up",
    },
    rank: 3,
  },
  {
    keyword: "여수",
    state: {
      text: "변동없음",
      type: "keep",
    },
    rank: null,
  },
  {
    keyword: "다낭",
    state: {
      text: "하락",
      type: "down",
    },
    rank: 1,
  },
  {
    keyword: "이탈리아 패키지 여행",
    state: {
      text: "상승",
      type: "up",
    },
    rank: 2,
  },
  {
    keyword: "강릉",
    state: {
      text: "NEW",
      type: "new",
    },
    rank: null,
  },
  {
    keyword: "스위스",
    state: {
      text: "상승",
      type: "up",
    },
    rank: 1,
  },
  {
    keyword: "사이판",
    state: {
      text: "상승",
      type: "up",
    },
    rank: 3,
  },
  {
    keyword: "곤지암",
    state: {
      text: "하락",
      type: "down",
    },
    rank: 2,
  },
  {
    keyword: "오크밸리",
    state: {
      text: "상승",
      type: "up",
    },
    rank: 4,
  },
  {
    keyword: "안동",
    state: {
      text: "하락",
      type: "down",
    },
    rank: 3,
  },
]

const SearchLayer = () => {
  return (
    <div className="searchLayer">
      <div className="searchKeywordWrap">
        {/* 최근 검색어 */}
        <div className="searchKeyword">
          <div className="keywordHead">
            <h2>최근검색어</h2>
            <button 
              type="button"
              className="btnRemoveAll"
            >
              전체삭제
            </button>
          </div>
          <ul className="recentList">
            {
              recentKeywords.map(item => (
                <li key={item}>
                  <Link to="." className="keyword">{item}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        {/* 인기 검색어 */}
        <div className="searchKeyword">
          <div className="keywordHead">
            <h2>인기검색어</h2>
            <span className="baseDate">2022.08.30 14:00 기준</span>
          </div>
          <ol className="popularList">
            {
              popularKeywords.map(item => (
                <li key={item.keyword}>
                  <Link to="." className="keyword">{item.keyword}</Link>
                  <span className="state">
                    <i className={`rank ${item.state.type}`}>
                      {item.state.text}
                    </i>
                    {item.rank !== null && (
                      <span>{item.rank}</span>
                    )}
                  </span>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default SearchLayer