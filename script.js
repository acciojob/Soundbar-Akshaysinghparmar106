//your JS code here. If required.
// List of sounds (make sure files exist in sounds folder)
// List of sound names – files must exist in sounds/ folder
const soundList = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop",];

const btnContainer = document.getElementById("buttons");

// Create buttons for each sound
soundList.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopAll();
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    });

    btnContainer.appendChild(btn);
});

// Stop button function
function stopAll() {
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
}
