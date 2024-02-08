import initMusicPlayer from './player/musicPlayer'
import './styles/style.css'

document.addEventListener('DOMContentLoaded', () => {
  let audioContext
  let analyser
  let src
  const audio = document.getElementById('audio')

  initMusicPlayer()
  const interactionListener = () => {
    if (audioContext) {
      audioContext.resume()
    } else {
      audioContext = new AudioContext()
      src = audioContext.createMediaElementSource(audio)
      analyser = audioContext.createAnalyser()
      src.connect(analyser)
      analyser.connect(audioContext.destination)
      analyser.fftSize = 512
    }
    document.body.removeEventListener('click', interactionListener)
  }
  document.body.addEventListener('click', interactionListener)
})
