const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetGalacticCenter = require('../../api/models/models.galacticCenter/planets.galacticCenter.model');

const arrayPlanetsGalacticCenter = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'Humans',
    moons: '1 (Moon)',
    resume: 'Planeta origen de la raza humana.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139353/GALACTIC%20CENTER/PLANETAS/TIERRA_tiyxpb.avif',
  },
  {
    name: 'Nieve Clara',
    settled: '',
    population: '',
    capital: '',
    location: '',
    gravity: '1.07 G',
    country: '',
    moons: '0',
    resume: 'Planeta Origen de la familia Bishop',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139357/GALACTIC%20CENTER/PLANETAS/NIEVECLARA_tgkv8x.avif',
  },
  {
    name: 'Nucleo Galactico',
    settled: '',
    population: '',
    capital: '',
    location: '',
    gravity: '',
    country: '',
    moons: '0',
    resume: 'Ultimo refugio de las civilizaciones organicas',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139360/GALACTIC%20CENTER/PLANETAS/NUCLEO_GALACTICO_m67vwu.avif',
  },
  {
    name: 'Planeta Miriapoda',
    settled: '',
    population: '',
    capital: '',
    location: '',
    gravity: '1.07 G',
    country: '',
    moons: '0',
    resume: 'Planeta origen de las miriapodas, ahora destruido',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139363/GALACTIC%20CENTER/PLANETAS/PLANETA_MIRIAPODA_apcyvy.avif',
  },
];

mongoose
  .connect('process.env.DB_URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsGalacticCenter = await PlanetGalacticCenter.find();
    if (allPlanetsGalacticCenter.length > 0) {
      await PlanetGalacticCenter.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsGalacticCenterMap = arrayPlanetsGalacticCenter.map((planet) => new PlanetGalacticCenter(planet));
    await PlanetGalacticCenter.insertMany(planetsGalacticCenterMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
