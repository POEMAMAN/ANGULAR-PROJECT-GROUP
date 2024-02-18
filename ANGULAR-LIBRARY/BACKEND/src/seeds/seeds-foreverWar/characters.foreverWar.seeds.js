const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterForeverWar = require('../../api/models/models.foreverWar/characters.foreverWar.model');

const arrayCharactersForeverWar = [
  {
    name: 'Marigay Potter',
    profession: 'Soldado',
    rank: 'Soldado',
    birthday: '()',
    planet: 'Earth',
    country: 'Humans',
    resume: 'Marygay es una soldado humana lesbiana que empieza a luchar a la mitad de la guerra con los Taurano. William y Marygay son enviados a luchar en planetas lejanos contra los tauranos, una especie alienígena y la primera con la que la humanidad ha contactado. En esta Tierra se viaja más rápido que la luz, y es el hecho de ceñirse a la física conocida lo que hace que esta obra sea tan desgarradora: cuando estos soldados regresan de cada nueva batalla, han pasado siglos en su mundo natal. Su vuelta a casa les deja siempre como extraños en una tierra extraña, donde tienen que servir de confidentes los unos a los otros.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138367/FOREVER%20WAR/PERSONAJES/marygay-potter-1_euy2wx.jpg',
  },
  {
    name: 'Tauran',
    profession: 'Alienigena',
    rank: 'Alienigena',
    birthday: '',
    planet: 'Tauran Homeworld',
    country: 'Tauranos',
    resume: 'Especie alienigena con mente colmena que batlla con los seres humanos por mas de 1000 años',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138364/FOREVER%20WAR/PERSONAJES/TAURAN_sxyo8c.jpg',
  },
  {
    name: 'William Mandela',
    profession: 'Soldado',
    rank: 'Soldado',
    birthday: '()',
    planet: 'Earth',
    country: 'Humans',
    resume: 'Soldado que empieza a luchas en la Guerra con los Tauranos y durante mas de 1000 años sobrevive y ver como va evolucionando la especie humana durante cientos de años mientras que para el solo pasan unos pocos años debido a la dilacion temporal.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708138361/FOREVER%20WAR/PERSONAJES/WILLIAM_MANDELLA_vcf97d.jpg',
  }
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersForeverWar = await CharacterForeverWar.find();
    if (allCharactersForeverWar.length > 0) {
      await CharacterForeverWar.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersForeverWarMap = arrayCharactersForeverWar.map(
      (character) => new CharacterForeverWar(character)
    );
    await CharacterForeverWar.insertMany(charactersForeverWarMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
