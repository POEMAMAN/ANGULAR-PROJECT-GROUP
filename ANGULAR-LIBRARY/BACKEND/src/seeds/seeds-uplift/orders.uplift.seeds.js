const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterUplift = require('../../api/models/models.uplift/characters.uplift.model');

const arrayCharactersUplift = [
  {
    name: 'Mechanical Order',
    resume: 'La vida mecánica está muy bien adaptada al espacio y muy mal adaptada al nivel E del hiperespacio. Sus mentes lógicas y mecánicas son incapaces de influir en el espacio E como los otros órdenes de vida. La vida maquinal tiene limitaciones para la replicación, pero una vez en el pasado lejano un brote maquinal coincidió con la gran ruptura anterior y sólo fue derrotado por una alianza de las otras órdenes de vida.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065131/PUPILOS/ORDENES/MechanicalOrder_hhytzv.jpg',
  },
  {
    name: 'Transcendent Order',
    resume: 'Los trascendentes viven alrededor y, posiblemente, dentro o más allá de las singularidades de los agujeros negros. Los miembros de la orden trascendente son conglomerados resultantes de la fusión de miembros de todas las demás órdenes. Muchos trascendentes entran en los agujeros negros en busca de "reinos invisibles". La proximidad a las singularidades de los agujeros negros permite a los transcendentes procesar cantidades extremadamente grandes de datos, pudiendo incluso predecir el momento y la naturaleza de la ruptura presumiblemente sin cálculo. Como la mayor parte de la civilización galáctica, parecen pensar en términos de especies más que de individuos, dispuestos a sacrificar trillones en la consecución de sus objetivos, pero también buscando minimizar los efectos de la ruptura.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065126/PUPILOS/ORDENES/TranscendentOrder_ggjlg8.webp',
  },
  {
    name: 'Hydrogen Order',
    resume: 'Los miembros del orden hidrógeno viven en las atmósferas de los gigantes gaseosos. Son seres de gran tamaño que pueden expulsar y reabsorber pequeñas partes de sí mismos para realizar tareas, entre ellas la lluvia de ideas. Prefieren los niveles C y D del hiperespacio, que son rutas mucho más lentas y menos utilizadas por el orden oxígeno.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065121/PUPILOS/ORDENES/HydrogenOrder_npzjgv.png',
  },
  {
    name: 'Retired Order',
    resume: 'También conocidas como los viejos, las razas más antiguas dejan atrás la sociedad galáctica y los planetas portadores de vida para asentarse en el interior de una enorme estructura que rodea por completo una estrella gigante roja. A medida que estas razas se purifican para la trascendencia, sienten cada vez más la "atracción de las mareas" y se sienten incómodas lejos de la fuerte atracción gravitatoria de un sol.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065117/PUPILOS/ORDENES/RetiredOrder_jta504.webp',
  },
  {
    name: 'Quantum Order',
    resume: 'Los miembros del orden cuántico no experimentan el tiempo en el sentido tradicional y la observación inhibe su funcionalidad. Suelen evitar el nivel E del hiperespacio. La mayoría de los seres cuánticos residen en los intersticios de espuma del cosmos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065112/PUPILOS/ORDENES/QuantumOrder_atzg4j.jpg',
  },
  {
    name: 'Oxygen Order',
    resume: 'El orden de vida oxígeno es conocido por su movimiento frenético. Prefieren los niveles A y B del viaje hiperespacial y se componen de individuos que se agrupan para formar sociedades.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065107/PUPILOS/ORDENES/OxygenOrder_yvst3e.webp',
  },
  {
    name: 'Memetic Order',
    resume: 'Los miembros del orden memético no pueden existir en el espacio normal sin una mente anfitriona en la que habitar, pero son capaces de existir de forma independiente en el nivel E del hiperespacio. Los organismos meméticos encarnan conceptos o ideas y refutar la idea mata su encarnación. Las interacciones con criaturas meméticas son argumentos expresados en forma física. Algunas criaturas meméticas buscan materia física que consumir para adquirir existencia física, lo que les permite tener efectos materiales. Los trascendentes han encontrado una forma de permitir que los organismos meméticos existan en el espacio normal libres de una mente anfitriona.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065102/PUPILOS/ORDENES/MemeticOrdeer_amkehc.jpg',
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
