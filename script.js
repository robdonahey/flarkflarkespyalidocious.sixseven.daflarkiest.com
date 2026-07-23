document.querySelectorAll(".bryant").forEach((img) => {
  img.addEventListener("click", () => {
    const audio = document.getElementById(img.dataset.audio);
    audio.currentTime = 0;
    audio.play();
  });
});