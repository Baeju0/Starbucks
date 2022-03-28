# Starbucks    
     
⦁ favicon : 홈페이지의 아이콘 변경    
⦁ 오픈 그래프 / 트위터 카드 : 카카오톡 등에서 링크 주소를 전송할 때 뜨는 카드    
⦁ google font 적용 - https://fonts.google.com/    
⦁ google material icons 적용 - https://fonts.google.com/icons    
⦁ IFrame_API : 유튜브 영상 가져오기    


**JS 라이브러리**    
⦁ GSAP : 일정한 구간까지 스크롤 시 배너 버튼 나타나게, 사라지게 하는 기능    
⦁ ScrollMagic : View 지점이 설정한 지점에 달성하면 실행되는 기능    
⦁ SWIPER : 화면 슬라이드 기능     
⦁ ScrollToPlugin : 버튼 클릭 시 상단으로 이동시키는 기능      
      
     
**HTML, CSS, JS**      
⦁ 브라우저에 기본으로 설정되어 있는 CSS 스타일 리셋 - https://cssdeck.com/blog/scripts/eric-meyer-reset-css/       
⦁ <Script defer src = "js/main.js"></Script> : <Script>에 defre 속성 추가 시 HTML 구조가 모두 해석 되면 정상적으로 작동      
⦁ <a href="javascript:void(0)'></a> : a태그를 사용할 때 링크가 준비되지 않은 경우(a태그 속성만 나타내고, 링크 기능은 사라짐)       
⦁ HTML에서 기호를 사용하고 싶을 때 - https://www.w3schools.com/html/html_entities.asp      
       
**매년 바뀌는 년도를 JS로 자동 수정(footer부분에 있는 내용)**      
  ⦁ HTML       
<!--     <span class="this-year'></span>       -->
  ⦁ JS     
    const thisYear = document.querySelector('.this-year');     
    thisYear.textContent = new Date().getFullYear();     
