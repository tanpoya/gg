// 모듈 연습 메인 JS - main.js

// 로딩구역없이 => script 태그에 defer 속성사용

// 모듈화 JS import하기
import {mTitle as mTit, sTitle as Stit, personInfo as pInfo} from "./textData.js";
// import message from "./msgFormat.js";
// 별칭사용
import {message as msg} from "./msgFormat.js";
/* 
    import 형식:
    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈화JS에서 export를 해줘야함
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭 해야함(없으면 안나옴)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다
    (http://......) Live Server로 열기때문에 볼 수 있음

    [ import 시 변수명 변경하기 ]
    import {전달변수 as 별칭} from 파일경로;
    예) import {mymymy as m} from 파일경로
    -> 별칭 사용이유: 단순변경요구, 같은이름변수 피하기
*/








/* 
    [ 모듈화를 위한 구성 ]
    1. 데이터를 처리하기 위한 JS
    -> textData.js
    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
*/

// 1. 타이틀 출력박스
const tpart = document.querySelector(".tpart");
// 2. 내용 출력박스
const demo = document.querySelector("#demo");

// 3. 내용넣기
tpart.innerHTML = `
    <h2>${mTitle}</h2>
    <h3>${sTitle}</h3>
`;

// 4. 내용넣기
demo.innerHTML = msg("현석", 40);
demo.innerHTML += msg("톰행크스", 55);
demo.innerHTML += msg("졸리", 48);

// 다중 데이터(배열) 이용하기
personInfo.forEach((val)=>{
    demo.innerHTML += msg(val[0], val[1])
});