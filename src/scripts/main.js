import { setupAboutUs } from './about-us/aboutUs'
import initMusicPlayer from './player/musicPlayer'

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname

  if (currentPath === '/') {
    const { ensureAudioContext, playSong, audio } = initMusicPlayer()

    let analyser

    const setupAnalyser = () => {
      const audioContext = ensureAudioContext()
      if (!analyser) {
        analyser = audioContext.createAnalyser()
        const source = audioContext.createMediaElementSource(audio)
        source.connect(analyser)
        analyser.connect(audioContext.destination)
        analyser.fftSize = 512
      }
    }

    const interactionListener = () => {
      setupAnalyser()
      ensureAudioContext()
        .resume()
        .then(() => {
          playSong()
        })
      document.body.removeEventListener('click', interactionListener)
    }

    document.body.addEventListener('click', interactionListener)
  } else if (currentPath === '/uber-uns' || currentPath === '/uber-uns-copy') {
    setupAboutUs()
  }
})
