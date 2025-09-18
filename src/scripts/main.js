import MusicPlayer from './player/musicPlayer'

document.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname || ''
  const isHome = path === '/'
  if (!isHome) return

  try {
    const player = new MusicPlayer()
    const { playSong } = player.initialize()
    let isInitialized = false

    const nav = document.querySelector(
      '.music-player-center-section-navigation'
    )

    if (nav) {
      nav.addEventListener(
        'click',
        async (e) => {
          if (isInitialized) return
          const target = e.target
          if (target === nav) return
          try {
            await playSong()
            isInitialized = true
          } catch (error) {
            console.error('Error initializing audio on click:', error)
          }
        },
        { once: true }
      )
    }
  } catch (error) {
    console.error('Failed to initialize music player:', error)
  }
})
