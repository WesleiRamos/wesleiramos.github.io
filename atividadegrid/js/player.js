const PLAYER = new Audio()

const playerData = {
  player: {
    currentTime: 0,
    maxLength: 120,
    paused: true,
    currentSong: null,
    seeking: false
  }
}

const playerMethods = {
  seeking() {
    this.player.seeking = true
  },

  playerBarChange({ target }) {
    const value = parseInt(target.value)
    PLAYER.currentTime = value

    setTimeout(() => {
      this.player.seeking = false
      PLAYER.play()
    }, 100)
  },

  previewTime({ target }) {
    this.player.currentTime = parseInt(target.value)
  },

  formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5)
  },

  changeSong(song) {
    PLAYER.src = song.url
    this.player.currentSong = { ...song }
    PLAYER.load()
  },

  playPause() {
    if (PLAYER.readyState) {
      this.player.paused ? PLAYER.play() : PLAYER.pause()
    }
  },

  updateProgress(time) {
    if (!this.player.seeking) {
      this.player.currentTime = time
      this.$refs.seekbar.value = time
    }
  },

  createPlayer() {
    PLAYER.addEventListener('timeupdate', () => {
      this.updateProgress(PLAYER.currentTime)
    })

    PLAYER.addEventListener('play', () => {
      this.player.paused = false
    })

    PLAYER.addEventListener('canplay', () => {
      this.player.maxLength = PLAYER.duration
      PLAYER.play()
    })

    PLAYER.addEventListener('pause', () => {
      this.player.paused = true
    })

    PLAYER.addEventListener('ended', () => {
      this.player.paused = true
    })
  }
}