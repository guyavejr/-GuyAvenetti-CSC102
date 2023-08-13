// Get a reference to the audio element
const backgroundSound = document.getElementById("backgroundSound");

// Play the background sound
function playBackgroundSound() {
  backgroundSound.play();
}

// Pause the background sound
function pauseBackgroundSound() {
  backgroundSound.pause();
}

// Adjust the volume of the background sound (value between 0 and 1)
function setVolume(volume) {
  backgroundSound.volume = volume;
}
