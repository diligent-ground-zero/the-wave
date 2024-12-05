const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const currTime = document.querySelector('#currTime')
const playIcon = document.querySelector('.play-img')
const pauseIcon = document.querySelector('.pause-img')

const songs = [
  { name: 'Have it Your Way', fileName: 'Vibe 01 - Have It Your Way.mp3' },
  { name: 'Fire Inside', fileName: 'Vibe 02 - Fire inside.mp3' },
  { name: 'Luminious Dream', fileName: 'Vibe 03 - Luminous Dream.mp3' },
  { name: 'You Color Me In', fileName: 'Vibe 04 - You Color Me In.mp3' },
]

let audioContext
let isAudioContextInitialized = false
let songIndex = 0
let isLoading = false

const cdnPrefix =
  'https://cdn.jsdelivr.net/gh/diligent-ground-zero/the-wave@2.0/music/'

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioContext
}

function loadSong(song) {
  isLoading = true
  title.innerText = song.name
  audio.src = cdnPrefix + song.fileName
  audio.load()
  audio.oncanplaythrough = () => {
    isLoading = false
    if (isAudioContextInitialized) {
      playSong()
    }
  }
}

function playSong() {
  if (isLoading) return

  musicContainer.classList.add('play')
  playIcon.style.display = 'none'
  pauseIcon.style.display = 'block'

  const context = ensureAudioContext()
  if (context.state === 'suspended') {
    context.resume().then(() => {
      audio.play().catch(console.error)
    })
  } else {
    audio.play().catch(console.error)
  }
}

function pauseSong() {
  console.log()
  musicContainer.classList.remove('play')
  playIcon.style.display = 'block'
  pauseIcon.style.display = 'none'
  audio.pause()
}

function prevSong() {
  songIndex = (songIndex - 1 + songs.length) % songs.length
  loadSong(songs[songIndex])
}

function nextSong() {
  songIndex = (songIndex + 1) % songs.length
  loadSong(songs[songIndex])
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

function DurTime(e) {
  const { currentTime } = e.srcElement
  const min = Math.floor(currentTime / 60)
    .toString()
    .padStart(2, '0')
  const sec = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, '0')
  currTime.innerHTML = `${min}:${sec}`
}

function initMusicPlayer() {
  console.log('Initializing music player...')

  if (!title || !audio) {
    console.error('Required elements not found. Aborting initialization.')
    return
  }

  songs.forEach((song) => {
    const link = document.createElement('link')
    link.href = cdnPrefix + song.fileName
    link.as = 'audio'
    link.rel = 'prefetch'
    document.head.appendChild(link)
  })

  console.log('Loading initial song...')
  loadSong(songs[songIndex])

  console.log('Adding event listeners...')
  prevBtn.addEventListener('click', prevSong)
  nextBtn.addEventListener('click', nextSong)
  audio.addEventListener('timeupdate', updateProgress)
  progressContainer.addEventListener('click', setProgress)
  audio.addEventListener('ended', nextSong)
  audio.addEventListener('timeupdate', DurTime)

  playBtn.addEventListener('click', () => {
    console.log('Play button clicked')
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })

  console.log('Music player initialized successfully')
  return { ensureAudioContext, playSong, pauseSong, audio }
}

export default initMusicPlayer
