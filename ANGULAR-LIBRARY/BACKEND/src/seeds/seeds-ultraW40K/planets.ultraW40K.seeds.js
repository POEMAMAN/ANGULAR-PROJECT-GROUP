const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetUltraW40K = require('../../api/models/models.UltraW40K/planets.UltraW40K.model');

const arrayPlanetsUltraW40K = [
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
    name: 'Maccrage',
    settled: 'Mundo natal Capitulo Ultramarines',
    population: '400.000.000',
    capital: 'Ciudad Maccrage',
    location: 'Reino de Ultramar, Segmento Ultima',
    gravity: '1 G',
    country: 'Imperio del Hombre, Reino de Ultramar',
    moons: '0',
    resume: 'Macragge es un Mundo Civilizado imperial localizado en el extremo meridional de la Franja Este de la Galaxia, en el Segmentum Ultima. También es el mundo natal del Capítulo de Marines Espaciales de los Ultramarines y la capital del Reino de Ultramar. En sí, Macragge es mayoritariamente sombrío y desolado, ya que más de tres cuartas partes de su masa terrestre están formadas por tierras altas montañosas casi totalmente desprovistas de vida. El pueblo de Macragge no vive en esta inhóspita región, pero la Fortaleza-Monasterio de los Ultramarines, la Fortaleza de Hera, está construida sobre un abrupto pico rodeado por montañas impenetrables. Dentro de esta poderosa fortaleza, en el interior del vasto Templo de la Corrección, se encuentra el santuario del mismísimo Primarca Roboute Guilliman. Está preservado en la muerte por un campo de estasis insensible a los efectos del tiempo. Este es uno de los lugares más santos del Imperio, y miles de personas acuden desde toda la Galaxia para contemplar el rostro del antiguo Primarca. Macragge posee temibles defensas, incluyendo dos fortalezas polares, que han sido reforzadas desde la Batalla de Macragge. Es el hogar de los Ultramarines y la sede del Señor del Capítulo, Marneus Augustus Calgar, que hace las veces de Gobernador Planetario y Sectorial con los títulos de Lord Macragge y Lord de Ultramar, respectivamente. Macragge es famoso también por la derrota de la Flota Enjambre Behemoth a manos de los Ultramarines, que tuvo lugar allí en el último cuarto del M41.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137682/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/MACCRAGE_judhlt.jpg',
  },
  {
    name: 'Calth',
    settled: 'Mundo Colmena',
    population: '180.000.000',
    capital: 'Calthopolis',
    location: 'Reino de Ultramar, Segmento Ultima',
    gravity: '1,2 G',
    country: 'Imperio del Hombre, Reino de Ultramar',
    moons: '2',
    resume: 'Calth es un planeta del subsector Ultramar, el Imperio de los Ultramarines. Se encuentra en el Segmentum Ultima y es, después de Macragge, un planeta autosuficiente y uno de los planetas más productivos del sistema. A pesar de ello, una gran producción de comida es enviada desde el planeta Iax.Es un planeta sin atmósfera y su superficie es inhabitable a causa de la letal radiación de su sol azul. La población de Calth vive en inmensas ciudades cavernas bajo la superficie del planeta, cavernas tan frescas y espaciosas que hacen olvidar a un hombre que se encuentra bajo tierra.                                                                                       El planeta también es conocido por sus productivos astilleros orbitales, los cuales proveen de naves a las flotas de los Ultramarines, así como también naves civiles y militares de uso común al resto del Imperio.Calth es el planeta natal del Capitán de la 4ª Compañía de Ultramarines Uriel Ventris..                                                                                                                                                                                                                                                                     Durante la Herejía de Horus, Calth fue utilizado por el Primarca Roboute Guilliman como plataforma inicial de su supuesto asalto hacia el Sistema Veridian. Horus le había mandado allí para apartarlo y tenerlo distraído mientras él iniciaba el asedio a Terra.Fue allí donde los Ultramarines fueron atacados por la Legión de los Portadores de la Palabra. Posteriormente Calth también resistió los ataques de la Flota Enjambre Behemoth y de la Flota Enjambre Kraken.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137679/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/CALTH_g8zbwd.jpg',
  },
  {
    name: 'Tarsis Ultra',
    settled: 'Mundo agricola',
    population: '60.000.000',
    capital: '',
    location: 'Reino de Ultramar, Segmento Ultima',
    gravity: '1 G',
    country: 'Imperio del Hombre, Reino de Ultramar',
    moons: '1',
    resume: "Tarsis Ultra es un Mundo Agrícola que se encuentra en el Segmentum Ultima.Durante la Tercera Guerra Tiránida, la Flota Enjambre Leviathan decendió sobre el planeta. Entre los defensores imperiales se encontraba la 4ta Compañía de los Ultramarines al mando del Capitán Uriel Ventris. A pesar de la presencia de los Marines Espaciales, las fuerzas del imperio apenas eran capaces de detener las oleadas de bio-guerreros. Al final el planeta fue salvado, no por la fuerza si no por una plaga biológica, creada por el Magos Locard, que fue diseminada en el corazón de la Flota Enjambre. La plaga colapsó las redes sinápticas que daba la unidad a las tropas tiránidas, lo cual causó que se atacaran entre ellas. Esto fue aprovechado por las fuerzas imperiales que contraatacaron y destrozaron a los invasores.                                                                                                                           Este mundo fue destruido por los Guerreros de Hierro antes de la invasión de M´kar a Ultramar. Lo destruyó el Herrero de Guerra Honsou para vengarse y provocar a Uriel Ventris.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137673/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/TARSIS_ULTRA_fzbshj.jpg',
  },
  {
    name: 'Salinas',
    settled: 'Mundo Agricola/Mundo Industrial',
    population: '222.000.000',
    capital: 'Varios paises',
    location: 'Segmento Saragonus',
    gravity: '0.95 G',
    country: 'Caos',
    moons: '0',
    resume: "Salinas es un planeta devastado por la guerra en el Subsector Paragonus.Debido a un accidente de la geografía estelar, Salinas ocupa una región del espacio donde las barreras entre la Disformidad y el Espacio Real son inusualmente delgadas y permeables, haciendo que el planeta sea permeable a la influencia del Caos.Aproximadamente en el M37, Ustaroth, un Príncipe Demonio, fue capaz de manifestarse en Salinas, y el consecuente caos y la masacre que produjo a su llegada, obligó a pedir ayuda al Gobernador Planetario imperial. Un destacamento de Marines Espaciales del Capítulo de los Hijos de Guilliman acudió para luchar junto las fuerzas imperiales, pero fueron exterminados hasta el último hombre.                                                                                         La presencia del Caos continuó asolando Salinas durante diez años antes que Caballeros Grises llegaran y el Príncipe Daemon finalmente fuera vencido por el gran Ignatius. A pesar de la victoria, las paredes de la realidad todavía se hicieron más débiles debido a la presencia del Caos y los Caballeros Grises han debido mantener una vigilancia constante sobre el planeta.En el año 965.M41, el Subsector fue afectado por una rebelión de fuerzas traidoras comandadas por el Señor del Caos Crozus Regaur. Se proclamó una Cruzada imperial para poner fin a la rebelión, la cual convocó incluso a un Regimiento de la Guardia Imperial ajeno al Sector, los Falcatas de Achaman. Después de veinte años de lucha sangrienta, los Falcatas se habían convertido en un ejército de conquista y habían reclamado el derecho de asentamiento sobre Salinas en el proceso de destruir cualquier elemento rebelde que hubiera                                                                                                                                  A pesar de las súplicas de la población asegurando que siempre habían sido leales al Emperador, los Falcatas creyeron que se habían ganado el derecho de conquistar el planeta. El Gobernador Planetario Shaara fue ejecutado y reemplazado por el comandante de los Falcatas, Leto Barbaden. Estalló a continuación una sangrienta guerra civil entre los Falcatas y la fuerza insurgente “Los Hijos de Salinas”. La guerra finalizó con la Masacre de Khaturian, dirigida por Barbaden.Poco después, el Capitán Uriel Ventris, el Sargento Veterano Pasanius Lysane y los Sin Piel llegaron al planeta transportados desde Medrengard por el Ingenio Daemónicos que anteriormente albergaba al Daemonium Omphalos. Casi inmediatamente, la Disformidad empezó a afectar la realidad y los espíritus de los inocentes asesinados en la Masacre de Khaturian se levantaron de nuevo, buscando venganza y poseyendo a los Sin Piel en el proceso.La rabia que desprendían los espíritus era tan potente que fue capaz de abrir un portal hacia la Disformidad en Salinas, exigiendo el retorno de los Caballeros Grises para hacer frente a la amenaza. El peligro potencial que representaba era de tal magnitud que los Caballeros Grises consideraron seriamente aplicar un Exterminatus a la totalidad del planeta, pero fueron capaces de poner fin a la perturbación y desterrar las abominaciones a la Disformidad. Como parte de dicho destierro, los Caballeros Grises tuvieron que permitir a los muertos de Salinas aplacar sus ansias de venganza sobre Barbaden.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137670/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/SALINAS_scrxyh.jpg',
  },
  {
    name: 'Pavonis',
    settled: 'Mundo Necropolis / undo Minero',
    population: '300.000.000',
    capital: 'Pavonis',
    location: 'Segmento Ultima',
    gravity: '1,1',
    country: 'Imperio del Hombre',
    moons: '0',
    resume: "Pavonis es un Mundo Minero imperial que se encuentra en el Segmentum Ultima. Este mundo dista algunas semanas de Ultramar y está gobernado por cárteles o corporaciones industriales. El planeta posee un diminuto disco.La primera impresión de Pavonis era de contrastes. En mitad del paisaje verde y agreste se podían ver docenas de manufactorums que se extendían cubriendo docenas de kilómetros cuadrados en todas las direcciones, junto a los almacenes, a depósitos de material y a nódulos de transporte que los mantenían comunicados. Unas enormes grúas y la maquinaria de almacenamiento de color amarillo recorrían aquella zona industrial pasando al lado de gigantescos contenedores llenos de combustible y de suministros para las forjas siempre en funcionamiento. Las torres de refrigeración, que vomitaban humo de forma continua, inundaban el aire con nubes de vapor, y una capa de contaminación de color amarillo se mantenía cerca del suelo, tiñiendo todos los edificios con un residuo ocre de aspecto asqueroso.                                                                                                                           Algo más adelante, más allá de los manufactorums, en mitad de un enorme bosque y a los pies de unos altos picos montañosos, se podía distinguir un conjunto señorial de edificios de color blanco, perteneciente a una de las corporaciones gobernantes que se encargaban de supervisar la producción de Pavonis. La entrada de ese edificio poseía un pórtico de mármol del edificio de mayor tamaño. En las zonas boscosas se podían ver manadas de ágiles bestias cornudas.Era algo bastante común en mundos como Pavonis, que se encuentran en las fronteras orientales, donde pasan décadas sin que los planetas tengan ninguna clase de contacto oficial con el Administratum, que el adepto local estuviera a sueldo de alguno de los magnates locales, como era el caso de Ballion Varle.Pavonis era originalmente un mundo necrópolis, donde se encontraba en estasis un Fragmento del C'tan conocido como el Portador de la Noche.                                Tras su colonización por la Humanidad y su anexión al Imperio, se convirtió en un mundo minero dominado por un conjunto de grandes cárteles industriales. Pavonis había sido un planeta pacífico hasta hacía pocos años, apenas afectado por las luchas que involucraban al resto de la galaxia. Los diezmos se habían pagado a tiempo y los jóvenes de Pavonis se habían reunido para alistarse en los ejércitos imperiales. Pavonis había sido en todos los aspectos un mundo imperial ejemplar y modélico. La gente trabajaba con denuedo y se veían honrados por sus esfuerzos. Los desórdenes callejeros eran cosas que pasaban en otros planetas. Per los tiempos habían cambiado, y mucho.El gobierno estaba gestionado por la Corporación Shonai, de la que era su máximo representante Mykola Shonai, quien gonernaban el planeta y quien ostentaba el cargo de Gobernador Planetario gracias a la alianza con la Corporación Vergen, cuyos representantes componían el Senado Planetario.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137668/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/PAVONIS_gmy9uq.jpg',
  },
  {
    name: 'Medrengard',
    settled: 'Mundo Fortaleza / Mundo Demonio',
    population: '??',
    capital: '??',
    location: 'El Ojo del Terror',
    gravity: '1.10 G',
    country: 'Caos/ Legion Guerreros de HIerro',
    moons: '0',
    resume: 'Medrengard es el Mundo Demoníaco de Perturabo, y la base actual de la Legión Traidora de los Guerreros de Hierro. Suele verse en visiones de pesadilla como un mundo convertido en una vasta fortaleza con montañas de torres inconcebiblemente altas y mazmorras penetrando hasta el mismo núcleo del planeta.La información obtenida de las misiones de reconocimiento dentro del Ojo del Terror describen el mundo como un estéril mundo prisión en el que los prisioneros trabajan hasta morir, con enormes naves del guerra del Caos amarradas a sus torres más altas, que es donde viven los Guerreros de Hierro.                                                                                                                                Otras descripciones de Medrengard lo muestran como un enorme Mundo Fortaleza con fosos de esclavos y columnas gigantescas. En el cielo blanco un sol negro exuda filamentos vaporosos y oscuros hasta la superficie del mundo corrupto.Aunque parece ser que no hay habitantes autóctonos en Medrengard, los mutados "Sin Piel" acechan en las colinas y las quebradas.Colonizado por los Guerreros de Hierro en algún momento después de la Herejía de Horus, durante la Guerra Civil de los Guerreros de Hierro el planeta se convirtió en un campo de batalla.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708137664/WARHAMMER%2040000/ULTRAMARINES/PLANETAS/MEDRENGARD_rhesyx.jpg',
  },
  {
    name: 'Marte',
    settled: 'Mundo Forja',
    population: '50.000.000.000.000',
    capital: 'Marte',
    location: 'Solar System, Segmento Solar',
    gravity: '1.01 G',
    country: 'Imperio del hombre',
    moons: '2',
    resume: 'Marte es el reino planetario del Adeptus Mechanicus, el hogar y el dominio de los Tecnosacerdotes del Culto Mechanicus. El planeta rojo es considerado una de las maravillas de la Galaxia, el Mundo Forja más grande del Imperio, el fabricante de naves y el guardián de secretos. Es donde gobierna el Fabricador General y donde se almacena todo el conocimiento tecnológico de la Humanidad. Ostenta el grado de producción I-Maximus.Marte mantiene su preeminencia entre el Adeptus Mechanicus colonizando mundos ricos en recursos, lanzando flotas exploradoras a los límites del Imperium y erigiendo templos de forja a mayor gloria del Dios Máquina. Marte extiende sus agentes por toda la galaxia, a través de las fuerzas armadas de la humanidad, entre un gran número de naves de guerra de la Armada Imperial e incluso supervisan otros mundos forja. El planeta rojo cuenta entre su imperio con más mundos industrializados subordinados y lunas de forja que cualquiera de sus homólogos, y entre sus posesiones se cuentan grandes estelas de maquinaria, municiones y asombros tecnológicos.                                                                                                                                                                                                                                                                   En la gigantesca empresa logística de la Cruzada Indomitus, los macroclados del planeta rojo acompañan a una gran cantidad de las flotas de Guilliman. Pelean junto a contingentes de todo el Imperium, y sus guerreros saben que encarnan el honor marcial del Adeptus Mechanicus ante todas las miradas, y que no desmerecerán.El mayor de todos los mundos forja del Adeptus Mechanicus es Marte, el planeta rojo. Situado en el sistema Sol, es el lugar de origen y centro del poder del Culto Mechanicus. Marte es la base sobre la que se asientan el poder religioso, politico y militar de los tecnosacerdotes. Su importancia para el Imperium solo está por debajo de la de su planeta hermano, la Sagrada Terra. En la superficie de Marte, los rojos desiertos de partículas de óxido ferroso soplan contra las metrópolis industriales saturadas de hollín y productos químicos, cuya superficie cubre placas tectónicas enteras. Crepitantes bancos capacitadores del tamaño de ciudades remueven la densa atmósfera, creando tormentas localizadas tan persistentes que incluso aparecen como localizaciones fijas y con nombre propio en los más antiguos pergaminos cartográficos. Una densa polución brota de chimeneas de kilómetros de altura, llenas de tecnoglifos y de altavoces que retumban emitiendo cánticos binarios en alabanza del Dios Máquina. El incesante estrépito de la creación divina reverbera en el suelo mientras una lluvia de ceniza y chispas cae desde chimeneas grandes como volcanes. Para el Adeptus Mechanicus, el paisaje marciano es la perfección, y se han esmerado en reproducir su aspecto en numerosos planetas por toda la galaxia.                                                                                                                                                                                                                                                                         En el Imperium se conoce a los tecnosacerdotes con el nombre colectivo de "Sacerdocio de Marte", lo cual da también una idea del rol central de dicho planeta en su religión y política interna. Es el punto de peregrinaje más sagrado para los adeptos del Culto Mechanicus, que entran en estado de arrebato en los campos de energía solar de Arcadia y ven como sus sistemas ópticos se saturan ante la gloria espiral de la colmena Tantalus, o ante la majestuosidad de Olympus Mons donde reside el fabricador general de Marte.Todos los mundos forja guardan lealtad a Marte, y su gobernador tiene derecho divino sobre todos los demás, pudiendo tomar la decisión final en asuntos de doctrina y disputas comerciales. Pocos, sin embargo, son los que aceptan someterse sin más a la superioridad del planeta rojo. Los descubrimientos de ancestral tecnología tecnoarcana a menudo se ocultan en lugar de revelarse a los ojos marcianos, los cismas teológicos y la competencia por los recursos pueden agriar relaciones durante siglos, y en ocasiones incluso pueden estallar pequeñas guerras. Ni siquiera el propio Marte es un mundo homogéneo y unido: sus subsectores llevan a cabo investigaciones traicioneras o conspiran por el poder, saboteando las centrales energéticas rivales, anexionándose sus territorios sus territorios o apropiándose de sus bienes. La mayoría de mundos forja, no obstante, respetan solemnemente la primacía histórica del planeta rojo..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/AS/VERGHAST_ifd4fh.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsUltraW40K = await PlanetUltraW40K.find();
    if (allPlanetsUltraW40K.length > 0) {
      await PlanetUltraW40K.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsUltraW40KMap = arrayPlanetsUltraW40K.map((planet) => new PlanetUltraW40K(planet));
    await PlanetUltraW40K.insertMany(planetsUltraW40KMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
