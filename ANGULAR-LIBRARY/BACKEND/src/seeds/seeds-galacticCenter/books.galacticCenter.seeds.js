const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookGalacticCenter = require('../../api/models/models.galacticCenter/books.galacticCenter.model');


const arrayBooksGalacticCenter = [
  
  {
    title: 'In the Ocean of Night',
    publication_year: 1977,
    saga: 'The Galactic Center Saga',
    saga_index: 1,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: "En 1999 (2019 en la segunda edición), Nigel Walmsley, un científico británico y astronauta de la NASA, es enviado para colocar una bomba termonuclear en un cometa llamado Ícaro que se dirige directamente hacia la India. Ícaro resulta ser grande, sólido y hecho de un compuesto de níquel-hierro. A Nigel se le ordena plantar el arma y marcharse para que pueda ser detonada. Convence al Control de Misión para que le permita colocarla en una gran fisura que descubrió, para que sea aún más efectiva.En la fisura, Nigel descubre tiras de metal trabajadas en patrones obviamente artificiales. Impresionado por esta evidencia de vida inteligente extraterrestre, Nigel comienza a explorar. Ícaro está formado por varias cáscaras huecas, lo que hace que la masa del asteroide sea mucho menor de lo previsto. La NASA insiste en que la demolición debe continuar, afirmando que Ícaro rebotaría en la atmósfera y caería en el Océano Índico, causando daños generalizados por el tsunami resultante. Nigel se da cuenta de que esto es mentira y convence a su compañero de ello. Ocultan la bomba y pasan la siguiente semana recuperando artefactos y materiales antes de detonarla.                                                                                                                                                                        Quince años después de su descubrimiento, los artefactos de Ícaro han dado poco resultado, y la detonación retrasada de Ícaro por parte de Nigel lo ha alienado de la NASA y otras personas. La pareja de Nigel, Alexandria, muere de lupus eritematoso sistémico, una enfermedad causada por la contaminación. Una anomalía cerca de Júpiter distrae a Nigel: algo, apodado 'el Snark', está repitiendo emisiones de radio. La anomalía dispara sus motores de fusión y se revela a los satélites alrededor de Júpiter. Como sonda, la computadora de control del Snark no podía ignorar las emisiones de radio de los satélites antes de dirigirse a la Tierra.Eventualmente, el equipo de JPL localiza el Snark alrededor de Venus. Nigel secuestra las comunicaciones, transmitiendo su propia señal al Snark. El Snark recibe la señal como un signo de intenciones no hostiles y transmite de vuelta. También llega a través de los implantes médicos de Nigel a los implantes más elaborados de su difunta pareja y toma el control de su cuerpo para explorar y aprender sobre la Tierra. Las transmisiones iniciales y tentativas florecen en un torrente en gran parte unidireccional de información para el Snark. Un día, pide visitar la Tierra. Se llega a un compromiso: el Snark orbitará la Luna hasta que se construya la confianza. Como Nigel ya está completamente informado, se le asigna pilotar la nave espacial (armada con otra bomba nuclear) y encontrarse con el Snark.                                                                                                                                          Nigel se encuentra con el Snark, que desactiva las armas convencionales de Nigel y comienza a hablar con él. Dice que las civilizaciones y especies orgánicas son inherentemente inestables; brillan brillantemente y se suicidan tarde o temprano. Las máquinas autónomas que crean viven mucho tiempo después de ellos, siguiendo evolucionando. Pero no pueden competir realmente con los orgánicos, que viven 'en el universo de las esencias'. Esa es la razón del Gran Silencio. Los superiores de Nigel le ordenan que use el arma nuclear, pero él se niega. Lo anulan y la disparan de todos modos, pero el Snark huye del Sistema Solar más rápido de lo que el misil puede seguir. La decisión de disparar se encubre, pero Nigel chantajea a la NASA para que lo dejen ir a la Luna; el Snark había dirigido una transmisión a Mare Marginis para partes desconocidas, y Nigel quería encontrar esas partes.                                                                                                                                       Cuatro años después, Nigel está ahora basado en la Luna. Un compañero astronauta, Nikka, está involucrado en un accidente que descubre accidentalmente los restos de una nave espacial alienígena aún activa en Mare Marginis de la Luna, una nave espacial sospechosamente armada con un arma anti-nave espacial una vez poderosa. Nigel y Nikka exploran los restos y encuentran una computadora en funcionamiento con una interfaz neural directa. Nigel y varios otros experimentan con la conexión neural de la computadora, y salen fundamentalmente cambiados por ella, mientras que la computadora se vuelve inerte e incapaz de revelar más sobre sus creadores. Mientras tanto, en la Tierra, se descubren algunos experimentos sorprendentes en genética humana realizados por los alienígenas, vivos en América del Norte.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090740/APISCIFI/BOOKS/In_the_Ocean_of_Night_ix35a4.jpg',
  },
  {
    title: 'Across the Sea of Suns',
    publication_year: 1984,
    saga: 'The Galactic Center Saga',
    saga_index: 2,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: 'En 2021, la radioastronomía en la Luna revela la presencia de vida cerca de una enana roja, en un planeta con marea bloqueada. Para investigar, los gobiernos de la Tierra convierten una colonia espacial en Lancer, una nave interestelar impulsada por un motor de fusión Bussard basada en el diseño de una nave alienígena estrellada descubierta en Mare Marginis.En 2061, Lancer llega y descubre una raza primitiva de nómadas, que transmiten usando órganos adaptados para emitir y recibir radiación electromagnética (de ahí "EM"). Se descubre un satélite curioso en órbita, con al menos un millón de años de antigüedad, aproximadamente cuando una lluvia de meteoritos destruyó la civilización de los EMs.En la Tierra, el comercio internacional se paraliza cuando misteriosas naves espaciales dejan caer criaturas marinas apodadas Swarmers y Skimmers (por su comportamiento: los Swarmers atacan a los barcos y los golpean hasta que se hunden, y los Skimmers simplemente saltan y se deslizan como delfines). Comienzan a multiplicarse y los Swarmers comienzan a atacar a los humanos y todas sus obras en los mares.                                                                                                                                               Los primeros contactos de la expedición van mal: el intento de ingresar a uno de los dos satélites provoca una masiva represalia que mata a la mayoría de la tripulación. Mientras tanto, su intento de contactar a los EMs en persona los confunde; los alienígenas esperaban una respuesta directa de la Tierra. El intento de los EMs de comunicarse con el mensajero a través del radar lo cocina vivo accidentalmente. El equipo de reserva interpreta erróneamente el accidente como un ataque deliberado y masacra a los EMs.Nigel trabaja con matemáticos y otros expertos para interpretar la transmisión de los EMs. Su análisis revela que su civilización tecnológicamente avanzada había atraído la atención de máquinas, que atacaron con bombardeos orbitales que nivelaron las ciudades de los EMs y abrieron la corteza del planeta, alterando permanentemente la ecosfera. Los EMs usaron ingeniería genética para adaptar sus cuerpos para usar silicio y transistores como sistema nervioso. Como el satélite está programado para reaccionar solo ante la alta tecnología, no a las características incorporadas de los organismos, los EMs pueden transmitir su mensaje a otras razas biológicas sin ser molestados.                                                                                                                                          Apenas se establece la comunicación bidireccional, llegan nuevas órdenes de la Tierra para ir a Ross 128, donde creen que los Skimmers y Swarmers pueden haberse originado. En ruta, la tripulación analiza informes de sondas espaciales. Walmsley postula que una raza basada en máquinas está destruyendo sistemáticamente o protegiendo planetas que sustentan vida orgánica, y es responsable de las anomalías; los Swarmers representan un primer golpe a la Tierra, que había eludido los intentos de las máquinas de matarla, ya que el Vigilante asignado (como llama Nigel a los satélites) fue destruido por el naufragio de Mare Marginis. Sus ideas son consideradas demasiado especulativas; el consenso es que los Vigilantes son simplemente una forma de armamento sobrante del suicidio de las razas biológicas, y la invasión de los Swarmers es un intento de apoderarse de un nuevo mundo.En Ross 128, se encuentra una luna similar a Ganímedes con un Vigilante en órbita. Inicialmente, se toma como una refutación de la idea de Walmsley de que los Vigilantes aparecerán alrededor de cualquier mundo despoblado que alguna vez haya albergado vida biológica tecnológicamente avanzada. El líder de facto Ted, que siempre ha despreciado a Walmsley, intenta forzar secretamente a Walmsley a hibernar hasta que regresen a la Tierra. Walmsley escapa durante el proceso médico y huye a la luna. Allí descubre una civilización sapiente muy reducida que tenía vínculos con los EMs antes de que llegara el Vigilante. El Vigilante impidió que los habitantes de la luna llegaran a la superficie y desarrollaran tecnología, pero no puede destruir la civilización ya que está protegida por diez kilómetros de hielo.                                                                                                                                                Llegan noticias de la Tierra (retrasadas nueve años por la velocidad de la luz) de que los Swarmers han comenzado invasiones terrestres; las superpotencias tensas se sospechan mutuamente y escalan hacia una guerra nuclear a gran escala. Las máquinas, que habían intentado orquestar un conflicto de este tipo, envían su flotilla contra la Tierra debilitada. La noticia sombría galvaniza a la tripulación para reactivar el motor de fusión y dirigir el chorro hacia el Vigilante. Esta táctica deja al Vigilante inútil, pero su represalia daña el sistema de propulsión de Lancer.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090782/APISCIFI/BOOKS/Across_the_Sea_of_Suns_gyxfoz.jpg',
  },
  {
    title: 'Great Sky River',
    publication_year: 1987,
    saga: 'The Galactic Center Saga',
    saga_index: 3,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: 'Después de los eventos de "A través del mar de soles" (1984), pequeños grupos de humanos se han asentado en otros sistemas estelares. Sin embargo, hay una amenaza constante de los Mecas, una civilización de máquinas remanentes de otras civilizaciones y evolucionadas para ver a toda civilización biológica como inestable y peligrosa."Gran Río Celeste" cuenta la historia de la familia Bishop, que lucha por su propia existencia en el planeta Snowglade, que ha sido tomado por los Mecas. Los Bishop son uno de varios grupos familiares en Snowglade, todos nombrados como piezas de ajedrez. Estas "familias" son más como clanes o tribus. Todos utilizan implantes cibernéticos y ayudas mecánicas para mejorar sus percepciones y habilidades físicas. Las personalidades de los miembros fallecidos de la Familia pueden ser almacenadas en fichas de memoria y accedidas enchufándolas en puertos implantados en el cuello. Funciones corporales, como el impulso sexual, pueden ser desactivadas para eliminar distracciones. Las Familias parecen estar equipadas para conflictos prolongados y períodos de privación, migrando continuamente para evitar a los Mecas.                                                                                                                                                La novela tiene lugar durante un período en el que los Mecas han invadido Snowglade y están alterando lentamente su clima para adaptarlo a ellos mismos; secándolo para proteger sus cuerpos de acero del óxido. Esto afecta adversamente a los humanos, que de otra manera parecen existir en una tregua cautelosa con los Mecas. Luego, los Mecas comienzan a destruir los asentamientos humanos. Por alguna razón, están interesados en Killeen Bishop, líder de la Familia Bishop.A medida que avanza la serie, se revela que los Bishop y los colonos relacionados son posthumanos, o como los describe el texto, una "cuarta especie de chimpancé". Los adultos tienen en realidad 3 metros de altura y una estructura esquelética más fuerte y flexible que los humanos. Son los sobrevivientes de miles de años de conflicto con los Mecas en la Tierra, cuyos comienzos se describieron en las novelas anteriores. Habiendo derrotado a los Mecas en el Sistema Solar, han viajado cerca del centro galáctico utilizando naves espaciales más lentas que la luz, lo que significa que el escenario está situado a decenas de miles de años en el futuro. El resto de la serie describe el progreso de los Bishop hacia el centro del poder Meca y el gran secreto que llevan, que los Mecas temen.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090731/APISCIFI/BOOKS/Great_Sky_River_aoi5sh.jpg',
  },
  {
    title: 'Tides of Light',
    publication_year: 1989,
    saga: 'The Galactic Center Saga',
    saga_index: 4,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: 'A bordo de una antigua nave estelar, Killeen y la tribu de Bishop escapan del mundo gobernado por mecas de Snowglade. Buscando refugio en un planeta lejano, descubren vastas maravillas: una forma de vida orgánica tan grande como un mundo, una cuerda cósmica que perfora planetas, una comunidad de humanos gobernada por un tirano brutal y, finalmente, una raza alienígena más impresionante que cualquier otra que hayan encontrado. Mientras luchan por sobrevivir contra estos numerosos peligros, Killeen y su tripulación obtendrán un aliado inesperado, uno que puede determinar el verdadero destino de la humanidad.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090761/APISCIFI/BOOKS/wueecdoyorj5csifzgxk.jpg',
  },
  {
    title: 'Furious Gulf',
    publication_year: 1994,
    saga: 'The Galactic Center Saga',
    saga_index: 5,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: 'Los últimos humanos del planeta Snowglade han emprendido la huida de los mecas genocidas a bordo de la nave espacial Argo. Mientras la nave se precipita hacia el Centro Galáctico, el hambre y la desesperación están cobrando su precio entre los refugiados, quienes comienzan a cuestionar el liderazgo del Capitán Killeen. Convencido de que la única esperanza de supervivencia de su pueblo yace en el Verdadero Centro de la galaxia, está decidido a encontrarlo, con una voluntad que roza la obsesión.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090861/APISCIFI/BOOKS/FuriusGulf_zf6kki.jpg',
  },
  {
    title: 'Sailing Bright Eternity',
    publication_year: 1995,
    saga: 'The Galactic Center Saga',
    saga_index: 6,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    resume: 'El último capítulo del futuro de la humanidad ha comenzado y un hombre, Nigel Walmsley, ha estado vivo a través de todo ello. Un anciano científico del pasado lejano, Walmsley había quedado varado dentro de una anomalía del tiempo y el espacio. Desde aquí, recuerda la lucha desesperada de la Tierra contra los mecas, una violenta inteligencia artificial dedicada a la aniquilación total. En un extraño continuo espacio-temporal llamado Esty, los últimos sobrevivientes de los planetas devastados de la humanidad se han refugiado, preparándose para una última batalla contra sus implacables ejecutores.Tres generaciones de hombres se interponen entre los mecas y la total aniquilación de la raza humana: Toby Bishop, un joven guerrero en entrenamiento; Killeen Bishop, padre de Toby y líder de los últimos vestigios de la humanidad; y el propio padre de Killeen, largamente creído muerto, pero misteriosamente regresado a su familia.Mientras los mecas continúan tallando su estela de destrucción a través de la galaxia, estos tres hombres son la única esperanza para la supervivencia de la raza humana.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090750/APISCIFI/BOOKS/Sailing_Bright_Eternity_ee00sg.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksGalacticCenter = await BookGalacticCenter.find();
    if (allBooksGalacticCenter.length > 0) {
      await BookGalacticCenter.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksGalacticCenterMap = arrayBooksGalacticCenter.map((book) => new BookGalacticCenter(book));
    await BookGalacticCenter.insertMany(booksGalacticCenterMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
