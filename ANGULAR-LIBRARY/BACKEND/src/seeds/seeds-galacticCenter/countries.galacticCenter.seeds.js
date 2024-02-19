const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryGalacticCenter = require('../../api/models/models.galacticCenter/countries.galacticCenter.model');

const arrayCountriesGalacticCenter = [
  {
    name: 'Humans',
    capital: '',
    foundation_date: 'Antiguedad',
    resume: 'Civilizacion organica Cybor',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708249538/GALACTIC%20CENTER/COUNTRIES/Human_aonroa.jpg',
  },  {
    name: 'Mecs',
    capital: '',
    foundation_date: 'Antiguedad',
    resume: 'Civilizacion mecanica, con le objeto de ocupar toda la galaxia y destruir todas las formas de vida organicas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708249489/GALACTIC%20CENTER/COUNTRIES/MECS_lacac7_x16dlw.jpg',
  },
  {
    name: 'Miriapoda',
    capital: 'Space',
    foundation_date: 'Antiguedad',
    resume: 'Civilizacion organica Cybor',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708317329/GALACTIC%20CENTER/PERSONAJES/Miriapoda_Quarth_afo1h6.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesGalacticCenter = await CountryGalacticCenter.find();
    if (allCountriesGalacticCenter.length > 0) {
      await CountryGalacticCenter.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesGalacticCenterMap = arrayCountriesGalacticCenter.map((country) => new CountryGalacticCenter(country));
    await CountryGalacticCenter.insertMany(countriesGalacticCenterMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
