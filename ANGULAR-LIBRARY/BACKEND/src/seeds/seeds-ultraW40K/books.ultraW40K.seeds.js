const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookUltraW40K = require('../../api/models/models.UltraW40K/books.UltraW40K.model');

const arrayBooksUltraW40K = [
  {
    title: 'Nightbringer',
    publication_year: 2002,
    saga: 'Ultramarines Series',
    saga_index: 1,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'Recientemente ascendido a la capitanía de la Cuarta Compañía Ultramarines, Uriel Ventris lleva a sus guerreros al mundo de Pavonis, donde feroces invasores alienígenas están trayendo muerte y destrucción. A medida que Pavonis desciende a la confusión política, Uriel y sus guerreros deben luchar contra los xenos y desentrañar un complot para desatar un antiguo mal enterrado profundamente debajo del mundo - el misterioso y mortal Nightbringer.',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119310/APISCIFI/BOOKS/nightbringer_josyu7.jpg',
  },
  {
    title: 'Warriors of Ultramar',
    publication_year: 2003,
    saga: 'Ultramarines Series',
    saga_index: 2,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'Los tiránidos viajan de mundo en mundo a través de la fría oscuridad del espacio estelar y lo devoran todo en un inútil intento de saciar su ansia de materia orgánica. En su camino se encuentra el planeta Tarsis Ultra, donde el capitán Uriel Ventris y su compañía de Ultramarines los esperan junto a los hermanos marines del capítulo de los Mortificadores. Uriel deberá aceptar las primitivas costumbres de sus aliados y contravenir las antiquísimas instrucciones del sagrado Codex Astartes para destruir la amenaza alienígena.',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119302/APISCIFI/BOOKS/warriors_of_ultramar_bbybb5.jpg',
  },
  {
    title: 'Dead Sky, Black Sun',
    publication_year: 2004,
    saga: 'Ultramarines Series',
    saga_index: 3,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'Expulsado del capítulo, Uriel Ventris se adentra en las profundidades del temido Ojo del Terror para enfrentarse a los terribles enemigos que habitan esos mundos de pesadilla. Entre ellos destacan las legiones de marines espaciales del Caos, guerreros que se han aliado con los Dioses Siniestros y desean la destrucción de la humanidad.',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119304/APISCIFI/BOOKS/dead_sky_black_sun_h1r0r3.jpg',
  },
  {
    title: 'The Killing Ground',
    publication_year: 2006,
    saga: 'Ultramarines Series',
    saga_index: 4,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'Los Ultramarines son el epítome de un capítulo de la Marina Espacial. Guerreros sin par, su nombre es sinónimo de disciplina y honor, y sus actos heroicos son legendarios. Regresando al Imperio después de completar una misión mortal en el corazón del Ojo del Terror, los exiliados ultramarinos Uriel Ventris y Pasanius se encuentran en un mundo desgarrado por la guerra donde los rebeldes corruptos mantienen el equilibrio de poder. A medida que la pareja de Marines Espaciales intenta salvar el planeta de los Poderes Ruinosos, encuentran que ellos mismos son sospechosos de estar en alianza con los Dioses Oscuros, y sus posibilidades de un regreso triunfal a su Capítulo parecen sombrías...',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119305/APISCIFI/BOOKS/the_killing_ground_xbfbzk.jpg',
  },
  {
    title: 'Courage and Honour',
    publication_year: 2008,
    saga: 'Ultramarines Series',
    saga_index: 5,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'En el universo de Warhammer 40.000 los nobles Ultramarines, guerreros genéticamente mejorados para proteger al Imperio de sus enemigos, son los Marines Espaciales por excelencia. El capitán Uriel Ventris, recién llegado del Ojo del Terror, debe redimirse a ojos de sus hermanos de batalla, que temen que haya sido tentado por el Caos. La invasión del planeta Pavonis por parte de los Tau será la oportunidad perfecta para que Uriel se una a su capítulo y demuestre que su honor está fuera de toda duda',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119307/APISCIFI/BOOKS/courage_and_honor_lsmqax.jpg',
  },
  {
    title: "The Chapter's Due",
    publication_year: 2010,
    saga: 'Ultramarines Series',
    saga_index: 6,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'La guerra es interminable en la vida de un Marine Espacial. Después de derrotar a las fuerzas tau, el capitán Uriel Ventris de los Ultramarines ha regresado al mundo natal del Capítulo de Macragge, pero hay poco respiro. Los Ultramarines son empujados de nuevo a la batalla, y esta vez el enemigo es el mayor némesis del Capítulo. Los traidores Guerreros de Hierro, liderados por el renegado Warsmith Honsou, han reunido una banda de guerra masiva y brutal. Su objetivo es el reino de Ultramar. Su objetivo es la aniquilación total. Es un enfrentamiento final entre los legendarios Marines Espaciales, y Uriel Ventris debe asumir el poder de Honsou si quiere salvar el mundo natal de su Capítulo.',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119308/APISCIFI/BOOKS/the_chpters_due_geit6s.jpg',
  },
  {
    title: 'The Swords of Calth',
    publication_year: 2013,
    saga: 'Ultramarines Series',
    saga_index: 7,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    resume: 'Uriel Ventris, recién ascendido a las filas de las Primarias, conduce a los guerreros de la Cuarta Compañía desde la Cruzada Indomable de Roboute Guilliman a un mundo en las fronteras de Ultramar. Una vez que un campo de batalla contra los trabajos, Sycorax está ahora bajo furioso asalto de un enemigo de la antigüedad - los necrones. Los Ultramarines se han enfrentado a estos funestos xenos antes, pero Uriel siente la mano de un enemigo de su pasado trabajando en Sycorax, una cuenta inacabada y una deuda con el Imperio finalmente vencida.                                                                                                                   Atrapado en lo profundo de una ciudad devastada, Uriel lleva a las Espadas de Calth a la batalla, y debe adaptarse a su nueva encarnación como uno de los Primarios - un desafío que pondrá a prueba su alma tanto como lo pondrá a prueba como un guerrero.',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119312/APISCIFI/BOOKS/the_swords_of_calth_d2sxnm.jpg',
  }, 
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksUltraW40K = await BookUltraW40K.find();
    if (allBooksUltraW40K.length > 0) {
      await BookUltraW40K.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksUltraW40KMap = arrayBooksUltraW40K.map((book) => new BookUltraW40K(book));
    await BookUltraW40K.insertMany(booksUltraW40KMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
