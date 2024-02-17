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
    planet: '65a8309d16f608e1d57eac93',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108186/HONOVERSO/PERSONAJES/yvfcqqny7s0gjqoqopof_b0qur9.webp',
  },
  {
    name: 'Andrew LaFollet',
    profession: 'Capitán Naval',
    rank: 'Capitán de Corbeta',
    birthday: '1842 PD',
    planet: '65a8309d16f608e1d57eac96',
    country: '65a823a371cb2d6063ee162f',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108185/HONOVERSO/PERSONAJES/wxrgcdarhfkkxak3b5wg_aszji1.webp',
  },
  {
    name: 'Thomas Theisman',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1832 PD',
    planet: '65a8309d16f608e1d57eac9b',
    country: '65a823a371cb2d6063ee1630',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022854/HONOVERSO/PERSONAJES/kdrjyg5m2pfzr6hf4nb5_wxgh1z.jpg',
  },
  {
    name: 'Hamish Alexander',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1820 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022858/HONOVERSO/PERSONAJES/nn8jv0pbrf1d6qnskcac_xt9g1q.webp',
  },
  {
    name: 'Horace Harkness',
    profession: 'Comandante Naval',
    rank: 'Chief Warrant Officer',
    birthday: '1832 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022847/HONOVERSO/PERSONAJES/ojhv6v8cedz9sqydsvah_ojialz.webp',
  },
  {
    name: 'Elisabeth III Winton',
    profession: 'Dirigente',
    rank: 'Reina',
    birthday: '1865 PD',
    planet: '65a8309d16f608e1d57eac92',
    country: '65a823a371cb2d6063ee162e',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022853/HONOVERSO/PERSONAJES/jfmo5us1fc4afq8xt3hc_fmg62a.webp',
  },
  {
    name: 'Aldona Anisimovna',
    profession: 'Espia',
    rank: 'Espia',
    birthday: '1882 PD',
    planet: '65a8309d16f608e1d57eac98',
    country: '65a823a371cb2d6063ee1631',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022849/HONOVERSO/PERSONAJES/anvibig7r7eeoxpu79ly_gkdhsn.webp',
  },
  {
    name: 'Benjamin Mayhew IX',
    profession: 'Dirigente',
    rank: 'Protector',
    birthday: '1871 PD',
    planet: '65a8309d16f608e1d57eac96',
    country: '65a823a371cb2d6063ee162f',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108185/HONOVERSO/PERSONAJES/h3cunplf1eqkej5wrkw3_eh3klf.webp',
  },
  {
    name: 'Lester Tourville',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1881 PD',
    planet: '65a8309d16f608e1d57eac9b',
    country: '65a823a371cb2d6063ee1630',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022856/HONOVERSO/PERSONAJES/lmhck7ocnbocnqw3otup_xjk4it.webp',
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
