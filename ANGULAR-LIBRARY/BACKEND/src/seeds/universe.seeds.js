const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Universe = require('../api/models/universes.model');

const DB_URL = process.env.DBURL;

const arrayUniverses = [
  {
    nameUniverse: 'Foundation',
    author: 'Isaac Asimov',
    sagas1:
      'Robots: (I, Robot(1950), Robot`s Dreams(1986), Robot`s Visions(1990))',
    sagas2:
      'Earth_Cycle: (The Caves of Steel(1950), The Naked Sun(1957), The Robots of Dawn(1983), Robots and Empire(1985))',
    sagas3:
      'Galactic_Empire: (The Stars, Like Dust(1951), The Currents of Space(1952), Pebble in the Sky(1950), Blind Alley(1945))',
    sagas4:
      'Foundation_Prequels: (Prelude to Foundation(1988), Forward the Foundation(1993))',
    sagas5:
      'Foundation: (Foundation(1951), Foundation and Empire(1952), Second Foundation(1953))',
    sagas6:
      "Extended_Foundation: (Foundation's Edge(1982), Foundation and Earth(1986), The End of Eternity(1955))",
    resume:
      "La premisa de las historias es que, en los tiempos decadentes de un futuro Imperio Galáctico, el matemático Hari Seldon se pasa la vida desarrollando la teoría de la psicohistoria, una nueva y eficaz sociología matemática. Utilizando las leyes estadísticas de acción de masas, puede predecir el futuro de las grandes poblaciones. Seldon prevé la inminente caída del Imperio, que abarca toda la Vía Láctea, y unos años oscuros que durarán 30.000 años antes de que surja un segundo imperio.                                                                                                                                                                                                                           Aunque el impulso de la caída del Imperio es demasiado grande para detenerlo, Seldon idea un Plan mediante el cual 'la masa de eventos irrumpiente debe desviarse solo un poco' para limitar finalmente este interregno a solo mil años. Para implementar su Plan, Seldon crea las Fundaciones —dos grupos de científicos e ingenieros establecidos en extremos opuestos de la galaxia— para preservar el espíritu de la ciencia y la civilización, y así convertirse en las piedras angulares del nuevo imperio galáctico",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061631/APISCIFI/Fondos%20Universos/FoundationUniverse_gmhk1n.jpg',
  },
  {
    nameUniverse: 'Uplift',
    author: 'David Brind',
    sagas1:
      'Uplift_Trilogy: (Sundiver(1980), Startide Rising(1983), The Uplift War(1987))',
    sagas2:
      "Secound_Uplift_Trilogy: (Brightness Reef(1995), Infinity's Shore(1996), Heaven's Reach(1998))",
    resume:
      'En el universo de la elevación de los pupilos existe una civilización intergaláctica denominada de las Cinco Galaxias, que incluye una multitud de razas inteligentes, ha existido durante miles de millones de años. Esta civilización se perpetúa por el acto de la Elevación, evolución en la que una especie tutora modifica a una especie Pupila o Pre-Sapiente hasta que alcance la plena sapiencia. Las especies pupilas suelen ser sirvientes por contrato de las especies tutoras que les elevan por un periodo de 100.000 años.                                                                            La tutoría de una especie genera ganancias considerables, y los pupilos y los tutores a veces se unen en poderosos clanes. De todos modos el grado de tutor puede perderse debido al exterminio, o a crímenes graves contra la civilización galáctica. En general se acepta en este universo que el proceso de elevación se inició hace por lo menos mil millones de años por una especie conocida sólo como los Progenitores. La humanidad es una rara anomalía en este universo, ya que en apariencia es una especie que ha alcanzado la sapiencia sin tutor conocido: Si verdaderamente la humanidad evolucionó de manera independiente, o si fue abandonada plenamente por un tutor desconocido a principios de su elevación, es un tema de intenso debate.                                                                                                                                                                                                                                      La mayoría de la humanidad cree que son lobeznos, es decir una especie que se ha elevado a sí misma, sin manipulación genética de una especie tutora, a la sapiencia. Esta creencia es considerada herejía y ridícula por la mayoría de la civilización galáctica y ha hecho enemigos de la humanidad, el Clan terrestre, a la mayor parte de los poderes galácticos. Además, el hecho de que la humanidad hubiera elevado ya a dos especies (neo-chimpancés y neo-delfines) cuando se encontró con la civilización galáctica concedió a la humanidad rango de tutor, lo cual es una de las pocas cosas buenas que le ha sucedido al Clan terrestre en su difícil posición de paria en la civilización galáctica. Esto salvó a la humanidad del destino probable de convertirse en pupila de otra raza a través de una adopción forzada o ser exterminados por el daño ambiental causado a la Tierra y a sus especies nativas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061630/APISCIFI/Fondos%20Universos/UpliftUniverse_rdohfu.webp',
  },
  {
    nameUniverse: 'The Expanse',
    author: 'James S. A. Corey',
    sagas1:
      "First_Cycle: (Leviathan Wakes(2011), Caliban's War(2012), Abbadon's Gate(2013), Cibola Burn(2014))",
    sagas2:
      "Secound_Cycle: (Nemesis Games(2015), Babylon's Ashes(2016), Persepolis Rising(2017), Tiamat's Wrath(2019), Leviathan Falls(2021))",
    resume:
      'Doscientos años en el futuro, en un sistema solar totalmente colonizado, el detective de la policía Josephus Miller (Thomas Jane), nacido en Ceres en el cinturón de asteroides, tiene asignada la misión de encontrar a una joven desaparecida: Juliette «Julie» Andrómeda Mao (Florence Faivre).                                                                                                                                                                                                                                 Mientras tanto, James Holden (Steven Strait), primer oficial del carguero de hielo Canterbury, se ve envuelto en un trágico accidente que amenaza con desestabilizar las relaciones entre la Tierra, Marte y el Cinturón.Lejos de estas dificultades, en el espacio, Chrisjen Avasarala (Shohreh Aghdashloo), una ejecutiva de Naciones Unidas, organización que ha logrado un gobierno mundial, trabaja para evitar la guerra entre esta y Marte, gobernado por el Congreso General Marciano, cueste lo que cueste.Pronto, los tres descubrirán que la mujer desaparecida y el trágico destino del carguero de hielo eran parte de una vasta conspiración que amenaza a toda la humanidad.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061628/APISCIFI/Fondos%20Universos/TheEXpanseUniverse_xtujcn.jpg',
  },
  {
    nameUniverse: "Old Man's War",
    author: 'John Scalzi',
    sagas1:
      "Main Cycle: (The Ghost Brigades(2006), The Last Colony(2007), Zoe's Tale(2008), The Human Division(2013), The End of All Things(2015), The Sagan Diary(2007))",
    resume:
      "Old Man's War trata sobre un soldado llamado John Perry y sus hazañas en las Fuerzas de Defensa Colonial (CDF). La narrativa en primera persona sigue la carrera militar de Perry desde recluta de las CDF hasta el rango de capitán. Está ambientado en un universo densamente poblado de formas de vida, en el que las especies que viajan al espacio compiten por los escasos planetas que son adecuados para sustentar la vida. Como resultado, Perry debe aprender a luchar contra una amplia variedad de alienígenas. Los personajes de Old Man's War tienen ADN y nanotecnología mejorados, lo que les otorga ventajas en fuerza, velocidad, resistencia y conciencia situacional.",
  },
  {
    nameUniverse: 'Lock In',
    author: 'John Scalzi',
    sagas1: 'Main_Cycle (Lock In(2015), Head on(2018))',
    resume:
      "El mundo está expuesto a un virus altamente contagioso. La mayoría de los que se enferman no experimentan nada peor que síntomas parecidos a los de la gripe. Para el 1%, el virus hace que las víctimas estén completamente despiertas, pero incapaces de moverse o responder a estímulos. Esto se conoce como 'encierro' y se asemeja a la condición real conocida como síndrome de encierro. La enfermedad pasa a conocerse como 'Síndrome de Haden' y sus víctimas se llaman 'Hadens'.                                                                                                                                                                                                                                  Las unidades de transporte personal robóticas humanoides controladas por el cerebro de Haden (apodado 'Threeps' en honor a C-3PO de Star Wars) se desarrollan como la forma principal para que Haden interactúe con el mundo exterior.Veinticinco años después de la exposición inicial al virus, los agentes del FBI Chris Shane (que es un Haden) y Leslie Vann son asignados a un asesinato relacionado con Haden, con un sospechoso que es un 'Integrador', alguien que puede permitir que un Haden use sus cuerpos. Si el Integrador llevaba un Haden, entonces encontrar al sospechoso del asesinato es complicado. Se producen más asesinatos relacionados con Integrator-Haden, lo que hace que el caso sea más grande de lo esperado y, a medida que Shane y Vann profundizan, descubren un complot para sacudir por completo la economía de Haden.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061635/APISCIFI/Fondos%20Universos/LockInUniverse_i4vlpz.jpg',
  },
  {
    nameUniverse: 'The Interdependency',
    author: 'John Scalzi',
    sagas1:
      'Main_Cycle: (The Collapsing Empire, (2017)The Consuming Fire, (2018)The Last Emperox (2020))',
    resume:
      "Es un imperio humano milenario de 48 sistemas estelares conectados por el Flujo, una red de 'corrientes' que permiten viajes más rápidos que la luz. Cada corriente es unidireccional y tiene un punto de entrada y un punto de salida. No hay comunicación más rápida que la luz que el Flow, y los viajes interestelares no son instantáneos: los barcos que transportan correo o pasajeros desde Hub, la capital del imperio y el sistema con más conexiones Flow, llegan a End, el punto más distante. , nueve meses después, pero la red permite el comercio entre sistemas que sustenta la vida.                                                                                                                                                                                                                                         Como fenómeno natural, el Flujo no se comprende bien; La Tierra se desconectó de la red hace miles de años y la civilización de otro sistema colapsó más recientemente cuando su camino se cerró repentinamente. Las megacorporaciones de propiedad familiar controlan todo el comercio interestelar en la economía mercantil de la Interdependencia; una, la Casa Wu, es la familia real. Las casas comerciales son increíblemente ricas gracias a los monopolios sancionados por el gobierno y al cobro de peajes en los 'bajíos', entradas y salidas de las vías de flujo. La religión del estado, con el Emperox como líder titular, celebra la Interdependencia como una sociedad divinamente sancionada..",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061636/APISCIFI/Fondos%20Universos/The-InterdependencyUniverse_jzed3o.jpg',
  },
  {
    nameUniverse: 'Dune',
    author: 'Frank Herber',
    sagas1:
      'The Butlerian Jihad: (The Butlerian Jihad (2002), The Machine Crusade (2003), The Battle of Corrin (2004))',
    sagas2:
      'Prelude to Dune: (Atreides House(1999), Harkonen House(2000), Corrino, House(2001))',
    sagas3:
      'Big House of Dune: (Sisterhood of Dune(2012), Mentats of Dune(2014), Navigators of Dune(2016))',
    sagas4: 'Dune`s Heroe (Paul of Dune(2008), Winds of Dune(2009))',
    sagas5:
      'Original Saga: (Dune (1965), Dune Messiah (1969), Children of Dune (1976) by Frank Herbert, Heroes of Dune series (2008–2023), God Emperor of Dune (1981))',
    sagas6:
      'The return from the Scattering: (Heretics of Dune (1984) by Frank Herbert, Chapterhouse: Dune (1985), Hunters of Dune (2006),Sandworms of Dune (2007))',
    resume:
      'El Universo de Dune es el escenario político, científico y social inventado por Frank Herbert para la saga original de seis novelas de ciencia ficción Dune. El primer libro de la saga, Dune (1965), fue adaptado en la película Dune (1984) de David Lynch y en las películas Dune (2021) y Dune: parte dos (2023) de Denis Villeneuve, así como en una miniserie de televisión (2000); las segunda y tercera partes fueron adaptadas en otra miniserie de televisión (2003).                                                                                                                                                                                                                                     El universo de Dune ha inspirado también varios videojuegos, incluyendo Dune II, uno de los primeros juegos de estrategia en tiempo real modernos. Tras la muerte de Frank Herbert, su hijo Brian y el autor de ciencia ficción Kevin J. Anderson han producido un número de libros sobre los tiempos anteriores al inicio de la saga que han tenido bastante éxito comercial. No obstante, hay disputas entre los fanes de la saga original sobre si forman parte del canon Dune propiamente o no.                                                                                                                                                                                                                                         En 2006 los mismos autores publicaron una continuación de la saga original titulada Cazadores de Dune, y en 2007 el octavo y final Gusanos de arena de Dune. Estas continuaciones y las trilogías anteriores están parcialmente basadas según los autores en notas del propio Frank Herbert, descubiertas una década después de su fallecimiento.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061633/APISCIFI/Fondos%20Universos/DuneUniverse_wnacc6.jpg',
  },
  {
    nameUniverse: 'Honorverse',
    author: 'David Weber',
    sagas1:
      'Honorverse: (On Basilisk Station (1993),The Honor of the Queen(1993),The Short Victorious War(1994),Field of Dishonor(1994),Flag in Exile(1995), Honor Among Enemies(1996), In Enemy Hands(1996), Echoes of Honor(1998),Ashes of Victory(2000),War of Honor(2002),At All Costs(2005),Mission of Honor(2010),A Rising Thunder(2012),Uncompromising Honor(2018)',
    sagas2:
      'Crown of Slaves: (Crown of Slaves(2003),Torch of Freedom(2009),Cauldron of Ghosts(2014),To End in Fire(2021))',
    sagas3:
      'Shadow: (The Shadow of Saganami(2004),Storm from the Shadows8(2009),Shadow of Freedom(2014),Shadow of Victory(2021)',
    sagas4:
      'Manticory Ascendant: (A Call to Duty (2014), A Call to Arms(2015), A call to Vengence(2018), A Cal to Insurrection(2022))',
    sagas5:
      'The Star Kingdom: (A Beautiful Friendship(2011), Fire Season(2012),Treecat Wars(2013), A New Clan(2022))',
    resume:
      'Las sagas de Honor Harrington transcurren durante el comienzo del siglo xx post-diáspora (aproximadamente siglo XLI según la datación cristiana, que es reemplazada por un sistema que tiene como año 1 el momento en el que la primera nave interestelar abandonó el Sistema Solar, 2103 d.) C.                                                                                                                                                                                                                                                  Todas las naciones mencionadas son humanas. Aunque existe vida extraterrestre y algunas de estas formas son inteligentes, como los ramafelinos de Sphinx, ninguna de ellas ha alcanzado un nivel tecnológico capaz de rivalizar con el de la humanidad. El viaje interestelar durante los primeros siglos de la diáspora (como se conoce al proceso de colonización) fue poco confiable, y las naves colonizadoras preferían hacer el viaje a velocidades menores que la de la luz, transportando a sus colonos criogenizados durante siglos antes de llegar a su destino. Esto cambió con el invento de las velas Warshawski, un sistema de propulsión hiperespacial que mejoró las velocidades y permitió el comercio entre las distintas colonias.                                                                                                                                                                                                                                           La reaparición del comercio llevó a un resurgimiento de la piratería, lo cual condujo a su vez a la formación de ejércitos defensivos por parte de las naciones. Las diferencias comerciales, ideológicas y estratégicas motivaron el surgimiento de guerras entre ellas. Algunas de estas naciones se volvieron expansionistas, bien expandiéndose pacíficamente, bien por la fuerza.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708061772/APISCIFI/Fondos%20Universos/HonoversoUniverse_w9mtx5.jpg',
  },
  {
    nameUniverse: 'Enderverse',
    author: 'Orson Scott Card',
    sagas1:
      "Ender's Saga: (Ender's Game(1985), Speaker for the Dead(1986),Xenocide (1991),Children of the Mind(1996),A war of Gifts (1998))",
    sagas2:
      "Shadow Saga: (Ender's Shadow(1999), Shadow of the Hegemon(2000),Shadow Puppets(2002), Shadow of the Giant(2005), Shadows in Flight(2012), Shadows Alive(2012))",
    sagas3:
      'Earth Saga: (Earth Unaware (2012), Earth Afire(2013), Earth Awakens (2014))',
    sagas4: 'The Swarm: (The Swarm(2016), The Hive(2019), The Queens(2022))',
    sagas5: 'Children of the fleet: (Children of the Fleet(2017))',
    resume:
      "La saga se desarrolla en un futuro donde la humanidad se enfrenta a la aniquilación por una agresiva sociedad extraterrestre, una raza similar a los insectos conocida coloquialmente como Insectores (buggers en el original) pero más formalmente llamada Fórmicos (formics). El personaje central, Andrew 'Ender' Wiggin, es uno de los niños soldados entrenados por la Escuela de batalla (y finalmente por la Escuela de alto Mando) para convertirse en los futuros líderes encargados de proteger la Tierra. El año exacto nunca se específica, aunque las edades de los niños Wiggin están sujetas a cambios a través del espacio, también tomando cuidadosamente en cuenta la relatividad del espacio-tiempo C.                                                                                                                                                                                                                                                  Orson Scott Card escribió en un primer momento El juego de Ender como un relato corto, pero recapacitó y lo expandió a una novela que le permitiera usar a Ender como personaje principal en otra novela, La voz de los muertos. Esa novela se desarrolla tres mil años después de El juego de Ender, aunque debido al viaje espacial relativista el propio Ender (que ahora usa su nombre de pila, Andrew) solamente tiene 36 años, sólo 25 años mayor que al final de las Guerras Insectoras.                                                                                                                                                                                                                                           Mientras que la primera novela se centra en ejércitos y guerras espaciales, La voz de los muertos y sus dos secuelas Ender el Genocida e Hijos de la Mente presentan una naturaleza más filosófica. Tratan de las difíciles relaciones entre los humanos y los Cerdis (o Pequeninos), y de los intentos de Andrew por evitar que suceda otro genocidio",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708114312/APISCIFI/Fondos%20Universos/ender_game_bhh8ew.jpg',
  },
  {
    nameUniverse: 'Hyperion',
    author: 'Dan Simmons',
    sagas1:
      'Hyperion Cantos: (Hyperion (1989), The Fall of Hyperion(1990), Endymion(1996),The Rise of Endymion (1997))',
    resume:
      "Los Cantos de Hyperion de Dan Simmons cuentan la historia de una humanidad en peligro en donde su suerte y su destino se juega en el planeta Hyperion. Siguiendo evidentemente el símil de la Caída de los Titanes por parte de los Dioses olímpicos, las dos primeras partes describen la lenta preparación del cataclismo y Caída del hombre que cristalizará en una nueva era para la humanidad.                                                                                                                                                                                                                                         La obra es también un claro homenaje a la figura de John Keats y sus dos libros homónimos (el poema inconcluso Hyperion y The Fall of Hyperion: A Dream), que versan precisamente sobre la Titanomaquia",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708116224/APISCIFI/Fondos%20Universos/hiperion1_gbyqjt.jpg',
  },
  {
    nameUniverse: "WARHAMMER 40.000",
    author: "Varios",
    resume: "La ambientación fantástico-espacial de Warhammer 40000 abarca un amplio universo ficticio ubicado en el lejano futuro del cuadragésimo primer milenio que incluye varias facciones y razas como el Imperio del Hombre (un imperio interestelar descentralizado aunque totalitario, que ha gobernado a la gran mayoría de la humanidad durante milenios), los orkos (similares a los orcos de Warhammer Fantasy), los eldar (similares a los elfos de Warhammer Fantasy) y demonios (muy parecidos en ambos universos, aunque la exacta naturaleza de su creación y su existencia varían ligeramente), entre otras.                                               Se han escrito diferentes sagas dentro de este universo centrandose en los principales protagonista de uno u otro bando: Guardia Imperial, Marines Espaciales, Marines del Caos, Eldars, Eldars Oscuros, Orkos....​",
    picture: "https://res.cloudinary.com/dqfaa272n/image/upload/v1708082894/APISCIFI/Fondos%20Universos/fondoWarhammer40000.9_duja2r.jpg",
 },
  {
    nameUniverse: "Gaunt's Ghosts(WARHAMMER 40.000)",
    author: 'Dan Abnett',
    sagas1:
      "Gaunt's Ghosts, The Founding: (First & Only (1999), Ghostmaker(2000), Necropolis(2000)),",
    sagas2:
      "Gaunt's Ghosts, The Saint: (First & Only (1999), Ghostmaker(2000), Necropolis(2000),Honour Guard(2001), Guns of Tanith(2002), Straight Silver(2002), Sabbat Martyr(2003))",
    sagas3:
      "Gaunt's Ghosts, The Lost (Traitor General(2004), His Last Command(2005),The Armour of Contempt (2006), Only in Death(2007), The Iron Star (2008))",
    sagas4:
      "Gaunt's Ghosts, The Victory: (Blood Pact,(2009) Salvation's Reach(2011), The Warmaster(2017), The Anarch(2019))",
    sagas5: "Gaunt's Ghosts, Precuel Gaunt: (The Vincula Insurgency(2022))",
    resume:
      "Fantasmas de Gaunt (Gaunt's Ghosts en el original) es una serie de novelas escritas por Dan Abnett, encuadradas en el subgénero de la ciencia ficción militar y cuya acción se desarrolla en el universo de Warhammer 40.000..                       La serie abarca, muchas novelas y diversas antologías y material de trasfondo que documentan los esfuerzos de Los Primeros y Únicos de Tanith, también llamados Los fantasmas de Gaunt, un regimiento de exploradores de infantería de la Guardia Imperial de gran habilidad pero poco apreciado por sus superiores, durante la Cruzada de los Mundos de Sabbat. El protagonista es el coronel comisario Ibram Gaunt, uno de los pocos comisarios políticos del Imperio a los que se les ha concedido oficialmente el mando de un regimiento C.                                                                                                                                                                                                                                                  Aunque Gaunt es el personaje principal, la perspectiva desde la que se narran las novelas cambia con regularidad para presentar al lector un punto de vista más amplio de lo que sucede en la Cruzada; normalmente se cuenta desde el punto de vista Imperial aunque en ocasiones la perspectiva pasa a ser la de sus antagonistas, las fuerzas del Caos. En las novelas se alude a otras series de Dan Abnett como Eisenhorn y Ravenor y ha dado lugar a diversas obras derivadas.                                                                                                                                                                                                                                           Las novelas se organizan en una serie de cuatro arcos históricos,",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708084934/APISCIFI/Fondos%20Universos/FondoFantasmas_de_Gaunt1_h7ibzt.png',
  },
  {
    nameUniverse: 'Seafort Saga',
    author: 'David Feintuch',
    sagas1:
      "Seafort Saga: (Midshipman's Hope(1994), Challenger's Hope(1995), Prisoner's Hope(1995), Fisherman Hope´s(1996), Voices of Hope (1996), Patriarch's Hope(1999), Children of Hope(2001),Hope Rearmed (2008))",
    resume:
      'Las novelas están ambientadas desde finales del siglo XXII hasta mediados del siglo XXIII y relatan las aventuras de Nicholas Seafort, un oficial del (ficticio) UNNS|United Nations Naval Service.                                                                                                                        La serie es una colección de relatos personales, generalmente desde la perspectiva de Nicholas Seafort, describiendo las aventuras de Seafort, comenzando como un humilde guardiamarina, al líder elegido de la tierra, y finalmente al capitán de la Nave insignia de la ONU Olytmpia.                                                                                                                                                                                                                                      Aunque la mayoría de los libros de la serie se cuentan desde una sola perspectiva, por lo general la de Seafort, Voices of Hope por ejemplo es una colección de relatos de varias fuentes: el hijo de Seafort, PT, el hijo de un amigo de Seafort, y un niño transeunte llamado Pook. Además, Children of Hope es narrada por Randy Carr, el hijo de un amigo cercano de Seafort',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089679/APISCIFI/Fondos%20Universos/FondoSEaford1_veyjc8.jpg',
  },
  {
    nameUniverse: 'Galactic Center',
    author: 'Gregory Benford',
    sagas1:
      'Galactic Center Saga: (In the Ocean of Night(1977), Across the Sea of Suns(1984), Great Sky River (1987), Tides of Light(1989), Furious Gulf(1994), Sailing Bright Eternity (1995))',
    resume:
      "Todo comienza en un hipotético 1999, cuando una expedición de la NASA es enviada a destruir el asteroide Icaro, que está en un inminente curso de colisión con India. Pero lo que la expedición no esperaba encontrar eran los restos de una antigua tecnología alienígena, aun funcionales, dentro del asteroide. El científico británico Nigel Walmsley, protagonista de las dos primeras novelas, hará todo lo posible por salvar esa tecnología quedando seriamente alterado por ésta; su primera esposa Alejandría quedará aun más afectada al ser resucitada tras su muerte clínica, y usada de interfase por el enigmático Mec conocido como el Snark. Una expedición posterior realizada a la Luna revelará restos de una colonia destruida por alguna fuerza desconocida. A pesar de la oposición del movimiento religioso de los Nuevos Hijos (¿alguien dijo Bush y su cristianismo de derechas?) y del gobierno, se logrará impulsar una expedición sublumínica hacia la estrella Ra de donde se han recibido inquietantes señales. Ahí se descubrirá una cultura de seres que ven en el espectro de las microondas. De hecho la expedición descubrirá que estos seres -ahora en la barbarie-, una vez llegaron a tener un imperio galáctico que protegió a varias especies -entre ellos a los humanos- del ataque de las inteligencias mecánicas, que como podrán ver los expedicionarios, en sus viajes a las estrellas cercanas a la Tierra con planetas habitables, son legión.                                                                                                                                                                                                                                                         Mientras tanto, la Tierra es atacada por los Mecs, que sueltan a los Pululantes y Espumeantes, dos ciclos de una misma forma de vida que han sido condicionados para destruir los transportes marinos e invadir las costas (si, ya sé que suena a película B de los '50 pero sigan leyendo). Ahí se dará una interesante metáfora sobre la comunicación entre diferentes especies, puesto que en China se intentará comprender el lenguaje espumeante (él de la fase inteligente de la especie), o bien que los Espumeantes nos comprendan a nosotros para detener su ataque. Pero se indica a lo largo de esta saga, la comprensión entre dos especies radicalmente diferentes puede quizá ser un acto imposible. Solo la tecnología enviada por los expedicionarios desde Ra podrá equilibrar la balanza en esta guerra declarada unilateralmente por los Mecs.                                                                                                                                                                                                                                      Aunque la mayoría de De ahí la serie da un salto de 350 siglos al planeta Nieveclara, un mundo cercano al centro Galáctico. Ahí un clan de humanos, la familia Bishop, sobrevive duramente ante el ataque de los Mecs, pero impelidos por una serie de entidades cósmicas, deberán iniciar una peregrinación gradual hacia el Centro en la nave Argo. A lo largo de su viaje se encontrarán con la rivalidad inicial y posterior ayuda de las mirapodia, una forma de vida insectoide cyborg.                                                                                                                                                                                                                                                        Y he aquí que la peregrinación de los Bishop será el comienzo de un viaje iniciático por los caminos de la ciencia y el conocimiento llegando a comprender poco a poco cuan grande fue la humanidad en el interregno entre la época actual y la de Walmsley. Mas aun, su llegada al Núcleo se revelará como una jugada más en un tablero de ajedrez cósmico que abarca miles de civilizaciones y millones de años para conseguir la supervivencia definitiva entre todas las especies. Una causa muy necesaria, porque se avecinan, en lo que sería el /futuro cercano/ para los seres cósmicos, catástrofes tales como la muerte entrópica del universo, o peor aun, el Tumulto: el cambio de todas las propiedades cuánticas de una partícula para reiniciar el Big Bang.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708091304/APISCIFI/Fondos%20Universos/FondoGalacticCenter3_xsrbtk.webp',
  },
  {
    nameUniverse: 'Forever War',
    author: 'Joe Haldeman',
    sagas1:
      "Forever War Series: (Forever War(1998),Forever Free (1999))",
    resume:
      'Las novelas escriben una larga guerra interplanetaria y se fundamenta en dos claves: la carrera armamentística de los contrincantes y las consecuencias relativistas de los viajes espaciales a velocidades cercanas a la luz.                                                                                                                           La opinión general es que la novela es un reflejo de la experiencia militar del autor durante la guerra de Vietnam, aunque escrita en un contexto de ciencia ficción. El nombre del personaje principal femenino, Marygay Potter, es prácticamente idéntico al nombre de soltera de la esposa de Haldeman, lo cual añade un elemento autobiográfico. Es más, es una visión de los cambios que se producen en el mundo desde los ojos del soldado que lucha en él, y la visión única (y posiblemente más realista) que tiene de ellos comparado con el resto de la humanidad. También se consideró una respuesta al libro Tropas del espacio, de Robert A. Heinlein, a menudo considerado promilitarista',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708118301/APISCIFI/Fondos%20Universos/GUERRA_INTERMINABLE_4_qxhf45.jpg',
  },
  {
    nameUniverse: 'Ultramarines(WARHAMMER 40.000)',
    author: 'Graham McNeill',
    sagas1:
      "Ultramarines Series: (Nightbringer(2002), Warriors of Ultramar(2003),Dead Sky, Black Sun (2004), The Killing Ground(2006),Courage and Honour(2008), The Chapter's Due (2010), The Swords of Calth (2013))",
    resume:
      "La saga de los Ultramarines es una serie de novelas escritas por Graham Mcneil, encuadradas en el subgénero de la ciencia ficción militar y cuya acción se desarrolla en el universo de Warhammer 40.000..                                                                                                                       Los Ultramarines son sinónimo de lealtad y coraje. Su poder marcial es legendario y sólo menor que el del Dios-Emperador. La saga narra la historia del Marine Espacial, Capitán Uriel Ventris y los Ultramarines en su lucha en contra de los enemigos de la humanidad. Desde su planeta de Macragge hasta el terrorífico Ojo del Terror y más allá, la prosa de Graham McNeill resuena como un disparo y retrata a los Ultramarines mejor que nadie..",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119614/APISCIFI/Fondos%20Universos/ultramarines_a4h8er.jpg',
  },
];

mongoose
  .connect(DB_URL)
  // Para que funcione hay que poner la URL en String, da fallo la importacion
  .then(async () => {
    const allUniverses = await Universe.find();
    if (allUniverses.length > 0) {
      await Universe.collection.drop();
      console.log('deleted universes');
    }
  })
  .catch((error) => console.log('error deleting Universes', error))
  .then(async () => {
    const UniverseMap = arrayUniverses.map(
      (universe) => new Universe(universe)
    );
    await Universe.insertMany(UniverseMap);
    console.log('Universes addins');
  })
  .catch((error) => console.log('error adding Universes', error))
  .finally(() => mongoose.disconnect());
