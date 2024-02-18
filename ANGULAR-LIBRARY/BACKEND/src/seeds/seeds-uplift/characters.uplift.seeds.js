const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterUplift = require('../../api/models/models.uplift/characters.uplift.model');

const arrayCharactersUplift = [
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
    picture:
      '',
  },
  {
    name: '',
    profession: '',
    rank: '',
    birthday: '()',
    planet: '',
    country: '',
    resume: '',
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
    const allCharactersUplift = await CharacterUplift.find();
    if (allCharactersUplift.length > 0) {
      await CharacterUplift.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersUpliftMap = arrayCharactersUplift.map(
      (character) => new CharacterUplift(character)
    );
    await CharacterUplift.insertMany(charactersUpliftMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
