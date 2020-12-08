const data = {
  featured,
  recommended,
  ...scrollData,
  ...playerData
}

const computed = {
  ...scrollComputed
}

const methods = {
  ...scrollMethods,
  ...playerMethods,

  getBackgroundFeatured({ background  }) {
    return {
      background,
      backgroundPosition: 'center top',
      backgroundSize: '400px, 100%',
      backgroundRepeat: 'no-repeat'
    }
  },

  getBackgroundArtwork({ artwork }) {
    return {
      backgroundImage: `url(${artwork})`,
      backgroundSize: 'cover'
    }
  }
}

const app = Vue.createApp({
  methods, computed, data: () => data, created() {
    this.createPlayer()
  }
})

app.config.isCustomElement = tag => /^range-/.test(tag)
app.mount('.spozer')