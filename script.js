const image = document.getElementById("bryant");
const audio = document.getElementById("audio");

image.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});
