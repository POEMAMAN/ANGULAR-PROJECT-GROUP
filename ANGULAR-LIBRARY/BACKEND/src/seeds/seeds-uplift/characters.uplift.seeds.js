const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterUplift = require('../../api/models/models.uplift/characters.uplift.model');

const arrayCharactersUplift = [
  {
    name: 'Fiben Bolger',
    profession: 'Colonial Militia',
    rank: 'Colonial Militia',
    birthday: '()',
    planet: 'Garth',
    country: 'EarthClan',
    resume: 'Fiben Bolger era un ecólogo de quimeras y teniente en la milicia en Garth. Ademas era un Tarjeta azul, es decir tenia permitido reproducirse.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708287658/PUPILOS/PERSONAJES/fiben_folger_fkum8p.jpg',
  },
  {
    name: 'Ataclena',
    profession: 'Embassador`s Daughter',
    rank: 'Embassador`s Daughter',
    birthday: '()',
    planet: '',
    country: '',
    resume: 'Hija del embajador Tymbrini, Uthacalthing en Garth, que se convierte en la lider del ejercito iregular de GArth, durante la rebelion contra los Gubrus.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708264829/PUPILOS/PERSONAJES/images_jzjppq.jpg',
  },
  {
    name: 'Alvin Hph-wayuo',
    profession: 'Story Tealer',
    rank: 'Story Tealer',
    birthday: '()',
    planet: 'Jijo',
    country: 'Ilegals',
    resume: "Alvin Hph-wayuo es un personaje ficticio en el universo Uplift de David Brin. Es un Hoon, hijo de Mu-phauwq y Yowg-wayuo, del pueblo de Wuphon's Port en Jijo. Es un 'humicker': le gusta la cultura humana, el lenguaje y la literatura, especialmente la ciencia ficción, por lo que adoptó el apodo de Alvin, tomado del protagonista principal de 'The City and the Stars' de Arthur C. Clarke. Es uno de los principales personajes narradores en la Trilogía de la Tormenta de Uplift y el único cuya historia está narrada en primera persona.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066111/PUPILOS/PERSONAJES/Alvin_Hph-wayuo_ysgtol.jpg',
  },
  {
    name: 'Harry Harms',
    profession: '',
    rank: '',
    birthday: '()',
    planet: 'Horst',
    country: 'EarthClan',
    resume: 'Harry creció en Horst, un planeta asignado a los humanos para su restauración, después de que sus padres, Marko y Felicity, decidieran dejar la TSS Pelenor y estudiar las tribus humanas que vivían allí.Harry trabajaba en la Base Kazzkark para el Instituto de Navegación, realizando estudios en el espacio E.En uno de esos viajes, rescató a Reety y Alvin. Sin embargo, una criatura memetica moribunda forzó un cambio en su imagen, lo que resultó en que su pelaje se volviera completamente blanco y le creciera una cola. Lleva a varias personas a Jijo justo antes de la división galáctica. Su presencia en el planeta debería resultar muy significativa, suponiendo que sus cambios sean heredables.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708066106/PUPILOS/PERSONAJES/HarryHarms_z4xn0b.jpg',
  },
  {
    name: 'Gilliam Basking',
    profession: 'Doctor',
    rank: 'Doctor',
    birthday: '()',
    planet: 'Earth',
    country: 'EarthClan',
    resume: 'Una médica y agente del Consejo Terrageno. Es la más experimentada entre el reducido número de humanos a bordo de la nave Streaker.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708331196/PUPILOS/PERSONAJES/Gilliam_Baskim_fif3wp.jpg',
  },
  {
    name: 'Tom Orley',
    profession: 'Spy',
    rank: 'Spy',
    birthday: '()',
    planet: 'Earth',
    country: 'EarthClan',
    resume: 'Un agente del Consejo Terrageno que es amante de Gillian Baskin.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708331196/PUPILOS/PERSONAJES/Tom_Orley_m801i2.jpg',
  }

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
