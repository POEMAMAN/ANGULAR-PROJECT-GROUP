const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetFundacion = require('../../api/models/models.fundacion/planets.fundacion.model');

const arrayPlanetsFundacion = [
  {
    name: 'Trantor',
    settled: '(5708 TIERRA -10238 ERAGALACTICA -22305 ERAFUNDACIONAL)',
    population: '120.000.000',
    capital: 'Tarntor',
    location: 'Trantor System',
    gravity: '1.00 g',
    country: 'Imperio',
    moons: '0',
    resume: "La capital del Primer Imperio Galáctico - Bajo Cleon I, tenía su 'resplandor crepuscular.' Para todas las apariencias, estaba entonces en su apogeo. Su superficie terrestre de 200 millones de kilómetros cuadrados estaba completamente abovedada (a excepción del área del Palacio Imperial) y cubierta con una ciudad interminable que se extendía por debajo de las plataformas continentales. La población era de 40 mil millones y aunque las señales eran abundantes (y claramente visibles en retrospectiva) que había problemas de reunión, los que vivían en Trantor, sin duda, encontró todavía el Mundo Eterno de la leyenda y no esperaba que alguna vez... Casi nunca es representado como un mundo visto desde el espacio. Desde hace mucho tiempo ha capturado la mente general de la humanidad como un mundo del interior, y la imagen es la de la colmena humana que existía bajo las cúpulas. Sin embargo, también había un exterior y hay hologramas que aún permanecen que fueron tomados del espacio y muestran diferentes grados de detalle (ver Figuras 14 y 15). Tenga en cuenta que la superficie de las cúpulas, la interfaz de la vasta ciudad y la atmósfera, una superficie a la que se refiere en su tiempo como 'Upperside es...Al comienzo del decimotercer milenio, esta tendencia alcanzó su clímax. Como el centro del Gobierno Imperial durante cientos ininterrumpidos de generaciones y situado, como lo fue, en las regiones centrales de la Galaxia entre los mundos más densamente poblados e industrialmente avanzados del sistema, apenas podía ayudar a ser la capa más densa y más rica de la humanidad que la Raza había visto nunca. Su urbanización, progresando constantemente, había alcanzado finalmente el último.Toda la superficie terrestre de Trantor, de 75.000.000 millas cuadradas de extensión, era una sola ciudad. La población, en su apogeo, superaba con creces los cuarenta mil millones.                                                                                                                        Esta población enorme fue dedicada casi enteramente a las necesidades administrativas del imperio, y se encontraron para ser pocos para las complicaciones de la tarea. (Hay que recordar que la imposibilidad de una administración apropiada del Imperio Galáctico bajo el liderazgo no inspirado de los Emperadores posteriores fue un factor considerable en la Caída.) Diariamente, flotas de barcos en decenas de miles trajeron los productos de veinte mundos agrícolas a las mesas de la cena de Trantor... Su dependencia de los mundos exteriores para la alimentación, y de hecho, para todas las necesidades de la vida, hizo Trantor cada vez más vulnerable a la conquista por asedio. En el último milenio del Imperio, la monótona y numerosa política hizo al Emperador consciente de esto, y la política Imperial se convirtió poco más que la protección de la delicada vena yugular de Trantor... En medio del Interregno, Trantor era una sombra. En medio de las colosales ruinas, vivía una pequeña comunidad de agricultores.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028609/FUNDACION/PLANETAS/Trantor_S2_krntc3.webp',
  },
  {
    name: 'Anacreon',
    settled: '(10708 TIERRA -5238 ERAGALACTICA -17305 ERAFUNDACIONAL)',
    population: '12.000.000.000',
    capital: 'aNACREON',
    location: 'Anacreon System',
    gravity: '1.07 G',
    country: 'IMperio Galactico / Reino de Anacreonte',
    moons: '0',
    resume: 'Anacreon es un planeta dentro de la Periferia del Exterior Reach.Anacreon es un mundo boscoso con una tradición de caza. La madera es abundante en el planeta, y juega un papel importante en la sociedad anacreónica. Armas como arcos y armaduras ornamentadas también fueron hechas de madera. Los cielos de Anacreon estaban llenos de una espectacular aurora boreal de color azul, verde y rojo. Las personas de ascendencia anacreona típicamente tienen tez de oliva a marrón, y fueron consideradas como fornidas. El lenguaje anacreo sonaba áspero, con consonantes duras. Los anacreones eran un pueblo contundente, y su lenguaje reflejaba eso, siendo directo y directo. Una de sus canciones tradicionales era sobre un niño en su primera cacería; la canción era en realidad un cuento obsceno sobre la primera vez de un joven con una mujer.                 Anacreon estuvo involucrado en una larga disputa con su planeta vecino, Tespis. Aunque el Acuerdo del Cinturón de Anthor mantuvo la paz entre las dos partes, Anacreon creía que Thespis actuó de mala fe al extraer paladio de un asteroide rebelde identificado como del Cinturón de Anthor. La disputa se convirtió en derramamiento de sangre cuando los tasadores imperiales murieron en un fuego cruzado entre los dos mundos. Se envió una delegación, encabezada por el Embajador Xandem, a Trantor en un esfuerzo por mantener la paz. Como regalo, los anacreos presentaron un arco de caza, tallado en madera del bosque de Tallyn. La madera era la misma que se usó para crear el arco del mayor cazador de Anacreon, Larken Keaen. El arco y las flechas de acompañamiento estaban hechos de madera sin metal, lo que demuestra que necesitaban paladio.                                                                                                                    Tras la participación de un bombardero Anacreon en la destrucción del Puente de las Estrellas en Trantor, el emperador Cleón XII ordenó a las fuerzas imperiales bombardear Anacreon en represalia. El planeta fue atacado con bombas de neutrones, que tenían un bajo rendimiento explosivo pero una alta cantidad de radiación ionizante. El cincuenta por ciento de la población murió en una semana, con entre veinte y treinta por ciento de la población restante muriendo en el año',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028612/FUNDACION/PLANETAS/ANACREON_utdhor.webp',
  },
  {
    name: 'Terminus',
    settled: '(25854 TIERRA 12068 ERAGALACTICA 0 ERAFUNDACIONAL)',
    population: '123.000.000',
    capital: 'Terminus',
    location: 'Sistema Terminus',
    gravity: '1.04',
    country: 'Primer Fundacion',
    moons: '1',
    resume: "Se trata de un planeta habitable en un sector alejado del centro del Imperio, descubierto pero no colonizado por el mismo hasta su última etapa de vida. El planeta es muy pobre, siendo el único que orbita su sol, y no posee recursos minerales de ningún tipo, por lo que depende de la asistencia del Imperio primero y luego del control de los Cuatro Reinos para poder desarrollarse.Era el único planeta que orbitaba su estrella aislada y casi no tenía metales. El planeta más cercano era Anacreón, a 8 parsecs (26 años luz) de distancia. Al estar al margen de la galaxia, casi no hay estrellas en el cielo. Se encontraba en el borde de la galaxia que estaba enfrente del planeta Siwenna. Era el planeta más alejado del Centro Galáctico; su nombre refleja ese hecho: el término latino significa 'fin de línea'.Tenía una relación agua / tierra muy alta. La única isla grande era aquella en la que yacía Terminus City. Un total de 10,000 islas habitadas existieron en el planeta. El clima fue templado. Antes de la ocupación humana, había algo de vida en Terminus. Sin embargo, una vez que los humanos llegaron (junto con sus especies de apoyo), estas formas de vida nativas fueron desplazadas y se extinguieron.                                                                                                             Términus es un planeta ubicado en los confines de la Galaxia, en la zona llamada Periferia. Es el planeta elegido por Hari Seldon para crear la Primera Fundación como último reducto de la ciencia humana en un Imperio decadente. EN el curso de los libros de Fundación pasa a convertirse en una potencia económica, científica y cultural, y eventualmente militar, para la reconstrucción del Imperio en un Segundo Imperio en el plazo de mil años.Con el Imperio Galáctico en declive fatal, Hari Seldon, inventor de la ciencia de la Psicohistoria, predijo un interregno de 30,000 años de edades oscuras bárbaras hasta el surgimiento de un Nuevo Imperio. Entonces Seldon creó un plan para acortar este interregno de 30,000 a 1,000 años.                                                                                                                       Seldon le pidió a Las Zenow, bibliotecario jefe de la Biblioteca Imperial de Trantor, que realizara una búsqueda para encontrar un planeta adecuado, de acuerdo con los criterios de Seldon. Zenow, después de una larga búsqueda, encontró Terminus, que había estado deshabitada durante los cinco siglos posteriores a su descubrimiento.Seldon manipuló la Comisión totalitaria de Seguridad Pública que gobernó el Imperio Galáctico para exiliar su proyecto a Terminus. La población fundadora consistió en 100,000 científicos especialmente sanos, cuyo propósito aparente era publicar una Enciclopedia Galáctica. En realidad, su trabajo sería preservar la ciencia y la tecnología, y reconquistar la galaxia para formar el Segundo Imperio.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028607/FUNDACION/PLANETAS/TERMINUS_ip1hnw.jpg',
  },
  {
    name: 'Siwena',
    settled: '(14754 TIERRA 568 ERAGALACTICA -11500 ERAFUNDACIONAL)',
    population: '2.200.000.000',
    capital: 'Siwena',
    location: 'Arturus Sector, Outer Reach',
    gravity: '1.03 G',
    country: 'Imperio Galactico',
    moons: '1',
    resume: "Siwenna es un planeta en el Outer Reach. Un mundo atrasado abandonado por el Imperio Galáctico, Siwenna fue el objetivo de la Iglesia del Espíritu Galáctico para la conversión a sus creencias y para atraerlos a la Fundación.Siwenna es un planeta árido en el sector de Arcturus del alcance externo Por estándares imperiales era la civilización del tipo cero con una sociedad en gran parte agraria. Siwenna no tenía pueblos ni ciudades, y los asentamientos en los planetas eran pequeñas aldeas gobernadas por un hetman. Aunque desconfiaban de los extraterrestres, los siweneses no eran un pueblo tribal, el mundo no tenía ningún satélite ni forma de detectar naves en órbita.                                                                                                                     Siwenna no mantenía puertos espaciales, y aunque había alguna tecnología en el planeta, estaba desactualizada. El té de aguja, hecho de cactus, era una bebida local, y se consideraba que era socialmente irresponsable no beberlo.El tabaco estaba hecho de liquen, y al menos un liquen local era venenoso, y podría matar a un individuo en un corto espacio de tiempo si se fuma.Siwenna había sido abandonada por el Imperio Galáctico durante un siglo por 12.240 Era Imperial, dejando al mundo en la pobreza. Adoraban a una deidad relámpago local debido a la prevalencia de tormentas eléctricas en el planeta. Los adoradores del dios del relámpago llevaban colgantes de rayos bifurcados.Cuando Demerzel informó a Cleon XVII que había rumores de un edificio de alianza en el Outer Reach dirigido por la Fundación, Siwenna fue uno de los planetas incluidos en su informe. El planeta había sido atacado por la Iglesia del Espíritu Galáctico debido al abandono del Imperio del mundo para su conversión a la Fundación",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028603/FUNDACION/PLANETAS/SIWENA_r3chjy.webp',
  },
  {
    name: 'Helicon',
    settled: '(15708 TIERRA -238 ERAGALACTICA -12305 ERAFUNDACIONAL)',
    population: '250.000.000',
    capital: 'Giedi Prime',
    location: 'Argo Sector',
    gravity: '0.90 G',
    country: 'IMperio Galactico',
    moons: '3',
    resume: 'Helicon es un planeta que se destaca por ser el planeta natal del Doctor Hari Seldon.Helicon es un planeta similar a la Tierra con un clima alpino. El planeta estaba localizado con el Sector Argo, que a su vez estaba situado dentro del Fin de la Estrella. El sistema solar de Helicón era mucho más antiguo que sus vecinos, y el mundo también era conocido como el único en la galaxia que orbitaba una estrella oscura, lo que ayudó a mantener el planeta oculto. El agujero negro que Helicon orbitaba era anteriormente una estrella súper gigante de clase O.                                                                                                                           Como no se emitía luz del agujero negro, Helicon dependía de la luz de su luna local, con la que compartía una atmósfera. El moonshrike era nativo del Helicón. Hari Seldon planea establecer la Segunda Fundación en Helicon, como un contador de la Fundación fundada en TerminusMacoda Mesa es una llanura plana en el planeta que es el hogar de las especies nativas conocidas como el moonshrike. Los Moonshrikes eran la principal economía para los Heliconers nativos, y eran ampliamente criados y apreciados por su carne. La Universidad de Helicon fue la principal institución académica del mundo, donde la mayoría de los estudiantes estudiaban agricultura y ganadería.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708373233/FUNDACION/PLANETAS/Helicon_zmohq4.webp',
  },
  {
    name: 'Korell',
    settled: '(8708 TIERRA -7238 ERAGALACTICA -19305 ERAFUNDACIONAL)',
    population: '1.980.000.000',
    capital: 'Korell',
    location: 'Wassanian Rift, Outer Reach',
    gravity: '0.99 g',
    country: 'IMperio Galactico / Republica de Korell',
    moons: '1',
    resume: "Korell es un planeta en la falla de Whassalian, en el Outer Reach. Está gobernado por un régimen autoritario.Korell es un planeta situado dentro de la Grieta de Whassalian del Outer Reach. El sistema solar de Korell contenía dos estrellas, y la órbita del planeta era circumbinaria, rodeando ambos soles. Las estrellas estaban orbitadas por un halo de polvo espacial y debrisKorell tiene un clima templado y está poblado por más de tres mil millones de habitantes. Está gobernado por el régimen autoritario del Commdor Argo. El régimen es represivo y la pena capital se practica con frecuencia. La Fundación es conocida por la población local, pero mantiene poca o ninguna presencia allí.Korell tenía varias ciudades, y la luz de ellas podía ser vista desde el espacio. El planeta mantuvo un puerto espacial, pero sus propias naves no se aventuraron demasiado lejos del sistema, yendo solo a los sistemas estelares locales. Los comerciantes hicieron visitas ocasionales al Korell. Su capital se compone de grandes parques, antiguos edificios de residencia de baja altura y nuevas torres modernistas de gran altura. El chocolate korelliano era un producto local.                                                                                                                         El planeta fue parte del Imperio Galáctico, hasta algún tiempo antes de la Era Imperial 12.240. En ese momento, estaba gobernada por una monarquía autoritaria bajo el mando del Commdor Argo, quien fue asesorado por Forcer Wallick. Argo era un señor de la guerra extravagante que había tomado el control de Korell, y haría cumplir su gobierno a través de la ejecución pública por un dispositivo conocido como 'pinchazo de Titán.'En 12.240 Era Imperial, cuando Demerzel informó a Cleon XVII que había rumores de un edificio de alianza en el Outer Reach dirigido por la Fundación, Korell fue uno de los planetas incluidos en su informe. En 12.240 Era Imperial, Hober Mallow intentó estafar al Commdor para robar el preciado Ojo de Korell, pero fue capturado y sentenciado a muerte. Sin embargo, Hober burló al Commdor usando una pieza de tecnología conocida como un dispositivo de enroque, escapó de la ejecución y robó el Ojo de Korell. Escapó del planeta a bordo de una nave susurradora de la Iglesia del Espíritu Galáctico, Spirit Rising.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708373232/FUNDACION/PLANETAS/Korell_csrxw1.webp',
  },
  {
    name: 'Synnax',
    settled: '(25708 TIERRA 10238 ERAGALACTICA -2305 ERAFUNDACIONAL)',
    population: '800.000',
    capital: 'Synnax',
    location: 'Blue Rift, Centaurus Sector',
    gravity: '1.10 G',
    country: 'Imperio Galactico',
    moons: '0',
    resume: 'Synnax es un planeta acuático con una sociedad represiva ubicada dentro de la Blue Drift. Gaal Dornick, un prodigio matemático, es de una aldea en el planeta Synnax. El planeta está sufriendo el aumento del nivel del mar que amenaza a la población debido a la sobreexplotación de los respiraderos volcánicos del mundoSynnax es un planeta situado en los bordes exteriores del Imperio Galáctico, en la región Blue Drift del Brazo Scutum-Centaurus. Orbita una estrella brillante de tipo F, y está rodeado por un conjunto de anillos compuestos de hielo y oro. Synnax no tiene lunas, y fue cubierto extensamente con el agua con muy poca tierra seca. Por 12.067 Era Imperial, el planeta tenía un clima húmedoLa cultura synnaxiana gira en torno a la vida marina, con criaturas nativas que incluyen peces y grandes sirenas marinas. Los edificios, tales como casas e iglesias, fueron construidos sobre lechos gigantes de algas marinas usando madera tomada de bosques submarinos. Los asentamientos en el planeta, como el que Gaal Dornick llamó hogar, fueron construidos sobre el agua, levantándose sobre pilotes. La Iglesia Vidente es prevalente en el planeta, con los Sinenaxianos nativos creyendo en la Fe del Despertar y comunicándose con el Durmiente a través de piedras de oración insertadas en las mejillas de una persona                                                                                                                                                                                                                                                      La extracción excesiva de los respiraderos volcánicos del planeta comenzó a derretir los casquetes de hielo del planeta y calentar los océanos, lo que llevó a las aguas más cálidas causando que las floraciones de algas comenzaran a extinguirse. Los científicos trataron de advertir a la población del mundo sobre el desastre inminente, pero debido a la naturaleza religiosa del planeta, los que practican la ciencia y las matemáticas no eran de confianza. Finalmente, un evento conocido como la Limpieza ocurrió, donde los científicos fueron considerados herejes y se ahogaron, así como las universidades fueron quemadas y el estudio de las matemáticas fue prohibido. Gaal Dornick, un prodigio matemático, trató de advertir al planeta que sus niveles de mar estaban aumentando, pero fue considerado como un hereje para el estudio de la ciencia. Para el 12,240 de la Era Imperial, los niveles del mar en Synnax se habían elevado tanto que habían sumergido las aldeas, y no había aparentemente vida humana en el planeta',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708373232/FUNDACION/PLANETAS/Synnax_Orbit_is2buc.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsFundacion = await PlanetFundacion.find();
    if (allPlanetsFundacion.length > 0) {
      await PlanetFundacion.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsFundacionMap = arrayPlanetsFundacion.map((planet) => new PlanetFundacion(planet));
    await PlanetFundacion.insertMany(planetsFundacionMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
