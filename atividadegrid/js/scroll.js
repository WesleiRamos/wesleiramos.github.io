const SONG_CARD_SIZE = 800

const scrollData = {
  scroll: {
    canClick: true,
    reachedMax: false,
    reachedMin: true,
  }
}

const scrollComputed = {
  canPrev() {
    return {
      color: !this.scroll.reachedMin ? 'black' : '#f0f0f0',
      pointerEvents: !this.scroll.reachedMin ? 'auto' : 'none'
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
    this.applyScrollMovement(-SONG_CARD_SIZE)
  },

  mozillaFix() {
    this.$refs.featured.scrollLeft = 0
  },

  /**
   * Aplica o movimento no scroll
   * @param {Number} quantity 
   */
  applyScrollMovement(quantity) {
    if (!this.scroll.canClick)
      return
    
    this.scroll.canClick = false

    const featured = this.$refs.featured
    
    if (quantity > 0) {
      const sum = featured.scrollLeft + featured.offsetWidth + quantity
      if ((featured.scrollWidth - sum) < (SONG_CARD_SIZE / 1.3)) {
        quantity += sum
      }
    } else {
      const sum = featured.scrollLeft + quantity
      if (sum < (SONG_CARD_SIZE / 1.3)) {
        quantity -= featured.scrollLeft + quantity
      }
    }

    this.scroll.reachedMin = featured.scrollLeft + quantity <= 0
    this.scroll.reachedMax = featured.scrollLeft + featured.offsetWidth + quantity >= featured.scrollWidth

    featured.scrollLeft += quantity
    setTimeout(() => this.scroll.canClick = true, 300)
  }
}
