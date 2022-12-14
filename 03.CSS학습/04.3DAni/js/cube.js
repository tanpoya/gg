//  큐브애니 JS - cube.js

window.addEventListener("DOMContentLoaded", function() {
    // 호출확인
    console.log("로딩완료");

    // 클릭이벤트 대상: .btns button
    const btns = this.document.querySelector(".btns button.a1");
    const btns2 = this.document.querySelector(".btns button.a2");

    
    // 클릭시 기능구현함수
    const aniFn = function(){
        // 1. 호출확인
        console.log("ㄱ");

        // 2. 대상선정: .cube -> cube변수

        // 3. 변경내용: 변경대상요소에 클랙스 넣기/빼기
        cube.classList.toggle("on");

        // 4. 큐브 클래스 on여부에 따라 버튼 글자 변경하기
        // console.log(cube.classList.contains("on"));
        // 비?집:놀이동산 -> 삼항연산자
        cube.classList.contains("on") ? btns.innerText = "멈춰" : btns.innerText = "빙빙";

        /* 
            [ 클래스 컨트롤 객체 ]
            classList
            -> 하위 메서드
            1. add(클래스명) -> 클래스 추가
            2. remove(클래스명) -> 클래스 제거
            3. toggle(클래서명) -> 클래스 유무에 따라 추가/제거
            4. contains(클래스명) -> 지정한 클래스가 있으면 true
        */
    };

    // 변경대상: .cube
    const cube = document.querySelector(".cube");
    
    // 대상에 클릭설정하기
    btns.onclick = aniFn;
    // 전달값이 없다면 소괄호 생략한 함수명만 이벤트속성에
    // 할당하면 바로 실행되지 않고 이벤트가 발생할때 실행된다

    const af2 = function(){
        console.log("앞");
    };

    btns2.onclick = af2;
    
});