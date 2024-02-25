const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookOldManWar = require('../../api/models/models.oldManWar/books.oldManWar.model');

const arrayBooksOldManWar = [
  {
    title: "Old Man's War",
    publication_year: 2005,
    saga: "Old Man's War Series",
    saga_index: 1,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978190/APISCIFI/BOOKS/The%20Old%20Guard.jpg',
    resume: "Tras haber vivido una vida relativamente tranquila en la Tierra y el mismo día en que cumplen sesenta y cinco años, 1.022 ancianos se enrolan en las Fuerzas de Defensa Coloniales, el ejército que lucha por la supervivencia de la humanidad en el universo. La vida en la Tierra transcurre sin demasiados contratiempos. Sin embargo, en el universo se está librando una guerra sin cuartel por los últimos planetas todavía deshabitados de la galaxia. El ejército que defiende la causa de la humanidad está formado por ancianos. Ancianos a los que se les da el cuerpo de un joven de veinte años.                                                                                                                 Sin perder un ápice de los conocimientos y experiencias de su vida anterior, sus nuevos cuerpos les harán redescubrir sensaciones que la vejez había sumido en el olvido, sentirán de nuevo el vigor de la juventud, y la atracción, el deseo y el sexo recobrarán sentido.Sin embargo, el precio que pagarán por semejante regalo es alto: viajarán a un lugar remoto e inhóspito donde lo único importante será luchar y tratar de sobrevivir. Y nunca se les dará la posibilidad de regresar a la Tierra."
  },
  {
    title: 'The Ghost Brigades',
    publication_year: 2006,
    saga: "Old Man's War Series",
    saga_index: 2,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978134/APISCIFI/BOOKS/Las%20Brigadas%20Fantasmas.jpg',
    resume: "Charles Boutin ha desvelado secretos de las Fuerzas de Defensa Coloniales a razas alienígenas unidas contra los humanos. En el cerebro de Jared Dirac, un híbrido superhumano creado a partir del ADN de Boutin, debería haberse volcado la memoria del traidor pero la transferencia falla, y es trasladado a las Brigadas Fantasma, donde se convierte en un soldado perfecto, hasta que los recuerdos se manifiestan. Mientras Jared emprende una búsqueda desesperada de su «padre», la alianza alienígena está preparando su ofensiva."
  },
  {
    title: 'The Last Colony',
    publication_year: 2007,
    saga: "Old Man's War Series",
    saga_index: 3,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978172/APISCIFI/BOOKS/La%20Colonia%20Perdida.jpg',
    resume: "John Perry y Jane Sagan han encontrado la paz junto a su hija adoptiva Zoë en el planeta colonial Huckleberry. Es una buena vida, pero sienten que les falta... algo. Por eso, cuando se les propone liderar una nueva colonia, John y Jane no pueden resistir la tentación de explorar el universo una vez más. Pero cuando los colonos son abandonados en un planeta desconocido, Perry descubre que nada es lo que parece. Él y su nueva colonia son simples peones en la confrontación entre la Unión Colonial humana y la confederación alienígena denominada el Cónclave, que pretende acabar con la colonización humana. Mientras la partida se decide, Perry deberá luchar por mantener a sus colonos con vida ante las amenazas de ambos bandos en un planeta que esconde sus propios secretos, a la vez que intenta prevenir una guerra que no sólo amenaza con engullir su nuevo hogar, sino que también promete la destrucción de toda la Unión Colonial."
  },
  {
    title: "Zoe's Tale",
    publication_year: 2008,
    saga: "Old Man's War Series",
    saga_index: 4,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978330/APISCIFI/BOOKS/Zoes%20Tale.jpg',
    resume: "«¿Cómo cuentas tu participación en el relato más grande de la historia? Lo pregunto porque es lo que tengo que hacer. Soy Zoë Boutin-Perry: miembro de una colonia aislada en un letal mundo pionero. Sagrado icono de una raza de alienígenas. Jugadora y peón en una  partida de ajedrez interestelar para salvar a la humanidad, o para verla caer. Testigo de la historia. Amiga. Hija. Humana. Diecisiete años. Todos en la Tierra conocen la historia de la que formo parte. Pero no conocen mi propia historia: cómo hice lo que hice, lo que tuve que hacer, no sólo para seguir viva, sino para que vosotros también siguierais con vida. Ahora me dispongo a contarlo, todo, de la única forma que sé: directa y sincera, para que sintáis lo que yo sentí; la alegría y la incertidumbre, el pánico y el asombro, la desesperación y la esperanza. Todo a través de mis ojos. Ya conocéis esta historia. Pero no la conocéis toda.»"
  },
  {
    title: 'The Human Division',
    publication_year: 2013,
    saga: "Old Man's War Series",
    saga_index: 5,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978144/APISCIFI/BOOKS/The%20Human%20Division.jpg',
    resume: "Durante años, la Unión Colonial ha protegido a sus ciudadanos del peligroso universo que los rodea. Pero la población de la Tierra por fin conoce la horrible verdad. La Unión ha usado la Tierra como una fuente de reclutas para su guerra contra las fuerzas hostiles alienígenas y ha mantenidos engañados a sus habitantes. Ahora, otras razas alienígenas han formado una nueva alianza contra la Unión y han invitado a los indignados habitantes de la Tierra a unirse a ellos.     Conseguir la supervivencia de la Unión Colonial requerirá toda la astucia política y sutileza que sus diplomáticos sean capaces de reunir. En paralelo, Harry formará parte de un «Equipo B» encargado de enfrentarse a lo inesperado."
  },
  {
    title: 'The End of All Things',
    publication_year: 2015,
    saga: "Old Man's War Series",
    saga_index: 6,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978103/APISCIFI/BOOKS/The%20end%20of%20All%20Things.jpg',
    resume: "Tras la expansión de la humanidad por el espacio, la Unión Colonial se creó para ayudar a proteger a los seres humanos de un universo hostil. Para ello usó la Tierra como fuente de reclutas hasta que sus habitantes dijeron basta. Ahora, la Unión Colonial está en peligro: cuenta con un par de décadas antes de que las Fuerzas de Defensa Colonial se agoten y las colonias humanas sean vulnerables a los ataques alienígenas.                                                                En este universo colapsado, el teniente de las FDC Harry Wilson y los diplomáticos de la Unión Colonial trabajan contrarreloj para descubrir quién está detrás de los ataques de la Unión y de los alienígenas. Si no encuentran el modo de sosegar a una Tierra recelosa y enojada y mantener intacta la unión de la humanidad, se arriesgan a la extinción, y al final de todas las cosas."
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksOldManWar = await BookOldManWar.find();
    if (allBooksOldManWar.length > 0) {
      await BookOldManWar.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksOldManWarMap = arrayBooksOldManWar.map((book) => new BookOldManWar(book));
    await BookOldManWar.insertMany(booksOldManWarMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
