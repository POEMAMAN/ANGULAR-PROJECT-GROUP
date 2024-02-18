const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookForeverWar = require('../../api/models/models.foreverWar/books.foreverWar.model');

const arrayBooksForeverWar = [
  {
    title: 'The Forever War',
    publication_year: 1974,
    saga: 'Forever War Series',
    saga_index: 1,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    resume: 'La guerra interminable, considerada por la prestigiosa Kirkus Review la mejor obra de Joe Haldeman y galardonada con los premios Nebula, Hugo y Locus de 1974, a menudo se ha interpretado como una réplica a la ideología subyacente en Tropas del espacio, de Robert Heinlen. En ella aborda Haldeman dos de los grandes temas de la literatura de todos los tiempos, la guerra y el amor, enmarcándolos en un conflicto bélico interplanetario de larga duración. Pero es sobre todo por la perfecta creación de personajes y por el tratamiento dado a sus motivaciones por lo que esta novela ha gozado de un sostenido éxito que le ha llevado más allá de los aficionados al género. Traza la historia personal de un militar y de sus conflictos para relacionarse con sus congéneres. Veterano de Vietnam, no hay duda de que Haldeman nos ofrece en esta aventura en el espacio la más autobiográfica de sus obras, y el protagonista, Mandella, es posiblemente uno de los antihéroes más inolvidables que jamás haya creado este autor.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076786/APISCIFI/BOOKS/LaGuerraInterminable_i9bvpl.jpg',
  },
  {
    title: 'Forever Free',
    publication_year: 1999,
    saga: 'Forever War Series',
    saga_index: 2,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    resume: 'Veterano de la Guerra Interminable, William Mandella lleva una vida bastante aburrida. Los ciudadanos de la Tierra han evolucionado por caminos insospechados y han tomado el control de su nuevo hogar, manteniendo con vida a los independientes habitantes humanos sólo debido a su diverso poso genético. Pero Mandella y sus camaradas no desean vivir de este modo. Así que deciden robar una nave espacial y huir a las estrellas, para comenzar la humanidad de nuevo… Sin embargo, algo sale mal y tienen que regresar a casa en animación suspendida veinticinco años más tarde, algo bastante arriesgado. El planeta ha envejecido siglos durante su viaje, y la tripulación se pregunta qué nuevo mundo los espera a su llegada…',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076794/APISCIFI/BOOKS/Lalibertadinterminable_yehy3s.jpg',
  },
  {
    title: 'Forever Peace',
    publication_year: 1997,
    saga: 'Forever War Series',
    saga_index: 3,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    resume: 'En la Tierra, el Primer Mundo ha alcanzado un bienestar inconcebible mediante la nanotecnología, en especial con la llamada nanofragua, una máquina que consigue todo lo que uno desea siempre que disponga de las materias primas. El Tercer Mundo sólo accede a ella a cambio de seguir una política dócil y amistosa.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076813/APISCIFI/BOOKS/PazInterminable_m0mnjl.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksForeverWar = await BookForeverWar.find();
    if (allBooksForeverWar.length > 0) {
      await BookForeverWar.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksForeverWarMap = arrayBooksForeverWar.map((book) => new BookForeverWar(book));
    await BookForeverWar.insertMany(booksForeverWarMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
