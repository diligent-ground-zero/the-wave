import initMusicPlayer from './player/musicPlayer'

document.addEventListener('DOMContentLoaded', () => {
  const { ensureAudioContext, playSong, pauseSong } = initMusicPlayer()
  const playButtonListener = (event) => {
    if (event.target.closest('.play-btn')) {
      ensureAudioContext()
        .resume()
        .then(() => {
          const musicContainer = document.getElementById('music-container')
          const isPlaying = musicContainer.classList.contains('play')
          if (isPlaying) {
            pauseSong()
          } else {
            playSong()
          }
        })
    }
  }
  document.addEventListener('click', playButtonListener)
})
