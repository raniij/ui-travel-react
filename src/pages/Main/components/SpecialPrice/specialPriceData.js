import thumb01 from '../../../../assets/images/main/thumb01.jpg'
import thumb02 from '../../../../assets/images/main/thumb02.jpg'
import thumb03 from '../../../../assets/images/main/thumb03.jpg'
import thumb04 from '../../../../assets/images/main/thumb04.jpg'
import thumb05 from '../../../../assets/images/main/thumb05.jpg'
import thumb06 from '../../../../assets/images/main/thumb06.jpg'

export const specialPriceTabs = [
  { 
    id: 'lastMinute',
    name: '망설이면품절',
    products: [
      {
        id: 1,
        image: thumb01,
        category: '태국여행',
        benefit: '$30 상당 공항→호텔 편도 픽업 포함',
        title: '[방콕/자유여행 5일] 원하는 호텔 선택',
        price: 529000
      },
      {
        id: 2,
        image: thumb02,
        category: '일본여행',
        benefit: '★해외호텔 이달의쿠폰 적용가능★',
        title: '스위소텔 난카이 오사카 호텔스위소텔 난카이 오사카 호텔스위소텔 난카이 오사카 호텔스위소텔 난카이 오사카 호텔',
        price: 187000
      },
      {
        id: 3,
        image: thumb03,
        category: '부산여행',
        benefit: '[맥퀸즈 풀 1회 제공] 디럭스 마운틴뷰',
        title: '[맥퀸즈 풀 1회 제공] 디럭스 마운틴뷰',
        price: 9359000
      },
      {
        id: 4,
        image: thumb04,
        category: '부산여행',
        benefit: '디럭스 트윈 → 패밀리 트윈',
        title: '라마다 앙코르 바이 윈덤 부산 해운대',
        price: 80000
      },
      {
        id: 5,
        image: thumb05,
        category: 'MD추천',
        benefit: '전일정5성급호텔/바르셀로나+마드리드 자유시간',
        title: '스페인 포르투갈 9일',
        price: 2999000
      },
      {
        id: 6,
        image: thumb06,
        category: '근교여행',
        benefit: '주니어 스위트 (12시체크아웃, 16평)',
        title: '어반스테이 여수웅천',
        price: 79900
      }
    ]
  },
  { 
    id: 'package',
    name: '패키지',
    products: [
      {
        id: 7,
        image: thumb03,
        category: '제주여행',
        benefit: '[오션뷰 객실] 제주 신라호텔 2박',
        title: '조식 포함 + 수영장 무료 이용',
        price: 359000
      },
      {
        id: 8,
        image: thumb06,
        category: '베트남여행',
        benefit: '다낭 자유여행 5일 왕복항공 포함',
        title: '4성급 호텔 + 공항 픽업 제공',
        price: 499000
      },
      {
        id: 9,
        image: thumb04,
        category: '일본여행',
        benefit: '텐진역 도보 5분 호텔 특가',
        title: '조식 포함 + 레이트 체크아웃',
        price: 129000
      },
      {
        id: 10,
        image: thumb03,
        category: '유럽여행',
        benefit: '[대한항공] 파리·스위스 핵심일주',
        title: '전 일정 4성급 호텔 & 노옵션',
        price: 3490000
      }
    ]
  },
  { 
    id: 'domesticHotel',
    name: '국내숙소',
    products: [
      {
        id: 11,
        image: thumb02,
        category: '강릉여행',
        benefit: '세인트존스 호텔 오션뷰',
        title: '객실 업그레이드 + 레이트 체크아웃',
        price: 169000
      },
      {
        id: 12,
        image: thumb02,
        category: '태국여행',
        benefit: '방콕·파타야 패키지 5일',
        title: '마사지 포함 + 특급호텔 숙박',
        price: 699000
      },
      {
        id: 13,
        image: thumb02,
        category: '호캉스',
        benefit: '롯데호텔 서울 시그니엘 패키지',
        title: '라운지 이용 + 조식 2인 제공',
        price: 489000
      },
      {
        id: 14,
        image: thumb02,
        category: '대만여행',
        benefit: '타이베이 자유여행 왕복항공 특가',
        title: '시먼딩 호텔 숙박 포함',
        price: 379000
      },
      {
        id: 15,
        image: thumb02,
        category: '가족여행',
        benefit: '[키즈룸] 소노벨 비발디파크',
        title: '워터파크 이용권 + 조식 포함',
        price: 219000
      },
      {
        id: 16,
        image: thumb02,
        category: '몰디브',
        benefit: '럭셔리 워터빌라 허니문',
        title: '올인클루시브 리조트 4박 6일',
        price: 5890000
      }
    ]
  },
  { 
    id: 'overseasHotel',
    name: '해외숙소',
    products: [
      {
        id: 17,
        image: thumb05,
        category: '태국여행',
        benefit: '방콕·파타야 패키지 5일',
        title: '마사지 포함 + 특급호텔 숙박',
        price: 189000
      },
      {
        id: 18,
        image: thumb05,
        category: '싱가포르',
        benefit: '마리나베이 자유여행 4일',
        title: '왕복항공 + 시내호텔 포함',
        price: 899000
      },
      {
        id: 19,
        image: thumb05,
        category: '일본여행',
        benefit: '텐진역 도보 5분 호텔 특가',
        title: '조식 포함 + 레이트 체크아웃',
        price: 459000
      },
      {
        id: 20,
        image: thumb05,
        category: '괌여행',
        benefit: 'PIC 괌 올인클루시브',
        title: '워터파크 + 전 일정 식사 포함',
        price: 1399000
      },
      {
        id: 21,
        image: thumb05,
        category: '스페인',
        benefit: '바르셀로나·마드리드 9일',
        title: '5성급 호텔 + 자유일정 포함',
        price: 2899000
      }
    ]
  }
]
