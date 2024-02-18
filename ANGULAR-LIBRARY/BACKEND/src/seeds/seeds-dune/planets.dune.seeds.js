const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetDune = require('../../api/models/models.dune/planets.dune.model');

const arrayPlanetsDune = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'Casa Mitarrol',
    moons: '1 (Moon)',
    resume: 'Sede de La Casa Mitarrol, planeta origen de la especie Humana, devastado en la Jihad Butleriana',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028356/DUNE/PLANETAS/terra_mitarrol_laprdx.png',
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
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028359/DUNE/PLANETAS/THEILAX_BENE_THEIXALU_bz1upd.png',
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
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028365/DUNE/PLANETAS/wWALLACH_IX_BENE_zotljd.png',
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
    resume: 'Caladan, más tarde rebautizado Dan, era el tercer planeta en órbita alrededor de la estrella Delta Pavonis. Era un exuberante mundo oceánico, y el hogar ancestral de la Casa Atreides.El entorno de Caladan se centraba en gran medida en la lluvia, una característica común de la meteorología del planeta. En numerosas ocasiones, tanto Paul como Jessica contaron historias de cómo el agua caía del cielo en abundancia. El paisaje, en consecuencia, estaba salpicado de ríos y montañas y albergaba un ecosistema submarino diverso y complejo. Presumiblemente, aunque nunca se dijo, este complejo ecosistema se extendía a tierra firme.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028367/DUNE/PLANETAS/CALADAN_tcwfnu.jpg',
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
    resume: 'Giedi Prime era el tercer planeta en órbita a la estrella Ofiuco B. Era el mundo nativo de la Casa Harkonnen.Giedi Prime tenía una rotación de 31,27 horas estándares y su año local duraba 2,6 años estándares. Las temperaturas del planeta estaban dentro de la media y tenía un nivel de fotosíntesis bajo, debido a la fuerte industrialización del planeta de los Harkonnen. Sin embargo, mantuvieron algunos de los bosques originales del planeta, la mayoría de árboles pilingitam para su tala y exportación.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028369/DUNE/PLANETAS/GIEDI_PRIME_xyshj3.jpg',
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
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028371/DUNE/PLANETAS/GINAZ_qdauqx.jpg',
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
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028373/DUNE/PLANETAS/grumman_moritani_zyldje.png',
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
    resume: 'Ix es el noveno planeta del sistema estelar Alkalurops y que estaba regido por la tecnocracia ixiana. La enconomía ixiana depende de la compleja maquinaria de producción, la cual se burla algunas veces de las prohibiciones morales y jurídicas de la Jihad Bulteriana. El nombre del planeta surgió por la mala interpretación del número romano IX (9). A su vez, Ix era el planeta cuyo regente era la Casa Vernius, aliada a los Atreides por amistad entre el Duque Paulus (padre del Duque Leto, el Justo), y Dominic Vernius, viejos héroes de guerra. Por otra parte, el Emperador Elrood, al saber que Dominc Vernius se había casado con la concubina favorita del Emperador, juró venganza, y en una batalla rápida ocurrida en el interior de Ix (cabe destacar que Ix es un planeta que en la superficie, no tenía ninguna estructura, estaba todo en el interior, para quedar a salvo de curiosos), las tropas Sardaukar de Elrood tomaron el planeta tecnológico, echando a la casa Vernius del poder en Ix, haciéndola una casa renegada. Y el Emperador, con las instalaciones, quería dedicarse a hacer especia sintética con los Tleilaxo ocupando Ix.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028376/DUNE/PLANETAS/IX_z1efcl.jpg',
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
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028378/DUNE/PLANETAS/KAITAIN_CORRINO_upttw2.jpg',
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
    resume: 'Arrakis es el planeta más importante del universo, ya que es la única fuente de la droga melange. La melange (o "la especia") es la mercancía más esencial y valiosa del universo, ya que prolonga la vida y hace posible el viaje interestelar seguro (entre otros usos). La recolección de la especia también es extremadamente peligrosa, debido tanto al duro clima del planeta como al hecho de que los depósitos de melange están custodiados por gusanos de arena gigantes. Arrakis es también el hogar de los Fremen (Zensunni errantes), y posteriormente es la Capital Imperial del Imperio Atreides. Arrakis es el tercer planeta que orbita alrededor de la estrella Canopus, y a su vez está orbitado por dos lunas, una de las cuales tiene un patrón de albedo que se asemeja al ratón canguro del desierto, Muad Dib, en ella; la otra luna tiene marcas que se asemejan a una mano humana.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028363/DUNE/PLANETAS/ARRAKIS_gqiji6.jpg',
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
