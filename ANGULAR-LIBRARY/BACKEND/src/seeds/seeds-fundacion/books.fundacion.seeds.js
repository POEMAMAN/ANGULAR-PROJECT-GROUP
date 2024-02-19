const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookFundacion = require('../../api/models/models.fundacion/books.fundacion.model');


const arrayBooksFundacion = [
  {
    title: 'The Last Question',
    publication_year: 1956,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    resume: '¿Es posible revertir el inevitable final del Universo, o el mundo debe acabar de todas formas? es la pregunta que desde un día del siglo XXI, hasta generaciones y generaciones posteriores en el tiempo, hacen los humanos a los ordenadores.                                                                                                                       En un relato aparentemente sencillo sobre un asunto sobrecogedor, el fin de los días, Asimov demuestra, una vez más, una mente preclara y una mano maestra para sobrecoger al lector y dejarlo en vilo, incluso después de la lectura..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978163/APISCIFI/BOOKS/The%20Last%20Question.jpg',
  },
  {
    title: 'NigthFall',
    publication_year: 1941,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    resume: 'El planeta Kalgash está al borde del caos, pero solo unas pocas personas se han dado cuenta de ello. Kalgash conoce únicamente la luz diurna perpetua, pues durante más de dos milenios la combinación de sus seis soles ha iluminado el cielo. Sin embargo, ahora empieza a reinar la oscuridad. Pronto se pondrán todos los soles, y el terrible esplendor del anochecer desencadenará una locura que marcará el final de la civilización. Anochecer, novela basada en un relatoo escrito por Asimov en 1941, permite al lector experimentar el cataclismo que sobre vendrá sobre Kalgash a través de los ojos de un periodista, un astrónomo, un arqueólogo, un psicólogo y un fanático religioso. "Esta colaboración entre dos veteranos de la ciencia ficción se centra no tanto en la caracterización de personajes como en la exploración de la mente humana ante una inminente destrucción de la civilización"',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977496/APISCIFI/BOOKS/NigthFall.jpg',
  },
  {
    title: 'Nemesis',
    publication_year: 1989,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    resume: 'Año 2236. La Tierra y su centenar de colinas espaciales están superpobladas; llevan una vida anárquica y socialmente degenerada. A dos años luz de distancia, oculta en un rincón de la galaxia, brilla una estrella parecida al Sol de la Tierra, una estrella que posee su propio sistema planetario: Megas, Erythro y Rotor, una colonia renegada de la Tierra. La estrella se llama Némesis y al ser descubierta es considerada como la última esperanza de la raza humana, un nuevo punto de partida para un valiente grupo de aventureros dirigidos por Januss Pitt, un individuo brillante pero megalómano.                                                                                                                       Pitt y sus leales seguidores se han separado en secreto de la órbita de la Tierra viajando por vía superluminal hasta el Sistema Nemético para establecer allí una nueva Utopía, una sociedad más fuerte, más pura y, en definitiva, superior a la dejada atrás. Sin embargo, Marlene, una chica de quince años natural de Rotor, se ha enterado de la sutil aunque terrible amenaza que Némesis representa para la Tierra y sus habitantes.                                                                                          En realidad, Pitt ha dedicado su vida a asegurarse de que esta nueva civilización se convierta en la potencia suprema de la galaxia, al precio que sea. Y no permitirá que nadie se interponga en su camino. Marlene llega a descubrir que Némesis no solo amenaza a la Tierra, sino también a Rotor, e intenta salvar a ambos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977851/APISCIFI/BOOKS/Nemesis.jpg',
  },
  {
    title: 'The gods themselves',
    publication_year: 1972,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    resume: 'Los habitantes de un universo paralelo en el futuro, con leyes físicas ligeramente distintas a las nuestras, descubren la forma de intercambiar materia con nosotros. Materia que, una vez en el universo de destino, y merced a las diferencias físicas entre ambos, comienza a desprender energía de forma espontánea. Una vez consumida la capacidad energética del material, éste puede volver a ser intercambiado, para recomenzar el ciclo. ¿Qué podríamos hacer con un suministro de energía gratuita e inagotable?                                                                                                                       Más allá que cualquier otra historia, esta novela destaca por una impresionante descripción del cosmos, una visión que nos hace aún más insignificantes de lo que podíamos pensar.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977944/APISCIFI/BOOKS/Los%20Propios%20Dioses.jpg',
  },
  {
    title: 'I, Robot',
    publication_year: 1950,
    saga: 'Robot',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Publicada por primera vez en 1950, cuando la electrónica digital estaba en su infancia, Yo, robot resultó visionaria. Su influencia, de hecho, fue enorme, y no sólo en toda la ciencia ficción posterior, sino también en la propia ciencia de la robótica. Aquí formuló Asimov por primera vez las tres leyes fundamentales de la robótica, de las que se valdría para plantear interrogantes que se adentran en el campo de la ética y de la psicología: ¿qué diferencia hay entre un robot inteligente y un ser humano?, ¿puede el creador de un robot predecir su comportamiento?, y ¿debe la lógica determinar lo que es mejor para la humanidad? A través de una serie de historias conectadas entre sí por el personaje de la robopsicóloga Susan Calvin, en las que aparecen todo tipo de máquinas inteligentes –robots que leen el pensamiento, robots que se vuelven locos, robots con sentido del humor o robots políticos–, Asimov inventa unos robots cada vez más perfectos, que llegan a convertirse en un desafío para sus creadores. Con todo, Yo, robot es uno de los pocos títulos de ciencia ficción que han superado con amplitud el círculo de lectores especialmente aficionados, entre los que a menudo se considera una obra cumbre.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701976160/APISCIFI/BOOKS/Yo%20Robot.jpg',
  },
  {
    title: 'Bicentenary Man',
    publication_year: 1976,
    saga: 'Robot',
    saga_index: null,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: '«Esta historia, que apareció por primera vez en 1976, fue mi exposición más clarividente del desarrollo de los robots. Trataba del deseo de un robot de convertirse en hombre y la forma en que realizaba este deseo, paso a paso. No tenía intención de escribir esta historia cuando la empecé, se escribió sola, y se trazó y entrelazó en la máquina de escribir. Acabó siendo la tercera de mis historias favoritas, entre todas las escritas.»',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978061/APISCIFI/BOOKS/El%20Hombre%20Bicentenario.jpg',
  },
  {
    title: 'Positronic Man',
    publication_year: 1992,
    saga: 'Robot',
    saga_index: null,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'En 1976, con motivo de la celebración del segundo centenario de la independencia de Estados Unidos, se encargó a varios autores que escribieran algún relato corto con el tema The Bicentennial Man, el cual podía desarrollarse libremente.[cita requerida] Ocurre que en inglés esta expresión puede interpretarse como «el hombre del bicentenario» (la vida de la gente en Estados Unidos doscientos años después de la Declaración de Independencia) o como «el hombre bicentenario» (un hombre que llega a vivir doscientos años). Jugando con esta ambigüedad, Asimov, que fue uno de los autores que recibió dicho encargo, renunció a hacer un ensayo sociológico y, argumentando que «un hombre no podría vivir tanto tiempo», escribió un relato corto acerca de un robot que poco a poco va asimilando el mundo de los humanos hasta desear ser reconocido como uno de ellos, lo cual lo lleva a luchar por obtener su humanidad de manera legítima.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977930/APISCIFI/BOOKS/Positronic%20Man.jpg',
  },
  {
    title: 'The Complet Robot',
    publication_year: 1982,
    saga: 'Robot',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'En El robot completo se recopilan los relatos de robots positrónicos, posiblemente la creación más celebrada de la prodigiosa imaginación de Isaac Asimov, ordenados temáticamente por el propio autor.des hasta la paradójica complejidad de los robots que desean ser humanos, pasando por los intrincados recovecos de comportamiento robótico inducido por las Tres Leyes, e incluyendo los famosos relatos de Yo, robot, así como los protagonizados por la sagaz robopsicóloga Susan',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978073/APISCIFI/BOOKS/El%20Robot%20Completo.jpg',
  },
  {
    title: 'Robot´s Dreams',
    publication_year: 1986,
    saga: 'Robot',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Qué papel desempeñarán en un futuro más o menos lejano estos extraños mecanismos creados por el hombre casi a su imagen y semejanza?                                                                                                                         Isaac Asimov nos brinda aquí unas narraciones que, sin lugar a dudas, moverán a reflexión. Las historias aparecen espléndidamente ilustradas por Ralph McQuarrie, diseñador de numerosas películas de ciencia ficción.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977980/APISCIFI/BOOKS/Sue%C3%B1os%20de%20Robot.jpg',
  },
  {
    title: 'The Stars, Like Dust,',
    publication_year: 1951,
    saga: 'Galactic Empire Series',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'En polvo de estrellas, un ranchero de un mundo agrícola y la princesa de un sofisticado reino nebular deben unir sus fuerzas para tratar de encontrar el mundo rebelde que supone la última esperanza contra el tiránico imperio que los oprime. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075691/APISCIFI/BOOKS/eNLAaRENAeSTELAR_jciavn.jpg',
  },
  {
    title: 'The Currents of Space',
    publication_year: 1952,
    saga: 'Galactic Empire Series',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Rik es un hombre que aparece de forma misteriosa en el planeta Florina. No puede recordar nada de su pasado, pero con el tiempo, empieza a tener la sensación de que su lugar no es ese humilde planeta de la galaxia. Con la ayuda de una pueblerina y del edil, descubrirá que el futuro del planeta Florina depende de sus anteriores conocimientos, los que le robaron cuando alguien le borró la memoria.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075615/APISCIFI/BOOKS/LasCorientsDelEspacio_zchpe5.jpg',
  },
  {
    title: 'Pebble in the Sky',
    publication_year: 1950,
    saga: 'Galactic Empire Series',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Joseph Schwartz paseaba ensimismado por las calles de Chicago. Levantó un pie estando en el siglo XX y se encontró con que lo había plantado en el año 827 de la Era Galáctica. Seguía en la Tierra, pero en una época en que la humanidad había colonizado la galaxia y en que los terrestres eran considerados parias y estaban confinados a la superficie de un mundo radiactivo. Schwartz se encuentra inmerso en una situación límite al descubrir los planes de un grupo de extremistas, cuya revuelta amenaza la superviviencia de todo el Imperio Galáctico. Sólo él puede evitar el desastre, pero para conseguirlo tendrá que ser capaz de ponerlo todo en juego..., incluyendo las vidas de aquellos que le han ofrecido amistad y confianza. Un guijarro en el cielo es la primera novela que publicó Asimov en su dilatada y prolífica carrera, y –en el contexto del ciclo de Trantor y las Fundaciones– está ambientada en el periodo de formación y surgimiento del Primer Imperio.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978277/APISCIFI/BOOKS/Un%20Guijarro%20En%20el%20Cielo.jpg',
  },
  {
    title: 'Blind Alley',
    publication_year: 1945,
    saga: 'Galactic Empire Series',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075759/APISCIFI/BOOKS/BlindAlley_rchnry.jpg',
  },
  {
    title: 'Robot´s Visions',
    publication_year: 1990,
    saga: 'Robot',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Este libro extraordinario resume medio siglo de pensamiento acerca de los robots y de la robótica. En él se incluyen, además de muchos otros, los nueve relatos que integraron el primer volumen de la «Serie de los robots», primera parte de la «Saga de la Fundación»: desde el mismo Robbie hasta los relatos de Susan Calvin, la primera robopsicóloga, pasando por Stephen Byerley, el robot humanoide, y el equipo de detectives formado por un hombre y un robot, Lije Baley y Daneel Olivaw.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701979876/APISCIFI/BOOKS/Visiones%20de%20Robots.jpg',
  },
  {
    title: 'Foundation',
    publication_year: 1951,
    saga: 'Foundation Trilogy',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'El hombre se ha dispersado por toda la galaxia. La capital del Imperio es Trántor, nido de intrigas y corrupción. Gracias a su ciencia, fundada en el estudio matemático de los hechos históricos y el comportamiento de las masas, el psicohistoriador Hari Seldon prevé la caída del Imperio y el retorno a la barbarie durante varios milenios. A fin de reducir este período de barbarie a mil años, Seldon decide crear una Fundación en un extremo de la galaxia',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977725/APISCIFI/BOOKS/Fundacion.jpg',
  },
  {
    title: 'Foundation and Empire',
    publication_year: 1952,
    saga: 'Foundation Trilogy',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Guiada por su fundador, el gran psicohistoriador Hari Seldon, la Fundación ha logrado sobrevivir a la amenaza de barbarie de sus planetas vecinos. Pero ahora debe enfrentarse al Imperio, que, pese a su decadencia, sigue siendo la fuerza más poderosade la galaxia. Y nadie ha podido prever el nacimiento de una extraordinaria criatura llamada el Mulo, una inteligencia mutante dotada de poderes paranormales capaces de convertir al humano más combativo en un dócil esclavo',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977697/APISCIFI/BOOKS/Fundacion%20y%20Imperio.jpg',
  },
  {
    title: 'Second Foundation',
    publication_year: 1953,
    saga: 'Foundation Trilogy',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'La Fundación yace en ruinas, arrasada por la inteligencia mutante del Mulo. Sin embargo, se rumorea que Hari Seldon, el científico que lo inició todo, ha establecido una Segunda Fundación al otro lado de la galaxia, cuya ubicación exacta es un secretoguardado desde hace tiempo. Obligada a revelar su existencia, la Segunda Fundación deberá enfrentarse a la voluntad destructora del Mulo, con el añadido de que los supervivientes de la Primera Fundación también quieren acabar con ella…',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977991/APISCIFI/BOOKS/SegundaFundacion.jpg',
  },
  {
    title: 'The Caves of Steel',
    publication_year: 1954,
    saga: 'Robot Series',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'En el Enclave Espacial, a las afueras de la Ciudad de Nueva York, un científico de los Mundos Exteriores ha aparecido asesinado. El detective Elijah Baley tiene que ocuparse de este caso en la para él inquietante y odiosa compañía de un robot humanoide: R. Daneel Olivaw.                                                                                                        La investigación es delicada ya que puede terminar con el equilibrio entre los descendientes de la colonización estelar, en perfecta comunión con sus robots, y los habitantes de la Tierra, que, refugiados en grandes metrópolis subterráneas a las que llaman Ciudades, sobreviven precariamente a la falta de recursos naturales y temen a los robots.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980142/APISCIFI/BOOKS/Bovedas%20de%20Acero.jpg',
  },
  {
    title: 'The Naked Sun',
    publication_year: 1957,
    saga: 'Robot Series',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Mientras la sociedad terrestre rechaza a los robots humanoides, los Mundos Exteriores, antiguas colonias de la Tierra, han basado su economía en el trabajo de los robots, desarrollando así una sociedad altamente tecnológica, mucho más que la terrestre, en la que los individuos no soportan la presencia de sus congéneres: todos los contactos sociales se producen por medio de proyecciones holográficas. Por eso, el detective Baley no sabe por dónde empezar cuando le envían a Solaria a resolver el primer asesinato que se produce en doscientos años, pues todo parece apuntar, paradójicamente, a que ha sido cometido por un robot.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978180/APISCIFI/BOOKS/El%20Sol%20Desnudo.jpg',
  },
  {
    title: 'The Robots of Dawn',
    publication_year: 1983,
    saga: 'Robot Series',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Los robots del amanecer relata cómo en el planeta Aurora los hombres y sus robots vivían en una armonía aparentemente perfecta hasta el instante en que el robot más avanzado fue asesinado.                                                           ¿Ocultaba la muerte del androide una lucha despiadada por el control del Universo?',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701976712/APISCIFI/BOOKS/Los%20Robots%20del%20Amanecer.jpg',
  },
  {
    title: 'Robots and Empire',
    publication_year: 1985,
    saga: 'Robot Series',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'En Robots e imperio vemos cómo el futuro del universo corre peligro. Aunque se han debilitado las fuerzas de los siniestros Spacers, el doctor Kelden Amadiro no ha olvidado -ni perdonado- su humillante derrota a manos de Elijah Baley, el adorado héroe de la población terrestre. Amadiro ansía la venganza y está más decidido que nunca a consumar la destrucción del planeta Tierra',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977968/APISCIFI/BOOKS/Robots%20e%20Imperio.jpg',
  },
  {
    title: "Foundation's Edge",
    publication_year: 1982,
    saga: 'Foundation Trilogy',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Golan Trevize, consejero de la Primera Fundación, se pregunta sobre la posibilidad de la supervivencia de la Segunda Fundación. Esta debería haber sido destruida, según la versión oficial, agotándose así los superpoderes mentales de los científicos que la componían y que dirigían en la sombra los aconteceres del Imperio Galáctico.                                                                                                                       Tras una serie de intrigas políticas, Trevize se verá obligado a exiliarse en una astronave, en compañía del historiador Janov Pelorat. Pero, una vez en el espacio, ambos decidirán dedicarse a la búsqueda del antiguo planeta Tierra...',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980274/APISCIFI/BOOKS/Los%20Limites%20de%20la%20Fundacion.jpg',
  },
  {
    title: 'Foundation and Earth',
    publication_year: 1986,
    saga: 'Foundation Trilogy',
    saga_index: 5,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Golan Trevize, exconsejero de la Primera Fundación, debe determinar el futuro del desarrollo galáctico. Junto al profesor Janov Pelorat, cruzará la galaxia en busca del planeta ancestral de la humanidad. Sin embargo, en los mundos situados más allá de la influencia de la Fundación, donde pronunciar la palabra «Tierra» es tabú, la superstición dificulta su búsqueda. Así pues, completará una odisea llena de peligros, de la que dependerá el destino del Imperio y de la propia civilización',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977683/APISCIFI/BOOKS/Fundacion%20y%20Tierra.jpg',
  },
  {
    title: 'The End of the Eternity',
    publication_year: 1987,
    saga: 'Foundation Trilogy',
    saga_index: 6,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Siglo XXVII. La Eternidad domina el mundo. Formada por las mentes más brillantes de cada época, se trata de una organización que envía a sus integrantes a viajar en el tiempo. Su objetivo es alterar la historia de la humanidad para protegerla de cualquier catástrofe. En este contexto, un grupo de privilegiados ha adquirido la condición de ser eterno. Uno de ellos es Andrew Harlan, uno de los técnicos más eficaces y excelentes del proyecto, que a su vez es la mano derecha de Twissell, el jefe de la Eternidad. Twissell se encarga de calcular los cambios que hay que hacer y de sus posibles consecuencias. Pero todos sus planes peligran cuando, en una misión al futuro, Harlan se enamora perdidamente de Noys Lambent, una secretaria no eterna. ¿Será capaz de destruir la Eternidad solo por quedarse con ella?',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977628/APISCIFI/BOOKS/The%20End%20of%20the%20Eternity.jpg',
  },
  {
    title: 'Forward the Foundation',
    publication_year: 1993,
    saga: 'Foundation Trilogy',
    saga_index: 6,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Mientras Hari Seldon trabaja para perfeccionar su revolucionaria teoría de la psicohistoria y asegurar un lugar para la humanidad entre las estrellas, el gran Imperio Galáctico se encuentra al borde del colapso. Varios poderes pugnan por controlar a Seldon, que se ve envuelto en una red de complots políticos y debe luchar para salvar su gran obra y encontrar a sus verdaderos herederos: una búsqueda que empieza con su propia nieta y con el sueño de una nueva Fundación.                                     Esta nueva precuela a la trilogía de la Fundación, Premio Hugo a la mejor serie de todos los tiempos, sigue la historia de Hari Seldon en su lucha por llevar a cabo sus investigaciones y dar paso a la Fundación.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978269/APISCIFI/BOOKS/Hacia%20la%20Fundacion.jpg',
  },
  {
    title: 'Prelude to Foundation',
    publication_year: 1988,
    saga: 'Foundation Trilogy',
    saga_index: 0,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    resume: 'Corre el año 12020 en Trántor, la próspera capital del Imperio Galáctico, una civilización de una complejidad tecnológica y cultural inimagibale. Sin embargo, Hari Seldon, la mente científica más brillante de su época, acaba de augurar un desastre colosal a través de la psicohistoria, una nueva ciencia capaz de predecir el futuro mediante fórmulas matemáticas. Cuando el emperador Cleón busque apropiársela, Seldon deberá huir para que sus ideas no caigan en las manos equivocadas.                                                                                                                      Esta precuela a la famosa trilogía de la Fundación es un hito en la historia de la ciencia ficción y toda una revolución para los lectores, tanto los fans de los libros originales como los que están a punto de embarcarse en este viaje intergaláctico.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977712/APISCIFI/BOOKS/Preludio%20a%20la%20Fundacion.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksFundacion = await BookFundacion.find();
    if (allBooksFundacion.length > 0) {
      await BookFundacion.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksFundacionMap = arrayBooksFundacion.map((book) => new BookFundacion(book));
    await BookFundacion.insertMany(booksFundacionMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
