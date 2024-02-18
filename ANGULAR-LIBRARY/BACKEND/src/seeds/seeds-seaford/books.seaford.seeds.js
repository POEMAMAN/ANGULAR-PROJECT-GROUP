const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookSeaford = require('../../api/models/models.seaford/books.seaford.model');

const arrayBooksSeaford = [
  {
    title: "Midshipman's Hope",
    publication_year: 1994,
    saga: 'Seafort Saga',
    saga_index: 1,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'En el año 2194, Nicholas Seafort, de diecisiete años, es destinado al Hibernia como guardiamarina. Destino: la próspera colonia de la Nación de la Esperanza. Pero cuando un intento de rescate sale devastadoramente mal, Seafort se ve empujado a un papel de liderazgo que nunca había previsto. Los otros oficiales están resentidos con él, pero Seafort debe enfrentarse a problemas más peligrosos, desde un ordenador de navegación dañado hasta una epidemia mortal. Incluso la Nación de la Esperanza le tiene reservada una desagradable sorpresa. Seafort podría ser la única esperanza de la tripulación...',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089688/APISCIFI/BOOKS/Midshipmans_Hope_vultrn.jpg',
  },
  {
    title: "Challenger's Hope",
    publication_year: 1995,
    saga: 'Seafort Saga',
    saga_index: 2,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'Tras sus hazañas a bordo del Hibernia en Midshipman Hope, Nicholas Seafort consigue el mando de su primera nave, el Challenger, y se une al grupo de trabajo del almirante Tremaine. Sin embargo, su primer encuentro es un duro despertar, ya que Tremaine lo degrada a una nave más pequeña y abarrotada y hace caso omiso del informe de Seafort sobre la existencia de vida alienígena en la Nación Esperanza. Por encima de todo, Seafort está preocupado por su mujer embarazada, que dará a luz durante el viaje. Tras un ataque alienígena y la traición de un almirante, Seafort, herido, queda abandonado a bordo de una nave sin armas ni combustible. Cientos de vidas penden de un hilo mientras Seafort debe encontrar la forma de sobrevivir.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089661/APISCIFI/BOOKS/Challenger_s_Hope_j21ps4.jpg',
  },
  {
    title: "Prisoner's Hope",
    publication_year: 1995,
    saga: 'Seafort Saga',
    saga_index: 3,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'Mientras se recupera de las heridas físicas y emocionales que sufrió en Challenger Hope, Nick Seafort es nombrado enlace entre los ricos plantadores de Hope Nation y la Marina de las Naciones Unidas. Los acechantes alienígenas con forma de pez que escupen ácido son una amenaza real, y todo el mundo está al límite. Cuando la flota regresa a la Tierra, crece el descontento entre los habitantes de Hope Nation, que se sienten abandonados por los militares y dejados a merced de la horda alienígena. La saga Seafort continúa mientras Nick Seafort se enfrenta a los poderosos rebeldes de su país, a los alienígenas de sangre fría y a sus propias dudas. Debe tomar una decisión que podría salvar a la Nación de la Esperanza, pero que también le condenaría a muerte.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089707/APISCIFI/BOOKS/Prisioner_s_Hope__omjgfq.jpg',
  },
  {
    title: "Fisherman's Hope",
    publication_year: 1996,
    saga: 'Seafort Saga',
    saga_index: 4,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'La suerte siempre ha ido en ambas direcciones para el comandante naval Nicholas Seafort. Aunque ha conseguido salvar la colonia de la Nación de la Esperanza de un ataque alienígena, él y sus amigos han pagado un alto precio. Más recientemente, sus hazañas le han valido un digno puesto como instructor en la Academia Naval de las Naciones Unidas. Pero, como sospecha Seafort, los problemas no andan lejos. El regreso a la Tierra significa volver a sus raíces, algunas de las cuales desearía que permanecieran enterradas. Se siente incómodo con la fama y no siempre puede contener su temperamento cuando la maquinaria política cambia a su alrededor. Pero cuando los alienígenas con forma de pez organizan un ataque, Seafort es el único hombre con el que la Tierra puede contar. Ahora debe decidir si tiene el valor y la fortaleza para tomar una terrible decisión. . .',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089670/APISCIFI/BOOKS/Fisherman_s_Hope_y8z7pb.jpg',
  },
  {
    title: 'Voices of Hope',
    publication_year: 1996,
    saga: 'Seafort Saga',
    saga_index: 5,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'Todo el mundo conoce a Nick Seafort como "el Pescador", el héroe que detuvo a los despiadados alienígenas con forma de pez cuando atacaron la Tierra. Voces de esperanza retoma la vida de Seafort décadas después, tras su jubilación como Secretario General de las Naciones Unidas. A pesar de su poder, ha sido incapaz de ayudar a los llamados transpops, personas desesperadas que viven en los peligrosos niveles inferiores de la ciudad de Nueva York. Cuando el hijo de Seafort, Philip, sigue a un amigo por las calles de Nueva York, se encuentra con la cultura transpop, evolucionada para existir en la sombra y operar con despiadada eficacia. Los transexuales son un polvorín a punto de estallar, y la escasez de agua parece ser la chispa que demostrará que los humanos pueden ser mucho más peligrosos que cualquier alienígena del espacio exterior. Hace mucho tiempo, Seafort había desafiado estas violentas calles para encontrar a su mujer; ahora debe volver para salvar a su hijo.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089716/APISCIFI/BOOKS/Voices_of_Hope_bwlt8s.jpg',
  },
  {
    title: "Patriarch's Hope",
    publication_year: 1999,
    saga: 'Seafort Saga',
    saga_index: 6,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'La Rebelión Transpop terminó hace diez años con el ahora Secretario General Nicholas Seafort como un héroe. Con ese capital político, Seafort se convirtió en uno de los hombres más poderosos del mundo. Pero el poder político no es todo lo que parece ser. Mientras Seafort intenta mantenerse fiel a su código moral, está siendo arrastrado en todas direcciones. Sus antiguos colegas en la Armada exigen más barcos, mientras que los grupos de presión ambientalistas le ruegan que repare el ecosistema dañado del planeta. La Esperanza del Patriarca vuelve a centrarse en el carismático y atribulado personaje principal de la Saga de Seafort. Un desastre explosivo obliga a Nick a reexaminar su vida, su familia y su futuro mientras los adversarios se alinean en su contra. Para salvar al planeta de sí mismo, necesitará astucia, aliados y una gran dosis de suerte.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089697/APISCIFI/BOOKS/Patriarch_s_Hope_ucxmix.jpg',
  },
  {
    title: 'Children of Hope',
    publication_year: 2001,
    saga: 'Seafort Saga',
    saga_index: 7,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'En la historia continuada de un hombre atado a su deber y torturado por la culpa de todo lo que su deber le exige, el capitán Nicholas Seafort se enfrenta a algo mucho más ordinario que las guerras alienígenas, las rebeliones planetarias y el caos ecológico a los que ha sobrevivido, algo que finalmente podría costarle la vida.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090308/APISCIFI/BOOKS/Children_of_Hope_ssohlv.jpg',
  },
  {
    title: "Hope Rearmed/Galahad's Hope",
    publication_year: 0,
    saga: 'Seafort Saga',
    saga_index: 8,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    resume: 'La Esperanza de Galahad es el título provisional del octavo y último libro de la Saga Seafort de novelas de ciencia ficción, y la secuela de Hijos de la Esperanza. Se informó que el manuscrito estaba completo antes de la muerte del autor David Feintuch; sin embargo, Orbit UK no tiene planes actuales de publicar este libro. Según un ejecutivo de marketing en línea de Orbit, no han sido contactados por nadie relacionado con David Feintuch con la intención de publicar el manuscrito.',
    picture: null,
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksSeaford = await BookSeaford.find();
    if (allBooksSeaford.length > 0) {
      await BookSeaford.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksSeafordMap = arrayBooksSeaford.map((book) => new BookSeaford(book));
    await BookSeaford.insertMany(booksSeafordMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
