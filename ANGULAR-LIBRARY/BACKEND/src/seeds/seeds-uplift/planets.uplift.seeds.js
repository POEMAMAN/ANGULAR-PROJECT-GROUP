const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetUplift = require('../../api/models/models.uplift/planets.uplift.model');

const arrayPlanetsUplift = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Galaxy 2, Solar System',
    gravity: '1.00 g',
    country: 'EarthClan',
    moons: '1 (Moon)',
    resume: 'Sede del Clan Terrestre, planeta original de la Humanidad.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028356/Uplift/PLANETAS/terra_mitarrol_laprdx.png',
  },
  {
    name: 'Oakka',
    settled: '',
    population: '0',
    capital: null,
    location: 'Galaxy 2',
    gravity: ' G',
    country: '',
    moons: '0',
    resume: 'Un mundo verde, donde el aire es complicado de respirar para los humanos. Había una sucursal de la Biblioteca Galáctica, pero se corrompió, y trato de capturar al "Streaker".',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066193/PUPILOS/PLANETAS/OAKKA_jxlu2j.jpg',
  },
  {
    name: 'Tanith',
    settled: '',
    population: '',
    capital: '',
    location: 'Galaxy 2, Tweevi System',
    gravity: ' G',
    country: 'EarthClan',
    moons: '1',
    resume: 'La ubicación más cercana de una sucursal de la Biblioteca Galáctica a la Tierra',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066143/PUPILOS/PLANETAS/TANITH_whgfrd.jpg',
  },
  {
    name: 'Calafia',
    settled: '',
    population: '6.000.000',
    capital: 'Califia City',
    location: 'Galaxy 2',
    country: 'EarthClan',
    gravity: ' G',
    country: 'EarthClan',
    moons: '0',
    resume: 'Un mundo acuático habitado por humanos y neo-delfines, actualmente ocupado por los Soro. El nombre del planeta puede referirse a una mítica amazona negra, Califia',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066138/PUPILOS/PLANETAS/CALAFIA_ojtmvc.jpg',
  },
  {
    name: 'Garth',
    settled: '',
    population: '10.000.000',
    capital: 'Puerto Helenia',
    location: 'Galaxy 2',
    gravity: ' G',
    country: 'EarthClan',
    moons: '2',
    resume: 'El planeta principal de la novela La rebelión de los pupilos, la cual describe la invasión del planeta por parte de los Gubru. El planeta es arrendado al Clan terrestre después de que su ecología/ecosistema sea devastado por los Bururalli, y está habitado por humanos y neo-delfines. Su estrella se llama Gimelhai, y su principal ciudad es Puerto Helenia.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066133/PUPILOS/PLANETAS/GARTH_zllbv5.webp',
  },
  {
    name: 'Jijo',
    settled: '',
    population: '1.000.000',
    capital: 'Bibliopolis',
    location: 'Galaxy IV',
    gravity: ' G',
    country: 'Ilegal Settlers',
    moons: '2',
    resume: "Jijo es un planeta de la Galaxia Cuatro. Muchas razas buscaron refugio en Jijo. Aparece en las novelas Brightness Reef, Infinity's Shore, Heaven's Reach y en el módulo de juego de rol GURPS Uplift.Los últimos inquilinos legales fueron los Buyur, pero ha estado ocupada por siete razas anteriores durante más de 2000 años. Jijo tiene tres lunas: Loocen, la más grande, Torgen, la segunda luna, y Passen, la más pequeña.La mayoría de los restos de Buyur han sido reducidos por mulc-arañas o empujados al Midden. Las ciudades Buyur en las lunas de Jijo están intactas bajo cúpulas.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066122/PUPILOS/PLANETAS/JIJO_dcc3sn.jpg',
  },
  {
    name: 'Fractal World',
    settled: 'Antiguedad',
    population: '1000 billones',
    capital: 'Fractal World',
    location: '',
    gravity: ' G',
    country: 'Retired Order',
    moons: '0',
    resume: 'Mundo de reposo de la Orden Retirada antes de su Transcendencia.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066117/PUPILOS/PLANETAS/FractalWorld_ekllig.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsUplift = await PlanetUplift.find();
    if (allPlanetsUplift.length > 0) {
      await PlanetUplift.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsUpliftMap = arrayPlanetsUplift.map((planet) => new PlanetUplift(planet));
    await PlanetUplift.insertMany(planetsUpliftMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
