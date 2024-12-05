export default class MusicPlayer {
  constructor(config = {}) {
    this.config = {
      cdnPrefix:
        'https://cdn.jsdelivr.net/gh/diligent-ground-zero/the-wave@2.0/music/',
      songs: [
        {
          name: 'Have it Your Way',
          fileName: 'Vibe 01 - Have It Your Way.mp3',
        },
        { name: 'Fire Inside', fileName: 'Vibe 02 - Fire inside.mp3' },
        { name: 'Luminious Dream', fileName: 'Vibe 03 - Luminous Dream.mp3' },
        { name: 'You Color Me In', fileName: 'Vibe 04 - You Color Me In.mp3' },
      ],
      ...config,
    }

    this.state = {
      audioContext: null,
      isAudioContextInitialized: false,
      songIndex: 0,
      isLoading: false,
    }

    this.elements = this.initializeElements()
    this.boundHandlers = this.initializeBoundHandlers()
  }

  initializeElements() {
    const elements = {
      container: document.getElementById('music-container'),
      playBtn: document.getElementById('play'),
      prevBtn: document.getElementById('prev'),
      nextBtn: document.getElementById('next'),
      audio: document.getElementById('audio'),
      progress: document.getElementById('progress'),
      progressContainer: document.getElementById('progress-container'),
      title: document.getElementById('title'),
      currTime: document.querySelector('#currTime'),
      playIcon: document.querySelector('.play-img'),
      pauseIcon: document.querySelector('.pause-img'),
    }

    if (!elements.title || !elements.audio) {
      throw new Error('Required elements not found')
    }

    return elements
  }

  initializeBoundHandlers() {
    return {
      updateProgress: this.updateProgress.bind(this),
      setProgress: this.setProgress.bind(this),
      handleTimeUpdate: this.updateCurrentTime.bind(this),
      handlePlayClick: this.togglePlay.bind(this),
    }
  }

  ensureAudioContext() {
    if (!this.state.audioContext) {
      this.state.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)()
    }
    return this.state.audioContext
  }

  async loadSong(song) {
    try {
      this.state.isLoading = true
      this.elements.title.innerText = song.name
      this.elements.audio.src = this.config.cdnPrefix + song.fileName
      this.elements.audio.load()

      await new Promise((resolve) => {
        this.elements.audio.oncanplaythrough = resolve
      })

      this.state.isLoading = false
      if (this.state.isAudioContextInitialized) {
        await this.playSong()
      }
    } catch (error) {
      console.error('Error loading song:', error)
      this.state.isLoading = false
    }
  }

  async playSong() {
    if (this.state.isLoading) return

    try {
      this.elements.container.classList.add('play')
      this.elements.playIcon.style.display = 'none'
      this.elements.pauseIcon.style.display = 'block'

      const context = this.ensureAudioContext()
      if (context.state === 'suspended') {
        await context.resume()
      }
      await this.elements.audio.play()
    } catch (error) {
      console.error('Error playing song:', error)
    }
  }

  pauseSong() {
    this.elements.container.classList.remove('play')
    this.elements.playIcon.style.display = 'block'
    this.elements.pauseIcon.style.display = 'none'
    this.elements.audio.pause()
  }

  async prevSong() {
    this.state.songIndex =
      (this.state.songIndex - 1 + this.config.songs.length) %
      this.config.songs.length
    await this.loadSong(this.config.songs[this.state.songIndex])
    this.playSong()
  }

  async nextSong() {
    this.state.songIndex = (this.state.songIndex + 1) % this.config.songs.length
    await this.loadSong(this.config.songs[this.state.songIndex])
    this.playSong()
  }

  updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    this.elements.progress.style.width = `${progressPercent}%`
  }

  setProgress(e) {
    const width = this.elements.progressContainer.clientWidth
    const clickX = e.offsetX
    const duration = this.elements.audio.duration
    this.elements.audio.currentTime = (clickX / width) * duration
  }

  updateCurrentTime(e) {
    const { currentTime } = e.srcElement
    const min = Math.floor(currentTime / 60)
      .toString()
      .padStart(2, '0')
    const sec = Math.floor(currentTime % 60)
      .toString()
      .padStart(2, '0')
    this.elements.currTime.innerHTML = `${min}:${sec}`
  }

  togglePlay() {
    const isPlaying = this.elements.container.classList.contains('play')
    if (isPlaying) {
      this.pauseSong()
    } else {
      this.playSong()
    }
  }

  prefetchSongs() {
    this.config.songs.forEach((song) => {
      const link = document.createElement('link')
      link.href = this.config.cdnPrefix + song.fileName
      link.as = 'audio'
      link.rel = 'prefetch'
      document.head.appendChild(link)
    })
  }

  attachEventListeners() {
    this.elements.prevBtn.addEventListener('click', () => this.prevSong())
    this.elements.nextBtn.addEventListener('click', () => this.nextSong())
    this.elements.audio.addEventListener(
      'timeupdate',
      this.boundHandlers.updateProgress
    )
    this.elements.progressContainer.addEventListener(
      'click',
      this.boundHandlers.setProgress
    )
    this.elements.audio.addEventListener('ended', () => this.nextSong())
    this.elements.audio.addEventListener(
      'timeupdate',
      this.boundHandlers.handleTimeUpdate
    )
    this.elements.playBtn.addEventListener(
      'click',
      this.boundHandlers.handlePlayClick
    )
  }

  initialize() {
    try {
      this.prefetchSongs()
      this.loadSong(this.config.songs[this.state.songIndex])
      this.attachEventListeners()
      return {
        ensureAudioContext: this.ensureAudioContext.bind(this),
        playSong: this.playSong.bind(this),
        pauseSong: this.pauseSong.bind(this),
        audio: this.elements.audio,
      }
    } catch (error) {
      console.error('Failed to initialize music player:', error)
      throw error
    }
  }
}
