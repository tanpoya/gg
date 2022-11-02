// 쇼핑몰 배너 JS - 03.페이드효과 //

/******************************************** 
 * 
    [ 페이드 효과 슬라이드 기능정의 ]
    -> 슬라이드 순번에 대한 전역변수를 사용한다!

    1. 오른쪽 버튼클릭시 다음 순번슬라이드에
    클래스 "on"을 줘서 opacity:1, z-index:1
    로 보이며 맨위로 설정해준다!(트랜지션적용)
    ->나머지 li는 모두 "on"을 지워서 초기화!

    2. 왼쪽버튼은 이전순번이 나오며 위와 동일

    3. 끝번호에 가서는 처음은 마지막으로 
    마지막은 처음으로 슬라이드가 다시 반복된다.

    4. 블릿은 현재 슬라이드와 일치된 순번표시

********************************************/

$(() => {
    // 1. 호출확인
    console.log("로딩완료!");

    // 2. 변경대상: #slide li
    // 2-1. 슬라이드 li : #slide li
    const slide = $("#slide li");
    // 2-2. 블릿 li : .indic li
    const indic = $(".indic li");

    // 3. 변수셋팅:
    // 3-1. 순번변수: 슬라이드순번 + 블릿순번
    let sno = 0; // 첫순번은 0
    // 3-2. 광클금지변수: 0 - 허용, 1 - 불허용
    let prot = 0;

    // 4. 이벤트 대싱: .abtn (버튼 2개)
    $(".abtn").click(function () {
        // 0. 광클금지
        if (prot) return;
        prot = 1; // 잠금
        setTimeout(() => {
            prot = 0; // 해제
        }, 600); ///// 타임아웃 /////
        ////////////////////////////

        // 자동넘김 지우기 함수호출
        clearAuto();

        // 1. 오른쪽버튼 여부확인
        // is(선택자) -> 선택자인지 여부(true/false)
        let isR = $(this).is(".ab2");
        console.log("오른쪽버튼이니", isR);

        // 2. 분기하기
        // 2-1. 오른쪽일때
        if (isR) {
            // 순번증가
            sno++;
            // 한계값 체크(처음으로 돌림)
            if (sno === slide.length) sno = 0;
        } else {
            /////////// if ////////////
            // 순번감소
            sno--;
            // 한계값 체크(마지막으로 돌림)
            if (sno === -1) sno = slide.length - 1;
        }

        // 3. 해당순번(sno) 클래스(on)넣기
        // 클래스넣기 + 나머지 다른형제 li는 on제거
        slide.eq(sno).addClass("on").siblings().removeClass("on");

        // 4. 블릿 해당순번(sno) 클래스(on)넣기
        // + 나머지 다른형제 li는 on제거
        indic.eq(sno).addClass("on").siblings().removeClass("on");
    }); ///////// click ///////////

    /********************************
        자동넘기기 기능구현
    ********************************/

    // 인터발용변수
    let autoI;
    // 타임아웃용 변수
    let autoT;

    // 자동넘기기
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변슈) 해야함

    /* 
        함수명: slideAuto
        기능: 자동슬라이드
    
    */
    function slideAuto() {
        autoI = setInterval(() => {

            // 순번증가
            sno++;
            // 한계값 체크(처음으로 돌림)
            if (sno === slide.length) sno = 0;

            // 3. 해당순번(sno) 클래스(on)넣기
            // 클래스넣기 + 나머지 다른형제 li는 on제거
            slide.eq(sno).addClass("on").siblings().removeClass("on");

            // 4. 블릿 해당순번(sno) 클래스(on)넣기
            // + 나머지 다른형제 li는 on제거
            indic.eq(sno).addClass("on").siblings().removeClass("on");
        }, 3500);
    }

    // 인터발함수 최초호출
    slideAuto();

    /* 
        함수명: clearAuto
        기능: 인터발지우기, 타임아웃세팅
    */
    // 인터발 지우기 함수
    function clearAuto() {
        console.log("지우기");
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기(실행쓰나미 방지)
        clearTimeout(autoT);
        // 3. 일정시간 후 다시 인터발 호출
        autoT = setTimeout(slideAuto, 5000);
    }
});
