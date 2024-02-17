const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterHonorverse = require('../../api/models/models.universo/characters.model');

const arrayCharactersHonorverse = [
  {
    name: 'Honor Harrington',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '2 de octubre de 1859 PD',
    planet: 'Sphinx',
    country: 'Manticore',
    picture:
      'https://res.',
  },
  {
    name: 'Andrew LaFollet',
    profession: 'Capitán Naval',
    rank: 'Capitán de Corbeta',
    birthday: '1842 PD',
    planet: 'Grayson',
    country: 'Grayson',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108185/HONOVERSO/PERSONAJES/wxrgcdarhfkkxak3b5wg_aszji1.webp',
  },
  {
    name: 'Thomas Theisman',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1832 PD',
    planet: 'Haven',
    country: 'Haven',
    picture:
      'h',
  },
  {
    name: 'Hamish Alexander',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1820 PD',
    planet: 'Manticore',
    country: 'Manticoree',
    picture:
      '',
  },
  {
    name: 'Horace Harkness',
    profession: 'Comandante Naval',
    rank: 'Chief Warrant Officer',
    birthday: '1832 PD',
    planet: 'Manticore',
    country: 'Manticore',
    picture:
      '',
  },
  {
    name: 'Elisabeth III Winton',
    profession: 'Dirigente',
    rank: 'Reina',
    birthday: '1865 PD',
    planet: 'Manticore',
    country: 'Manticore',
    picture:
      '',
  },
  {
    name: 'Aldona Anisimovna',
    profession: 'Espia',
    rank: 'Espia',
    birthday: '1882 PD',
    planet: 'Mesa',
    country: 'Mesa',
    picture:
      '',
  },
  {
    name: 'Benjamin Mayhew IX',
    profession: 'Dirigente',
    rank: 'Protector',
    birthday: '1871 PD',
    planet: 'Grayson',
    country: 'Grayson',
    picture:
      '',
  },
  {
    name: 'Lester Tourville',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1881 PD',
    planet: 'Haven',
    country: 'Haven',
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
    const allCharactersHonorverse = await CharacterHonorverse.find();
    if (allCharactersHonorverse.length > 0) {
      await CharacterHonorverse.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersHonorverseMap = arrayCharactersHonorverse.map(
      (character) => new CharacterHonorverse(character)
    );
    await CharacterHonorverse.insertMany(charactersHonorverseMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
