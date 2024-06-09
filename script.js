const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause-btn');
const songTitle = document.querySelector('.song-title');

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseButton.innerHTML = '&#9658;'; // Play simgesi
    } else {
        audioPlayer.play();
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause simgesi
    }
    isPlaying = !isPlaying;
}

playPauseButton.addEventListener('click', togglePlayPause);

audioPlayer.addEventListener('play', function() {
    isPlaying = true;
    playPauseButton.innerHTML = '&#10074;&#10074;'; // Pause simgesi
});

audioPlayer.addEventListener('pause', function() {
    isPlaying = false;
    playPauseButton.innerHTML = '&#9658;'; // Play simgesi
});

audioPlayer.addEventListener('ended', function() {
    isPlaying = false;
    playPauseButton.innerHTML = '&#9658;'; // Play simgesi
});

audioPlayer.addEventListener('loadedmetadata', function() {
    songTitle.textContent = audioPlayer.getAttribute('src').replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
});
