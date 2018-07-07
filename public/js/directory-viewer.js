$(document).ready(() => {
  $( document ).on( 'click', '.play-video',function (e) {
    $('#directories-container').hide();
    var videoPath = $(this).attr('video-path');
    var myVideo = videojs('my-player');
    myVideo.src([
      {src: videoPath, type: 'video/mp4'}
    ]);
    $('#video-container').show();
  });
});
function formatLink(value, item) {
  if (value) {
    return '<a class="play-video" video-path="'+ item.path.replace('public', '') +'" target="_blank">'+ value +'</a>'
  } else {
    return '';
  }
}

var myVideo = document.getElementById('my-player');
try {
  myVideo.addEventListener('ended', function (e) {
    $('#directories-container').show();
    $('#video-container').hide();

  });
} catch (e) {
  console.log(e);
}

function closedVideo() {
  var myVideo = videojs('my-player');
  myVideo.pause();
  $('#directories-container').show();
  $('#video-container').hide();
}