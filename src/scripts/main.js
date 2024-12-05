import MusicPlayer from './player/musicPlayer'

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const player = new MusicPlayer()
    const { playSong } = player.initialize()
    let isInitialized = false

    document.addEventListener(
      'click',
      async () => {
        if (!isInitialized) {
          try {
            await playSong()
            isInitialized = true
          } catch (error) {
            console.error('Error initializing audio on click:', error)
          }
        }
      },
      { once: true }
    ) // Use once: true to ensure it only triggers once
  } catch (error) {
    console.error('Failed to initialize music player:', error)
  }
})
