const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetDune = require('../../api/models/models.dune/planets.dune.model');

const arrayPlanetsDune = [
  {
    name: 'Trantor',
    settled: '(3508 TIERRA -8038 ERAGALACTICA -20105 ERAFUNDACIONAL)',
    population: '120.000.000',
    capital: 'Tarntor',
    location: 'Trantor System',
    gravity: '1.00 g',
    country: 'Imperio',
    moons: '0',
    resume: "La capital del Primer Imperio Galáctico - Bajo Cleon I, tenía su 'resplandor crepuscular.' Para todas las apariencias, estaba entonces en su apogeo. Su superficie terrestre de 200 millones de kilómetros cuadrados estaba completamente abovedada (a excepción del área del Palacio Imperial) y cubierta con una ciudad interminable que se extendía por debajo de las plataformas continentales. La población era de 40 mil millones y aunque las señales eran abundantes (y claramente visibles en retrospectiva) que había problemas de reunión, los que vivían en Trantor, sin duda, encontró todavía el Mundo Eterno de la leyenda y no esperaba que alguna vez... Casi nunca es representado como un mundo visto desde el espacio. Desde hace mucho tiempo ha capturado la mente general de la humanidad como un mundo del interior, y la imagen es la de la colmena humana que existía bajo las cúpulas. Sin embargo, también había un exterior y hay hologramas que aún permanecen que fueron tomados del espacio y muestran diferentes grados de detalle (ver Figuras 14 y 15). Tenga en cuenta que la superficie de las cúpulas, la interfaz de la vasta ciudad y la atmósfera, una superficie a la que se refiere en su tiempo como 'Upperside es...Al comienzo del decimotercer milenio, esta tendencia alcanzó su clímax. Como el centro del Gobierno Imperial durante cientos ininterrumpidos de generaciones y situado, como lo fue, en las regiones centrales de la Galaxia entre los mundos más densamente poblados e industrialmente avanzados del sistema, apenas podía ayudar a ser la capa más densa y más rica de la humanidad que la Raza había visto nunca. Su urbanización, progresando constantemente, había alcanzado finalmente el último.Toda la superficie terrestre de Trantor, de 75.000.000 millas cuadradas de extensión, era una sola ciudad. La población, en su apogeo, superaba con creces los cuarenta mil millones.                                                                                                                        Esta población enorme fue dedicada casi enteramente a las necesidades administrativas del imperio, y se encontraron para ser pocos para las complicaciones de la tarea. (Hay que recordar que la imposibilidad de una administración apropiada del Imperio Galáctico bajo el liderazgo no inspirado de los Emperadores posteriores fue un factor considerable en la Caída.) Diariamente, flotas de barcos en decenas de miles trajeron los productos de veinte mundos agrícolas a las mesas de la cena de Trantor... Su dependencia de los mundos exteriores para la alimentación, y de hecho, para todas las necesidades de la vida, hizo Trantor cada vez más vulnerable a la conquista por asedio. En el último milenio del Imperio, la monótona y numerosa política hizo al Emperador consciente de esto, y la política Imperial se convirtió poco más que la protección de la delicada vena yugular de Trantor... En medio del Interregno, Trantor era una sombra. En medio de las colosales ruinas, vivía una pequeña comunidad de agricultores.",
    picture:
      'https://res.cloudinary.coma_mitarrol_laprdx.png',
  },
  {
    name: 'Theilax',
    settled: 'varios cientos de años antes de la Yihad Butleriana',
    population: '390.000.000',
    capital: 'Bandalong',
    location: 'Thalim System',
    gravity: '1.07 G',
    country: 'Bene Theilax',
    moons: '0',
    resume: 'Se encuentra en el sistema de la estrella Thalim. Sede de La Bene Tleilax',
    picture:
      'https://res.cloudinary.cBENE_THEIXALU_bz1upd.png',
  },
  {
    name: 'Wallach IX',
    settled: 'Jihad Butleriana',
    population: '123.000.000',
    capital: 'Wallach IX City',
    location: 'Laoujin System',
    gravity: '1.04',
    country: 'Bene Gesserit',
    moons: '1',
    resume: 'Hogar de la orden Bene Gesserit',
    picture:
      'https://res.cloudinary.com/dALLACH_IX_BENE_zotljd.png',
  },
  {
    name: 'Caladan',
    settled: 'Jihad Butleriana',
    population: '150.000.000',
    capital: 'Castel Caladan',
    location: 'Delta Pavonis System',
    gravity: '1.03 G',
    country: 'Casa Atreides',
    moons: '1',
    resume: 'Caladan, más tarde rebautizado Dan, era el tercer planeta en órbita alrededor de la estrella Delta Pavonis. Era un exuberante mundo oceánico, y el estaba salpicado de ríos y montañas y albergaba un ecosistema submarino diverso y complejo. Presumiblemente, aunque nunca se dijo, este complejo ecosistema se extendía a tierra firme.',
    picture:
      'https://res.cloudinary.com/dqfETAS/CALADAN_tcwfnu.jpg',
  },
  {
    name: 'Giedi Prime',
    settled: 'Jihad Butleriana',
    population: '250.000.000',
    capital: 'Giedi Prime',
    location: 'Ofiuco B System',
    gravity: '0.90 G',
    country: 'Casa Harkonen',
    moons: '3',
    resume: 'Giedi Prime era el tercer planeta en órbita a la estrella Ofiuco B. Era el mundo nativo de la Casa Harkonnen.Giedi Prime tenía una rotación de 31,27 horas e fuerte industrialización del planeta de los Harkonnen. Sin embargo, mantuvieron algunos de los bosques originales del planeta, la mayoría de árboles pilingitam para su tala y exportación.',
    picture:
      'https://res.cloudinary.com/dqfaa2S/GIEDI_PRIME_xyshj3.jpg',
  },
  {
    name: 'Ginaz',
    settled: 'Jihad Butleriana',
    population: '300.000.000',
    capital: 'Ginaz',
    location: 'Ginaz System',
    gravity: '0.99 g',
    country: 'Casa Ginaz',
    moons: '1',
    resume: 'Ginaz era un planeta famoso por sus Maestros de la Espada. También fue el hogar ancestral de la Casa Ginaz, que acabó siendo derrotada por la Casa Moritani en una Guerra de Asesinos. Su tamaño y atmósfera eran muy similares a los de la Vieja Tierra, aunque su superficie estaba cubierta de más agua (más del 90%). La superficie terrestre consistía en archipiélagos arenosos dispersos con una vegetación mínima.',
    picture:
      'https://res.cloudinary.com/dqETAS/GINAZ_qdauqx.jpg',
  },
  {
    name: 'Grumman',
    settled: 'Jihad Butleriana',
    population: '1',
    capital: 'Grumman',
    location: 'Niushe System',
    gravity: '1.10 G',
    country: 'Casa Moritani',
    moons: '0',
    resume: 'El nombre planetario puede haber sido sugerido por el nombre de Xi Draconis: Grumium, que significa "mandíbula (del dragón)".',
    picture:
      'https://res.cloudinary.com/dqfarumman_moritani_zyldje.png',
  },
  {
    name: 'Ix',
    settled: 'Jihad Butleriana',
    population: '200.000.000',
    capital: 'Vernii',
    location: 'Alkalurops System',
    gravity: '1.01 G',
    country: 'Casa Vernius',
    moons: '0',
    resume: 'Ix es el noveno planeta del sistema estelar Alkalurops y que estaba regido por la tecnocracia ixiana. La enconomía ixiana depende de la compleja maquinaria de producción, la cual se burla algunas veces de las prohibiciones morales y jurídicas de la Jihad Bulteriana. El nombre delel interior de Ix (cabe destacar que Ix es un planeta que en la superficie, no tenía ninguna estructura, estaba todo en el interior, para quedar a salvo de curiosos), las tropas Sardaukar de Elrood tomaron el planeta tecnológico, echando a la casa Vernius del poder en Ix, haciéndola una casa renegada. Y el Emperador, con las instalaciones, quería dedicarse a hacer especia sintética con los Tleilaxo ocupando Ix.',
    picture:
      'https://res.cloudinary.cNETAS/IX_z1efcl.jpg',
  },
  {
    name: 'Kaitain',
    settled: 'Jihad Butleriana',
    population: '100.000.000',
    capital: 'Kaitain',
    location: 'Kaitain System',
    gravity: '1.00 G',
    country: 'Casa Corrino',
    moons: '0',
    resume: 'Su clima estaba controlado artificialmente para mantener un ambiente templado y sereno, siempre con cielos despejados. La ciudad capital Imperial de Kaitain estaba cuidadosamente diseñada ofreciendo un paisaje de ensueño y sobrecogedor, con grandes rascacielos y grandes avenidas flaquearas de jardines y con suelos de cristal.',
    picture:
      'https://res.cloudinary.com/dqfaKAITAIN_CORRINO_upttw2.jpg',
  },
  {
    name: 'Arrakis,Dune',
    settled: 'Jihad Butleriana',
    population: '10.000.000',
    capital: 'Arraken',
    location: 'Canopus System',
    gravity: '0,9 G',
    country: 'Dominio Imperial',
    moons: '2',
    resume: 'Arrakis es el planeta más importante del universo, ya que es la única fuente de la droga melange. La melange (o "la especia") es la mercancía más esencial y valiosa del universo, ya que prolonga la vida y hace posible el viaje interestelar seguro (entre otros usos). La recotreides. Arrakis es el tercer planeta que orbita alrededor de la estrella Canopus, y a su vez está orbitado por dos lunas, una de las cuales tiene un patrón de albedo que se asemeja al ratón canguro del desierto, Muad Dib, en ella; la otra luna tiene marcas que se asemejan a una mano humana.',
    picture:
      'https://res.cloudinary.com/dRAKIS_gqiji6.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsDune = await PlanetDune.find();
    if (allPlanetsDune.length > 0) {
      await PlanetDune.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsDuneMap = arrayPlanetsDune.map((planet) => new PlanetDune(planet));
    await PlanetDune.insertMany(planetsDuneMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
