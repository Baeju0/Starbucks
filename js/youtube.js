// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', { // html부분에 <div id="player"></div>의 player
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상의 아이디
    playerVars: {
        autoplay: true, // 자동 재생
        loop: true, // 반복 재생
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 아이디 목록
    },
    events: {
        onReady: function (event) { // 영상이 준비가 되면 익명의 함수가 실행 되는데
            event.target.mute() // 실행되면 target= 재생되고 있는 영상, mute 음소거
        }
    }
  });
}