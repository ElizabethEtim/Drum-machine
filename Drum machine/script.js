function playSound(drum) {
    const sound = document.getElementById(drum);
    sound.currentTime = 0; // Rewind to the start
    sound.play();
}