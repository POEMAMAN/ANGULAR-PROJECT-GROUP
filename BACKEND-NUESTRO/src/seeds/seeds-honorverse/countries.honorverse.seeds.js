const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryHonorverse = require('../../api/models/models.universo/countries.honorverse.model');

const arrayCountriesHonorverse = [
  {
    name: 'Manticore',
    capital: 'Aterrizaje',
    foundation_date: 'Siglo 24',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022903/HONOVERSO/PAISES/r1ocnpuptlprnywcrq9l_c8ybwl.webp',
  },
  {
    name: 'Grayson',
    capital: 'Austin City',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022905/HONOVERSO/PAISES/vgxk2ekxyqsgxstze9jr_u42pbp.png',
  },
  {
    name: 'Haven',
    capital: 'Nuevo Paris',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022901/HONOVERSO/PAISES/gyeymfdpkbdp0nvuqr7q_qdjc1b.webp',
  },
  {
    name: 'Liga Solariana',
    capital: 'Tierra',
    foundation_date: 'mundo natal',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108465/HONOVERSO/PAISES/g5msytkjb9pgte0bd0l0_gqlrtb.webp',
  },
  {
    name: 'Imperio Andermani',
    capital: 'Nuevo Berlin',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022900/HONOVERSO/PAISES/ivbdfx9wzmdypt2vtjvr_nt5g1r.jpg',
  },
  {
    name: 'Confederacion Silesiana',
    capital: 'Silesia',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022909/HONOVERSO/PAISES/xle5dkqk5snlnnrkmwpx_gf9owz.png',
  },
  {
    name: 'Republica de Erewhon',
    capital: 'Erewhon',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022907/HONOVERSO/PAISES/vpxclwngznkqqxzuwrko_hxhy0o.png',
  },
  {
    name: 'Republica de Monica',
    capital: 'Monica',
    foundation_date: 'Siglo 23',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022898/HONOVERSO/PAISES/flfu23xxk13eg6inoqxu_pgbaxb.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesHonorverse = await CountryHonorverse.find();
    if (allCountriesHonorverse.length > 0) {
      await CountryHonorverse.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesHonorverseMap = arrayCountriesHonorverse.map((country) => new CountryHonorverse(country));
    await CountryHonorverse.insertMany(countriesHonorverseMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
