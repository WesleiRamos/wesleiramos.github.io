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
    artwork: './images/artwork/higher-love.jpg',
    url: './songs/higher-love.mp3'
  },

  {
    name: 'Hey Baby',
    artist: 'Imanbek, Afrojack, Gia Koka',
    artwork: './images/artwork/hey-baby.jpg',
    url: './songs/hey-baby.mp3'
  },

  {
    name: 'Someday',
    artist: 'Kygo, Zac Brown',
    artwork: './images/artwork/someday.jpg',
    url: './songs/someday.mp3'
  },

  {
    name: 'Black',
    artist: 'Pearl Jam',
    artwork: './images/artwork/black.jpg',
    url: './songs/black.mp3'
  },

  {
    name: 'Feel it still',
    artist: 'Portugal. The Man',
    artwork: './images/artwork/feel-it-still.jpg',
    url: './songs/feel-it-still.mp3'
  },

  {
    name: 'Losing sleep',
    artist: 'John Newmann',
    artwork: './images/artwork/losing-sleep.jpg',
    url: './songs/losing-sleep.mp3'
  },

  {
    name: 'Love me again',
    artist: 'John Newmann',
    artwork: './images/artwork/Love-me-again.jpg',
    url: './songs/love-me-again.mp3'
  },

  {
    name: 'Who\'s laughing now',
    artist: 'Ava Max',
    artwork: './images/artwork/whos-laughing-now.png',
    url: './songs/whos-laughing-now.mp3'
  },

  {
    name: 'Like i do',
    artist: 'Vin Diesel, Kygo',
    artwork: './images/artwork/like-i-do-vin-diesel.jpg',
    url: './songs/like-i-do-vin-diesel.mp3'
  },

  {
    name: 'Like i do',
    artist: 'Brooks, Martin Garrix, David Guetta',
    artwork: './images/artwork/like-i-do.png',
    url: './songs/like-i-do-david-guetta.mp3'
  },

  {
    name: 'Fazenda',
    artist: 'Milton Nascimento',
    artwork: './images/artwork/fazenda.jpg',
    url: './songs/fazenda.mp3'
  },

  {
    name: 'Lemonade',
    artist: 'Internet Money, Don Toliver, Gunna, NAV',
    artwork: './images/artwork/lemonade.png',
    url: './songs/lemonade.mp3'
  },

  {
    name: 'Goosebumps',
    artist: 'Travis Scott',
    artwork: './images/artwork/goosebumps.jpg',
    url: './songs/goosebumps.mp3'
  },

  {
    name: 'Sicko Mode',
    artist: 'Travis Scott',
    artwork: './images/artwork/sicko-mode.jpg',
    url: './songs/sicko-mode.mp3'
  },

  {
    name: 'No ideia',
    artist: 'Don Toliver',
    artwork: './images/artwork/no-ideia.jpg',
    url: './songs/no-ideia.mp3'
  },

  {
    // nome mto longo slc
    name: 'Through the fires and flames',
    artist: 'DragonForce',
    artwork: './images/artwork/dragon-force.jpg',
    url: './songs/dragon-force.mp3' 
  },
  
  {
    name: 'Praise the lord',
    artist: 'A$AP Rocky, Skepta',
    artwork: './images/artwork/praise-the-lord.jpg',
    url: './songs/praise-the-lord.mp3'
  },
  
  {
    name: 'Big Love',
    artist: 'EarthGang, Louis The Child',
    artwork: './images/artwork/big-love.jpg',
    url: './songs/big-love.mp3'
  },

  {
    name: 'So Good',
    artist: 'Santti, Kiko Franco, Make U Sweat, Vic Brow',
    artwork: './images/artwork/so-good.jpg',
    url: './songs/so-good.mp3'
  },

  {
    name: 'Blinding Lights - Major Lazer Remix',
    artist: 'The Weeknd, Major Lazer',
    artwork: './images/artwork/blinding-lights.jpg',
    url: './songs/bliding-lights.mp3'
  },
  
  {
    name: 'All Night - Festival Mix',
    artist: 'Afrojack, Ally Brooke',
    artwork: './images/artwork/all-nights.jpg',
    url: './songs/all-night.mp3'
  },

  {
    name: 'Learn To Lose',
    artist: 'Bakermat, Alex Clare',
    artwork: './images/artwork/learn-to-lose.jpg',
    url: './songs/learn-to-lose.mp3'
  },

  {
    name: 'Learn To Live',
    artist: 'Alice Merton',
    artwork: './images/artwork/mint.jpg',
    url: './songs/learn-to-live.mp3'
  },

  {
    name: 'No Roots',
    artist: 'Alice Merton',
    artwork: './images/artwork/mint.jpg',
    url: './songs/no-roots.mp3'
  },

  {
    name: 'Nuthin\' But a \'G\' Thang',
    artist: 'Dr. Dre, Snoop Dogg',
    artwork: './images/artwork/nuthin-g-thang.jpg',
    url: './songs/nuthin-g-thang.mp3'
  },

  {
    name: 'To Voando Alto',
    artist: 'Mc Poze Do Rodo, DJ Gabriel do Borel',
    artwork: './images/artwork/to-voando-alto.jpg',
    url: './songs/eu-to-voando-alto.mp3'
  },

  {
    name: 'Vale Nada Vale Tudo',
    artist: 'Ednaldo Pereira',
    artwork: './images/artwork/vale-nada-vale-tudo.jpg',
    url: './songs/vale-nada-vale-tudo.mp3'
  },

  {
    name: 'Hoje Eu To Terrível',
    artist: 'Cristiano Araújo',
    artwork: './images/artwork/hj-eu-to-terrivel.jpg',
    url: './songs/hj-eu-to-terrivel.mp3'
  },

  {
    name: 'Sentimentos De Vaqueiro',
    artist: 'Raí Saia Rodada',
    artwork: './images/artwork/sentimentos-de-vaqueiro.jpg',
    url: './songs/sentimentos-de-vaqueiro.mp3'
  },

  {
    name: 'Telephone Number',
    artist: 'Junko Ohashi',
    artwork: './images/artwork/telephone-number.jpg',
    url: './songs/telephone-number.mp3'
  },

  {
    name: 'Namorando e Me Querendo',
    artist: 'Henrique & Juliano',
    artwork: './images/artwork/namorando-e-me-querendo.jpg',
    url: './songs/namorando-e-me-querendo.mp3'
  },

  {
    name: 'Nada Nada',
    artist: 'Henrique & Juliano',
    artwork: './images/artwork/namorando-e-me-querendo.jpg',
    url: './songs/nada-nada.mp3'
  },

  {
    name: 'Tcc (Truco Cerveja e Churrasco)',
    artist: 'Antony & Gabriel',
    artwork: './images/artwork/tcc.jpg',
    url: './songs/tcc.mp3'
  },

  {
    name: 'Tó Sou Seu',
    artist: 'Fred & Gustavo, Wesley Safadão',
    artwork: './images/artwork/to-sou-seu.jpg',
    url: './songs/to-sou-seu.mp3'
  },

  {
    name: 'Playing To Lose',
    artist: 'Lemaitre',
    artwork: './images/artwork/playing-to-lose.jpg',
    url: './songs/playing-to-lose.mp3'
  },

  {
    name: 'Lose Yourself To Dance',
    artist: 'Daft Punk, Pharrell Williams',
    artwork: './images/artwork/lose-yourself-to-dance.jpg',
    url: './songs/lose-yourself-to-dance.mp3'
  },

  {
    name: 'Have You Ever Seen The Rain',
    artist: 'Creedence Clearwater Revival',
    artwork: './images/artwork/have-u-ever-seen-the-rain.jpg',
    url: './songs/have-u-ever-seen-the-rain.mp3'
  }
])