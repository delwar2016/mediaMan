var replacePath = '';
$(document).ready(() => {
  $.get('/api/getDirectoryPath', function (responsePath) {
    replacePath = responsePath.replace('./', '');
  })
  $(document).on('click', '.play-video', function (e) {
    $('#directories-container').hide();
    var tmpVideoPath = $(this).attr('video-path');
    tmpVideoPath = tmpVideoPath.replace(replacePath, '');
    var myVideo = videojs('my-player');
    myVideo.src([
      { src: tmpVideoPath, type: 'video/mp4' }
    ]);
    $('#video-container').show();
  });
});
function formatLink(value, item) {
  if (value) {
    return `<a class="play-video" video-path="${item.path}" target="_blank">${value}</a>`;
  }
  return '';
}

var myVideo = document.getElementById('my-player');
try {
  myVideo.addEventListener('ended', (e) => {
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
