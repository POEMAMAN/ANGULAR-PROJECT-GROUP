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
      '',
  },
  {
    name: 'Alex Kamal',
    profession: 'Piloto',
    rank: 'Piloto',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    picture:
      '',
  },
  {
    name: 'Amos Burton',
    profession: 'Mechanic',
    rank: 'Mechanic',
    birthday: '24 CENTURY',
    planet: 'eARTH',
    country: 'O.N.U.',
    picture:
      '',
  },
  {
    name: 'Anderson Drawes',
    profession: 'Lider',
    rank: 'Lider',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A.',
    picture:
      '',
  },
  {
    name: 'Bobbier Drapper',
    profession: 'Marine',
    rank: 'Marine',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    picture:
      '',
  },
  {
    name: 'Carmina Drummers',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    picture:
      '',
  },
  {
    name: 'Chrisen Avsarala',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    picture:
      '',
  },
  {
    name: 'James Holden',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    picture:
      '',
  },
  {
    name: 'Jose Miller',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    picture:
      '',
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
