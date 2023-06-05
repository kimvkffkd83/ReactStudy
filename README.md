# Description
## 프로젝트 개요
- 과자 검색, 과자 추가, 과자 추천 등 크게 3가지의 기능을 제공하는 프로젝트
- 리액트 학습용 간단하게 제작중
- 과자 검색 기능
  - 과자 이름으로 검색
  - 검색 시 자동완성 기능 추가 예정
  - 추후 태그로 검색하는 기능 추가할 예정(태그 예시 : 초콜렛, 사탕, 오리온, 감자, 감자칩 등)
- 과자 입력 기능
  - 검색 후 없는 과자일 경우 유저가 추가할 수 있는 기능
  - 즉시 추가되는 것은 아니고 검수 테이블로 넘어가서 관리자 검수 후 등록
- 과자 추천 기능
  - 클릭수 기반 혹은 선호도 기반으로 
  - 하루 단위로 끊어서 제공할까 생각중
- 회원 가입 추가 고려중 
  - 과자 추가한 내역을 수정, 삭제하기 위해서는 회원 내역이 필요함 

## 프로젝트 실행
- npm start(프론트엔드)
- cd server > node server.js(백엔드)
- 시작 URL : http://localhost:4001/
- 프록시 서버(express) : http://localhost:4000/

## 프로젝트 구성
- 프론트 엔드 : react + typescript
- 백 엔드 : express


## DB 형태
### TABLE
1. snack
CREATE TABLE snack (
snk_no INT NOT NULL AUTO_INCREMENT,
snk_name VARCHAR(20) NOT NULL,
snk_potion INT,
snk_calorie INT,
snk_company VARCHAR(20),
PRIMARY KEY(snk_no)
);
// snk_potion : 1회 제공량(g)
// snk_calorie : 1회 제공량(g) 기준 칼로리
// 같은 이름이지만 중량이 다른 과자를 어떻게 추가해야 할 지 고민 중

# Prerequisite
- react : ^18.2.0
- express : ^4.18.2
- cors : ^2.8.5
- mysql : ^2.18.1
- axios : ^1.4.0
- babel : 6.23.0
- babel-loade : ^9.1.2
- bootstrap : ^5.2.3
# Files
- src/img에 임시 로고대용인 000donut.jpg 이미지가 들어있음 (추후 로고 제작 시 수정 예정)

# Usage

# Reference
- 검색기능 구현
  - [리액트 검색 기능 구현하기](https://velog.io/@94lfnv/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
