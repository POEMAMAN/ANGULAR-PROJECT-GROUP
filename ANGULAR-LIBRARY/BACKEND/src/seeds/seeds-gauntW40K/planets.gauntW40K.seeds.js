const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetGauntW40K = require('../../api/models/models.GauntW40K/planets.GauntW40K.model');

const arrayPlanetsGauntW40K = [
  {
    name: 'Earth',
    settled: 'Mundo Colmena',
    population: '25.000.000.000.000',
    capital: 'Trono Dorado',
    location: 'Solar System, Segmentum Solar',
    gravity: '1.00 g',
    country: 'Imperio del Hombre',
    moons: '1 (Moon)',
    resume: 'Terra, antiguamente conocida como la Vieja Tierra, es el centro administrativo y político del Imperium. Aquí se encuentran el Palacio del Emperador, la sede de los Altos Señores de Terra, el Trono Dorado, la Sede de la Inquisición, la Sede de la Eclesiarquía, y el Astronomicón en lo más alto del Himalaya.Es también la capital del Segmentum Solar, así como el mundo natal del Capítulo de los Puños Imperiales; aunque la mayoría de los primeros miembros de las Legiones Astartes eran originarios de Terra.                               El planeta se encuentra contaminado y devastado casi en su totalidad, y la atmósfera se ve repleta de gases tóxicos y dañinos para la vida. Todo esto ocurre debido a la gran contaminación generada por las industrias y las ciudades gigantescas que cubren la mayor parte del planeta; pero especialmente debido a los tremendos conflictos que sucedieron durante las Guerras de Unificación. La población vive en grandes ciudades colmenas, siendo la mayor estructura el Palacio Imperial, donde se halla el Trono Dorado conteniendo el cuerpo del Emperador. El Palacio Imperial se ubica en el Himalaya.Terra en el 41º Milenio es un Mundo colmena Imperial, el más grande de la galaxia. La Tierra fue despojada de todas las formas de recursos naturales hace muchos milenios; su suelo es absolutamente estéril y su atmósfera es ahora una niebla de contaminación industrial. Los enormes y laberínticos edificios estatales se extienden por la gran mayoría de la superficie.                                                                                                               Lo que quedó de los océanos de Terra después de las guerras termonucleares que marcaron el planeta durante la Era de los Conflictos se desvaneció en los años posteriores a la Herejía de Horus debido al inmenso calor producido por los cientos de miles de millones de personas que han sido comprimidas en el espacio vital limitado del mundo. Toda el agua líquida para satisfacer las necesidades de la población terrestre ahora es transportada desde la órbita por cargueros que toman grandes cometas portadores de hielo del sistema solar exterior y los llevan a la órbita terrestre para ser derretidos y dispersados entre la población.Muchas cadenas montañosas han sido niveladas, quizás todas menos la cordillera del Himalaziano (el Himalaya), que permanece intacta debido a los laboratorios de ingeniería genética que se dice que se encuentran debajo de ellos, donde el Emperador creó a los Primarcas y los primeros Marines Espaciales después de las Guerras de Unificación más de hace diez milenios.                                                                                                                              Las cámaras del Astronomicón también discurren por toda la cordillera. A pesar de estar devastada durante la Herejía de Horus y por las terribles guerras libradas en la superficie del mundo por las naciones de tecnobárbaros durante la larga Era de los Conflictos, Terra sigue siendo el mundo colmena más poblado y edificado del Imperio. Debajo de innumerables capas y milenios de acumulación urbana, las catacumbas albergan culturas más antiguas radicalmente diferentes de las de la superficie.Gran parte de la población de Terra vive en la miseria más terrible, su mayor esperanza es de que uno de sus descendientes pueda ser aceptado en el Adeptus Terra, el sacerdocio de la Tierra y la burocracia del Imperio, como un Servil, un Adepto de la clase más humilde.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137676/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/tierra_gnuvel.webp',
  },
  {
    name: 'Epsilon Menazoide',
    settled: 'Mundo Santuario del Caos',
    population: '230.000.000',
    capital: '',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.07 G',
    country: 'Caos',
    moons: '0',
    resume: 'Dada su gravedad, Menazoide Epsilon era presumiblemente un mundo similar en tamaño a la antigua Terra. Aunque su composición geográfica exacta nunca se declaró explícitamente, se observó que tenía al menos un océano, y sus masas de tierra contenían tanto tierras bajas secas, de matorral y rocosas, montañas.Las características más notables de Menazoid Epsilon fueron las designadas "Objetivos del Santuario" por las fuerzas de liberación de la Cruzada de los Mundos del Sabbat. Con un total de tres, los Objetivos del Santuario parecían ser poco más que los restos de ciudades antiguas excavadas profundamente en la topografía circundante y separadas unas de otras por miles de kilómetros. Además, cada uno era el centro de una serie de líneas radiales de estenosis pétreas, cuyo propósito era inicialmente un misterio, pero que más tarde se revelaron como los pilones de mecanismos de defensa arcanos.            Antes de la Era de la Lucha, durante la Era Oscura de la Tecnología cuando la Humanidad estaba en su apogeo de logros tecnológicos, Menazoide Epsilon había sido un mundo arsenal, con el posible propósito de construir los Hombres de Hierro para servir a la humanidad. Sin embargo, cayó en desuso por razones desconocidas, y el mundo fue abandonado por sus ocupantes, sus hogares y ciudades abandonadas a la decadencia durante milenios.                                                                                                         Durante la Cruzada de los Mundos del Sabbat, Epsilon Menazoide fue uno de los mundos Menazoides Clasp designados para deshacerse de la mancha del Caos por el Alto Mando Imperial que inicialmente sugirió un simple bombardeo orbital para destruir el mundo, ya que aparentemente no tenía valor estratégico o militar, y era el hogar de ningún ciudadano imperial leal. Esta proposición fue ferozmente impugnada por el Lord General Dravere, que había llegado a poseer información que afirmaba que Epsilon era el hogar de un arma poderosa, una que aseguraría su ascenso al mando de la Cruzada, una posición que había codiciado durante mucho tiempo.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137661/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/EPSILON_MENAZOIDE_d8ckhb.jpg',
  },
  {
    name: 'Balhaut',
    settled: 'Mundo Cementerio',
    population: '163.000.000',
    capital: 'Balopolis',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.01',
    country: 'Imperio del Hombre',
    moons: '1',
    resume: 'Balhaut es un Mundo Cementerio del Sector de los Mundos de Sabbat, en el Segmentum Pacificus.Fue uno de los objetivos clave dispuestos por el Señor de la Guerra Slaydo al inicio de la Cruzada de los Mundos de Sabbat y fue aquí donde él se enfrentó al Arconte Nadzybar en la famosa y sangrienta Batalla de Balhaut. Después de luchar en una sangrienta batalla para darle alcance, Slaydo se enfrentó contra el Arconte en combate singular y le derrotó, a pesar de sufrir heridas mortales en el proceso. En su lecho de muerte hizo que el recientemente ascendido Mariscal Macaroth fuera el nuevo Señor de la Guerra de la Cruzada.El planeta se convirtió tras la guerra en un lugar de descanso eterno para centenares de miles de hombres caídos para mayor gloria del Emperador y en un lugar de peregrinaje y de luto para las viudas y familias de los soldados muertos.                                                               La capital planetaria es la ciudad de Balópolis, construida a ambos lados de un río y punto de llegada de la mayoría de viajeros y visitantes que llegan a Balhaut a través de la gigantesca plataforma orbital conocida como Estación Alta.La ciudad se extiende por la llanura fluvial y asciende por las laderas poco empinadas de una montaña que domina el conjunto y que aloja la Oligarquía, un conjunto de edificios gubernamentales, universidades y capillas y que tiene como cúspide el Palacio Alto, la culminación de cualquier peregrinaje al Mundo Cementerio. Este lugar se convirtió en el epicentro de la batalla y donde se decidió la guerra en el planeta. Fue aquí donde murió Slaydo y donde se erigió el Honorarium, la capilla que alberga sus restos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137658/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/BALHAUT_d2euvv.jpg',
  },
  {
    name: 'Ancreon Sextus',
    settled: 'Mundo desierto/Mundo Santurio',
    population: '250.000.000',
    capital: '',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.01 G',
    country: 'cAOS',
    moons: '2',
    resume: "Ancreon Sextus es un planeta en la región de los Mundos Sabáticos del Segmentum Pacificus. Un mundo desértico, sus principales características geológicas son una serie de 'ciudades escalonadas', gigantescos laberintos rocosos compuestos por 'compartimentos' conectados por enormes arcos. Se desconoce el origen de las ciudades escalonadas, pero se ha teorizado que fueron erigidas por los habitantes originales del planeta como santuarios del emperador.                                                                    Cruzada de los Mundos Sabáticos: Ancreon Sextus fue uno de los mundos disputados durante la Cruzada de los Mundos Sabáticos. Las fuerzas del caos en el planeta fueron expulsadas de las ciudades convencionales y se refugiaron en las ciudades escalonadas, donde resultaron extremadamente difíciles de desalojar. Incapaces de simplemente aplanar las ciudades escalonadas desde la órbita debido a la posibilidad de que fueran santuarios del Emperador, las fuerzas Imperiales tuvieron que lidiar con constantes ataques del Pacto de Sangre, que parecía tener un suministro interminable de tropas. Extraños monstruos se aprovechaban de fuerzas aisladas, que parecían desaparecer cuando eran rastreados. La moral entre las fuerzas de Astra Militarum era baja, y la enfermedad se propagó a través de algunos campamentos gracias a los chefs amorales de Fortis Binary que procesaban la carne de los hombres muertos para obtener carne. Finalmente se descubrió que las ciudades escalonadas estaban plagadas de portales disfrazados de rocas, y que el Pacto de Sangre y los monstruos venían de otro planeta. Ante esta posición insostenible, el mando imperial optó por retirarse de las ciudades escalonadas y bombardearlas desde la órbita. No todas las fuerzas imperiales fueron capaces de retirarse a tiempo.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137655/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/ANCREON_SEXTUS_uvghxd.jpg',
  },
  {
    name: 'Aexe Cardinall',
    settled: 'Mundo Agricola/Mundo Industrial',
    population: '222.000.000',
    capital: 'Varios paises',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0.90 G',
    country: 'Imperio del Hombre',
    moons: '3',
    resume: "Aexe Cardinal es un planeta de clase industrial dentro del Segmentum Pacificus, uno de los Mundos Sabáticos. Una vez que un mundo agrícola bien reputado conocido por sus paisajes pintorescos y monumentos históricos, la belleza de Aexe cardenal fue finalmente empañado por la guerra civil entre la República Shadik y el resto de los estados de la nación del mundo. Ahora los bosques idílicos se han ido, con los campos extensos de tocones cortados a la izquierda para marcar su paso, y los grandes hitos anteriores, tales como el gran río de Naeme, ponen en ruinas. Esta guerra civil ha estado en curso durante los últimos 40 años, que fue templada por la llegada de refuerzos del Caos al estado anti-Imperio, la República Shadik. Todavía se disputa en una batalla entre Shadik, con los auxiliares del Caos y la Alianza, acompañados por elementos imperiales. Todo en Aexe Cardinal es arcaico en comparación con el de los planetas anteriores que las fuerzas imperiales 'reclutados' habían servido en; de tácticas militares y tecnología, a simples saludos, pero con la llegada de la ayuda mundial, Se demostró que cada lado tenía un desarrollo rápido; un ejemplo eran los cañones de asalto súper pesados que los Shadik desplegaron a lo largo de la línea Peinforq. La guerra civil en curso ha drenado ambos lados de recursos críticos como metales, madera y poder humano, donde por ejemplo estatuas de los grandes héroes de antaño solían alinear las calles, ahora solo quedan zócalos de piedra para enfrentar la máquina glotona de la guerra.                                                                       El Tanith First sirvió brevemente en la primera línea de la Línea Peinforq, Montorq Forest y Seiberg Pocket..",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137652/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/AEXE_CARDINALL_v3b53t.jpg',
  },
  {
    name: 'Salvation´s Reach',
    settled: 'Restos de naves',
    population: '??',
    capital: 'Estacion de reciclado',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0,38 g(artifical)',
    country: 'Caos (Blood Pact)',
    moons: '',
    resume: 'Salvation Reach esta loclaizado en uno de los sistemas exteriores de los Mundos de Sabbat. Es un lugar odnde se han sucedio batallas a lo larg de la historia, y que va recogiendo los resto de batallas del resto del sector.                                       Dichos restos se reparten por todo le sistema y es muy fificl la navegacion. Hay una gran agrupacion en el cnetro del sistema, donde se ven miles de naves aglomeradas. Actualmente es un base de los servidores del Caos',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137649/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/salvation_reach_zoqfp7.jpg',
  },
  {
    name: 'Yago',
    settled: 'Mundo Fortaleza',
    population: '100.000.000',
    capital: '',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.10 G',
    country: 'Caos/Imperio del Hombre',
    moons: '0',
    resume: 'Jago es una fortaleza antigua dominada por el mundo desértico dentro del Segmentum Pacificus, uno de los Mundos Sabáticos. Un planeta misterioso y traicionero, Jago se identifica por su enorme terreno rocoso desierto y fortificaciones embolsadas construidas por manos desconocidas. La evidencia suministrada durante la campaña de Hinzerhaus presentada por las fuerzas de Tanith sugirió que originalmente estaba habitada por una civilización pre-humana. Jago fue tomado por las fuerzas del Caos durante la caída de muchos de los Mundos del Sabbat, y previamente había sido considerado demasiado fortificado para una ofensiva antes de que un cambio de la política de la Fuerza de la Cruzada abriera un camino a su liberación                                                                 Nada se sabe de Jago antes de que se convirtiera en un planeta anfitrión del Caos, aparte de que tenía una población humana y, antes de esto, una población de humanoides sobredimensionados que podrían o no haber sido abhumanos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137646/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/YAGO_vqfg5c.jpg',
  },
  {
    name: 'Verghast',
    settled: 'Mundo Colmena',
    population: '250.000.000',
    capital: 'Colmena Vernun',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.01 G',
    country: 'Imperio del hombre',
    moons: '2',
    resume: 'Verghast es una colmena industrial dentro del Segmentum Pacificus, uno de los Mundos Sabáticos famoso por sus industrias mineras y manufactureras, de la que surgió una industria mercantil grande e higly competente. El mundo estaba organizado en varias colmenas, cada una gobernada por un monarca que tenía acceso a todos los sistemas de la Colmena, y estoicamente independientes entre sí. En el momento de la Cruzada de los Mundos del Sabbat, el mundo estaba envuelto en una guerra civil viscosa, aunque de corta duración, entre los que mantenían sus alianzas con el Imperio y los habitantes contaminados de la Colmena de Ferrozoica. Las ciudades notables de Hive incluyen: Vannick Hive, un productor clave de combustible para las colmenas vecinas, pero fue destruido completamente por una explosión nuclear durante la Segunda Guerra Ferozoicana. Los Colectivos del Norte, una colección de asentamientos o colmenas bien conocidos por sus fábricas y gremios artísticos. Vervunhive-notable por sus grandes fábricas, fuerza militar y ser el lugar de la batalla más famosa de la Segunda Guerra Ferrozoicana. Fue destruido por el conflicto y abandonado poco después. y la Colmena de Ferrozoica, donde los zarcillos del Caos encontraron su camino hacia este mundo, y fueron destruidos por el bombardeo orbital.                                                                                                                         Verghast, basado en la salida de Vervunhive, levanta regimientos de la Guardia Imperial con poca frecuencia. Los que van a formar los regimientos verghastianos son generalmente veteranos de los diversos conflictos civiles menores que han ocurrido en la historia del mundo, o miembros del PDF local. Después de la Segunda Guerra Ferozoica se introdujo temporalmente un método alternativo de reclutamiento en la forma de ofrecer la concriptación de todos los que estaban dispuestos en el regimiento Tanith 1, que había estado sirviendo en Vervunhive durante la guerra..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137643/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/VERGHAST_ifd4fh.jpg',
  },
  {
    name: 'Urdesh',
    settled: 'Mundo Forja',
    population: '320.000.000',
    capital: 'Urdesh City',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1.00 G',
    country: 'Imperio del hombre',
    moons: '0',
    resume: 'El contacto con Urdesh fue establecido por primera vez por las Flotas Exploradoras de Marte durante la Gran Cruzada. Durante la Era de Lucha el mundo había perdido mucho, incluyendo el conocimiento para construir nuevos Titanes. Resultó de gran interés para el Imperio gracias a que poseía el conocimiento necesario para producir grandes cantidades de armas para el Ejército Imperial. El mundo se asimiló pacíficamente en el Imperium después de que se le ofreció la oportunidad de reponer su Legio Damicium, la Legio Titan Legion. Durante la Gran Cruzada Urdesh era todavía solo un mundo menor en el Cinturón de Hierro que alimentaba la máquina de guerra del Ejército Imperial. Cuando la Herejía de Horus comenzó, el mundo estaba desesperado por mantener su considerable Legión de Titán y dependía de Marte para recibir ayuda, que la vio unirse a las fuerzas del Warmaster. Durante la Herejía transportaron suministros a Segmentum Solar, ayudando al traidor Mechanicum a establecer pequeñas células de saboteadores que trabajaban para socavar las defensas imperiales alrededor de Terra.  Para este crimen Malcador el Sigillite despachó una fuerza de Legio Ignatum de Terra, que junto con los leales en el Cinturón de Hierro purgaron el planeta en las etapas finales del Cataclismo de Hierro',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137601/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/URDESH_qlufre.jpg',
  },
  {
    name: 'Tanith',
    settled: 'Mundo Agricola / Mundo Colmena',
    population: '50.000.000',
    capital: 'Tanith Magna',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0,9 G',
    country: 'Dominio Imperial',
    moons: '2',
    resume: "Tanith era un mundo ubicado en el cúmulo de los Mundos Sabáticos del Segmentum Pacificus. Era principalmente un mundo forestal y agrícola, siendo su principal exportación el suministro saludable de Nalwood, la madera fuerte y oscura del planeta. Su población estaba compuesta por ciudades colmena centralizadas, y pueblos y bocages de bosques. Tanith fue destruido por las fuerzas del Caos en el momento de la fundación de sus primeros regimientos imperiales.Tanith fue dirigido principalmente por un sistema feudal de líderes electos, conocido como Elector, que tenía el mando supremo del planeta desde su lugar en el Palacio del Elector en Tanith Magna, la ciudad capital, Hive de Tanith.                                                                                                         Al planeta se le dio una infra-estructura de dos mundos debido a que comprendía tanto las imponentes ciudades de la Colmena, como Magna, como el gran número de aldeas periféricas, pueblos y aldeas en los bosques, donde se llevó a cabo el trabajo principal de leñador. Nalwood era una exportación valiosa debido a su marco fuerte, los árboles de Nal que crecían a las alturas enormes.El centro principal de la actividad en Tanith era Tanith Magna, donde las pocas familias de alto rango y de gran alcance tomaron casa, y también donde los puertos espaciales primarios, Se establecieron órganos e instituciones de gobierno. La colmena de la ciudad era conocida por el contrabando de varias sustancias ilícitas. Aquí es donde Rawne, Brostin y Feygor, entre otros, residieron antes de la formación. La otra ciudad importante, Tanith Attica, compartió un demográfico social y criminal similar.Las áreas boscosas demostraron tener condiciones de vida difíciles, debido a que los árboles Nal se 'movían' durante ciertas estaciones, lo que significa que perderse en los bosques debido al cambio de terreno era un riesgo constante. Esto significó que los residentes de las aldeas forestales se vieron obligados a dedicarse a la artesanía de la madera simplemente para evitar quedar varados. Como resultado de esta extraña anomalía y las complicaciones que surgió, Tanith produjo algunos de los mejores rastreadores y sobrevivientes en el Segmentum. Estos incluyen Mkoll y Mkvenner.          La fundación: Antes de los acontecimientos de la caída, Tanith fue llamado para proporcionar tres regimientos de la Guardia Imperial de sus milicias locales y población civil. Estas formaciones se unirían a las fuerzas de la Cruzada de los Mundos del Sabbat, comandadas por Warmaster Macaroth. Esta fue la primera fundación que se le había requerido hacer. Las tropas se reunieron en alojamientos temporales y cuarteles en los campos fuera de la capital, Tanith Magna, en preparación para la inspección por su mariscal designado, el Coronel Comisario Ibram Gaunt. Una estructura de mando se puso en marcha con los oficiales superiores de las milicias que se instalan como comandantes.La fundación levantó cerca de 6.000 hombres con un pequeño número de vehículos de transporte y piezas de campo de artillería ligera, el consenso principal es que el nuevore gimientos formados actuarían como infantería ligera.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137598/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/TANITH_r5plx4.jpg',
  },
  {
    name: 'Monthax',
    settled: 'Mundo Agricola',
    population: '10.000.000',
    capital: '',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1,1 G',
    country: 'Eldar/Caos',
    moons: '1',
    resume: 'Durante la Cruzada de los Mundos del Sabbat fue el centro de un conflicto entre las fuerzas del Caos y varios regimientos de la Guardia Imperial, incluyendo el Tanith First and Only, el Royal Volpone 50th "Bluebloods" y los Roane Deepers. Atrapada en el medio había una pequeña fuerza Eldar liderada por el Señor Eon Kull, intentando sellar una Puerta Webway en el planeta antes de ser capturada por el Caos                                                                                                                        Monthax tiene un clima húmedo y está cubierto por la densa vegetación de la selva. No tiene población humana, pero contiene una serie de especies únicas de plantas y animales que se han adaptado a su ecosistema',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137596/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/MONTHAX_nv7nhv.webp',
  },
  {
    name: 'Gereon',
    settled: 'Mundo Agricola',
    population: '20.000.000',
    capital: '',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0,95 G',
    country: 'Caos /Dominio Imperial',
    moons: '1',
    resume: "Gereon era un mundo agrícola dentro del Segmentum Pacificus, uno de los mundos sabáticos. Actualmente está en manos de las fuerzas imperiales después de una extenuante guerra de liberación, después de una ocupación de tres años por las fuerzas del Caos.    Hay varias zonas del planeta llamas IMPRO(Zonas improductivas), donde vive una ssubespecie humana, nativa del planeta, que es capaz de sobrevivir en un ambiente altamente venenoso                                                                                   *Brovisia, una ciudad                                                                                                             *Ciudad de Ineuron, un asentamiento                                                                                         *K'ethdrac'att Shet Magir, una aglomeración urbana transformada en una colosal fortaleza que fue atacada por el Alto Mando Imperial durante la primera fase de la liberación                                                                                          *Provincia de Lowensa, antigua región agrícola                                                                                  *Cantible, una ciudad pequeña                                                                                                     *Cayfer, una aldea agrícola                                                                                                         *Peshpal Garrison, una fortaleza y centro de entrenamiento para los Hijos de Sek. Fue el sitio de la muerte de Carook el Carnicero.*Phatima, una ciudad                                                                                                                   *El Untill, una región poco poblada de denso pantano y selva                                                                      *Edrian, un asentamiento nihtgane                                                                                                 *Zarcus, una ciudad",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708136904/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/GEREON_geulm5.jpg',
  },
  {
    name: 'Hagia',
    settled: 'Mundo Santurio',
    population: '55.000.000',
    capital: 'Hagia Magnus',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1 G',
    country: 'Imperio del hombre',
    moons: '2',
    resume: 'Hagia fue un mundo santuario en el que se desplegó el Tanith 1 durante los eventos de la novela Guardia de Honor. Es el hogar de Santa sabbat hija de un pastor chelón, a mediados del milenio 35,                                                                 Hagia era un planeta feudal gobernado por un conglomerado de ciudades-estado, el estado preeminente, Hagia, siendo gobernado por un Gran Rey; sin embargo, él, junto con su familia y corte, fueron capturados por los peregrinos del Pater y asesinados, sus cuerpos colgados en la Plaza de la Sublime Tranquilidad.                                                                                                    La propia Sabbat era de estirpe humilde.. Sin embargo, un día Sabbat, llena del espíritu del Emperador, descendió de las colinas donde vivía y se embarcó en una gran cruzada a través de la región galáctica local. Durante 105 años guió a su ejército a través de las estrellas hasta que cayó sobre Harkalon.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137591/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/HAGIA_vo9qtr.jpg',
  },
  {
    name: 'Fortis Binary',
    settled: 'Mundo Forja / Mundo desierto',
    population: '150.000.000',
    capital: 'Fortis',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0,91 G',
    country: 'Imperio del hombre',
    moons: '2',
    resume: 'Fortis Binary era un mundo de forja dentro del Segmentum Pacificus, uno de los Mundos Sabáticos. Fue un reconocido exportador de armamento y activos tecnológicos, y por lo tanto fue fuertemente poplated por el Adeptus Mechanicus. Un mundo desértico, Fortis Binary fue ocupado brevemente por las fuerzas del Caos antes de una exitosa campaña de liberación. Desde entonces ha levantado sus propios regimientos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708136901/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/FORTIS_BINARY_m3fmsa.jpg',
  },
  {
    name: 'Phantine',
    settled: 'Mundo Industrial',
    population: '50.000.000',
    capital: 'Cirehorn',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1,2 G',
    country: 'Caos/Dominio Imperial',
    moons: '2',
    resume: 'Phantine es un planeta de clase industrial dentro del Segmentum Pacificus, uno de los Mundos Sabáticos. Fuertemente contaminada debido a la excesiva industria y el uso de gases de carbono, la población de Phantine ahora usa el smog tóxico del mundo para obtener energías. Las ciudades en Phantine se construyen a gran altitud, ya sea en los picos de las grandes montañas, o en las cimas de las decadentes torres de la colmena del planeta, para evitar los efectos dañinos de la contaminación. La gente de Phantine vive en ciudades completamente aisladas del mundo exterior para evitar la contaminación de los gases nocivos que cubren el planeta, por lo tanto, al menos en el caso de la ciudad de Cirenholm, un ciclo regular de lluvia artificial se realiza cada pocos días para mantener las ciudades limpias. La capital del planeta es Ouranberg, una vasta ciudad construida sobre los picos de una gran montaña. Aquí, entre las muchas otras ciudades del mundo, las fuerzas del archienemigo se atrincheraron contra el venidero ejército de liberación imperial. Phantine es bien conocido por el número de distinguidos escuadrones de aviones de la Guardia Imperial que ha levantado, y como un reflejo de su destreza, luchó una guerra en curso contra el Archienemigo desde su base en Hessenville, los principales campos de entrenamiento naval del mundo, entre otras ciudades todavía bajo control imperial durante la guerra.                                                  Phantine fue finalmente liberado por las fuerzas imperiales..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708136899/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/FANTINE_i293o7.jpg',
  },
  {
    name: 'Caligula',
    settled: 'Mundo Colmena',
    population: '550.000.000',
    capital: 'Colmena Caligula',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1,13 G',
    country: 'Caos/Dominio Imperial',
    moons: '2',
    resume: "Un típico mundo colmena, Calígula consistía en múltiples ciudades colmena colosales - enormes metrópolis selladas que se extienden muchos kilómetros por encima del paisaje circundante - salpicadas a través de un páramo de desiertos infértiles, mesas rocosas y tierras baldías inhabitables. En el momento de los eventos relacionados en That Horrible Strength, muchas de las colmenas habían sido reducidas a escombros, o todavía estaban en llamas como resultado del reciente conflicto.                                            Después de la reconquista de Calígula por las fuerzas de la Cruzada de los Mundos Sabáticos, el planeta entero estaba prácticamente en ruinas. Ciertas colmenas poseían suministros vitales requeridos por sus vecinos; en particular la necesidad de ayuda era Calphernia Hive, pero los suministros enviados allí eran constantemente secuestrados por grupos grandes y bien armados de bandidos escondidos en los páramos entre las ciudades. Para eliminar esta amenaza, el General Thoth asignó al Coronel-Comisario Gaunt para supervisar el trabajo de ayuda que llevan a cabo las unidades de la Guardia Imperial todavía en el planeta.                                        Gaunt ideó un plan para matar a estos renegados ordenando a uno de sus hombres de más confianza, Trooper 'Try Again' Bragg, comandar un convoy grande y bien abastecido a Calphernia, con el objetivo de atraer a los bandidos y mantenerlos lo suficiente para que la Armada Imperial despliegue unidades de bombarderos y los destruya de un solo golpe. El plan fue un éxito, y Calphernia se alivió, pero a costa de muchas vidas Tanith.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708257868/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/Caligula_zpjbbc.webp',
  },
  {
    name: 'Herodor',
    settled: 'Mundo Santuario',
    population: '125.000.000',
    capital: 'Civitas',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1 G',
    country: 'Caos/Dominio Imperial',
    moons: '1',
    resume: 'Herodor era un mundo desolado situado en el sector de los mundos sabáticos, donde se creía que el santo imperial Sabbat había reencarnado, proporcionar un gran impulso moral a las fuerzas de la Cruzada Imperial de los Mundos del Sabbat que estaban luchando contra las Fuerzas del Caos que habían invadido gran parte de ese sector durante el final del Milenio 41.Herodor era un mundo sagrado para la Eclesiástica porque durante la Cruzada original de San Sabbat para conquistar los Mundos Sabáticos en nombre del Emperador se había detenido en el planeta para limpiar sus heridas en el río Civitas. Como tal, ese mismo río seguía siendo un lugar de peregrinación para muchos creyentes en el culto imperial.                                                                                          Durante la Cruzada de los Mundos del Sabbat, Herodor fue atacado una vez más por las tropas del Caos lideradas por el Magister Enok Innokenti, en su mayoría miembros del Pacto de Sangre, pero también con la ayuda de nueve Campeones del Caos. Las fuerzas del Caos habían llegado a Herodor debido al rumor de que un Santo Sabbat reencarnado estaba reuniendo fuerzas imperiales en el planeta. En la batalla que siguió, el Santo aparentemente parecía llevar a las fuerzas imperiales a la victoria fin.                                 Durante la Batalla climática de la Colmena Vieja, el Santo mató a Innokenti en un solo combate y luego dirigió un contraataque imperial apoyado por la Fuerza de Defensa Planetaria sobreviviente, Astra Militarum y tropas peregrinas irregulares hasta que los refuerzos imperiales que fueron recientemente redesplegados del mundo de Morlond vinieron a aliviar las fuerzas leales.Esta fue una victoria significativa para la Cruzada de los Mundos Sabáticos en su conjunto, ya que ayudó no solo a detener sino desmoralizar y dispersar a las fuerzas del Caos lideradas por Innokenti y ayudó a abrir un segundo frente para la Cruzada para enfrentar a las fuerzas del Caos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708257849/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/Herodorreal_dxysuk.webp',
  },
  {
    name: 'Khed 1173',
    settled: 'Mundo Primitivo',
    population: '??',
    capital: '??',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '1 G',
    country: 'Dominio Imperial',
    moons: '2',
    resume: 'Un mundo de extremos existentes en un sistema estelar binario, las regiones ecuatoriales de Khedd consistían en brezales desérticos, mientras que las áreas más cercanas a los polos estaban formadas por tundras congeladas y glaciares helados, y el mundo contenía al menos un gran océano. Los humanos de Khedd, conocidos como Kheddites, eran un pueblo primitivo cuyo estilo de vida nómada se parecía al de la pre-colonización de los nativos americanos de Terra, y era el hogar de varias formas de vida indígenas distintas.Dieciséis años antes de los eventos descritos en First and Only, el Imperio del Hombre estaba llevando a cabo una operación en todo el planeta contra los Kheddites por una razón no revelada, probable rebelión. Después de los éxitos iniciales durante el verano en las regiones tropicales, los Jantine Cuarto y Undécimo, bajo el general Aldo Dercius, se estancaron en una lenta campaña contra las guerrillas sobrevivientes, hasta que finalmente Warmaster Slaydo desplegó la Quinta y Sexta Hyrkan (que incluía al comisario Ibram Gaunt) para salir del punto muerto.                                                                                                Durante este despliegue, Gaunt confrontó a Dercius por su conducta en el planeta de Kentaur, y utilizó su autoridad comisarial para matar a Dercius en un duelo de honor, una acción que tendría graves repercusiones para el Primero Tanith en el futuro.Aunque nunca se declaró explícitamente en la novela, se puede asumir con seguridad que las fuerzas del Imperio surgieron de la acción victoriosa de Khedd',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708257855/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/Khedd1173-0_drpcbt.webp',
  },
  {
    name: 'Manzipor',
    settled: 'Mundo Agricola',
    population: '192.000.000',
    capital: 'Manzipor City',
    location: 'Mundos del Sabat, Segmento Pacificus',
    gravity: '0,81 G',
    country: 'Imperio del hombre',
    moons: '5',
    resume: 'Poco se sabe de Manzipor aparte de que era un mundo pacífico con cielos dorados, al menos parcialmente cubiertos de bosques exuberantes y campos verdes.El hogar familiar de Ibram Gaunt Snr., el joven Gaunt vivió allí hasta que se supo de la muerte de su padre, cuando fue enviado a la Schola Progenium en el cardenal Ignacio. No está claro si el niño nació allí o no.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708258074/WARHAMMER%2040000/GAUNT%20GHOST/PLANETAS/Manzipor_axrw43.webp',
  },

];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsGauntW40K = await PlanetGauntW40K.find();
    if (allPlanetsGauntW40K.length > 0) {
      await PlanetGauntW40K.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsGauntW40KMap = arrayPlanetsGauntW40K.map((planet) => new PlanetGauntW40K(planet));
    await PlanetGauntW40K.insertMany(planetsGauntW40KMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
