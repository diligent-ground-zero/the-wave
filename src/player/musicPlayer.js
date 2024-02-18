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
  {
    name: 'Luminous Dream',
    fileName: 'Vibe 01 - Luminous Dream.mp3',
  },
  {
    name: 'Fire inside',
    fileName: 'Vibe 02 - Fire inside.mp3',
  },
  {
    name: 'Have It Your Way',
    fileName: 'Vibe 03 - Have It Your Way.mp3',
  },
  {
    name: 'You Color Me In',
    fileName: 'Vibe 04 - You Color Me In.mp3',
  },
]

function initMusicPlayer() {
  const cdnPrefix =
    'https://cdn.jsdelivr.net/gh/diligent-ground-zero/the-wave@1.6/music/'

  songs.forEach((song) => {
    var link = document.createElement('link')
    link.href = cdnPrefix + song.fileName
    link.as = 'audio'
    link.rel = 'prefetch'
    document.head.appendChild(link)
  })

  let songIndex = 1
  const initialSong = songs[songIndex]

  if (!title || !audio) return

  loadSong(initialSong)

  // buttons for music player
  prevBtn.addEventListener('click', prevSong)
  nextBtn.addEventListener('click', nextSong)
  // Time/song update
  audio.addEventListener('timeupdate', updateProgress)
  // Click on progress bar
  progressContainer.addEventListener('click', setProgress)
  // Song ends
  audio.addEventListener('ended', nextSong)
  // Time of song
  audio.addEventListener('timeupdate', DurTime)

  // load song
  function loadSong(song) {
    title.innerText = song.name
    audio.src = cdnPrefix + song.fileName
  }
  // Play song
  function playSong() {
    musicContainer.classList.add('play')
    playIcon.style.display = 'none'
    pauseIcon.style.display = 'block'
    audio.play()
  }
  // Pause song
  function pauseSong() {
    musicContainer.classList.remove('play')
    playIcon.style.display = 'block'
    pauseIcon.style.display = 'none'
    audio.pause()
  }
  // Previous song
  function prevSong() {
    songIndex--
    if (songIndex < 0) {
      songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
  }
  // Next song
  function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1) {
      songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
  }
  // Update progress bar
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
  }
  // Set progress bar
  function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
  }
  //get duration & currentTime for Time of song
  function DurTime(e) {
    const { duration, currentTime } = e.srcElement
    var sec
    var sec_d
    // define minutes currentTime
    let min = currentTime == null ? 0 : Math.floor(currentTime / 60)
    min = min < 10 ? '0' + min : min
    // define seconds currentTime
    function get_sec(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec = Math.floor(x) - 60 * i
            sec = sec < 10 ? '0' + sec : sec
          }
        }
      } else {
        sec = Math.floor(x)
        sec = sec < 10 ? '0' + sec : sec
      }
    }
    get_sec(currentTime, sec)
    // change currentTime DOM
    currTime.innerHTML = min + ':' + sec
    // define minutes duration
    //let min_d = isNaN(duration) === true ? '0' : Math.floor(duration / 60)
    //todo what dis
    // min_d = min_d < 10 ? '0' + min_d : min_d
    function get_sec_d(x) {
      if (Math.floor(x) >= 60) {
        for (var i = 1; i <= 60; i++) {
          if (Math.floor(x) >= 60 * i && Math.floor(x) < 60 * (i + 1)) {
            sec_d = Math.floor(x) - 60 * i
            sec_d = sec_d < 10 ? '0' + sec_d : sec_d
          }
        }
      } else {
        sec_d = isNaN(duration) === true ? '0' : Math.floor(x)
        sec_d = sec_d < 10 ? '0' + sec_d : sec_d
      }
    }
    get_sec_d(duration)
  }
  // Event listeners
  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  })
}

export default initMusicPlayer
