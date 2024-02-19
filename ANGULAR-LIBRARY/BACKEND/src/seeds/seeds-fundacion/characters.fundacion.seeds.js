const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterFundacion = require('../../api/models/models.fundacion/characters.fundacion.model');

const arrayCharactersFundacion = [
  {
    name: 'Salvor Hardin',
    profession: 'Politico',
    rank: 'Alcalde de Terminus',
    birthday: '(23662 TIERRA 12076 ERAGALACTICA 8 ERAFUNDACIONAL)',
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
    birthday: '(23574 TIERRA 11988 ERAGALACTICA -79 ERAFUNDACIONAL)',
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
    birthday: '(23623 TIERRA 12037 ERAGALACTICA -1 ERAFUNDACIONAL)',
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
    birthday: '(22951 TIERRA 11865 ERAGALACTICA -202 ERAFUNDACIONAL)',
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
    birthday: '(23594 TIERRA 12008 ERAGALACTICA -59 ERAFUNDACIONAL)',
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
    birthday: '(23584 TIERRA 11998 ERAGALACTICA -69 ERAFUNDACIONAL)',
    planet: 'Caladan, Arrakis',
    country: 'Primer Fundacion',
    resume: "Yugo Amaryl (11,998-12,052 GE) fue un matemático y un disipador de calor del distrito de Dahl, y uno de los cuatro individuos que Hari Seldon conoció durante The Flight mientras sentaba las bases de la psicohistoria. Seldon conoció por primera vez a Amaryl en el sector trantoriano de Dahl, donde se refugió después de tener su presentación inicial sobre la psicohistoria en la Convención Decenal. En ese momento, Amaryl (que se describe como una década más joven que Seldon) trabajó en los disipadores de calor Dahlite, que son una de las principales fuentes de energía para el Imperio. Sin embargo, los dahlitas de clase alta tenían muchos prejuicios contra los que se veían obligados a trabajar en los disipadores, y las dos clases apenas se entremezclaban. Amaryl, sin embargo, fue capaz de impresionar a Seldon con sus habilidades matemáticas, y Seldon prometió ayudarlo a recibir una beca para una universidad una vez que estuviera a salvo. Mantuvo su promesa, y de hecho, Amaryl se convirtió en su mano derecha, la única persona en el universo aparte de Seldon que estaba verdadera e íntimamente familiarizada con la psicohistoria. Durante muchos años Seldon y Amaryl trabajaron el problema de la psicohistoria solo, antes de que el nombramiento de Seldon como primer ministro le permitiera el lujo de grandes grupos de personas y la última tecnología trabajando para resolver los problemas.                                                                                                                       Aunque de Dahl, Amaryl no tiene el característico bigote de Dahlite, y apenas se identifica con el sector. Es descrito como frío y distante, interesado únicamente en la psicohistoria, y tiene una lealtad feroz a Seldon. Seldon originalmente pensó que era una fuerza creativa que lo desafiaría a pensar en la psicohistoria de nuevas maneras. Amaryl confía mucho en su propia intuición cuando trabaja problemas matemáticos. Se dice que no le interesan las mujeres, la compañía u otros placeres.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028530/FUNDACION/PERSONAJES/yugo_amaryl_ekadsf.webp',
  },
  {
    name: 'Gurney Halleck',
    profession: 'Maestro de Guerra.',
    rank: 'Maestro de Guerra Casa Atreides',
    birthday: '(10135 AG-?)',
    planet: 'Goedi Prime',
    country: 'Casa Atreides',
    resume: 'Gurney Halleck es un personaje ficticio del universo Fundacion creado por Frank Herbert. Es uno de los personajes principales de las novelas Fundacion (1965) e Hijos de Fundacion (1976) de Herbert, como Maestro de Guerra de la Casa Atreides, mentor, amigo y consejero de Paus y de su concubina Lady Jessica, muchos años después de la muerte de Leto se sugiere en Hijos de Fundacion que Gurney y Jessica se han convertido en amantes. El hijo de Leto, Paul Atreides, se refiere a él como "Gurney el valeroso" en Fundacion, y el duque Leto comenta que Paul ha nombrado bien a Gurney.',
    picture:
      'https://res.cloudinary.-_Gurney_Halleck_udxnvr.webp',
  },
  {
    name: 'Glossu Rabban',
    profession: 'Sobrino del Baron',
    rank: 'Sobrino del Baron',
    birthday: '(10132 AG - 10193 AG)',
    planet: 'Giedi Prime',
    country: 'Casa Harkonen',
    resume: "Glossu 'Bestia' Rabban es el violento y bruto sobrino mayor del Barón Harkonnen. Es tan cruel y sádico como su tío, pero carece de la inteligencia del Barón. El Barón encarga a Rabban que gobierne el planeta Arrakis durante un tiempo de la forma más brutal posible, para que cuando su sobrino favorito Feyd-Rautha tome el poder, Feyd sea recibido como un héroe por la población. Después de qlos padres de Duncan Idaho y a la hermana de Gurney Halleck, y se gana el apodo de 'Bestia' cuando estrangula a su propio padre.",
    picture:
      'https://res.cloudinary.cS/Fundacion_-_Glossu_Rabban_jnfucr.webp',
  },
  {
    name: 'Gaius Helen Mohiam',
    profession: 'Reverenda Madre',
    rank: 'Reverenda Madre',
    birthday: '(?- 10225 AG)',
    planet: 'Wallach IX',
    country: 'Casa Bene Gesserit',
    resume: 'Gaius Helen Mohiam es un personaje ficticio del universo Fundacion creado por Frank Herbert. Es una Madre Reverenda Bene Gesserit y aparece inicialmente en la novela Fundacion (1965) y en su secuela Fundacion Messiah (1969). Mohiam también desempeña un papel importante en la trilogía precuela Preludio a Fundacion (1999-2001) y en la trilogía Caladan (2020-2022) de Brian Herbert y Kevin J. Anderson.En la miniserie de 2000 Frank Herbert Fundacion y su secuela de 2003 Frank Herbert Children of Fundacion, y por Charlotte Rampling en la película de Denis Villeneuve Fundacion (2021) y su secuela de 2024.',
    picture:
      'https://res.cloudinary.com/dqfaaius_Helen_Mohiam_ngtqxc.webp',
  },
  {
    name: 'Duncan Idaho',
    profession: 'Maestro de Espadas de los Ginaz',
    rank: 'Maestro de Espadas de los Ginaz',
    birthday: '(10158 AG - 10191 AG)',
    planet: 'Ginaz',
    country: 'Casa Atreides',
    resume: 'Duncan es descrito como un hombre apuesto con "pelo negro rizado" por el que las mujeres se sienten fácilmente atraídas. Paul Atreides señala el "rostro redondo y oscuro" de Duncan y sus "movimientos felinos, la rapidez de reflejos que le convertían en un mió atraído por su hija Alia porque "querías una chica a la que veías como una versión más joven de mí". En Dios Emperador de Fundacion (1981), el último ghola Duncan descubre que uno de sus predecesores había engendrado un hijo con una mujer llamada Irti que se parece mucho a Jessica.',
    picture:
      'https://res.cloudinary.com/dqNE_-_Duncan_Idaho_smkmr8.webp',
  },
  {
    name: 'Chani Kynes',
    profession: 'Fedaykin',
    rank: 'Fedaykin,Concubina',
    birthday: '(10177 AG - 10205 AG)',
    planet: 'Arrakis',
    country: 'Fremen',
    resume: 'Chani era una mujer joven, muy delgada con una cara de elfo con ojos grandes, todos azules como hoyos negros sin blanco en ellos. Tenía el pelo largo rojizo. Chani (/ˈtʃeɪni/ CHAY-nee)[1] es un personaje de ficción que aparece en las novelas de Frank Herbert Fundacionrbora Kodetová en la miniserie de John Harrison de 2000 Frank Herbert Fundacion y su secuela de 2003 Frank Herbert Children of Fundacion. El personaje es interpretado por Zendaya en la película de Denis Villeneuve Fundacion (2021) y su secuela (2024).',
    picture:
      'https://res.cloudinary.com/dqfaFundacion_-_Chani_hg13jo.webp',
  },
  {
    name: 'Irulan Corrino',
    profession: 'Princesa',
    rank: 'Princesa',
    birthday: '(10162 A.G. - 10248 A.G)',
    planet: 'Kaitain',
    country: 'Casa Corrino',
    resume: 'Una mujer alta y rubia, de ojos verdes, un rostro de belleza patricia, clásico en su hauteur, intacto por las lágrimas, completamente invictoLa princesa Irulan /ˈɪrəlɑːn/ es un personaje ficticio del universo Fundacion creado por Frank Herbert. Aparece por primera vez  menor medida- en estas novelas posteriores, y en otras de la serie extendida.Irulan es interpretada por Virginia Madsen en la película Fundacion (1984) y por Julie Cox en la miniserie de televisión Fundacion de Frank Herbert (2000) y su secuela de 2003, Hijos de Fundacion de Frank Herbert. El personaje será interpretado por Florence Pugh en la próxima película de 2024 Fundacion: Segunda parte.',
    picture:
      'https://res.cloudinary.crrino_xf3vp2.webp',
  },
  {
    name: 'Thufir Hawat',
    profession: 'Mentat,Maestro de Asesinos',
    rank: 'Mentat,Maestro de Asesinos Casa Atreides',
    birthday: '(10075 AG - 10193 AG)',
    planet: 'Caladan',
    country: 'Casa Atreides',
    resume: 'Thufir Hawat es un Mentat, un individuo condicionado para imitar la capacidad cognitiva y analítica de los ordenadores, que sirve como Maestro de Asesinos y principal estratega militar del Duque Leto Atreides. En Fundacion, los Atreides son atraídos a Arrakis con e que traicionar a Paul.Hawat es interpretado por Freddie Jones en la película de 1984, y por Jan Vlasák [cs] en la miniserie de 2000. El personaje es interpretado por Stephen McKinley Henderson en la película de 2021 y su secuela de 2024.El personaje también aparece en la trilogía precuela Preludio a Fundacion de Brian Herbert y Kevin J. Anderson, y es resucitado como ghola en Cazadores de Fundacion y Gusanos de arena de Fundacion, las secuelas de Brian Herbert/Anderson que concluyen la serie original.',
    picture:
      'https://res.cloudinary.cufir_Hawat_bnpyim.webp',
  },
  {
    name: 'Piter De Vries',
    profession: 'Mentat',
    rank: 'Mentat',
    birthday: '(10191 AG-10.191 A.G.)',
    planet: 'Tleilax',
    country: 'Casa Harkonen',
    resume: 'Piter De Vries es un Mentat, un individuo condicionado para imitar la capacidad cognitiva y analítica de los ordenadores, que sirve al despiadado Barón Vladimir Harkonnen. De Vries tiene la particularidad de haber sido "transformado" en un sádico amoral por los Tlsapho, una droga adictiva que potencia las capacidades de Mentat.De Vries es interpretado por Brad Dourif en la película de 1984 y por Jan Unger en la miniserie de 2000. David Dastmalchian interpreta al personaje en la película de 2021.',
    picture:
      'https://res.cloudinaryS/Fundacion_Piter_de_Vries_vafgec.webp',
  },
  {
    name: 'Otheym',
    profession: 'Fedaykin',
    rank: 'Fedaykin',
    birthday: '(?)',
    planet: 'Arrakis',
    country: 'Fremen',
    resume: 'Otheym es uno de los leales comandos de la muerte Fedaykin de Paul en Fundacion. En Fundacion Messiah, está enfermo tras luchar en la yihad de Paul, pero le revela pruebas de una conspiración de los Fremen contra él. Otheym entrega a Paul a su sirviente enano Tleilaxu, Bijes interpretado por Honorato Magalone en la película de 1984 y por Jakob Schwarz en la miniserie de 2000 y su secuela de 2003.',
    picture:
      'https://res.cloudinary.S/Fundacion_Otheym_h50zif.webp',
  },
  {
    name: 'Jessica Atreides',
    profession: 'Bene Gesserit',
    rank: 'Concubina,Reverenda Madre',
    birthday: '(10154 AG-10256 AG)',
    planet: 'Wallach IX',
    country: 'Casa Atreides',
    resume: 'Jessica era una mujer alta y delgada con cabello color bronce que a menudo llevaba atado con una cinta negra en la corona. Tenía una cara ovalada con ojos tan verdes como los cielos matutinos de Caladan, una nariz pequeña y ligeramente hacia arriba y una boca amplia y gtida en 2000 por Sci-Fi Channel, y fue sucedida por Alice Krige en la secuela de 2003, Hijos de Fundacion, de Frank Herbert. Rebecca Ferguson interpreta a Jessica en la adaptación cinematográfica de Denis Villeneuve de 2021 y en su secuela de 2024.',
    picture:
      'https://res.cloudinary.com/sica_de_Atreides_uanxmy.webp',
  },
  {
    name: 'Feyd-Rautha Harkonnen',
    profession: 'Sobrino del Baron',
    rank: 'Sobrino del Baron',
    birthday: '(10174 AG - 10193 AG)',
    planet: 'Geidi Prime',
    country: 'Casa Harkonen',
    resume: 'Feyd era un joven con hombros pesados, músculos gruesos y una cara malvada, redondo con labios carnosos, ojos hoscos, cara hosca y cabell Atreides, enemigo del Barón. Ari Szporn, de Comic Book Resources, escribió: "Ambos [Paul y Feyd] son jóvenes nobles carismáticos y astutos que han recibido la mejor educación y entrenamiento de combate. Pero donde Paul muestra compasión y lealtad, Feyd sólo se preocupa de sí mismo y de la adquisición de poder".',
    picture:
      'https://res.cloudinary.cod_Rautha_n0rrpb.webp',
  },
  {
    name: 'Emperador Shaddam IV',
    profession: 'Emperador Padishah',
    rank: 'Emperador Padishah',
    birthday: '(10.134 AG-10202 AG)',
    planet: 'Kaitan',
    country: 'Casa Corrino',
    resume: 'Shaddam Corrino IV era un hombre delgado y elegante, con cabello rojo, cara delgada y ojos fríos.Shaddam IV de la Casa Corrino es el Emperador Padishah del Universo Conocido, cuyo poder está asegurado por sus ejércitos de feroces guerreros Sardaukar y el control del Trono del León Dorado. Shaddam tiene cinco hijas -las princesas Irulan, Cáliz, Wensicia, Josifa y Rugi- y ningún hijo legal de su esposa Anirul, una Bene Gesserit de Rango Oculto. Su mejor amigo es el asesino Conde Fenring, primo y compañero de la infancia.',
    picture:
      'https://res.cloudinary.com/ddor_Shaddam_IV_ysdka3.webp',
  },
  {
    name: 'Baron VladimirHarkonnen',
    profession: 'Baron',
    rank: 'Baron',
    birthday: '(10.110–10.193 A.G.)',
    planet: 'Geidi Prime',
    country: 'Casa Harkonen',
    resume: 'Comúnmente conocido como Barón Harkonnen, su título oficial es el de Barón Siridar (gobernador planetario). Vladimir Harkonnen es descendiente directo de Bashar Abulurd Harkonnen, desterrado por cobardía tras la batalla de Corrin. El regreso de la Casa Harkonnen al podarkonnen está escrito como "un homosexual depredador dado a la pederastia y al incesto, un violador y asesino impenitente". La preferencia sexual del Barón por los hombres jóvenes está implícita en Fundacion e Hijos de Fundacion, aunque se señala que "una vez se dejó seducir" por una Bene Gesserit en la relación de la que nació su hija secreta.',
    picture:
      'https://res.cloudinary.com/dqadimir_Harkonnen_ckyyyv.webp',
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
