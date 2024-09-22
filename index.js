function playVideo(item) {
  var iframe = item.querySelector('iframe');
  var src = iframe.src;
  if (!src.includes('mute=1')) {
      iframe.src = src + '&autoplay=1&mute=1';
  }
}

function pauseVideo(item) {
  var iframe = item.querySelector('iframe');
  var src = iframe.src.split('&')[0];
  iframe.src = src;
}