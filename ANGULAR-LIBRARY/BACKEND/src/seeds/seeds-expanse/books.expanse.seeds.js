const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookExpanse = require('../../api/models/models.expanse/books.expanse.model');

const arrayBooksExpanse = [
  {
    title: 'Leviathan Wakes',
    publication_year: 2011,
    saga: 'The Expanse',
    saga_index: 1,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'La humanidad ha colonizado el Sistema Solar: Marte, la Luna, el cinturón de asteroides y más allá, pero las estrellas aún están fuera de nuestro alcance. Jim Holden es segundo de a bordo de un transportador de hielo que realiza misiones entre los anillos de Saturno y las estaciones mineras del Cinturón.Cuando su tripulación y él se topan con la Scopuli, una nave abandonada, descubren un secreto que desearían no haber encontrado. Un secreto por el que alguien sería capaz de matar, matar a una escala que Jim y su tripulación no imaginan. La guerra en el Sistema Solar está a punto de comenzar, a menos que sean capaces de descubrir quién abandonó la nave y por qué.                                                                          El inspector Miller busca a una chica. Una chica entre mil millones, pero los padres de ella son gente adinerada, y el dinero lo es todo. Cuando las pistas lo llevan a la Scopuli y a Holden, un simpatizante de los rebeldes, se da cuenta de que aquella chica quizá sea la clave de todo.Holden y Miller deben atar los cabos entre el gobierno de la Tierra, los revolucionarios de los planetas exteriores y corporaciones secretas, y lo tienen todo en su contra. Pero en el Cinturón hay otras reglas, y una pequeña nave puede cambiar el destino del universo.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977781/APISCIFI/BOOKS/Leviathan%20Wakes.jpg',
  },
  {
    title: "Caliban's War",
    publication_year: 2012,
    saga: 'The Expanse',
    saga_index: 2,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'En Ganímedes, asolada por la guerra y fuente de recursos de los planetas exteriores, una marine de Marte asiste a la aniquilación de su pelotón a manos de un supersoldado monstruoso. En la Tierra, una política de alto rango hace todo lo posible por evitar que vuelva a estallar una guerra interplanetaria. Y en Venus, una protomolécula alienígena se ha hecho con el planeta y desencadenado una serie de cambios misteriosos que amenazan con extenderse por el Sistema Solar. El futuro de la humanidad depende de que una sola nave evite una invasión alienígena.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977465/APISCIFI/BOOKS/La%20Guerra%20de%20Caliban.jpg',
  },
  {
    title: "Abaddon's Gate",
    publication_year: 2013,
    saga: 'The Expanse',
    saga_index: 3,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Durante generaciones, el Sistema Solar (Marte, la Luna y el cinturón de asteroides) ha conformado la gran frontera de la humanidad. Hasta ahora. El artefacto alienígena que realizaba su obra bajo las nubes de Venus ha aparecido en la órbita de Urano, donde ha construido una puerta enorme que se abre hacia un espacio sin estrellas.                                       Jim Holden y la tripulación de la Rocinante forman parte de una gran flotilla de naves militares y científicas que parten para examinar el artefacto. Pero, entre bambalinas, se empieza a desarrollar una trama intrincada que tiene como finalidad la destrucción deHolden. Mientras los emisarios de la especie humana intentan ponerse de acuerdo acerca de si la puerta constituye una oportunidad o una amenaza, ignoran que el mayor de los peligros se encuentra entre sus filas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701975544/APISCIFI/BOOKS/La%20puerta%20de%20Abadon.jpg',
  },
  {
    title: 'Cibola Burn',
    publication_year: 2014,
    saga: 'The Expanse',
    saga_index: 4,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Las puertas han abierto el camino a miles de nuevos mundos y la fiebre de la colonización se ha desatado. Los colonos buscan una nueva vida lejos de los planetas natales de la humanidad. Ilo, la primera colonia humana en esta gran nueva frontera, nace entre sangre y fuego.                                                                                          Los colonos independientes se sublevan contra el poder arrollador de una nave colonial corporativa, cargados únicamente con su determinación, su valor y las habilidades adquiridas en las largas guerras en casa. Científicos inocentes mueren masacrados tratando de estudiar el funcionamiento de un mundo nuevo y extraño.                                                            James Holden y el resto de la tripulación de su pequeña nave son enviados para sembrar la paz en plena guerra y el sentido común en mitad del caos. Sin embargo, cuanto Holden más analiza la situación, más se convence de que la misión estaba destinada a fracasar.                                                                                                                    Los susurros de un hombre muerto le recuerdan que la gran civilización galáctica que antaño existió en esas tierras ha desaparecido. Y que algo acabó con ella',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977480/APISCIFI/BOOKS/La%20quema%20de%20Cibola.jpg',
  },
  {
    title: 'Nemesis Games',
    publication_year: 2015,
    saga: 'The Expanse',
    saga_index: 5,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Se han abierto miles de mundos y se ha desatado la mayor fiebre por ocupar el territorio de la historia de la humanidad. A medida que los colonos se marchan en oleadas sucesivas, las estructuras de poder del viejo Sistema Solar comienzan a ceder.                                                                                                                       Las naves desaparecen sin dejar rastro. De manera clandestina, han empezado a formarse ejércitos privados. Alguien ha robado la única muestra de la protomolécula.Diversos ataques terroristas que hasta este momento se tenían por imposibles han doblegado a los planetas interiores. Los pecados del pasado vuelven para cobrarse un coste terrible.                                       A medida que un nuevo orden se impone a base de sangre y fuego, James Holden y la tripulación de la Rocinante lucharán por sobrevivir y regresar al único hogar que les queda.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701981066/APISCIFI/BOOKS/Los%20Juegos%20de%20Nemesis.jpg',
  },
  {
    title: "Babylon's Ashes",
    publication_year: 2016,
    saga: 'The Expanse',
    saga_index: 6,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'La Armada Libre ha devastado la Tierra y comenzado una campaña de violencia por todos los planetas exteriores. Las naves coloniales que se dirigen hacia los miles de nuevos mundos al otro lado de las puertas anulares alienígenas son presa fácil.                                                                                                                      James Holden y su tripulación conocen mejor que nadie los puntos fuertes y débiles de esa nueva potencia. Los últimos vestigios acorralados de los antiguos poderes políticos se ven sobrepasados en número y en potencia de fuego, por lo que deciden enviar a la Rocinante en una misión desesperada al corazón de la red de puertas.                                                       Pero las nuevas alianzas han nacido tan fallidas como las anteriores, y la lucha por el poder acaba de comenzar. El caos se extiende y un misterio alienígena cobra fuerza. Las flotas piratas, los motines y las traiciones pueden acabar siendo el menor de los problemas para la Rocinante. Y en los insólitos lugares que hay al otro lado de las puertas anulares, las decisiones de unas pocas personas desesperadas y desequilibradas pueden llegar a determinar el destino de la humanidad y de mucho más.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701981339/APISCIFI/BOOKS/Babylon%20Ashes.jpg',
  },
  {
    title: 'Persepolis Rising',
    publication_year: 2017,
    saga: 'The Expanse',
    saga_index: 7,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Un viejo enemigo regresa. Los nuevos mundos coloniales luchan para encontrar la manera de sobrevivir en la red de miles de soles que se ha creado tras la expansión de la humanidad. Todos los nuevos planetas viven en una balanza que se puede decantar hacia la destrucción o haciaun futuro maravilloso.                                                                     Y la tripulación de la anticuada cañonera Rocinante está enfrascada en el intento de mantener una paz demasiado frágil.En el vasto espacio entre la Tierra y Júpiter, los planetas interiores y el Cinturón han formado una alianza incierta y provisional aún marcada por un pasado de guerras y prejuicios. Un enemigo oculto en el lejano mundo colonial de Laconia tiene un nuevo plan para toda la humanidad, así como el poder necesario para llevarlo a cabo.                                                                                                                        Las nuevas tecnologías se enfrentan a las antiguas al tiempo que el histórico conflicto de la humanidad vuelve a adoptar sus antiguos patrones de guerra. Pero la naturaleza humana no es el único enemigo, y las fuerzas desatadas también exigen que se pague un precio. Un precio que cambiará a la humanidad, y la Rocinante, para siempre.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977918/APISCIFI/BOOKS/Persepolis%20Rising.jpg',
  },
  {
    title: "Tiamat's Wrath",
    publication_year: 2019,
    saga: 'The Expanse',
    saga_index: 8,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Se han abierto mil trescientas puertas a sistemas planetarios de toda la galaxia. Pero mientras la humanidad levanta un imperio interestelar en las ruinas alienígenas, los misterios y las amenazas no dejan de acecharla.En los sistemas muertos, donde las puertas llevan a lugares más extraños que los propios planetas alienígenas, Elvi Okoye empieza una búsqueda desesperada para descubrir las causas de un genocidio que ocurrió antes de la existencia humana, y también para encontrar las armas necesarias para librar una guerra contra fuerzas que desafían lo inimaginable. Pero, ¿será capaz de pagar el precio de dicho conocimiento?                                                                                                           En el corazón del imperio, Teresa Duarte se prepara para soportar la carga de la ambición divina de su padre. El científico sociópata Paolo Cortázar y el prisionero mefistofélico James Holden no son más que dos de los peligros en un palacio lleno de intrigas, pero Teresa sabe pensar por sí misma y también tiene secretos que ni su padre, el emperador, es capaz de sospechar.   Y en el resto del dominio humano, la desperdigada tripulación de la Rocinante lleva a cabo acciones de guerrilla contra el régimen autoritario de Duarte. El recuerdo del orden del pasado es cada vez más lejano, y el futuro bajo la dictadura eterna de Laconia, que conducirá a una batalla que la humanidad solo puede perder, parece cada vez más seguro. Porque el coraje y la ambición no son suficientes para enfrentarse a aquello que yace entre mundos..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978251/APISCIFI/BOOKS/La%20Colera%20de%20Tiamat.jpg',
  },
  {
    title: 'Leviathan Falls',
    publication_year: 2022,
    saga: 'The Expanse',
    saga_index: 9,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'El imperio de Laconia ha caído y los mil trescientos sistemas planetarios han logrado liberarse del gobierno de Winston Duarte. Pero el antiguo enemigo que acabó con los constructores de las puertas ha despertado, y la guerra contra nuestro universo ha vuelto a comenzar.                                                                                        En el sistema muerto de Adro, Elvi Okoye lidera una misión científica casi imposible con el objetivo de comprender qué eran los constructores y qué fue lo que acabó con ellos, aunque eso signifique ponerse en peligro a sí misma y a los niños híbridos, los sujetos medio alienígenas medio humanos de su investigación. Entretanto, la coronel Aliana Tanaka se dedica a buscar a la hija desaparecida de Duarte por la inmensidad de la galaxia… y también al mismísimo y destrozado emperador. Y, en la Rocinante, James Holden y su tripulación se afanan por crear un futuro para la humanidad a partir de los vestigios y las ruinas de lo que antaño existió.                                                                                                              Así pues, mientras unas fuerzas casi inimaginables se preparan para aniquilar la humanidad, Holden y un grupo de aliados imposibles dan al fin con una última y desesperada oportunidad para unirla con la promesa de una vasta civilización galáctica libre de guerras, facciones, mentiras y secretos, en caso de que consigan la victoria. Pero el precio a pagar por ella puede ser mayor que el coste de la derrota.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977792/APISCIFI/BOOKS/Leviathan%20Falls.jpg',
  },
  {
    title: 'Auberon',
    publication_year: 2022,
    saga: 'The Expanse',
    saga_index: null,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    resume: 'Auberon es uno de los primeros y más importantes mundos de colonias al alcance de la humanidad, y la nueva facción conquistadora ha llegado a reclamarlo. El gobernador Rittenaur ha venido a traer la civilización y el orden a la avanzada lejana y garantizar la riqueza y el poder del Imperio.                                                                      Pero Auberon ya tiene su propia historia, una cultura compleja y un capo criminal llamado Erich con planes muy diferentes. En un mundo de engaño, violencia y corrupción, el mayor peligro que enfrenta Rittenaur es el amor.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977123/APISCIFI/BOOKS/Auberon.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksExpanse = await BookExpanse.find();
    if (allBooksExpanse.length > 0) {
      await BookExpanse.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksExpanseMap = arrayBooksExpanse.map((book) => new BookExpanse(book));
    await BookExpanse.insertMany(booksExpanseMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
