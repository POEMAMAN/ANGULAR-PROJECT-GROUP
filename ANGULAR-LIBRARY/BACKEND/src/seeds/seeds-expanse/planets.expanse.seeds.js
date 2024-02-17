const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetExpanse = require('../../api/models/models.expanse/planets.expanse.model');

const arrayPlanetsExpanse = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '30 billion',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'O.N.I.',
    moons: '1 (Moon)',
    resume: 'La Tierra, también conocida como Terra o Sol  , es el tercer planeta del sistema Sol, y uno de sus cuatro mundos terrestres. Planeta natal de la humanidad, la Tierra es el mayor centro de la política humana y, técnicamente, sigue siendo el planeta capital y la superpotencia dominante, con su órgano rector las Naciones Unidas. Siempre ha estado a la vanguardia de la historia humana.                                                                                                         Colonización interplanetaria. A mediados y finales del siglo XXI, los gobiernos nacionales de la humanidad, bajo los auspicios de las Naciones Unidas, entonces simplemente una organización supranacional, pero con mucho más poder que en sus inicios, habían comenzado a establecer colonias en los otros planetas del sistema solar, el más notable de estos es Luna y Marte. Sin embargo, después de un éxito continuo y debido al precario estado del ecosistema de la Tierra debido a la extensa contaminación, las naciones decidieron renunciar a sus derechos de gobierno nacional y convertir a la ONU en un gobierno global y unificado.                                                                                                                  La tecnología de propulsión de Solomon Epstein permitió que Marte se separara y lograra su independencia. Finalmente, en el siglo XXII, el gobierno colonial que administró la primera colonia de la humanidad exigió que fueran independientes. Las Naciones Unidas, reticentes a ceder su control sobre Marte, se negaron. Fue solo gracias a Solomon Epstein y su innovadora invención, el impulso de Epstein, que se evitó la guerra. El gobierno colonial ofreció a la ONU acceso a la campaña revolucionaria a cambio de la independencia. Para evitar que Marte tuviera una ventaja táctica, la ONU estuvo de acuerdo.Durante el próximo siglo y un tercio, las Naciones Unidas y su recién proclamado rival, la República Congresional Marciana (MCR), a menudo compitieron por los niveles de vida, la tecnología y la fuerza militar. Sin embargo, ningún verdadero conflicto estalló entre las dos superpotencias, y las relaciones mantuvieron un nivel decente de cordialidad. Después de que ambas naciones tuvieron acceso a la unidad y fueron capaces de producirla en masa, la humanidad se expandió más allá de los confines del sistema Sol interno y comenzó a establecer puestos de avanzada en asteroides del Cinturón de Asteroides, como Eros y Ceres, llegando finalmente a las lunas de los gigantes de gas, como Io, Ganímedes, Europa y otros más distantes, como Titán y Titania.  ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172839/THE%20EXPANSE/PLANETAS/erth2_i8cv5s.jpg',
  },
  {
    name: 'Mars',
    settled: '2035',
    population: '9 billion',
    capital: 'New London',
    location: 'Sol System',
    gravity: '0.376 g',
    country: 'Mars Congresionnl Republic',
    moons: '2 (Fobos,Deimos)',
    resume: 'Marte es el cuarto planeta de Sol y el segundo planeta más pequeño del sistema solar. Tiene una población de cuatro mil millones[1] de seres humanos (TV: diez mil millones),[2] y es gobernada por la República Congresional Marciana.Originalmente una colonia de colonos de la Tierra, cerca de tres generaciones después de que los primeros colonos excavaron en la roca y el suelo, haciendo el segundo hogar de la humanidad de Marte, los colonos comenzaron a inquietarse. Aunque dependía de la Tierra para algunos suministros, Marte era en gran parte autosuficiente. También se estaba convirtiendo en un líder en ciencia e investigación ambiental, así como en el diseño y la fabricación de una nueva generación de naves espaciales.          Muchos de los colonos de ese período querían separarse del gobierno de la Tierra, y compararon su difícil situación con la de las colonias estadounidenses en la década de 1700. Dos eventos importantes casi llevaron a los dos planetas a la guerra. La primera ocurrió cuando un grupo de secesionistas publicó su manifiesto, lo que llevó a la ONU a invocar el "gobierno de provincia separatista" y lanzar cuarenta naves hacia Marte. Las negociaciones entre bastidores finalmente enfriaron las cosas, y las naves se dieron la vuelta y regresaron a la Tierra.                                                                      El otro incidente importante ocurrió cuando las Naciones Unidas emitieron una declaración de que todos los futuros barcos marcianos serían contratados a través de los astilleros Bush en Luna. El gobierno marciano ni siquiera respondió a esa solicitud y el trabajo en el astillero continuó. La ONU ordenó que todos los astilleros en Marte cerraran hasta que un equipo de inspección pudiera ser enviado allí, pero les tomaría siete meses reunir un equipo, y otros seis para hacer el viaje a Marte (debido a las posiciones de los planetas en ese momento). Una vez más, esta petición fue ignorada. Los rumores de guerra comenzaron una vez más, y si no fuera por Solomon Epstein Books y su invención accidental de lo que se llamaría el Epstein Drive, la guerra entre el planeta y su colonia podría haber sido inevitable                                                  Después de que se le concediera el derecho a gobernarse a sí mismo, Marte formó la República Marciana del Congreso para servir como el cuerpo gobernante del pueblo de Marte, así como la Armada de la República Marciana del Congreso para servir como el brazo militar del gobierno. La Marina de la República del Congreso Marciano y la Armada de las Naciones Unidas finalmente forman la Armada de la Coalición Tierra-Marte, una fuerza de guerra naval conjunta encargada de mantener el sistema solar seguro.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172835/THE%20EXPANSE/PLANETAS/MarsMCR_cra9ic.webp',
  },
  {
    name: 'Anderson Station',
    settled: '22 century',
    population: '10.000',
    capital: 'aNDERSON sTAION',
    location: 'Sol System',
    gravity: '0,3 G (Artificial)',
    country: 'O.P.A.',
    moons: '0',
    resume: 'Anderson Station era una estación remota de refinería de mineral propiedad y operada por el Anderson-Hyosung Cooperative Industries Group (A-HCIG) en el extremo lejano del cinturón colonizado, casi en el lado opuesto del puerto principal de Ceres, con una población de más de diez mil habitantes. La estación también actuó como un depósito de envíos muy pequeño, especialmente como una estación de distribución de agua y aire en su parte del Cinturón, que era uno de los tramos más escasos. Esta función de la estación se consideró la única de cualquier importancia real para el área más amplia que atendió, y su clientela estaba en los millones antes de que fuera cerrada para siempre.Después de la masacre de la estación de Anderson, la estación de Anderson se ha abandonado                                                                                       La estación era propiedad y operada por el Anderson-Hyosung Cooperative Industries Group, y se especializaba en refinar minerales extraídos de varios asteroides en el Cinturón. Diez mil personas viven aquí, orbitando en el extremo opuesto del Cinturón desde Ceres. Como consecuencia, Anderson es una frontera mucho más dura.Para el área más amplia que atendió, uno de los tramos más escasos del cinturón, la única importancia de la estación de Anderson era como una estación de distribución de menor importancia para el agua y el aire, que pasó a través de ella desde antes de sus fuentes.Cuando el administrador de la Coalición Tierra-Marte de la Estación Anderson, Gustav Marconi, implementó un recargo por manejo del 3 por ciento en todos los envíos que llegaban a través de la estación en un intento de aumentar la línea de fondo, afectó a millones. Sin embargo, solo menos del 5 % de los cinturinos que compraban su aire de la estación Anderson eran botella viva a boca, por lo que poco menos de 50.000 cinturinos habrían tenido que pasar un día de cada mes sin respirar, y solo un pequeño porcentaje de esos 50,A miles de personas les faltaba margen en sus sistemas de reciclaje para cubrir este déficit. Solo una pequeña parte de los que sentían una revuelta armada era el curso correcto, por lo que cuando una insurgencia de cinturinos armados decidió atacar la estación, solo eran 170. Tomaron el control de la estación y tiraron a Marconi por una esclusa de aire, y luego exigieron una garantía del gobierno de que no se agregarían más recargos al precio del agua y el aire que llegaban a través de la estación.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171676/THE%20EXPANSE/PLANETAS/Anderson_Station_keczni.webp',
  },
  {
    name: 'Ceres',
    settled: '22 century',
    population: '600.000',
    capital: 'Ceres City',
    location: 'Sol System, Belt',
    gravity: '0,3 G (artificial)',
    country: 'O.N.U.',
    moons: '0',
    resume: 'Ceres (designado 1 Ceres) es el asteroide más grande conocido y el único planeta enano en el Sistema Solar Interno, y el primer asteroide descubierto por la humanidad. Se encuentra en el Cinturón de Asteroides.Ceres es el sitio de la Estación Ceres, una estación espacial que fue uno de los primeros sitios de colonización humana en los Planetas Exteriores. Media generación después de que la humanidad llegó allí, Tycho Manufacturing logró girar el asteroide, lo que le dio una gravedad de 0,3 g. La estación tiene decenas de miles de kilómetros de túneles.                                                         Como el puerto más importante del Cinturón, la estación tiene una población de aproximadamente seis millones de residentes permanentes con un millón adicional en tránsito en un momento dado. 800 a 1.000 barcos están atracados en Ceres cada día.La estación de Ceres fue gobernada inicialmente por las Naciones Unidas (ONU) como un protectorado, y la seguridad de la estación fue manejada por la firma de seguridad privada de la Tierra Star Helix Security.                                                La gravedad en Ceres no es proporcionada por su propia masa, sino por su gravedad de giro artificial. El nivel de gravedad cambia con cada nivel y hay un notable efecto Coriolis en los niveles más bajos de la estación.El transporte es proporcionado por una extensa red de trenes subterráneos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171680/THE%20EXPANSE/PLANETAS/Ceres_w4t1gv.webp',
  },
  {
    name: 'Eros Station',
    settled: '22 century',
    population: '1.500.000',
    capital: 'Ceres City',
    location: 'Sol System, Belt',
    gravity: '0,3 G (Artificial)',
    country: 'O.N.O. / M.C.R',
    moons: '0',
    resume: 'Eros (designación 433 Eros) es un gran asteroide de tipo S, cercano a la Tierra de aproximadamente 34,4 11,2 11,2 kilómetros (21,4 7,0 7,0 millas) de tamaño. Es el segundo asteroide cercano a la Tierra. Es parte del cinturón de asteroides, pero se llama "Mars-Crosser" porque su órbita cruza la órbita de Marte. Es el primer asteroide conocido en entrar en la órbita de Marte, a menudo comparado con la forma de una patata grumosa.Eros es el sitio de "Eros Station", una estación espacial que fue uno de los primeros sitios de colonización humana, y que en la época de Leviathan Wakes mantiene una población de un millón y medio de humanos (un poco más que la estación de Ceres tenía visitantes en cualquier momento dado).                                                                                   Aproximadamente la forma de una patata, había sido mucho más difícil de girar hasta entonces Ceres, y su velocidad superficial era considerablemente mayor que la de Ceres para el mismo g. Las cavernas internas de Eros habían sido el lugar de nacimiento del Cinturón. De mineral en bruto a horno de fundición a la plataforma de recocido y luego en las espinas de los transportistas de agua y cosechadoras de gas y buques de prospección. Eros había sido un puerto de escala en la primera generación de expansión de la humanidad. A partir de ahí, el Sol en sí era solo una estrella brillante entre miles de millones.La economía del Cinturón había seguido adelante. La Estación Ceres había surgido con nuevos muelles, más respaldo industrial, más gente.                                           El comercio marítimo se trasladó a Ceres, mientras que Eros siguió siendo un centro de fabricación y reparación de buques. En Ceres, un tiempo más largo en el muelle significaba pérdida de dinero, y la estructura de la tarifa de atraque lo reflejaba. En Eros, un barco puede esperar semanas o meses sin impedir el flujo de tráfico. Si un equipo quería un lugar para relajarse, para estirarse, para alejarse unos de otros por un tiempo, Eros era el puerto de escala. Y con las tarifas de atraque más bajas, la estación de Eros encontró otras maneras de absorber el dinero de sus visitantes: desde sus casinos, hasta burdeles y galerías de tiro. Los viejos astilleros sobresalían del asteroide, grandes telarañas de acero y malla de carbono repletas de luces de advertencia y sensores para alejar a cualquier barco que pudiera entrar demasiado apretado.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171685/THE%20EXPANSE/PLANETAS/Eros_station_jynnim.webp',
  },
  {
    name: 'Mercury',
    settled: '22 century',
    population: '0',
    capital: 'Ceres City',
    location: 'Sol System',
    gravity: '0,38 G',
    country: '',
    moons: '0',
    resume: 'Mercurio es el planeta más pequeño del sistema solar y el más cercano al Sol, con una distancia media de 58 mio km. También es el planeta más rápido del sistema. Debido a su excentricidad orbital, experimenta las mayores variaciones de temperatura de cualquier planeta en el sistema.                                                                              Mercurio está bloqueado por las mareas con el Sol en una resonancia de órbita de giro 3:2, por lo que rota en su eje tres veces por cada dos ciclos alrededor del Sol, haciendo que su forma de rotación sea única en el sistema. Un observador en Mercurio solo vería un día cada dos años mercurianos                                                                             Mercurio no está colonizado y se desconoce si hay actividades mineras en el planeta. Una "nueva estación científica en una órbita estacionaria alrededor de Mercurio" es mencionada por el equipo documental de Mónica Stuart en Abaddon’s Gate, por lo que se puede suponer que hay o han habido otros antes.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173095/THE%20EXPANSE/PLANETAS/Mercury_qnglf0.webp',
  },
  {
    name: 'Pallas',
    settled: '22 century',
    population: '13.000',
    capital: 'Pallas City',
    location: 'Sol System, Belt',
    gravity: '0,022 G (artificial)',
    country: 'Free Navy',
    moons: '0',
    resume: 'Pallas (designación 2 Pallas) es el tercer asteroide más grande en el Cinturón de Asteroides, y el segundo asteroide descubierto por la humanidad. Alberga una de las estaciones más antiguas, la estación de Pallas, en los planetas exteriores[1], pero también es conocida por sus grupos extremistas de división Belter entre su colonia.La estación en sí tiene una larga historia de una estación de refinamiento para las operaciones mineras del Cinturón. Debido a este legado, continúa manteniendo y mejorando su infraestructura, haciendo uso de su antiguo equipo como capacidad de desbordamiento. Esta prominencia se puede ver por el hecho de que el primer envío ilusiano de litio fue enviado a Palas en 14 XTE.                                       A diferencia de Ceres, Palas nunca fue artificialmente girado, confiando en la microgravedad natural del asteroide. Debido a que la gravedad es solo un 2% más fuerte que la de la Tierra, los humanos que viven en Pallas tienen algunas de las características más extremas de los cinturinos, sus cuerpos más altos y sus cabezas más grandes que la mayoría de los cinturinos. A pesar de los diversos medicamentos para mitigar los efectos de null-g, la ceguera todavía puede ocurrir después de años de vivir en Pallas, debido a la muerte de los capilares oculares.                                                      AnnanSec ha tenido el contrato para gestionar y hacer cumplir la seguridad en Pallas durante muchos años.Durante la carrera terrestre a través de la Red del Anillo, las tensiones en el Cinturón aumentaron debido a los nuevos sistemas que representan una muerte económica para el Cinturón. Poco antes del inicio del conflicto de la Marina Libre, un motín de agua tuvo lugar en la estación de Pallas. El motín parecía ser instigado por la misma célula de la APE responsable del ataque de los astilleros MCRN Callisto. Aunque generalmente ignorado por las principales potencias, predominantemente preocupadas por la fiebre de la tierra, el motín probablemente solidificó el control de la estación por los instigadores[6] y les dio un lugar industrial para sus operaciones',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171689/THE%20EXPANSE/PLANETAS/Pallas_S5_mzzpdh.webp',
  },
  {
    name: 'Phobos',
    settled: '22 century',
    population: '0',
    capital: '',
    location: 'Sol System, Belt',
    gravity: '581.4 g (Artificial)',
    country: 'M.C.R',
    moons: '0',
    resume: 'Fobos, también "Marte I", es la más grande de las dos pequeñas lunas de Marte.Mientras que Deimos, la otra luna marciana, fue destruida en el Libro #1 Leviathan Wakes y la gente llama a su campo de escombros el "Anillo de Deimos" en el Libro #5 Nemesis Games, en el Libro #3 Abaddon’s Gate dice, que "Phobos con su estación de escucha se había convertido en un anillo delgado, casi invisible alrededor de Marte',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173100/THE%20EXPANSE/PLANETAS/phobos_nddrbr.webp',
  },
  {
    name: 'Toth Station',
    settled: '22 century',
    population: '50',
    capital: 'Toth Station',
    location: 'Sol System, Belt',
    gravity: '0,38 G (artificial)',
    country: 'Protogen',
    moons: '0',
    resume: 'Thoth Station era una estación de centrifugado privada ubicada en el Cinturón. Fue utilizada para la investigación sobre la protomolécula por Protogen Corporation.Thoth contaba con un personal de investigación más grande y mejor calificado que las universidades en la Tierra o Luna, y el igual de incluso los mejores en Marte.Los pasillos de la estación de Thoth eran amplios y espaciosos, con pisos alfombrados, largas franjas de hiedra cultivadas en espirales cuidadosamente cuidadas, y árboles bonsáis encendidos cada pocos pies. La iluminación era suave y blanca como la luz del sol.                            Thoth era un oscuro laboratorio de investigación y desarrollo propiedad de Protogen, y fue donde llevaron a cabo secretamente investigaciones sobre la protomolécula y donde Antony Dresden orquestó el incidente de Eros. Naomi Nagata recuperó los Comm Logs del Anubis (Libros) que dio a James Holden y Josephus Miller el nombre de la estación.  El ex-compañero de Miller en Ceres, Dimitri Havelock, que ahora trabajaba para Protogen, pudo proporcionar a Miller la ubicación de la estación. Fred Johnson, jefe de la APE, ordenó entonces un asalto a la estación para llegar al fondo de lo que le estaba pasando a Eros.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171663/THE%20EXPANSE/PLANETAS/S02E02thothstation27m55s_nrmiwu.webp',
  },
  {
    name: 'Tyco Station',
    settled: '22 century',
    population: '15.000',
    capital: 'Tyco Station',
    location: 'Sol System, Belt',
    gravity: '0,022 G ',
    country: 'O.P.A. / Tycho Manufacturing',
    moons: '0',
    resume: 'Tycho Station es la plataforma de construcción móvil más grande del sistema Sol, y la sede del Belt de Tycho Manufacturing and Engineering Concern y, en secreto, la Alianza de Planetas Exteriores (OPA). Es un hogar y un lugar de trabajo para más de 15.000 personas.La estación de Tycho, la sede de la Belt de la compañía, era una estación de anillo masiva construida alrededor de una esfera de medio kilómetro de diámetro, con más de sesenta y cinco millones de metros cúbicos de espacio de fabricación y almacenamiento dentro. Los dos anillos de habitación contrarrotantes que rodeaban la esfera tenían suficiente espacio para quince mil trabajadores y sus familias. La parte superior de la esfera de fabricación estaba adornada con media docena de waldoes de construcción masiva que parecían que podían partir un carguero pesado por la mitad. La parte inferior de la esfera tenía una proyección bulbosa de cincuenta metros de ancho, que albergaba un reactor de fusión de clase nave capital y un sistema de accionamiento, lo que convierte a la estación de Tycho en la plataforma de construcción móvil más grande del sistema solar. Cada compartimiento dentro de los anillos masivos fue construido sobre un sistema giratorio. Esto permitió a las cámaras reorientar y empujar la gravedad cuando los anillos dejaron de girar. La estación voló a su siguiente lugar de trabajo.                                                                                                           Tycho hace contribuciones regulares a los políticos de la Tierra y Marte. Si alguien atacara la estación, la mitad de la Asamblea General de las Naciones Unidas y todo el Congreso Marciano declararían la destrucción de quien atacara la estación, convirtiendo fácilmente la estación de Tycho en el lugar más seguro del Cinturón.Una estación de anillo artificial de 700 (+) metros de diámetro construida alrededor de una esfera de microgravedad de medio kilómetro de diámetro con más de sesenta y cinco millones de metros cúbicos de espacio dentro, Tycho Station es el único astillero en el Sistema Sol que tiene las instalaciones y la capacidad para construir buques más grandes que los Bush Shipyards en Luna. Quince mil trabajadores y sus familias viven en la estación, un centro de cultura belter dirigido por Fred Johnson de la APE, con más simpatizantes de la APE que llegan cada día. Los waldoes de construcción masiva de la cúpula de fabricación pueden asegurar y ascender a naves del tamaño del Titanic (ver Tamaños de Nave en el Capítulo 6: Naves Espaciales del RPG Expanse) y son capaces de construir estructuras más grandes que incluso la nave de generación, el Nauvoo o el propio Tycho. Las cubiertas de ingeniería y de ingeniería auxiliar de la estación se encuentran en la cúpula de fabricación. Un reactor de fusión y un sistema de propulsión igual al de un acorazado de tercera generación esencialmente hace que la Estación Tycho sea una nave masiva y la plataforma de construcción móvil más grande jamás construida, más que capaz de moverse a altas velocidades si es necesario. La mayor parte de la construcción y mantenimiento de flotas nativas del Cinturón -tanto como se puede llamar así- ocurre en la estación de Tycho. Un gran número de barcos cinturinos son buscadores, buscando la veta de mineral o gas que finalmente los hará ricos. Junto con esos miles de rockhoppers, transportes, transportistas y algunos cruceros privados y buques de escolta componen lo que podría llamarse generosamente la flota de la APE. Los buques que trabajan para la APE generalmente pueden esperar al menos un descuento en las reparaciones y el mantenimiento, especialmente si el daño se tomó en servicio del cinturón.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171667/THE%20EXPANSE/PLANETAS/S05E01tychostation08m31s_oys9vj.webp',
  },
  {
    name: 'Venus',
    settled: '22 century',
    population: '0',
    capital: '',
    location: 'Sol System',
    gravity: '0.904 g',
    country: '',
    moons: '0',
    resume: 'Venus es el segundo planeta de Sol. Su superficie es áspera y ácida, y no es adecuada para la colonización humana.Hace ocho décadas, Tycho Manufacturing and Engineering Concern estaba programado para crear una red de ciudades de nubes flotantes de alta atmósfera sobre Venus. El proyecto fue cancelado, y llevó a una demanda que duró al menos 8 décadas, involucrando, entre muchos otros partidos, a Mao-Kwikowski Mercantile.                                                                     Después del incidente de Eros, la protomolécula infestada de Eros se estrelló en Venus después de que Miller persuadiera a Julie Mao, quien la controlaba, para aterrizar allí en lugar de la Tierra. La protomolécula se extendió por toda la superficie del planeta.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708173090/THE%20EXPANSE/PLANETAS/venus_xzswol.jpg',
  },
  {
    name: 'Vesta',
    settled: '22 century',
    population: '<500.000',
    capital: '',
    location: 'Sol System, Belt',
    gravity: '0.004 g',
    country: 'Free Navy.',
    moons: '0',
    resume: 'Vesta (designación 4 Vesta) es uno de los asteroides más grandes del Cinturón de Asteroides, y el segundo más masivo después de Ceres. Alberga uno de los asentamientos más grandes de los planetas exteriores[1][2]. En algún momento durante la Guerra Fría de ONU-MCR, Vesta fue el sitio del Bloqueo de Vesta, una confrontación entre la ONU y MCR que retrasaría los esfuerzos de terraformación marciana durante más de un siglo                                                              Heinrich Olbers descubrió Pallas en 1802, el año después del descubrimiento de Ceres. Propuso que los dos objetos eran los restos de un planeta destruido y envió una carta con su propuesta al astrónomo británico William Herschel, sugiriendo que una búsqueda cerca de los lugares donde las órbitas de Ceres y Pallas se cruzaron podría revelar más fragmentos. Olbers comenzó su búsqueda en 1802, y el 29 de marzo de 1807 descubrió Vesta.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171672/THE%20EXPANSE/PLANETAS/Vesta_in_natural_color_qaiioc.webp',
  },
  {
    name: 'Saturno',
    settled: '22 century',
    population: '20.000.000',
    capital: '',
    location: 'Sol System, Belt',
    gravity: 'V',
    country: 'O.N.U.',
    moons: '0',
    resume: 'Saturno es el sexto planeta de Sol y el segundo planeta más grande del sistema solar, después de Júpiter.Saturno es el único planeta gigante de gas del sistema solar conocido que tiene un sistema de anillos prominente. Sus anillos consisten principalmente en hielo, que se cosecha para ser utilizado como suministro de agua para las colonias en el Cinturón por empresas como la Pur·nKleen Water Company.Saturno tiene al menos 150 satélites naturales. Muchos están asentados, y las lunas tienen una población total de aproximadamente 20 millones de personas.                                                        *Titán, conocido por sus increíbles complejos de cúpula, es el más grande; comprende más del 90% de la masa en órbita alrededor de Saturno (incluidos los anillos).                                                                                          *Rhea, la segunda luna más grande y similar a Ceres en que cuenta con equilibrio hidrostático.                            *Iapetus, el tercero más grande y conocido por varias características inusuales, como una cordillera ecuatorial masiva que recorre tres cuartas partes del camino alrededor de la luna.                                                               *Dione, la cuarta luna más grande y helada con, probablemente, un núcleo rocoso.                                                                                                                   *Tetis, la quinta luna más grande, de baja densidad, y posiblemente compuesta principalmente de agua-hielo               *Encelado, la sexta luna más grande y helada conocida por sus géiseres y grietas causadas por la atracción de mareas de Saturno.                                                                                                                  *Mimas, una luna rocosa, esférica y la séptima más grande; sabe que es el objeto esférico más pequeño del sistema.      *Hyperion, una luna irregular con formaciones de cráteres tipo esponja y una rotación caótica.                          *Phoebe, una misteriosa luna irregular que estaba fuera de los límites debido a una estación de investigación secreta.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171672/THE%20EXPANSE/PLANETAS/Vesta_in_natural_color_qaiioc.webp',
  },
 
  
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsExpanse = await PlanetExpanse.find();
    if (allPlanetsExpanse.length > 0) {
      await PlanetExpanse.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsExpanseMap = arrayPlanetsExpanse.map((planet) => new PlanetExpanse(planet));
    await PlanetExpanse.insertMany(planetsExpanseMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
