const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetSeaford = require('../../api/models/models.seaford/planets.seaford.model');

const arrayPlanetsSeaford = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'U.N.O',
    moons: '1 (Moon)',
    resume: 'Sede de la ONU y la UNSS.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140687/SEAFORT%20SAGA/PLANETAS/TIERRA_ca2vbh.jpg',
  },
  {
    name: 'Esperanza',
    settled: 'Hace 1000 años.',
    population: '100.000.000',
    capital: 'Esperanza City',
    location: 'Esperanza System',
    gravity: '1.07 G',
    country: 'U.N.O',
    moons: '0',
    resume: 'Planeta principal de la ONU.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140690/SEAFORT%20SAGA/PLANETAS/ESPERANZA_dzfmzr.jpg',
  },
  {
    name: 'Rodeo',
    settled: 'Inexplorado',
    population: '0',
    capital: 'Rodeo City',
    location: 'Rodeo System',
    gravity: '0.97 G',
    country: 'U.N.O',
    moons: '0',
    resume: 'Escenario de una de las batallas del libro.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708140690/SEAFORT%20SAGA/PLANETAS/ESPERANZA_dzfmzr.jpg',
  },
  {
    name: 'Hope Nation',
    settled: 'Hace 200 años',
    population: '63.000.000',
    capital: 'Hope City',
    location: 'Hope Nation System',
    gravity: '1.07 G',
    country: 'U.N.O',
    moons: '0',
    resume: 'Base Naval donde transcurre gran parte de las novelas de Seaford.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066143/PUPILOS/PLANETAS/TANITH_whgfrd.jpg',
  },
  {
    name: 'Detour',
    settled: 'Colony',
    population: '1500',
    capital: 'Detour City',
    location: 'Detour System',
    gravity: '1.01 G',
    country: 'U.N.O',
    moons: '1',
    resume: 'Colonia destino de la nave de Transeuntes',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066122/PUPILOS/PLANETAS/JIJO_dcc3sn.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsSeaford = await PlanetSeaford.find();
    if (allPlanetsSeaford.length > 0) {
      await PlanetSeaford.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsSeafordMap = arrayPlanetsSeaford.map((planet) => new PlanetSeaford(planet));
    await PlanetSeaford.insertMany(planetsSeafordMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
