const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryDune = require('../../api/models/models.dune/countries.dune.model');

const arrayCountriesDune = [
  {
    name: 'Reino de Daribor',
    capital: 'Ix',
    foundation_date: 'Jihad Butleriana',
    resume: 'Uno de los Cuatro Reinos independientes surgidos de la desmembración de la provincia de Anacreonte en la Periferia del Imperio. Libro varias batallas contra los otros tres Reinos .',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028485/FUNDACION/PAISES/reino_de_konor_y_daribor_bhphxv.jpg',
  },
  {
    name: 'Reino de Anacreon',
    capital: 'Grumman',
    foundation_date: 'Jihad Butleriana',
    resume: 'Anacreonte es una prefectura del Imperio galáctico, ubicada en la Periferia Galáctica, y capital de la provincia. Hacia el final de la era Imperial, su gobernador se rebela contra Trántor y se corona como rey recibiendo la capitulación por parte del Imperio, y entra en una serie de guerras contra su vecino, el ahora también reino de Smyrno.En el Ciclo de Trántor, de Isaac Asimov, Anacreonte (en inglés, Anacreon) es un planeta ficticio de la Periferia Galáctica que está a 8 parsecs (26 años luz) de Términus y 10.000 de Trántor, capital del Imperio Galáctico.                                                                                                              Anacreonte es el planeta más poblado y rico de la Fundación y durante la Sexta Crisis Seldon (finales del siglo V E.F.) fue una alternativa de capital a Términus. Posee más concejales que ningún otro planeta en el Parlamento de la Confederación de la Fundación. La principal actividad económica es la industria nuclear y la fabricación de las naves civiles y militares de la Fundación.Anacreonte fue capital de la prefectura del mismo nombre durante el apogeo del Imperio Galáctico. En el año 50 E.F. (Era de la Fundación), 200 años antes de la caída del Imperio, obtuvo la independencia cuando su gobernador se declara Rey. En dos ocasiones intenta atacar a la Primera Fundación, pero fracasó y cayó bajo el dominio religioso de ésta. Durante la Guerra de Stettin, Anacreonte fue campo de batalla (o mejor dicho su campo estelar lo fue).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028482/FUNDACION/PAISES/reino_de_anacreon_wmno3k.jpg',
  },
  {
    name: 'Imperio Galactico',
    capital: 'Theilax',
    foundation_date: 'El Imperio Galáctico es un imperio de la Saga de la Fundación, desde la serie de los robots hasta la triología de Trántor, pasando por la trilogía del Imperio Galáctico. Está formado por planetas habitados por seres humanos en gran parte de la Vía Láctea. Tiene reminiscencias al w:Imperio Romano. En su auge, el Imperio Galáctico estuvo compuesto por más de 25 millones de mundos habitados, todos colonizados por colonos procedente de la Tierra, antes de que está fuera olvidada.Su forma de gobierno es una monarquía dirigida por el Emperador Galáctico. Su capital es Trántor, un planeta totalmente cubierto por la capital y cerca del centro de la Vía Láctea.El robot Giskard Reventlov, tras detener el plan de Amadiro y Mandanus para destruir la Tierra y ante la contradicción de dañar a unos seres humanos, sufre un bloqueo (por las tres leyes de la robótica), no sin antes traspasar a Daneel Olivaw sus capacidades telepáticas. Ambos deciden que el aumento de radioactividad de la Tierra servirá para que deje de ser un lastre para los colonizadores y así conseguir que en un periodo de 150/200 años la emigración y la colonización aumente de forma considerable. Daneel queda como único guardián de la Humanidad, fijándose dos metas: Desarrollar la ciencia conocida como Psicohistoria y crear un imperio galáctico donde la humanidad pueda vivir en paz. Daneel se propone conseguir todo lo anterior interviniendo lo menos posible en la historia humana                                                                                                                         Se desarrolla La gran diáspora en el que se colonizaran nuevos mundos. Muchos siglos después, en las leyendas de los mundos colonizados, se denominó a esta época como los "Tiempos del vuelo". Durante 400 años se produce una gran colonización de nuevos planetas en lo que posteriormente serían llamados sectores de Centauro, Sirio y Arturo (Fundación y Tierra). Más tarde se establecerían y se destruiría repúblicas planetarias con gobiernos limitados dentro de los planetas. Durante 5000 años varios planetas se asocian, son conquistados o se alían para formar pequeños imperios (En la arena estelar).La República de Trántor empieza su expansión hacía los reinos vecinos. Más tarde se crea la Confederación Trantoriana: Trántor domina directamente más de 1000 mundos y ejerce su influencia sobre varios miles más. Se forma el Imperio de Trántor: La mitad de los mundos habitados de la Galaxia de la época (aproximadamente unos 500.000) forman parte oficial del Imperio Trantoriano.                                                                                                                  Tras una guerra interestelar, el Imperio Trantoriano se convierte en el Imperio Galáctico. Comienzo del calendario galáctico y Coronación de Frankenn I, primer emperador de la dinastía Kamble.Se Expande el Imperio Galáctico hasta cubrir dos terceras partes de la totalidad de los mundos habitados de la Galaxia, que eran unos diez millones en esa época. Se establece una Pax Galáctica. La anarquía desaparece y el Imperio Galáctico impone la ley (Un guijarro en el cielo).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028477/FUNDACION/PAISES/IMPERIO_GALACTICO_v48iz2.webp',
  },
  {
    name: 'Primera Fundacion',
    capital: 'Giedi prime',
    foundation_date: 'Jihad Butleriana',
    resume: 'La primer Fundacion se centro en las ciencias fisicas y fue fundada en un extremo del universo, para que en 1000 años diera luz a un nuevo imperio galactico mas estable.Durante sus primeros años tendraia bastante problemas, que iria superando en varias CRisis Sheldon que predijo la psicohistora y que van haciendola mas fuerte.                                                                                                                     Hari Seldon elige como sede para la Primera Fundación el alejado planeta de Términus, un mundo pobre y alejado del centro galáctico e inmerso en lo que después sería conocido como los Cuatro Reinos, en forma deliberada para poder catalizar la rebelión de Anacreonte y apurar la caída del Imperio Galáctico para así reducir la duración del interregno a sólo mil años. El planeta Términus no posee grandes recursos propios, y una civilización mecánica no se puede establecer allí sin la anuencia y el apoyo de los sectores cercanos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028466/FUNDACION/PAISES/foundation_o5dycb.webp',
  },
  {
    name: 'Segunda Fundacion',
    capital: 'Walach IX',
    foundation_date: 'Jihad Butleriana',
    resume: 'La segunda Fundcion es una organizcion creada por Hari shelon en contratapartida a la primera Fundacion, Su funcion es vigilar por el cumplimiento del plan de la Psicohistoria, a tal efecto la Primera Fundcion, estuvo repleta de cientificos de todas las ciencias fisicas, y la Segunda Fundacion centrada en las sociales, sobre todo en la psicohistori, por lo que casi todos sus miembros tienen capacidades mentales',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708371080/FUNDACION/PAISES/FireShot-Capture-069-Trailer-de-Fundacion-2021-Serie-Apple-TV-www.elespoiler.com__yqg1pr.png',
  },
  {
    name: 'Reino de Smyrno',
    capital: 'Kaitan',
    foundation_date: 'Jihad Butleriana',
    resume: 'Uno de los Cuatro Reinos independientes surgidos de la desmembración de la provincia de Anacreonte en la Periferia del Imperio. Libro varias batallas contra los otros tres Reinos..',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028464/FUNDACION/PAISES/reino_de_smyrno_hxtzge.jpg',
  },
  {
    name: 'Reino de Konom',
    capital: 'Caladan',
    foundation_date: 'Jihad Butleriana',
    resume: 'Uno de los Cuatro Reinos independientes surgidos de la desmembración de la provincia de Anacreonte en la Periferia del Imperio. Libro varias batallas contra los otros tres Reinos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028453/FUNDACION/PAISES/reino_de_loris_ocfh0n.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesDune = await CountryDune.find();
    if (allCountriesDune.length > 0) {
      await CountryDune.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesDuneMap = arrayCountriesDune.map((country) => new CountryDune(country));
    await CountryDune.insertMany(countriesDuneMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
