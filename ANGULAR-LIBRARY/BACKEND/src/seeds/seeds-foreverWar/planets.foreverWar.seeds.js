const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetForeverWar = require('../../api/models/models.foreverWar/planets.foreverWar.model');

const arrayPlanetsForeverWar = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'Humans',
    moons: '1 (Moon)',
    resume: 'planeta origen de la especie Humana.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138341/FOREVER%20WAR/PLANETS/tierra_zwbshi.webp',
  },
  {
    name: 'Heaven',
    settled: 'Guerra Taurana',
    population: '100',
    capital: 'Heaven',
    location: 'Space',
    gravity: '0.57 G',
    country: 'Humans',
    moons: '1',
    resume: 'Principal base militar humana en la guerra con los tauranos',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138338/FOREVER%20WAR/PLANETS/HEAVEN_a13ofl.jpg',
  },
  {
    name: 'Tauro',
    settled: '?',
    population: '?',
    capital: 'Tauro',
    location: '?',
    gravity: '?',
    country: 'Taurans',
    moons: '1',
    resume: 'Hogar de los tauranos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138329/FOREVER%20WAR/PLANETS/TAURO_rkgyeq.jpg',
  }
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsForeverWar = await PlanetForeverWar.find();
    if (allPlanetsForeverWar.length > 0) {
      await PlanetForeverWar.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsForeverWarMap = arrayPlanetsForeverWar.map((planet) => new PlanetForeverWar(planet));
    await PlanetForeverWar.insertMany(planetsForeverWarMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
