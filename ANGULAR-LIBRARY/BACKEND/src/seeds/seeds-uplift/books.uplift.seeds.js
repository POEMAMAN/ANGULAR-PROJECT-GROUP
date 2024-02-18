const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookUplift = require('../../api/models/models.uplift/books.uplift.model');

const arrayBooksUplift = [
  {
    title: 'Startide Rising',
    publication_year: 1983,
    saga: 'Uplift Saga',
    saga_index: 2,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'Las novelas Uplift de David Brin figuran entre las más emocionantes y extraordinarias de ciencia ficción jamás escritas.  Sundiver, Startide Rising y The Uplift War -un bestseller del New York Times- forman una de las sagas más queridas de todos los tiempos.  Las historias de Brin están ambientadas en un universo futuro en el que ninguna especie puede alcanzar la sensibilidad sin ser "elevada" por una raza protectora.  Pero el mayor misterio de todos sigue sin resolverse: ¿quién elevó a la humanidad?                                                                                                                                                                           La nave de exploración terrestre Streaker se ha estrellado en el inexplorado mundo acuático de Kithrup, portando uno de los descubrimientos más importantes de la historia galáctica.  Abajo, un puñado de tripulantes humanos y delfines luchan contra una rebelión armada y un planeta hostil para salvaguardar su secreto: el destino de los Progenitores, la legendaria Primera Raza que sembró la sabiduría en las estrellas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978052/APISCIFI/BOOKS/Marea%20Estelar.jpg',
  },
  {
    title: 'The Uplift War',
    publication_year: 1987,
    saga: 'Uplift Saga',
    saga_index: 3,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'Las novelas Uplift de David Brin figuran entre las más emocionantes y extraordinarias de ciencia ficción jamás escritas.  Sundiver, Startide Rising y The Uplift War -un bestseller del New York Times- forman una de las sagas más queridas de todos los tiempos.  Las historias de Brin están ambientadas en un universo futuro en el que ninguna especie puede alcanzar la sensibilidad sin ser "elevada" por una raza protectora.  Pero el mayor misterio de todos sigue sin resolverse: ¿quién elevó a la humanidad?                                                                                                                   Mientras las armadas galácticas se enfrentan en busca de la antigua flota de los Progenitores, una brutal raza alienígena se apodera del moribundo planeta Garth.  Los diversos habitantes de Garth deben luchar contra sus señores o enfrentarse a la extinción final.  Está en juego la existencia de la sociedad terrícola y de la Tierra, así como el destino de las Cinco Galaxias.  Arrolladora, brillantemente elaborada, inventiva y dramática, La guerra de los elevados es una inolvidable historia de aventuras y maravillas de uno de los grandes de la ciencia ficción actual.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980615/APISCIFI/BOOKS/Uplift%20WAr.jpg',
  },
  {
    title: 'Brightness Reef',
    publication_year: 1995,
    saga: 'Uplift Trilogy',
    saga_index: 1,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'El planeta Jijo está prohibido a los colonos, su ecología está protegida por los guardianes de las Cinco Galaxias. Pero a lo largo de los siglos ha sido repoblado por refugiados de seis razas inteligentes. Juntos han tejido una nueva sociedad en el desierto, unidos por el miedo al Día del Juicio Final, cuando las Cinco Galaxias descubran su colonia ilegal. Entonces, una extraña nave estelar llega a Jijo. ¿Traerá el tan temido Juicio Final, o algo peor: una banda de criminales dispuestos a destruir a las seis razas de Jijo para encubrir sus propios crímenes?',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977449/APISCIFI/BOOKS/Brightness%20Reef.jpg',
  },
  {
    title: "Infinity's Shore",
    publication_year: 1996,
    saga: 'Uplift Trilogy',
    saga_index: 2,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'Para los colonos fugitivos de Jijo, es realmente el principio del fin. Mientras las naves estelares llenan los cielos, la amenaza del genocidio se cierne sobre el planeta que una vez albergó pacíficamente a seis bandas de seres sapientes. Ahora, los colonos humanos de Jijo y sus vecinos alienígenas deben tomar decisiones heroicas y aterradoras. Un científico debe reunir creyentes para una causa que nunca compartió. Y cuatro jóvenes descubren que lo que empezó como una simple aventura -imitando las hazañas de los libros terrícolas de Verne y Twain- les conduce al oscuro abismo del misterio. Mientras tanto, el Streaker, con su tripulación de delfines fugitivos, llega por fin a Jijo en una búsqueda desesperada de refugio. Sin embargo, lo que la tripulación encuentra es un secreto oculto desde que las galaxias generaron inteligencia, un secreto que podría significar la salvación para el planeta y sus habitantes... o su aniquilación final.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977752/APISCIFI/BOOKS/Infinitys%20Shore.jpg',
  },
  {
    title: "Heaven's Reach",
    publication_year: 1998,
    saga: 'Uplift Trilogy',
    saga_index: 3,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'La pacífica existencia de seis razas marginadas en Jijo ha terminado. Unos antiguos enemigos, los Jophur, los han descubierto y se disponen a someter a los refugiados a sus oscuros y pervertidos planes.La única esperanza de los jijoanos es la misma nave que condujo accidentalmente a sus enemigos al planeta. La nave terrestre Streaker, con su tripulación de delfines elevados y un comandante humano, debe atraer de algún modo a los Jophur en una persecución a través del espacio... hacia lo desconocido. Y luego hacia lo extraño.                                                                                                                                   Algo más que el destino de Jijo -o el de la lejana Tierra, que también sufre un asedio mortal- pende de un hilo. Algunos creen que una aterradora profecía está a punto de hacerse realidad, una que involucra el tesoro de artefactos de Streaker, codiciados por facciones de las Cinco Galaxias. Mientras incontables estrellas enanas blancas están al borde de una inesperada explosión, toda la vida sensible del universo parece estar en peligro, a menos que alguien pueda salvarla.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980733/APISCIFI/BOOKS/Heavens%20Reach.jpg',
  },
  {
    title: 'Sundiver',
    publication_year: 1980,
    saga: 'Uplift Trilogy',
    saga_index: 1,
    universe: 'Uplift',
    author: 'David Brin',
    resume: 'En todo el universo, ninguna especie ha alcanzado jamás las estrellas sin la guía de un mecenas, excepto quizá la humanidad. ¿Empezó alguna raza misteriosa a elevar a la humanidad hace eones? Y si fue así, ¿por qué nos abandonaron? Rodeando el sol, bajo las cavernas de Mercurio, la Expedición Sundiver se prepara para el viaje más trascendental de nuestra historia. Un viaje al infierno hirviente del sol... para buscar nuestro destino en el orden cósmico de la vida.Las novelas Uplift de David Brin se encuentran entre las más emocionantes y extraordinarias de ciencia ficción jamás escritas. Sundiver, Startide Rising y The Uplift War -un bestseller del New York Times- forman una de las sagas más queridas de todos los tiempos. Las historias de Brin están ambientadas en un universo futuro en el que ninguna especie puede alcanzar la sensibilidad sin ser "elevada" por una raza protectora. Pero el mayor misterio de todos sigue sin resolverse. . . .',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978004/APISCIFI/BOOKS/NaveganteSolar.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksUplift = await BookUplift.find();
    if (allBooksUplift.length > 0) {
      await BookUplift.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksUpliftMap = arrayBooksUplift.map((book) => new BookUplift(book));
    await BookUplift.insertMany(booksUpliftMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
