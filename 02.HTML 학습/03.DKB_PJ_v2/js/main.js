// 도깨비 PJ v2 - 메인 페이지 JS - main.js

window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩완료");

    // 햄버거버튼 클릭시 .top에 .on 추가/제거
    // 전체메뉴 보이기 디자인 구현이 이미 되어있음
    // 대상 .ham, .top
    const ham = document.querySelector(".ham");
    const top = document.querySelector(".top");
    ham.onclick = () => top.classList.toggle("on");

});