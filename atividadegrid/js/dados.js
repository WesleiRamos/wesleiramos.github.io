function shuffleArray(array) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const featured = shuffleArray([
  {
    name: 'Tá rocheda',
    artist: 'Os barões da pisadinha',
    album: 'As melhores 2018',
    background: 'url(./images/artists/baroes-da-pisadinha.png), linear-gradient(to right, #FF4259, #3FE8D7)',
    artwork: './images/artwork/ta-rocheda.jpg',
    url: './songs/ta-rocheda.mp3'
  },

  {
    name: 'Bad Reputation',
    artist: 'Avicii',
    album: 'Tim',
    background: 'url(./images/artists/avicii.png), linear-gradient(to right, #FABD43, #8B17FA)',
    artwork: './images/artwork/bad-reputation.png',
    url: './songs/bad-reputation.mp3'
  },

  {
    name: 'Kings & Queens',
    artist: 'Ava Max, MOTi',
    album: 'The remixes',
    background: 'url(./images/artists/ava-max.png), linear-gradient(to right, #2973E3, #3FE8D7)',
    artwork: './images/artwork/kings-n-queens.jpg',
    url: './songs/kings-n-queens.mp3'
  },

  {
    name: 'Do I wanna know?',
    artist: 'Arctic Monkeys',
    album: 'AM',
    background: 'url(./images/artists/arctic-monkeys.png), linear-gradient(to right, #2973E3, #8B17FA)',
    artwork: './images/artwork/do-i-wanna-know.jpg',
    url: './songs/do-i-wanna-know.mp3'
  },

  {
    name: 'Feels',
    artist: 'Calvin Harris',
    album: 'Feels',
    background: 'url(./images/artists/calvin-harris.png), linear-gradient(to right, #FF4259, #8B17FA)',
    artwork: './images/artwork/feels.jpg',
    url: './songs/feels.mp3'
  }
])

const recommended = shuffleArray([
  {
    name: 'Higher Love',
    artist: 'Whitney Houston, Kygo',
    artwork: './images/artwork/higher-love.jpg'
  },

  {
    name: 'Hey Baby',
    artist: 'Imanbek, Afrojack, Gia Koka',
    artwork: './images/artwork/hey-baby.jpg'
  },

  {
    name: 'Someday',
    artist: 'Kygo, Zac Brown',
    artwork: './images/artwork/someday.jpg'
  },

  {
    name: 'Black',
    artist: 'Pearl Jam',
    artwork: './images/artwork/black.jpg'
  },

  {
    name: 'Feel it still',
    artist: 'Portugal. The Man',
    artwork: './images/artwork/feel-it-still.jpg'
  },

  {
    name: 'Losing sleep',
    artist: 'John Newmann',
    artwork: './images/artwork/losing-sleep.jpg'
  },

  {
    name: 'Love me again',
    artist: 'John Newmann',
    artwork: './images/artwork/Love-me-again.jpg'
  },

  {
    name: 'Who\'s laughing now',
    artist: 'Ava Max',
    artwork: './images/artwork/whos-laughing-now.png',
  },

  {
    name: 'Like i do',
    artist: 'Vin Diesel, Kygo',
    artwork: './images/artwork/like-i-do-vin-diesel.jpg',
  },

  {
    name: 'Like i do',
    artist: 'Brooks, Martin Garrix, David Guetta',
    artwork: './images/artwork/like-i-do.png',
  },

  {
    name: 'Fazenda',
    artist: 'Milton Nascimento',
    artwork: './images/artwork/fazenda.jpg',
  },
])