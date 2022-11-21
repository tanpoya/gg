// 보그 PJ 회원가입 페이지 JS - member.js

///////// 제이쿼리 코드블록 ///////////
$(() => {
    // 로딩완료
    console.log("로딩완료!");

    /*************************************
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트종류 : blur(포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상: 
        -> id가 'email2'가 아니고 class가 'search'가
        아닌 type이 'text'인 입력요소 input
        과 함께 type이 'password'인 입력요소 input

        input[type=text][id!=email2][class!=search],
        input[type=password]
        >>> 대괄호는 속성선택자, != 같징낳다(제이쿼리전용)

    *************************************/
    $("input[type=text][id!=email2][class!=search], input[type=password]").blur(
        function () {

            /// 모든공백 제거함수 //////
            // get rid of space -> 공백을 제거하라
            const groSpace = cv => cv.replace(/\s/g,"");
            // 원형: (cv) => {return cv.replace(/\s/g,"");}
            // 정규식: 슬래쉬(/)사이에 표현, \s 스페이스문자
            // g는 모두 찾으라는 global(전역) 플래그문자임
            // -> 플래그문자 Falg String 표시하면 작동하는 문법

            // 1. 방금 블러가 발생한 요소의 id는?
            let cid = $(this).attr("id");
            // cid는 current id 즉, 현재아이디라는 뜻으로 작명

            // 2. 블러가 발생한 요소의 입력값은
            let cv;
            // 이름일때 앞뒤 공백만 제거
            if(cid==="mnm") cv = $(this).val().trim();
            // 기타경우엔 모든 공백제거
            else cv = groSpace($(this).val());
            // cv는 current value 즉, 현재값이라는 뜻으로 작명
            // trim() 문자열 앞뒤공백제거 메서드

            // 제거된 공백문자로 입력창에 다시 출력하기
            $(this).val(cv);
            // val(값) -> 값넣기

            console.log("블러발생", cid, "/", cv);



            /*************************************************
                3. 빈값 여부 체크하기
            *************************************************/
            if (cv === "") {
                // 메시지 출력
                $(this).siblings(".msg").text("필수입력!");
                // siblings(요소) - 다른형제요소 중 특정요소선택
                // siblings() - 아무값도 안쓰면 다른형제요소 모두선택
            } ///////// 빈값출력 if //////////

            //////////// 만약 통과시 메시지 지우기 ////////////

            /***************************************************
                4. 아이디일 경우 유효성 검사하기
                - 검사기준: 영문자로 시작하는 6~20글자 영문자/숫자
            ***************************************************/

            else {
                // 메시지 지우기
                // $(this).siblings(".msg").text("")
                $(this).siblings(".msg").empty();
                // empty() 내용지우기 메서드
            } //////// else : 통과시 //////////
        }
    ); /// blur
}); ///////////// jQB //////////////
