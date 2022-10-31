// 보그 PJ 공통JS - common.js

// 제이쿼리 구역 길게쓰기도 있음
// $(document).ready(function(){})

$(()=>{ ///////////// jQB //////////////////////

    console.log("로딩완료");

    ////// 스크롤 이벤트 구역
    // 이벤트명: scroll
    // 이벤트 대상: window
    const topA = $("#top");

    // 스크롤위치변수
    let scTop;
    // 마지막 스크롤 위치값
    let lastSc = 0;

    $(window).scroll(function(){
        // 스크롤 위치값
        scTop = $(this).scrollTop();
        //scrollTop() 메서드 - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스on 적용
        // 기준위치는 스크롤위치 100px 이상

        if(scTop >= 100) { // 100px 이상
            topA.addClass("on");

            // 스크롤 방향에 따라 .up 추가 제거
            if(scTop > lastSc) {
                topA.removeClass("up");
            } else {
                topA.addClass("up");
                // console.log("윗방향", lastSc);
            }


        } else { // 100px 미만
            topA.removeClass("on up");
            // removeClass(클래스명) - 클래스지우기
            // 띄어쓰기로 다른 클래스도 함께 지우기 가능
        } //////// if ///////////

        ///////////////////////////
        // 스크롤 방향 알아내기 ////

        // 마지막 위치 업데이트 필수
        lastSc = scTop;



    }); /////////// scroll ///////////



}); ///////////// jQB //////////////////////