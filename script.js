const audio = document.querySelector('audio');
const playPauseBtn = document.querySelector('.play-pause');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

const songs = [
    { id: 'song1', src: 'song1.mp3', title: 'Intro', artist: 'Novaero' },
    // Add more songs here
  ];
  
  const player = document.querySelector('.player');
  
  songs.forEach((song, index) => {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
  
    if (index === 0) {
      songElement.innerHTML = `
        <audio id="${song.id}" src="${song.src}" controls></audio>
        <div class="song-info">
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
        </div>
      `;
    } else {
      songElement.classList.add('locked-song');
      songElement.innerHTML = `<p>Coming Soon</p>`;
    }
  
    player.appendChild(songElement);
  });
  
  // Function to unlock a song
  function unlockSong(songId) {
    const songElement = document.getElementById(songId);
    songElement.classList.remove('locked-song');
    songElement.classList.add('unlocked-song');
    // Add any additional logic here, like updating the player to play the unlocked song
  }
  
  // Example: Unlocking the second song after a certain date
  const unlockDate = new Date('2024-12-08'); // Replace with your desired date
  if (new Date() >= unlockDate) {
    unlockSong('song2');
  }