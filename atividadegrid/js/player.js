const PLAYER = new Audio()

const playerData = {
  player: {
    currentTime: 0,
    maxLength: 120,
    paused: true,
    currentSong: null,
    currentSongIndex: 0,
    seeking: false,
    currentPlaylist: 1
  }
}

const playerMethods = {

  /**
   * 
   */
  changeTitle() {
    if (this.player.paused) {
      document.title = 'Spozer'
      return
    } 

    document.title = `${this.player.currentSong.name} · ${this.player.currentSong.artist}`
  },

  /**
   * Determina se está ou não pulando a musica
   */
  seeking() {
    this.player.seeking = true
  },


  /**
   * Quando o usuário soltar a barra de progresso altera o tempo da musica
   * @param {Event} param0 
   */
  playerBarChange({ target }) {
    const value = parseInt(target.value)
    PLAYER.currentTime = value

    setTimeout(() => {
      this.player.seeking = false
      PLAYER.play()
    }, 100)
  },


  /**
   * Altera o volume do player
   * @param {Event} param0 
   */
  volumeChange({ target }) {
    PLAYER.volume = parseInt(target.value) / 100
  },


  /**
   * Previsualiza o tempo da barra quando for pular para um tempo em especifico
   * @param {Event} param0 
   */
  previewTime({ target }) {
    this.player.currentTime = parseInt(target.value)
  },

  /**
   * Formata os segundos em mm:ss
   * @param {Number} seconds 
   */
  formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().substr(14, 5)
  },

  /**
   * Altera para a musica selecionada
   * @param {Objecy} song 
   * @param {Number} index 
   * @param {Number} playlist 
   */
  changeSong(song, index, playlist) {
    PLAYER.src = song.url
    this.player.currentSongIndex = index
    this.player.currentPlaylist = playlist
    this.player.currentSong = { ...song }
    PLAYER.load()

    if (navigator.mediaSession) {
      const artwork = [ '96x96', '128x128', '192x192', '256x256', '384x384', '512x512' ].map(sizes => {
        return { sizes, src: song.artwork }
      })
      
      navigator.mediaSession.metadata = new MediaMetadata({ artwork, title: song.name, artist: song.artist })
    }
  },

  /**
   * Avança ou retorna uma musica
   * @param {Number} direction 
   */
  nextSong(direction = 1) {
    let playlist = this.player.currentPlaylist === 1 ? this.featured : this.recommended

    if (direction === 1) {
      if (this.player.currentSongIndex === playlist.length - 1)
        return
    } else {
      /**
       * 1 click volta pro inicio
       * 2 click e o tempo de musica for menor que meio segundo volta pra anterior
       */
      if (PLAYER.currentTime > 0.5) {
        PLAYER.currentTime = 0
        return
      }

      if (this.player.currentSongIndex === 0)
        return
    }

    const next = this.player.currentSongIndex + direction
    this.changeSong(playlist[next], next, this.player.currentPlaylist)
  },

  /**
   * Altera o estado do player
   */
  playPause() {
    if (PLAYER.readyState) {
      this.player.paused ? PLAYER.play() : PLAYER.pause()
    }
  },

  /**
   * Atualiza a barra de progresso e o tempo decorrido
   * @param {Number} time 
   */
  updateProgress(time) {
    if (!this.player.seeking) {
      this.player.currentTime = time
      this.$refs.seekbar.value = time
    }
  },

  /**
   * Cria os eventos no player para manipular os controles
   */
  createPlayer() {
    const playPause = value => () => {
      this.player.paused = value
      this.changeTitle()
    }

    PLAYER.addEventListener('play', playPause(false))
    PLAYER.addEventListener('pause', playPause(true))

    PLAYER.addEventListener('canplay', () => {
      this.player.maxLength = PLAYER.duration
      PLAYER.play()
    })

    PLAYER.addEventListener('ended', () => {
      this.player.paused = true
      this.nextSong()
    })

    PLAYER.addEventListener('timeupdate', () => {
      this.updateProgress(PLAYER.currentTime)
    })


    if (navigator.mediaSession) {
      const mediaSession = navigator.mediaSession
      mediaSession.setActionHandler('play', () => this.playPause())
      mediaSession.setActionHandler('pause', () => this.playPause())
      mediaSession.setActionHandler('nexttrack', () => this.nextSong())
      mediaSession.setActionHandler('previoustrack', () => this.nextSong(-1))
    }
  }
}