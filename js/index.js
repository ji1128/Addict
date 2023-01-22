const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

//클릭하면
menuToggleBtn.addEventListener('click', function () {
    isHideMenu = !isHideMenu;
    //isHideMenu가 참이면
    if (isHideMenu) {
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    } else {
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

// 2차메뉴 열렸다 닫혔다.
$(document).ready(function () {
    $("#gnb-mo ul.subMenu").hide();
    $("#gnb-mo ul.mainMenu li").click(function () {
        $("ul", this).slideToggle("fast");
    });
});

//MAIN SLIDER
new Swiper('.main-slider .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true, //자동재생
    slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
    navigation: {
        prevEl: ".main-slider .swiper-prev",
        nextEl: ".main-slider .swiper-next"
    },
});

new Swiper('.best-item .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true, //자동재생
    slidesPerView: 4, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드와 슬라이드 사이 간격
    navigation: {
        prevEl: ".best-item .swiper-prev",
        nextEl: ".best-item .swiper-next"
    },
    pagination: { // 페이징 설정
        el: '.swiper-pagination',
        clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
    },
    breakpoints: { //반응형 조건 속성
        320: { //320이상인 경우
            slidesPerView: 2, //레이아웃 1열
        },
        768: {
            slidesPerView: 3, //레이아웃 1열
        },
        1200: {
            slidesPerView: 4, //레이아웃 4열
        },
    }
});

new Swiper('.changes-time .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true, //자동재생
    slidesPerView: 4, //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드와 슬라이드 사이 간격

    breakpoints: { //반응형 조건 속성

        1200: {
            slidesPerView: 4, //레이아웃 4열
        },
    }
});


// skroll-spy -----------------------------
//Masgic Scroll---------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
//forEach -> 배열함수
spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
            triggerElement: spyEl, //보여질 부분 감지할 요소 지정
            triggerHook: 0.8, //0.8초 동안 훅이 실행됨
        })
        //토글 할 요소 생성 및 제거
        //.setClassToggle(토글 할 요소, "넣었다 뺐다 할 class 이름 생성")
        .setClassToggle(spyEl, "show")
        .addTo(new ScrollMagic.Controller());
});