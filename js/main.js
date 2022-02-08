const searchEl = document.querySelector('.search'); //document는 html자체(요소)
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    //Logic 여기에 입력!
    searchInputEl.focus();
});


searchInputEl.addEventListener('focus', function(){ //searchInputEl가 focus가 실행되었을 경우 두 번째 인수로 작성하는 함수 실행(핸들러) 
    searchEl.classList.add('focused'); // 함수 실행되면 focused라는 클래스 추가
    searchInputEl.setAttribute('placeholder', ' 통합검색'); // placeholder, 통합검색이라는 요소 추가
});

searchInputEl.addEventListener('blur', function(){ //searchInputEl가 blur 되었을 때 
    searchEl.classList.remove('focused'); // 함수 실행되면 focused라는 클래스 제거
    searchInputEl.setAttribute('placeholder', ''); // placeholder, '' 요소 추가
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll',_.throttle(function() { //window = 브라우저 창, _.throttle은 자바 라이브러리 추가한 것 중 기능을 이용해 일정시간(300ms)을 추가해서 실행
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // scroll의 Y값이 500 이상일 때 배지 숨기기
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        }); //gsap 자바 라이브러리 추가. gsap.to(요소, 지속시간, 옵션);
        
        // 상단 이동 버튼 보이기
        gsap.to('#to-top', .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block'
    });
    // 상단 이동 버튼 숨기기
    gsap.to('#to-top', .2, {
        x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)


toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0 //화면의 위치를 0으로 옮겨주겠다! (.7초)
    });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { //forEach 반복문
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // index값은 기본적으로 0, 반복하면서 0.7, 1.4, 2.1, 2.7초로 순차적으로 표시됨
        opacity : 1
    });
});


 //new 생성자(클래스) , new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 여부(사용자가 제어할 수 있는 페이지 번호인지?)
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5, //한 화면에 몇 개의 슬라이드를 보일것이냐
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion // !는 반대의 값으로 전환 , isHidePromotion = false인데 !isHidePromotion은 true로 반대 값으로 전환
    if (isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide'); // hide라는 클래스 추가 , css에서 스타일 추가
    } else {
        // 보임 처리
        promotionEl.classList.remove('hide'); // hide라는 클래스 제거
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), { //선택자, 랜덤함수로 애니메이션 지속시간(최소, 최대) 설정
        y: size,
        repeat: -1, //-1은 무한 반복
        yoyo: true, // 다시 돌아가는
        ease: Power1.easeInOut, // ease 함수, gsap 사이트에 있는 함수, 애니메이션을 부드럽게 해주는 옵션
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15) //(요소, delay, size)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement : spyEl,
        triggerHook: .8 //화면이 보여지기 시작하는 지점이0, 끝부분이 1, 0.8로 설정한 지점에 걸리면 실행
    }) //Scene은 보여짐 여부를 감시할 요소를 지정
    .setClassToggle(spyEl, 'show') //위 Scene 실행시 spyEl요소에 show라는 클래스 추가
    .addTo(new ScrollMagic.Controller());
});


// this-year라는 class를 가진 요소에 글자 내용으로 현재 년도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();