const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryForeverWar = require('../../api/models/models.foreverWar/countries.foreverWar.model');

const arrayCountriesForeverWar = [
  
  {
    name: 'Humans',
    capital: 'Earth',
    foundation_date: 'Antiguedad',
    resume: 'Especie bipeda humanoide originaria del planeta Tierra que comienza su expansion espacial tras desarrollar el viaje por impulso, momento en que choca con la civilizacion Taurana.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708211194/FOREVER%20WAR/COUNTRIES/Humans_qqqx6l.jpg',
  },
  {
    name: 'Taurans',
    capital: 'Tauran Homeworld',
    foundation_date: '?',
    resume: 'Especie Alienigena de mente colmena que tras encontrarse con los humanos, empieza una guerra sin cuartel con ellos',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138370/FOREVER%20WAR/COUNTRIES/TAURANS_ps4sa0.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesForeverWar = await CountryForeverWar.find();
    if (allCountriesForeverWar.length > 0) {
      await CountryForeverWar.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesForeverWarMap = arrayCountriesForeverWar.map((country) => new CountryForeverWar(country));
    await CountryForeverWar.insertMany(countriesForeverWarMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
