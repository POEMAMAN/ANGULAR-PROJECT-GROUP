const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterFundacion = require('../../api/models/models.fundacion/characters.fundacion.model');

const arrayCharactersFundacion = [
  {
    name: 'Salvor Hardin',
    profession: 'Politico',
    rank: 'Alcalde de Terminus',
    birthday: '(25862 TIERRA 12076 ERAGALACTICA 8 ERAFUNDACIONAL)',
    planet: 'Terminus',
    country: 'Primera Fundacion',
    resume: 'Salvor Hardin es un alcalde de Términus de la saga de la Fundación. Aparece sobre todo en el libro Fundación, durante la primera y la segunda parte.Hardin nace en el planeta de Terminus unos diez años después de que la Primera Fundación se estableciera por iniciativa de Hari Seldon. En su adolescencia intentó estudiar para convertirse en ingeniero psicohistórico bajo el auspicio de Bort Alurin, pero de él sólo recibió conocimientos teóricos, y por lo tanto decidió dedicarse a la política, que, según sus propias palabras "es básicamente lo mismo".                                                                                                                                                                                                                                                               CARRERA POLITICA: Hardin fue uno de los fundadores del diario de Términus, aunque se negó a ser su propietario directo, muy probablemente por razones políticas, ya que siempre asumió su control en forma indirecta y lo utilizó para catapultar su carrera política como Alcalde. Hardin eventualmente llegó a la conclusión de que los Enciclopedistas eran el fiel reflejo de la decadencia del Imperio Galáctico, y ante la Crisis de Anacreonte (también llamada Primera Crisis), resolvió tomar el poder de la Junta de Síndicos. Tras la apertura de la Bóveda de Seldon y la revelación de que la labor de la Enciclopedia era una farsa conveniente para establecer un reducto científico entre los mundos de la Periferia, que fuera la sede del nuevo Imperio, Hardin tomó el poder en forma cuasi pacífica, desplazando a los síndicos.                                                                                CRISIS DE ANACREONTE: Hardin, ante las amenazas de anexión de Anacreonte, capitula y negocia bases militares en Terminus, dispersando el rumor de que en Terminus poseen tecnología atómica, lo cual le daría una ventaja extrema a los reyes de Anacreonte. Para esto visitó los otros Tres Reinos, entre ellos Smyrno, el rival denodado de los ocupadores, y los convenció de que se plantaran y defendieran la independencia de Terminus como un planeta libre, a cambio de ofrecerles técnicos que mejoraran la tecnología de los Cuatro Reinos. De esta manera, evitó que la Fundación fuese destruida.                                                            CRISIS DE LA CIENCIA: Hardin es quien primero comienza con la Religión de la Ciencia, como una mentira conveniente para que los planetas bárbaros aceptaran la ciencia, y mantenerlos controlados con una jerarquía eclesiástica de discurso místico. Gracias a esto, eleva el nivel científico de Terminus y mantiene un precario equilibrio hasta el arribo de la Segunda Crisis',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028583/FUNDACION/PERSONAJES/MP-Salvor-Hardin_cl1jq0.webp',
  },
  {
    name: 'Hari Sheldon',
    profession: 'Psicohistoriador',
    rank: 'Creador de la fundacion / Primer Ministro del Imperio',
    birthday: '(25774 TIERRA 11988 ERAGALACTICA -79 ERAFUNDACIONAL)',
    planet: 'Helicon, sector de Arturo',
    country: '',
    resume: 'En la saga de Asimov, la Era Galáctica había comenzado cuando se fundó el Imperio Galáctico (en una fecha desconocida en el futuro, supuestamente dentro de veinte mil años a partir de ahora): la línea de tiempo puede ser inducida por algunos indicios que Asimov dejó caer en toda su serie, incluyendo la Serie Robot y la Trilogía del Imperio.Nació en el planeta Helicon en el sector Arcturus. Su padre era cultivador de tabaco en una planta hidropónica.Mostró habilidades matemáticas precoces a una edad muy temprana. Al mismo tiempo, aprendió artes marciales que más tarde lo ayudaron en Trantor, siendo el arte principal Heliconan Twisting (una forma aparentemente igual de Jiu Jitsu y Krav Maga); parece que Helicon es "mucho menos notable por sus matemáticas y más por sus artes marciales". Su biografía fue escrita por Gaal Dornick.                                                                                                                             Como profesor asistente de matemáticas de treinta y dos años en la Universidad Helicon, Seldon visita a Trantor desde su Helicon natal para asistir a la Convención Decenal de Matemáticas. Presenta un artículo que indica que uno podría predecir teóricamente el futuro del Imperio Galáctico. Al principio, Seldon no tiene idea de cómo se podría hacer esto en la práctica, y está bastante seguro de que nadie podría cumplir con la posibilidad. Poco después de su presentación, se convierte en un pararrayos para las fuerzas políticas que desean utilizar la psicohistoria para sus propios fines. El resto de la novela cuenta su vuelo, que dura aproximadamente un año y que lo lleva a través del complejo y variado mundo de Trantor. Durante su huida para escapar de las diversas facciones políticas, descubre cómo la psicohistoria puede convertirse en una ciencia práctica.                                                                                                                            Utilizando la psicohistoria, Seldon encontró el momento y el lugar adecuados para establecer una nueva sociedad, una que reemplazaría el colapso del Imperio Galáctico por la fuerza de la presión social, durante un período de tiempo de mil años. Él predijo que el Imperio Galáctico caería en la barbarie durante 30,000 años. Entonces, creó la Fundación para reducirlo a 1,000. La Fundación sobrevivió a la primera crisis y el libro termina con ellos cerca de pasarla',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028599/FUNDACION/PERSONAJES/MP-Hari-Seldon_vmm67q.webp',
  },
  {
    name: 'Gaal Dornik',
    profession: 'Matematico',
    rank: 'Exiliado a la fundacion',
    birthday: '(25823 TIERRA 12037 ERAGALACTICA -1 ERAFUNDACIONAL)',
    planet: 'Synnax',
    country: 'Primera Fundacion',
    resume: 'Gaal Dornick fue un matemático nacido en Synnax en el decimotercer milenio GE. En 12,067, poco después de ser galardonado con su doctorado, fue invitado a Trantor por Hari Seldon para unirse al proyecto de psicohistoria. Se reunió con Seldon poco después de su llegada a Trantor, pero ya estaba bajo la vigilancia de agentes del Comité de Seguridad Pública. Seldon le reveló que la psicohistoria había predicho que la caída del Imperium sería inevitable, y que el exilio al remoto planeta de Terminus era de hecho el verdadero objetivo de Seldon. Gaal fue arrestado e interrogado.                                                                                                                         Después del exilio, llevó las cintas de crisis grabadas por Hari Seldon a Terminus. También supervisó la construcción e instalación de la Bóveda del Tiempo. Gaal Dornick se convirtió en uno de los trabajadores clave con Stettin Palver en el Plan de Seldon, informando directamente a Seldon sobre su progreso mientras lo refinaban. Después de la muerte de Seldon, se trasladó a Terminus. La propia versión del Primer Radiante de Seldon fue legada a él y enviada después de la muerte de Seldon. Dado que ningún Prime Radiant aparece más tarde en la Primera Fundación, es probable que Dornick no se quedara permanentemente en Terminus.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028596/FUNDACION/PERSONAJES/MP-Gaal-Dornick_glqx18.webp',
  },
  {
    name: 'Dors Venabili',
    profession: 'Matematica',
    rank: 'Mujer de Hari Sheldon',
    birthday: '(25151 TIERRA 11865 ERAGALACTICA -202 ERAFUNDACIONAL)',
    planet: 'Tierra',
    country: 'Robots',
    resume: 'Dors Venabili (11,865-12,048 GE) es un robot que inicialmente es asignado por Chetter Hummin para proteger a Hari Seldon mientras Seldon intenta desarrollar su teoría de la psicohistoria. Sus caminos se cruzan en la Universidad Streeling, donde Dors enseña historia. Los dos se enamoran y se casan, adoptando a Raych Seldon como su hijo. Rara vez piensa en Venabili como un humano, aunque dada su velocidad, fuerza e inteligencia, sospecha que es un robot. Sostiene que la naturaleza robótica o humana de Dors no le preocupa: ama a Dors por Dors, incluso después de enfrentarse definitivamente con su naturaleza robótica. La inteligencia y el conocimiento de la historia de Dors se vuelven muy importantes para la Teoría de la Psicohistoria.                                                                                                                      En 12,020 GE Seldon dio una charla sobre su teoría incipiente de la psicohistoria en la Convención Decenal, que causó Cleon I para expresar interés en él. A instancias de Chetter Hummin (a.k.a. R. Daneel Olivaw), Seldon primero se muda a la Universidad Streeling para continuar su investigación sin su interferencia. Ahí es donde se le presenta a Venabili, una profesora de historia, y se le asigna el trabajo de cuidarlo. Ella se queda con él mientras se muda a Mycogen, y más tarde a Dahl y a Wye. Hari Seldon, mientras tanto, adivina que Dors debe ser uno de los antiguos robots de las leyendas de Mycogene al final de su viaje. A pesar de esto, es en este punto donde Seldon y Venabili deciden casarse y adoptar a Raych Seldon como su hijo. Mientras está en Dahl, Venabili tiene la oportunidad de mostrar sus increíbles habilidades en la lucha. Después de salvar la vida de Hari Seldon durante un intento de asesinato en el primer año de su Primer Ministerio, ella recibe el apodo de "Mujer Tigre."Cuando Raych Seldon se casa con Manella, Dors inmediatamente muestra su disgusto por ella y no cambia esa opinión hasta su muerte.                                                                                                                              Antes de la fiesta de cumpleaños de Hari Seldon, Dors comienza a sospechar un complot para terminar con la vida de Seldon. La única base para su suposición es un "sueño" que la joven Wanda Seldon tenía mientras estaba en la oficina de Hari Seldon. El sueño resulta ser una conversación real entre dos personas, una de ellas hablando de "muerte por limonada." Esta es una referencia a Tamwile Elar, un joven y prometedor matemático que está trabajando en secreto con la junta que ha estado gobernando Trantor desde la muerte del emperador Cleón I. Cuando Dors se enfrenta a Elar, este último activa unamáquina electromagnética sintonizada utilizada para inscribir ecuaciones en el Prime Radiant. Mientras que las ondas magnéticas no dañan a los humanos, Dors, siendo un robot, se ve afectado por ellos. Ella mata a Elar, quien desafortunadamente es capaz de convertir la máquina magnética a toda potencia. Dors tropieza con la oficina de Hari Seldon, explica lo que ha sucedido y muere en sus brazos..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028588/FUNDACION/PERSONAJES/dors_venabilii_ggbwdf.webp',
  },
  {
    name: 'Raych Seldon',
    profession: 'Escritor',
    rank: 'Hijo de Hari Sheldon',
    birthday: '(25794 TIERRA 12008 ERAGALACTICA -59 ERAFUNDACIONAL)',
    planet: 'Trantor',
    country: 'Primera Fundacion',
    resume: "Raych Seldon (12008-12058 GE) es un niño de doce años que vive en las calles sin ley de Billibotton, un barrio marginal del distrito de Dahl. Conoce a Hari Seldon y Dors Venabili durante The Flight. Raych lleva a la pareja a una Madre Rittah. Hari y Dors lo adoptan. Mientras pasa el resto de su vida lejos de Billibotton, sigue usando sus cuchillos y está muy orgulloso de su bigote Dahlite.                                                                                                                         Cuando Raych crece, Hari rara vez le pide que realice trabajo encubierto. Mientras hace este trabajo, y contribuyendo mucho a la causa de la Psicohistoria, conoce a su futura esposa Manella Seldon, con quien tiene dos hijos. Una niña, Wanda Seldon, revolucionará la Psicohistoria con Mentalics. Raych escribirá un libro sobre Dahl cuando sea adulto, y será asesinado durante una revuelta en la Periferia.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028489/FUNDACION/PERSONAJES/Raych_woqfih.webp',
  },
  {
    name: 'Yugo Amaryl',
    profession: 'Psicohistoriador',
    rank: "Ayudante Hari Sheldon",
    birthday: '(25784 TIERRA 11998 ERAGALACTICA -69 ERAFUNDACIONAL)',
    planet: 'Caladan, Arrakis',
    country: 'Primer Fundacion',
    resume: "Yugo Amaryl (11,998-12,052 GE) fue un matemático y un disipador de calor del distrito de Dahl, y uno de los cuatro individuos que Hari Seldon conoció durante The Flight mientras sentaba las bases de la psicohistoria. Seldon conoció por primera vez a Amaryl en el sector trantoriano de Dahl, donde se refugió después de tener su presentación inicial sobre la psicohistoria en la Convención Decenal. En ese momento, Amaryl (que se describe como una década más joven que Seldon) trabajó en los disipadores de calor Dahlite, que son una de las principales fuentes de energía para el Imperio. Sin embargo, los dahlitas de clase alta tenían muchos prejuicios contra los que se veían obligados a trabajar en los disipadores, y las dos clases apenas se entremezclaban. Amaryl, sin embargo, fue capaz de impresionar a Seldon con sus habilidades matemáticas, y Seldon prometió ayudarlo a recibir una beca para una universidad una vez que estuviera a salvo. Mantuvo su promesa, y de hecho, Amaryl se convirtió en su mano derecha, la única persona en el universo aparte de Seldon que estaba verdadera e íntimamente familiarizada con la psicohistoria. Durante muchos años Seldon y Amaryl trabajaron el problema de la psicohistoria solo, antes de que el nombramiento de Seldon como primer ministro le permitiera el lujo de grandes grupos de personas y la última tecnología trabajando para resolver los problemas.                                                                                                                       Aunque de Dahl, Amaryl no tiene el característico bigote de Dahlite, y apenas se identifica con el sector. Es descrito como frío y distante, interesado únicamente en la psicohistoria, y tiene una lealtad feroz a Seldon. Seldon originalmente pensó que era una fuerza creativa que lo desafiaría a pensar en la psicohistoria de nuevas maneras. Amaryl confía mucho en su propia intuición cuando trabaja problemas matemáticos. Se dice que no le interesan las mujeres, la compañía u otros placeres.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028530/FUNDACION/PERSONAJES/yugo_amaryl_ekadsf.webp',
  },
  {
    name: 'Eto Demerzel',
    profession: 'Robot',
    rank: 'Primer Ministro del IMperio',
    birthday: '(4732 TIERRA -25853 ERAGALACTICA -25854 ERAFUNDACIONAL)',
    planet: 'Aurora',
    country: 'Robots',
    resume: 'Eto Demerzel era solo uno de los muchos alter-egos de R. Daneel Olivaw. Como Demerzel, Daneel fue capaz de ser el primer ministro original del emperador Cleón I. Como el primer ministro, Daneel fue capaz de manipular ciertos eventos para su beneficio, como su primera reunión con Hari Seldon bajo la apariencia de un reportero trantoriano llamado Chetter Hummin (un juego de palabras en la palabra humano), por lo tanto estableciendo una amistad con él, y esencialmente forzando a Seldon a continuar con la psicohistoria. Demerzel/ Daneel, con la ayuda de Seldon y su hijo adoptivo Raych Seldon, fue capaz de frustrar la primera conspiración joranumita. Tras su dimisión de su cargo, Demerzel nunca fue visto de nuevo hasta el funeral de Hari Seldon en el año 12,069 G.E., o 1 F.E..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028593/FUNDACION/PERSONAJES/MP-Eto-Demerzel_g9bxsl.webp',
  },
  {
    name: 'Hober Mallow',
    profession: 'Politico',
    rank: 'Alcalde de Terminus',
    birthday: '(25945 TIERRA 12259 ERAGALACTICA 122 ERAFUNDACIONAL)',
    planet: 'Smyrno',
    country: 'Primera Fundacion',
    resume: "Hober Mallow (b. 19,590, Smyrno; d. 19,697, Terminus City) fue un maestro comerciante de origen smyrniano que fue conocido por poner fin a la política de usar el culto de Salvor Hardin al cientifismo para apoyar la expansión de la Fundación, así como sus varios períodos exitosos como alcalde de Terminus City.En el incidente que provocó su entrada en la política, Mallow fue enviado a Korell para investigar la desaparición de varias naves de la Fundación. A su llegada al planeta principal, un sacerdote de Scientism se refugió en su nave, seguido poco después por una gran multitud. Después de interrogar al sacerdote, Mallow lo envió a la mafia, aunque eso pondría al sacerdote en aparente peligro. Recibe una invitación para reunirse con el Commdor de Korell, Asper Argo poco después. Durante su charla con Argo, Mallow logra llegar a un acuerdo comercial, vendiéndole objetos nucleicos sin molestarse en establecer un sacerdocio, descubriendo al mismo tiempo que el Imperio Galáctico todavía estaba vivo y capaz de expandirse. Después de una breve visita al mundo de Siwenna, Mallow regresó a Terminus.                                                                                                                         Varios meses después, Jorane Sutt, secretario del alcalde, lo acusó de asesinato por su abandono del sacerdote (que, aunque técnicamente legal, arruinará la reputación de Mallow), pero durante el juicio Mallow revela que el sacerdote era en realidad un agente secreto de la policía de Korellian: el hombre no estaba en ningún peligro real, ya que era solo un cebo para ver si las naves de la Fundación violarían la ley. El apoyo popular resultante le permitió enviar a Sutt a prisión y, finalmente, convertirse en alcalde.Durante su período como alcalde, Asper Argo decide declarar la guerra a la Fundación. Sin embargo, para sorpresa de todos, Mallow tiene la retirada de la Marina sin presentar batalla, y no hace nada más allá de detener el comercio con Korell. Como explica más tarde a un amigo suyo, sin embargo, hay buenas razones detrás de esta política:",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028591/FUNDACION/PERSONAJES/Hober_Mallow_iyruwy.webp',
  },
  {
    name: 'Cleon I',
    profession: 'Emperador',
    rank: 'Emperador',
    birthday: '(25724 TIERRA 12038 ERAGALACTICA -221 ERAFUNDACIONAL)',
    planet: 'Trantor',
    country: 'Imperio',
    resume: 'Cleon I (11,988 GE - 12,038 GE) fue el último emperador galáctico de la dinastía Entun. Fue emperador del Imperio Galáctico cuando Hari Seldon llegó a Trantor. Sucedió en el trono imperial en 12.010 GE a la edad de veintidós años después de la muerte de su padre, Estanel VI, quien tuvo la suerte de escapar de las posibilidades de asesinato de uno en dos que enfrentaron los emperadores galácticos en el último siglo.Cleon es un hombre amable, ya no está entusiasmado con los adornos de la oficina, ansioso por tratar a otros como sus iguales y sin embargo no es capaz de conversar cómodamente, o incluso entender sus motivaciones. En su genial pero equivocado deseo.                                                                                                                                                                                                                                                                   Podría decirse que el evento más significativo de la regla de Cleon ocurrió en 12,020 GE, cuando el joven matemático Hari Seldon llegó a Trantor y reveló que la psicohistoria era una posibilidad teórica. El reinado de Cleón I representó un curioso intervalo de silencio entre tiempos difíciles. Esto se debe sin duda a las habilidades de su Jefe de Estado Mayor, Eto Demerzel. Cleon nunca se habría enterado de este desarrollo por sus propios esfuerzos; aislado de la galaxia y confinado a los terrenos del Palacio Imperial, se basó en su capaz Jefe de Estado Mayor, Eto Demerzel, para llevar a cabo las maniobras maquiavélicas necesarias para mantener el funcionamiento del Imperio Galáctico. Demerzel se dio cuenta de que Seldon posiblemente podría desarrollar un método matemático para predecir la historia futura, e informó indirectamente al emperador, que tuvo un interés inmediato en el asunto. Mientras que Cleon se contentaba con usar a Seldon como una fuente de profecías autocumplidas, una herramienta para evitar disturbios, Demerzel había llegado a creer que el Imperio mismo estaba muriendo, y que solo una investigación honesta podría evitar su caída o al menos minimizar los efectos de esa caída. Por lo tanto, Demerzel tomó medidas para promover el desarrollo de Seldon de su ciencia infantil.                                                                                                                            Después de la jubilación de Demerzel, Cleon nombró a Seldon como su nuevo Jefe de Gabinete, un cargo que ahora se denomina Primer Ministro. (Preludio a la Fundación afirma que Demerzel no tenía título formal, mientras que su secuela, Adelante la Fundación, lo convierte en el Primer Ministro, una inconsistencia menor en cuanto a la Asimov canon va.) Seldon se esforzó al máximo, empleando medidas pragmáticas para detener las conspiraciones antiimperialistas mientras desarrollaba simultáneamente la psicohistoria en un sistema capaz de hacer predicciones sólidas.Desafortunadamente, la ineptitud personal de Cleon se convirtió en su caída. Deseando agradecer a un jardinero, Mandell Gruber, por su parte en frustrar un intento de asesinato contra el Dr. Seldon, promovió a Gruber a Jardinero Jefe sobre los terrenos del Palacio Imperial. Gruber, no deseando abandonar su estilo de vida, superó su timidez y disparó al emperador. El trastorno caótico que siguió al asesinato de Cleon vio el surgimiento de una Junta Militar y el retiro de Hari Seldon de la política abierta.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028586/FUNDACION/PERSONAJES/Cleon_I-TMG_niytbr.webp',
  },
  {
    name: 'Bel Riose',
    profession: 'Soldado',
    rank: 'General',
    birthday: '(25989 TIERRA 12234 ERAGALACTICA 166 ERAFUNDACIONAL)',
    planet: 'Trantor',
    country: 'Imperio',
    resume: 'Bel Riose fue el último gran general del Imperio Galáctico, sirviendo bajo Cleón II. Soñaba con la gloria y a menudo expresaba una opinión negativa hacia el declive cultural y tecnológico del Imperio.Riose se entera de la Fundación de Ducem Barr, un noble del planeta Siwenna. Interpretar correctamente las historias de Barr sobre los "magos" como los restos de la ciencia en la Periferia, y ser testigo de algunos avances científicos realizados por la propia Fundación en forma de una fuerza personal-escudo, decide conquistar la Fundación y utilizar sus recursos científicos para revitalizar el Imperio moribundo. En el camino a la Fundación, captura a uno de sus Traders, Lathan Devers, y lo mantiene como rehén junto a Barr en un intento de obtener inteligencia sobre la Fundación.                                                                                                                                                                                                                                                          Aunque Devers y Barr escapan de Riose y se dirigen a Trantor en un intento de ganar una audiencia con el Emperador, las fuerzas de la historia hacen que sus esfuerzos no tengan sentido. Temiendo el poder de Riose, Cleon II le ordena volver a Trantor y lo ejecuta por traición, según la predicción de Hari Seldon de que al final del Imperio, Cualquier oficial militar que obtuviera suficiente poder para amenazar a la Fundación se vería impedido de causar daño por el propio temor de rebelión del gobierno central.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028532/FUNDACION/PERSONAJES/Bel_Riose_c9cnfu.webp',
  },
  {
    name: 'El Mulo',
    profession: 'Politico',
    rank: 'Primer Ciudadano',
    birthday: '(26107 TIERRA 12352 ERAGALACTICA 284 ERAFUNDACIONAL)',
    planet: 'Gaia',
    country: 'Republica de Korell',
    resume: 'La Mula (269-306 FE) era un poderoso mutante, señor de la guerra y conquistador que representaba la mayor amenaza para el Plan de Seldon. Su aguda capacidad telepática para modificar las emociones de los seres humanos descarriló una de las suposiciones básicas de la psicohistoria de Hari Seldon - que, en general, las respuestas de las poblaciones humanas a los estímulos dados seguirán siendo las mismas.La mula nació en el planeta mental Gaia dentro del Sector Sayshell en 268 FE, donde fue considerado como un criminal por su voluntad de usar sus poderes mentales para manipular a la gente. De alguna manera logró escapar del planeta a una edad temprana y usar los poderes innatos de sus habitantes contra la Galaxia.                                                                                                                          Motivado por la conciencia de su apariencia anormal y el odio contra la galaxia, la mula utiliza sus amplios poderes para llegar al poder: en primer lugar la conquista de la base de asteroides de un pirata en , un industrial más tarde le dio el control de un planeta. Desde allí logró apoderarse del planeta Kalgan convirtiendo al entonces señor de la guerra de Kalgan en 295 FE. Esto le dio la posibilidad de conquistar la Primera Fundación, pero necesitaba aliados para esto, por lo que decidió disfrazarse de payaso, afirmando ser su propio bufón, para buscar a los agentes que la Fundación enviaría a investigarlo. Esto le permitió conocer a Han Pritcher, pero los primeros en encontrarlo fueron Toran y Bayta Darell, a quienes encontró y se unió en sus viajes en 296 FE. Esto, al mismo tiempo, le permitió a Kalgan declarar la guerra a la Primera Fundación, conquistando tanto ella como los planetas de los Comerciantes Independientes. Sus intentos de encontrar la Segunda Fundación a través de la manipulación de Ebling Mis, sin embargo, terminaron siendo bloqueados en el último segundo gracias a Bayta, que se había dado cuenta de quién era y mató a Mis antes de que pudiera hablar. La Mula terminó yéndose, permitiendo que los Darell fueran intactos sobre la base de su amistad.                                                                                                                             Durante los años siguientes, la Mula continuó usando su poder para barrer a un lado los últimos restos del Imperio Galáctico centrados alrededor de Neotrantor y forjando la Unión de los Mundos, llamándose a sí mismo Primer Ciudadano de la Unión. Sin embargo, sus planes para crear un nuevo Imperio fueron controlados por su miedo a la Segunda Fundación, lo que le llevó a organizar múltiples expediciones para buscarlo. La sexta expedición de 301 FE, liderada por Bail Channis (que resulta ser un agente de la Segunda Fundación) parece tener éxito, pero de hecho todo es una trampa creada por el Primer Portavoz de la Segunda Fundación, que derrota a la Mula y altera su mente, haciendo terminar su búsqueda y pasar los últimos años de su vida como un dictador benevolente, muriendo finalmente una muerte prematura resultante de su mutación.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028527/FUNDACION/PERSONAJES/The_Mule_xcsgcj.webp',
  },
  
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersFundacion = await CharacterFundacion.find();
    if (allCharactersFundacion.length > 0) {
      await CharacterFundacion.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersFundacionMap = arrayCharactersFundacion.map(
      (character) => new CharacterFundacion(character)
    );
    await CharacterFundacion.insertMany(charactersFundacionMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
