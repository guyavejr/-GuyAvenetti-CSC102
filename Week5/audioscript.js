// reference the sound
const backgroundSound = document.getElementById("backgroundSound");

// function for play button
function playBackgroundSound() {
  backgroundSound.play();
}

// function for pause button
function pauseBackgroundSound() {
  backgroundSound.pause();
}

// Adjust the volume (value between 0 and 1)
function setVolume(volume) {
  backgroundSound.volume = volume;
}
