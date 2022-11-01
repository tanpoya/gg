// 보그 PJ 공통JS - common.js

// 제이쿼리 구역 길게쓰기도 있음
// $(document).ready(function(){})

$(()=>{ ///////////// jQB //////////////////////

    console.log("로딩완료");

    ////// 스크롤 이벤트 구역
    // 이벤트명: scroll
    // 이벤트 대상: window
    const topA = $("#top");

    // 변경대상: .tbtn
    const tbtn = $(".tbtn");

    // 스크롤위치변수
    let scTop;
    // 마지막 스크롤 위치값
    let lastSc = 0;

    ////////////////////////////////////
    ////// 스크롤 이벤트 함수 ///////////
    $(window).scroll(function(){
        // 스크롤 위치값
        scTop = $(this).scrollTop();
        //scrollTop() 메서드 - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스on 적용
        // 기준위치는 스크롤위치 100px 이상

        if(scTop >= 100) { // 100px 이상
            topA.addClass("on");

            // 스크롤 방향에 따라 숨겼다보이는 top값 변경
            if(scTop > lastSc) {
                // #top의 높이값(동적으로 높이값 설정)
                let temp = topA.innerHeight();
                // 스크롤 아랫방향
                topA./* removeClass("up") */css({top:-temp+"px"});
                // removeClass("up")
                console.log(temp);
                // height() - 패딩이 빠진 순수높이값
                // innerHiehgt() - 패딩포함 내부높이값
            } else {
                topA.css({top:"0"});
                // addClass("up").css
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
        /////////////////////////

        // 2. TOP버튼 보이기/숨기기
        if(scTop >= 300) {
            tbtn.addClass("on");
        } else {
            tbtn.removeClass("on");
        }



    }); /////////// scroll ///////////

    //////// TOP버튼 클릭 설정 //////////
    tbtn.click(()=>{
        // 스크롤 최상단으로 애니메이션 스크롤 이동
        // 전체 스크롤 이동의 대상은
        // -> html, body 두 최상위 요소를
        // 대상으로 한다 그랴여 모든 브라우저에서 공통으로 작동함
        $("html, body").animate({
            scrollTop:"0"
        }, 800, "easeOutCirc");
        // scrollTop 속성은 제이쿼리 전용
        // 세로스크롤 위치값을 셋팅할 수 있다
        // 참고) 가로스크롤은 scrollLeft
    });



}); ///////////// jQB //////////////////////