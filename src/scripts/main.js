import { setupAboutUs } from './about-us/aboutUs'
import initMusicPlayer from './player/musicPlayer'

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname

  if (currentPath === '/') {
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
  } else if (currentPath === '/uber-uns' || currentPath === '/uber-uns-copy') {
    setupAboutUs()
  }
})
