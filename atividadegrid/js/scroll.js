const SONG_CARD_SIZE = 800

const scrollData = {
  scroll: {
    clicks: 0,
    canClick: true,
    reachedMax: false
  }
}

const scrollComputed = {
  canPrev() {
    const can = this.scroll.clicks > 0

    return {
      color: can ? 'black' : '#f0f0f0',
      pointerEvents: can ? 'auto' : 'none'
    }
  },

  canNext() {
    return {
      color: !this.scroll.reachedMax ? 'black' : '#f0f0f0',
      pointerEvents: !this.scroll.reachedMax ? 'auto' : 'none'
    }
  }
}

const scrollMethods = {
  /**
   * Carrega os novos itens da lista
   */
  nextFeatured() {
    this.applyScrollMovement(SONG_CARD_SIZE)
  },

  /**
   * Carrega os itens anteriores da lista
   */
  prevFeatured() {
    if (this.scroll.clicks > 0)
      this.applyScrollMovement(-SONG_CARD_SIZE)
  },

  /**
   * Aplica o movimento no scroll
   * @param {Number} quantity 
   */
  applyScrollMovement(quantity) {
    if (!this.scroll.canClick)
      return

    const featured = this.$refs.featured
    
    this.scroll.canClick = false
    this.scroll.clicks += quantity > 0 ? 1 : -1
    featured.scrollLeft += quantity

    setTimeout(() => {
      this.scroll.canClick = true

      if (quantity > 0) {
        const diff = featured.scrollWidth - (featured.scrollLeft + featured.offsetWidth)

        /**
         * Se a diferença entre a quantia scrollada e a quantia maxima de scroll que pode ser aplicada
         * for menor que o tamanho do card então movimentamos até o fim do scroll
         */
        if (diff < SONG_CARD_SIZE) {
          featured.scrollLeft += SONG_CARD_SIZE
          this.scroll.reachedMax = true
        } else {
          this.scroll.reachedMax = featured.scrollLeft + featured.offsetWidth === featured.scrollWidth 
        }
      } else {

        /**
         * Se sobrou uma quantia de scroll ao voltar então resetamos o scroll
         */
        if (featured.scrollLeft < SONG_CARD_SIZE) {
          featured.scrollLeft = 0
        }

        this.scroll.reachedMax = false 
      }
    }, 350)
  }
}
