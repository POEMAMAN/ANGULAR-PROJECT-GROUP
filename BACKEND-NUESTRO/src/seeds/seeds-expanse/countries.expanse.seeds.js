const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryExpanse = require('../../api/models/models.universo/countries.expanse.model');

const arrayCountriesExpanse = [
  {
    name: 'O.N.U.',
    capital: 'New York',
    foundation_date: 'Siglo 20',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171703/THE%20EXPANSE/PAISES/ONU_gegjot.webp',
  },
  {
    name: 'Mars Congresionnl Republic',
    capital: 'Londres Nova, Mars, SOL',
    foundation_date: 'Siglo 21',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171699/THE%20EXPANSE/PAISES/Mars_Congressional_Republic_flags_nqqzoy.webp',
  },
  {
    name: 'O.P.A, Outer Planets Alliance',
    capital: 'Ceres, Belt, SOL',
    foundation_date: 'Siglo 22',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171755/THE%20EXPANSE/PAISES/OPA_logo_dr7wpf.webp',
  },
  {
    name: 'Free Navy',
    capital: 'Ceres',
    foundation_date: 'siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171712/THE%20EXPANSE/PAISES/Free_navy_show_badge_s5_cdg38s.webp',
  },
  {
    name: 'Protogen',
    capital: 'eARTH',
    foundation_date: 'siglo 22',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172311/THE%20EXPANSE/PAISES/PROTOGEN_lribhr.webp',
  },
  {
    name: 'Transport Union',
    capital: '',
    foundation_date: 'siglo 21',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172320/THE%20EXPANSE/PAISES/Transport_Union_Logo_2_o6vsfi.webp',
  },
  {
    name: 'Mao-Kwikowski Mercantile',
    capital: 'Earth',
    foundation_date: 'siglo 22',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172315/THE%20EXPANSE/PAISES/Mao-kwik_sn7zuw.webp',
  },
  {
    name: 'M.C.R.N.',
    capital: 'Mars',
    foundation_date: 'siglo 21',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172458/THE%20EXPANSE/PAISES/MCRN_logo_ch6oay.webp',
  },
  {
    name: 'Royal Charter Energy',
    capital: 'Earth',
    foundation_date: 'siglo 21',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172462/THE%20EXPANSE/PAISES/Rcenewterrabadge_txvubi.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesExpanse = await CountryExpanse.find();
    if (allCountriesExpanse.length > 0) {
      await CountryExpanse.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesExpanseMap = arrayCountriesExpanse.map((country) => new CountryExpanse(country));
    await CountryExpanse.insertMany(countriesExpanseMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
