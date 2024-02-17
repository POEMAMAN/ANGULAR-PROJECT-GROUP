const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterExpanse = require('../../api/models/models.expanse/characters.expanse.model');

const arrayCharactersExpanse = [
  {
    name: 'Adolphus Murtry',
    profession: 'chief of security for Royal Charter Energy',
    rank: 'chief of security for Royal Charter Energy',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'Royal Charter Energy',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171646/THE%20EXPANSE/PERSONAJES/ADOLPHUS_MURTRY_S_sx29ox.png',
  },
  {
    name: 'Alex Kamal',
    profession: 'Piloto',
    rank: 'Piloto',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171654/THE%20EXPANSE/PERSONAJES/ALEX_KAMAL_pidor8.png',
  },
  {
    name: 'Amos Burton',
    profession: 'Mechanic',
    rank: 'Mechanic',
    birthday: '24 CENTURY',
    planet: 'eARTH',
    country: 'O.N.U.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171449/THE%20EXPANSE/PERSONAJES/Anderson_Dawes_o28bcl.webp',
  },
  {
    name: 'Anderson Drawes',
    profession: 'Lider',
    rank: 'Lider',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171449/THE%20EXPANSE/PERSONAJES/Anderson_Dawes_o28bcl.webp',
  },
  {
    name: 'Bobbier Drapper',
    profession: 'Marine',
    rank: 'Marine',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171466/THE%20EXPANSE/PERSONAJES/BOBBIE_DRAPPER_S_oatcmm.png',
  },
  {
    name: 'Carmina Drummers',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171530/THE%20EXPANSE/PERSONAJES/CAMINA_DRUMMERS_S_zzetmg.png',
  },
  {
    name: 'Chrisen Avasarala',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171610/THE%20EXPANSE/PERSONAJES/CHRISEN_AVASARALA_ltwgkp.png',
  },
  {
    name: 'James Holden',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171622/THE%20EXPANSE/PERSONAJES/JAMES_HOLDEN_nhobwj.png',
  },
  {
    name: 'Fred Johson',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171614/THE%20EXPANSE/PERSONAJES/FRED_JOHNSON_S_nse9jy.png',
  },
  {
    name: 'Naomi Nagata',
    profession: 'Mechanic',
    rank: 'Mechanic',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171642/THE%20EXPANSE/PERSONAJES/NAOMI_NAGATA_n1ccj6.png',
  },
  {
    name: 'Klaes Ashford',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A. ',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171634/THE%20EXPANSE/PERSONAJES/KLAES_ASHFORD_S_llxowo.png',
  },
  {
    name: 'Jose Miller',
    profession: 'Policia',
    rank: 'Inspector',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.N.U. ',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171630/THE%20EXPANSE/PERSONAJES/JOSE_MILLER_p1p8rf.png',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersExpanse = await CharacterExpanse.find();
    if (allCharactersExpanse.length > 0) {
      await CharacterExpanse.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersExpanseMap = arrayCharactersExpanse.map(
      (character) => new CharacterExpanse(character)
    );
    await CharacterExpanse.insertMany(charactersExpanseMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
