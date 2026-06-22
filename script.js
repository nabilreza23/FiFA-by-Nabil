const streamUrl =
"https://37b4c228.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/6f5437c5-e015-4754-8476-c8c6d27d3a55/1.m3u8";

const video = document.getElementById("video");

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(streamUrl);
  hls.attachMedia(video);
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = streamUrl;
}

function randomViewers(){
  const n = 12000 + Math.floor(Math.random()*5000);
  document.getElementById("viewerCount").innerText = n.toLocaleString();
}
setInterval(randomViewers,5000);
