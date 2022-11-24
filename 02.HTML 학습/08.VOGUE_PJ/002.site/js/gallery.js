// 보그 PJ 갤러리 페이지 JS - gallery.js

//////// 제이쿼리 코드블럭 //////////////////
$(() => {
    console.log("로딩완료!");

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}); //////////// jQB /////////////////////////
