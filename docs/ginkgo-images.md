# 홍천 은행나무숲 사진 점검 · 2026-09-11

## 적용 위치

| 위치 | 변경 |
| --- | --- |
| 메인 `/` 주변 여행지 | 바위산 → card 사진, 상세페이지 연결 |
| `/travel` 목록·모바일 | 바위산 → list 사진, 내부 상세페이지 연결 |
| `/guide` 계절별 가을 카드 | 설악산 → path 사진, 실제 출처 표시 |
| `/stories` 계절별 가을 카드 | 바위산 → list 사진, 출처·상세 링크 추가 |
| `/travel/ginkgo-forest` | 새 상세페이지: hero + card + path 서로 다른 3장 |
| 상세페이지 OG·Twitter | hero 사진 |
| 추천 코스·관련 여행 데이터 | 텍스트 중심으로 기존 사진 없음; 확인되지 않은 개방 일정 추가하지 않음 |

`app`, `data` 전체에서 은행나무, ginkgo, gingko, guide-autumn 참조 점검. 기존 guide-autumn.jpg는 삭제하지 않았고 은행나무숲 관련 참조는 제거함. 삼봉·오대산 이미지 및 전역 헤더·푸터·예약 링크 유지.

## 출처와 이용 조건

공급: 한국관광공사 / 한국관광콘텐츠랩. 촬영자: 한국관광공사 김지호. 장소: 강원도 홍천군 내면, 제목: 홍천 은행나무숲. 촬영: 2019-10.

원본 상세페이지: https://api.visitkorea.or.kr/#/hubTourSearchDetail

검색 페이지: https://api.visitkorea.or.kr/#/hubTourSearch (홍천 은행나무숲 검색 후 아래 사진번호로 구분). 상세 URL은 SPA 상태를 사용하므로 직접 링크만으로 사진이 재선택되지 않을 수 있음.

각 사진 상세에서 **공공누리 제1유형 — 출처 표시 / 상업·비상업적 이용 가능 / 변경·2차 저작물 작성 가능**을 확인함. 모든 사용 화면에 `ⓒ한국관광공사 김지호 · 공공누리 제1유형` 표기. 공개 상세화면의 720×480 이미지를 저장하고 WebP 품질 90으로 압축함. 색상 수정·워터마크 제거·고해상도 확대 없음. 로그인 필요한 고화질 다운로드는 사용하지 않음.

| 로컬 파일 (`public/images/`) | 사진번호 | 공개 이미지 URL |
| --- | --- | --- |
| hongcheon-ginkgo-card.webp | 1v004a | https://conlab.visitkorea.or.kr/api/depot/public/depot-flow/query/download-image/5d4b9605-38cf-4852-9299-0fd8ce6fc020/it11 |
| hongcheon-ginkgo-list.webp | 1v002a | https://conlab.visitkorea.or.kr/api/depot/public/depot-flow/query/download-image/5fe28707-3538-48f8-b4c7-0ec3302fe67b/it11 |
| hongcheon-ginkgo-hero.webp | 1v003a | https://conlab.visitkorea.or.kr/api/depot/public/depot-flow/query/download-image/20c5984c-7df3-412d-af9d-5637dfdf98a9/it11 |
| hongcheon-ginkgo-path.webp | 1v006a | https://conlab.visitkorea.or.kr/api/depot/public/depot-flow/query/download-image/d7249fcb-9e8a-45c1-8cca-ba5f2163f6dc/it11 |

화질 한계: 공개본은 720px이므로 상세 히어로는 PC에서도 약 700px 폭의 분할 구성으로 표시. Retina 원본급 선명도가 필요한 경우 권한 있는 계정으로 고화질 원본 확보 후 교체할 수 있음.

관광 운영정보는 홍천군 문화관광포털을 연결하며 현재 연도 개방일·주차 조건을 임의로 단정하지 않음:
https://www.hongcheon.go.kr/tour/selectTourCntntsWebView.do?ctgry=27&key=1947&pageIndex=1&pageUnit=1000&searchCnd=all&searchShowAt=Y&tourNo=2125

