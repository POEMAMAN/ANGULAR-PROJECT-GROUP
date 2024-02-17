const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetExpanse = require('../../api/models/models.expanse/planets.expanse.model');

const arrayPlanetsExpanse = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '30 billion',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'O.N.I.',
    moons: '1 (Moon)',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172839/THE%20EXPANSE/PLANETAS/erth2_i8cv5s.jpg',
  },
  {
    name: 'Mars',
    settled: '2035',
    population: '9 billion',
    capital: 'New London',
    location: 'Sol System',
    gravity: '0.376 g',
    country: 'Mars Congresionnl Republic',
    moons: '2 (Fobos,Deimos)',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172835/THE%20EXPANSE/PLANETAS/MarsMCR_cra9ic.webp',
  },
  {
    name: 'Anderson Station',
    settled: '22 century',
    population: '10.000',
    capital: 'aNDERSON sTAION',
    location: 'Sol System',
    gravity: '0,3 G (Artificial)',
    country: 'O.P.A.',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171676/THE%20EXPANSE/PLANETAS/Anderson_Station_keczni.webp',
  },
  {
    name: 'Ceres',
    settled: '22 century',
    population: '600.000',
    capital: 'Ceres City',
    location: 'Sol System, Belt',
    gravity: '0,3 G (artificial)',
    country: 'O.N.U.',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171680/THE%20EXPANSE/PLANETAS/Ceres_w4t1gv.webp',
  },
  {
    name: 'Eros Station',
    settled: '22 century',
    population: '1.500.000',
    capital: 'Ceres City',
    location: 'Sol System, Belt',
    gravity: '0,3 G (Artificial)',
    country: 'O.N.O. / M.C.R',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171685/THE%20EXPANSE/PLANETAS/Eros_station_jynnim.webp',
  },
  {
    name: 'Mercury',
    settled: '22 century',
    population: '0',
    capital: 'Ceres City',
    location: 'Sol System',
    gravity: '0,38 G',
    country: '',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173095/THE%20EXPANSE/PLANETAS/Mercury_qnglf0.webp',
  },
  {
    name: 'Pallas',
    settled: '22 century',
    population: '13.000',
    capital: 'Pallas City',
    location: 'Sol System, Belt',
    gravity: '0,022 G (artificial)',
    country: 'Free Navy',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171689/THE%20EXPANSE/PLANETAS/Pallas_S5_mzzpdh.webp',
  },
  {
    name: 'Phobos',
    settled: '22 century',
    population: '0',
    capital: '',
    location: 'Sol System, Belt',
    gravity: '581.4 g (Artificial)',
    country: 'M.C.R',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173100/THE%20EXPANSE/PLANETAS/phobos_nddrbr.webp',
  },
  {
    name: 'Phoebe',
    settled: '22 century',
    population: '<1.000',
    capital: '',
    location: 'Sol System, Belt',
    gravity: '0.004 g',
    country: 'M.C.R.',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171694/THE%20EXPANSE/PLANETAS/Phoebe_qhr9hr.webp',
  },
  {
    name: 'Toth Station',
    settled: '22 century',
    population: '50',
    capital: 'Toth Station',
    location: 'Sol System, Belt',
    gravity: '0,38 G (artificial)',
    country: 'Protogen',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171663/THE%20EXPANSE/PLANETAS/S02E02thothstation27m55s_nrmiwu.webp',
  },
  {
    name: 'Tyco Station',
    settled: '22 century',
    population: '15.000',
    capital: 'Tyco Station',
    location: 'Sol System, Belt',
    gravity: '0,022 G ',
    country: 'O.P.A. / Tycho Manufacturing',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171667/THE%20EXPANSE/PLANETAS/S05E01tychostation08m31s_oys9vj.webp',
  },
  {
    name: 'Venus',
    settled: '22 century',
    population: '0',
    capital: '',
    location: 'Sol System',
    gravity: '0.904 g',
    country: '',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173090/THE%20EXPANSE/PLANETAS/venus_xzswol.jpg',
  },
  {
    name: 'Vesta',
    settled: '22 century',
    population: '<500.000',
    capital: '',
    location: 'Sol System, Belt',
    gravity: '0.004 g',
    country: 'Free Navy.',
    moons: '0',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171672/THE%20EXPANSE/PLANETAS/Vesta_in_natural_color_qaiioc.webp',
  },
 
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsExpanse = await PlanetExpanse.find();
    if (allPlanetsExpanse.length > 0) {
      await PlanetExpanse.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsExpanseMap = arrayPlanetsExpanse.map((planet) => new PlanetExpanse(planet));
    await PlanetExpanse.insertMany(planetsExpanseMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
