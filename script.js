const image = document.getElementById("bryant");
const audio = document.getElementById("audio");

image.addEventListener("click", () => {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
