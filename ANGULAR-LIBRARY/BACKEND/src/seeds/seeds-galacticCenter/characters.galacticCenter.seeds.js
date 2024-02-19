const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterGalacticCenter = require('../../api/models/models.galacticCenter/characters.galacticCenter.model');

const arrayCharactersGalacticCenter = [
  {
    name: 'Nigel Walmsley',
    profession: 'Scientist, astronaut.',
    rank: 'Scientist, astronaut.',
    birthday: '()',
    planet: 'Earth',
    country: 'U.K.',
    resume: 'En 1999 (2019 en la segunda edición), Nigel Walmsley, un científico británico y astronauta de la NASA, es enviado para colocar una bomba termonuclear en un cometa llamado Ícaro que se dirige directamente hacia la India. Ícaro resulta ser grande, sólido y hecho de un compuesto de níquel-hierro. A Nigel se le ordena plantar el arma y marcharse para que pueda ser detonada. Convence al Control de Misión para que le permita colocarla en una gran fisura que descubrió, para que sea aún más efectiva. 15 años despues es enviado con la Lancer a Ros125 para investigra a los EM. Y milenios despues, en el centro ayuda a la familia Bishop y a lo que queda de la humanidad en su lucha final con los mecs.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708317000/GALACTIC%20CENTER/PERSONAJES/Nigel_Walmsley_jtsw62.jpg',
  },
  {
    name: 'Miriapoda Quath',
    profession: 'Soldier',
    rank: 'Soldier',
    birthday: '()',
    planet: 'Space',
    country: 'Miriapodas',
    resume: 'Civilizacion alieginigena que ha sobreviido durante eones al exterminio de los mecs, viajando por espacio, buscando nuevas especies organicas que le ayuden en la guerra con los mecs.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708317329/GALACTIC%20CENTER/PERSONAJES/Miriapoda_Quarth_afo1h6.jpg',
  },
  {
    name: 'Toby Bishop',
    profession: 'Soldier',
    rank: 'Soldier',
    birthday: '()',
    planet: 'SnowFlake',
    country: 'Humans',
    resume: 'Hijo de Killen Bishop, luchas junto a el dentor de la Argo contra los Mecs.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139231/GALACTIC%20CENTER/PERSONAJES/Toby%20Bishop.webp',
  },
  {
    name: 'Killen Bishop',
    profession: 'Soldier',
    rank: 'Soldier',
    birthday: '()',
    planet: 'SnowFlake',
    country: 'Humans',
    resume: 'Capitan de la ARgos, y lider de los ultimos humanos del planeta NieveClara (SnowFlake).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708139203/GALACTIC%20CENTER/PERSONAJES/Killen%20Bishop.jpg',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersGalacticCenter = await CharacterGalacticCenter.find();
    if (allCharactersGalacticCenter.length > 0) {
      await CharacterGalacticCenter.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersGalacticCenterMap = arrayCharactersGalacticCenter.map(
      (character) => new CharacterGalacticCenter(character)
    );
    await CharacterGalacticCenter.insertMany(charactersGalacticCenterMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
