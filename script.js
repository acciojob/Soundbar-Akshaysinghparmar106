//your JS code here. If required.
// List of sounds (make sure files exist in sounds folder)
// List of sound names – files must exist in sounds/ folder
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let soundName = btn.getAttribute("data-sound");

    // stop all currently playing sounds
    stopAllSounds();

    // play sound
    if (soundName !== "stop") {
      const audio = new Audio(`sounds/${soundName}.mp3`);
      audio.play();
    }
  });
});

function stopAllSounds() {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
  sounds.forEach(s => {
    let audio = new Audio(`sounds/${s}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
