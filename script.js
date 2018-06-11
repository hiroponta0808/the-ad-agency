var player;
var movies = document.getElementById('movies');
var movie = document.getElementById('movie');

function onYouTubeIframeAPIReady () {
  player = new YT.Player("movie", {
    videoId: "CCMUykz3dGQ", // 再生する動画のYouTubeID
    width: 1200, // プレイヤーの幅
    height: 1200, // プレイヤーの高さ // ↓イベント設定↓
    playerVars: {
      'autoplay': 1,
      'showinfo' : 0,
      'controls': 0,
      'autohide': 1,
      'wmode': 'opaque',
      'rel': 0,
      'loop': 1,
      'modestbranding': 1,
      // 'playlist': 'VIDEO_ID'
    },
    events: {
      'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
      // 'onStateChange': onPlayerStateChange
    }
  });
};




  function onPlayerReady(event) {
    // console.log(event.target.a.id)
    if (event.target.a.id == 'movie') {
      event.target.playVideo()
    }
    if(event.target.isMuted()) {
      // ミュートの解除
      // event.target.unMute();
    } else {
      // ミュート
      event.target.mute();
    }
  }

  function onPlayerStateChange(event) {
    console.log(event.target)
    // 現在のプレーヤーの状態を取得
    var ytStatus = event.target.getPlayerState();
    // 再生終了したとき
    if (ytStatus == YT.PlayerState.ENDED) {
      ytPlayer.playVideo();
    }
  }

// マウスオーバー時に動画再生
movies.addEventListener('mouseover', function () {
  player.playVideo();
});

// マウスアウト時に動画一時停止
movies.addEventListener('mouseout', function () {
  player.pauseVideo();
});

// //参照URL https://developers.google.com/youtube/iframe_api_reference?hl=ja
