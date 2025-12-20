//your JS code here. If required.
let currentAudio = null;

const buttons = document.querySelectorAll(".sound-btn");
const stopButton = document.getElementById("stop");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const sound = button.getAttribute("data-sound");

    if (!sound) return;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(`sounds/${sound}.mp3`);
    currentAudio.play();
  });
});

stopButton.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});
