//your JS code here. If required.
// List of sounds (make sure files exist in sounds folder)
const sounds = ["boom", "clap", "hihat", "kick", "openhat", "ride", "snare", "tom"];

const buttonsDiv = document.getElementById("buttons");

// Create buttons for each sound
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    const audio = new Audio(`sounds/${sound}.mp3`);

    btn.addEventListener("click", () => {
        stopSounds();  // Stop other sounds
        audio.play();
    });

    buttonsDiv.appendChild(btn);
});

// Stop function for STOP button
function stopSounds() {
    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}
