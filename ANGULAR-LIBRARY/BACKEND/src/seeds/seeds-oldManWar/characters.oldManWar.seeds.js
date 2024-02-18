const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterOldManWar = require('../../api/models/models.oldManWar/characters.oldManWar.model');

const arrayCharactersOldManWar = [
  {
    name: 'Charles Boutin',
    profession: 'scientist',
    rank: 'scientist',
    birthday: '()',
    planet: 'Phoenix',
    country: 'Colonial Union',
    resume: 'Cientifico que traiciona a la humanidad para proteger a su hija,',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031279/OLD%20MAN%20WARS/PERSONAJES/CHARLES_BOUTIN_kkg3wt.jpg',
  },
  {
    name: 'John Perry',
    profession: 'Soldier',
    rank: 'Soldier',
    birthday: '()',
    planet: 'Earth',
    country: 'Colonial Union',
    resume: 'John Perry nació en la Tierra. Él y su esposa Kathy tuvieron un hijo, llamado Charlie. Tras cumplir 75 años, se une a la Fuerza de Defensa Colonial, que protege a los colonos interplanetarios de la humanidad.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031271/OLD%20MAN%20WARS/PERSONAJES/JOHN_PERRY_ddq6fs.jpg',
  },
  {
    name: 'Jane Sagan',
    profession: 'Special Forces',
    rank: 'Special Forces',
    birthday: '(Decantada)',
    planet: '',
    country: 'Colonial Union',
    resume: "Jane Sagan is a Special Forces member who appears throughout the Old Man's War series.She was created from the DNA from the deceased Katherine Rebecca Perry.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031268/OLD%20MAN%20WARS/PERSONAJES/JANE_SAGAN_aljred.jpg',
  },
  {
    name: 'Jarec Dyrac',
    profession: 'Special Forces',
    rank: 'Special Forces',
    birthday: '(Decantada)',
    planet: 'Phoenix',
    country: 'Colonial Union',
    resume: 'Jared Diract fue decantado en la Estación Phoenix. El objetivo de su creación era proporcionar una plantilla neural adecuada a la que transferir la conciencia almacenada de Charles Boutin. Fue creado a partir del ADN de Charles Boutin modificado para crear un soldado de las Fuerzas Especiales y evitar así los problemas legales y éticos que conlleva la creación directa de un clon humano.Jared es un nombre bíblico que significa "descendiente".Dirac procede de Paul Dirac, físico teórico inglés y Premio Nobel que contribuyó al desarrollo de la mecánica cuántica y la electrodinámica cuántica.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271350/OLD%20MAN%20WARS/PERSONAJES/JarecDirac_lagsqb.jpg',
  },
  {
    name: 'Hickory&Dickory',
    profession: 'Soldier',
    rank: 'Soldier',
    birthday: '()',
    planet: 'Obim Planet',
    country: 'Obins',
    resume: 'Son los dos Obin de alto rango que protegen a Zoe, porque es su mayor tesoro.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271257/OLD%20MAN%20WARS/PERSONAJES/Hickory_lzo91c.jpg',
  },
  {
    name: 'Zoe Perry Boutin',
    profession: '',
    rank: '',
    birthday: '()',
    planet: 'Phoenix',
    country: 'Colonial Union',
    resume: 'Zoë Boutin Perry es hija de Charles Boutin e hija adoptiva de John Perry y Jane Sagan.Los Obin la consideran una figura religiosa porque su padre les concedió la Conciencia.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271127/OLD%20MAN%20WARS/PERSONAJES/zoe_kdmlyk.jpg',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersOldManWar = await CharacterOldManWar.find();
    if (allCharactersOldManWar.length > 0) {
      await CharacterOldManWar.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersOldManWarMap = arrayCharactersOldManWar.map(
      (character) => new CharacterOldManWar(character)
    );
    await CharacterOldManWar.insertMany(charactersOldManWarMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
