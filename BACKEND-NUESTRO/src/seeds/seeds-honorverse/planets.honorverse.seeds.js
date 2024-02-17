const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetHonorverse = require('../../api/models/models.universo/planets.model');

const arrayPlanetsHonorverse = [
  {
    name: 'Manticore',
    settled: '1416 PD',
    population: '1,5 billion',
    capital: 'Aterrizaje',
    location: 'Sistema Manticore A',
    gravity: '1,01 G',
    country: 'Manticore',
    moons: '1 (Thorson)',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022812/HONOVERSO/PLANETAS/fs4w5hz1ccr38mfzgpva_ini48y.png',
  },
  {
    name: 'Sphinx',
    settled: '1430 PD',
    population: '1,2 billion',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,35 G',
    country: 'Manticore',
    moons: '2 (Perseus, Bellerefonte)',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022811/HONOVERSO/PLANETAS/uyimfkiwbgm8ie5ihsae_s32anq.webp',
  },
  {
    name: 'Gryphon',
    settled: '1492 PD',
    population: '600 millones',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,05 G',
    country: 'Manticore',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022809/HONOVERSO/PLANETAS/tvq5hmayj9k2m06xng31_sgyij5.webp',
  },
  {
    name: 'San Martin',
    settled: '1485 PD',
    population: '1 billion',
    capital: 'Ciudad San Marcos',
    location: 'Sistema Trevor Star',
    gravity: '2,7 G',
    country: 'Manticore',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022807/HONOVERSO/PLANETAS/t7m2a2iy3xux4eydr4d0_z1pqp9.webp',
  },
  {
    name: 'Grayson',
    settled: '988 PD',
    population: '3 billion',
    capital: 'Austin City',
    location: 'Sistema Grayson',
    gravity: '1,17 G',
    country: 'Grayson',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022805/HONOVERSO/PLANETAS/s9yqqhjcxvhmrpxesncl_ojbtfu.jpg',
  },
  {
    name: 'Medusa',
    settled: '',
    population: '700 millones',
    capital: 'Residencia del comisionado',
    location: 'Sistema Medusa',
    gravity: '0,85 G',
    country: 'Manticore',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022804/HONOVERSO/PLANETAS/qekouhi6i5sigdhqjqsx_ds7p07.webp',
  },
  {
    name: 'Mesa',
    settled: '1460 PD',
    population: '6 billions',
    capital: 'Mendel',
    location: 'Sistema Mesa',
    gravity: '1,02',
    country: 'Liga Solariana',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022802/HONOVERSO/PLANETAS/j6dzftqnfmtmpuduxia2_gaqi22.webp',
  },
  {
    name: 'Tierra',
    settled: 'Hogar natal',
    population: 'muchos billions',
    capital: 'Chicago',
    location: 'Sistema Solar',
    gravity: '1',
    country: 'Liga Solariana',
    moons: '1 (Luna)',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022802/HONOVERSO/PLANETAS/j6dzftqnfmtmpuduxia2_gaqi22.webp',
  },
  {
    name: 'Beowulf',
    settled: '250 PD',
    population: 'muchos billions',
    capital: 'Columbia',
    location: 'Sistema Sigma Draconis',
    gravity: '1',
    country: 'Liga Solariana',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022799/HONOVERSO/PLANETAS/hkpwq4cvowqsii7adqgm_lojkkm.webp',
  },
  {
    name: 'Haven',
    settled: '1309 PD',
    population: 'muchos billions',
    capital: 'Nuevo Paris',
    location: 'Sistema Haven',
    gravity: '1',
    country: 'Haven',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022797/HONOVERSO/PLANETAS/heam5qdideud0bemi0pl_isyzio.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsHonorverse = await PlanetHonorverse.find();
    if (allPlanetsHonorverse.length > 0) {
      await PlanetHonorverse.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsHonorverseMap = arrayPlanetsHonorverse.map((planet) => new PlanetHonorverse(planet));
    await PlanetHonorverse.insertMany(planetsHonorverseMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
