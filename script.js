//your JS code here. If required.
// List of sounds (make sure files exist in sounds folder)
// List of sound names – files must exist in sounds/ folder
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        playSound(soundFile);
    });
});

stopButton.addEventListener('click', () => {
    stopSound();
});

function playSound(file) {
    if (currentAudio) {
        currentAudio.pause(); // Stop the current audio
    }
    currentAudio = new Audio(`sounds/${file}`);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the start
    }
}