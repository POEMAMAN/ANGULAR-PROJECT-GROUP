const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookGauntW40K = require('../../api/models/models.GauntW40K/books.GauntW40K.model');

const arrayBooksGauntW40K = [
  {
    title: 'First and Only',
    publication_year: 1999,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 1,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En el futuro de pesadilla de Warhammer 40,000, la humanidad se encuentra al borde de la extinción. El Imperio de la Humanidad, que abarca toda la galaxia, está repleto de peligros y en los Mundos de Sabbat, infestados por el Caos, el Comisario Ibram Gaunt debe guiar a sus hombres tanto en el combate contra las fuerzas del Caos como contra regimientos rivales.Los Fantasmas de Gaunt es una saga épica de conquistas planetarias, grandes ambiciones, traiciones y sentido del honor.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083798/APISCIFI/BOOKS/First_and_Only_w7dvoe.jpg',
  },
  {
    title: 'Ghostmaker',
    publication_year: 2000,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 2,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Hacía más de dos horas que se habían internado en los bosques sombríos de las ciénagas de Voltemand. Los camiones rezumaban fango maloliente y el rugido de los motores resonaba en las malsanas frondas que los cubrían. Fue entonces que el Coronel Ortiz vio a la muerte. Iba vestida de rojo y estaba entre los árboles, a la derecha de la pista, inmóvil y al descubierto, observando a la columna de Basilisk. La ausencia total de movimiento fue lo que dejó helado a Ortiz. Doblaba casi en estatura a un hombre y resultaba aterradora con su armadura rojo sangre oxidada rematada por una curva cornamenta de bronce.                                                         En el futuro de pesadilla de Warhammer 40000, la humanidad se encuentra al borde de la extinción. La Guardia Imperial es la primera línea de defensa de la humanidad frente a los asaltos de un enemigo implacable.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083808/APISCIFI/BOOKS/Ghostmaker_w2ziuk.jpg',
  },
  {
    title: 'Necropolis',
    publication_year: 2000,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 3,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En el arrasado planeta Verghast, Gaunt y sus Fantasmas se ven implicados en una antigua y cruenta guerra civil cuando una poderosa Ciudad Colmena se ve asediada por un enemigo implacable. La traición interna hace caer las defensas de la ciudad, y la rivalidad y la corrupción amenazan con llevar a los Primeros de Tanith a la derrota.El Coronel Comisario Ibram Gaunt deberá encontrar nuevos aliados y reclutar nuevos fantasmas para salvar a la Colmena Vervun de la más aniquiladora de las amenazas: las temibles legiones del Caos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083957/APISCIFI/BOOKS/Necropolis_ssjmbs.jpg',
  },
  {
    title: 'Honour Guard',
    publication_year: 2001,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 4,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Los transmisores enloquecieron. Gaunt escucho ráfagas sostenidas de láser y armas automáticas. Los pastores, que de pronto eran varias docenas, surgían de entre los agitados animales. Portaban armas. Al despojarse de sus ropas, vio tatuajes y seda verde. Gaunt empuño su Pistola Bólter. Los infardi los tenían rodeados…                                                                              El Coronel Comisario Ibram Gaunt y sus Fantasmas vuelven al frente de batalla en un Mundo Santuario de vital importancia táctica y espiritual. Pero las envilecidas fuerzas del mal no van a dejarles saborear la victoria durante mucho tiempo. En mitad de un feroz contraataque, Gaunt es enviado a recuperar la reliquia más preciada de todas, los restos de la antigua Santa que abrió el camino de la Humanidad hacia las estrellas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083841/APISCIFI/BOOKS/Honour_Guard_szqqqm.jpg',
  },
  {
    title: 'The Guns of Tanith',
    publication_year: 2002,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 5,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Las heréticas fuerzas del Caos se defienden con ferocidad en la Cruzada de los Mundos de Sabbat. Las fuerzas del Imperio, dispersas y con las líneas de suministro cortadas, se ven frenadas en seco. El coronel comisario Gaunt y los Primeros y Únicos de Tanith deben reconquistar Fantine, un mundo rico en promethium, pero tan arrasado por la contaminación que el único modo de atacarlo es mediante un peligroso asalto aerotransportado que no se ha intentado nunca. Atrapados entre un enemigo mortífero y un entorno letal ¿cómo podrán sobrevivir Gaunt y los suyos?',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083444/APISCIFI/BOOKS/The_Guns_of_Tanith_lwdzq7.jpg',
  },
  {
    title: 'Straight Silver',
    publication_year: 2002,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 6,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En los campos de batalla de Aexe Cardinal, las fuerzas de combate de la Guardia Imperial quedan inmovilizadas en una situación de estancamiento mortífero con los siniestros ejércitos del Caos. El Coronel Comisario Ibram Gaunt y su Regimiento, los Primeros y Únicos de Tanith, se ven inmersos en un infierno: la guerra de trincheras, en la que la amenaza de la muerte provocada por la artillería local se cierne continuamente sobre ellos.                                                                                              La única oportunidad de sobrevivir que tienen Gaunt y sus tropas de exploración es ofrecerse como voluntarios a una misión tan peligrosa, ¡que nadie se atreve a aceptar!',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083434/APISCIFI/BOOKS/Straight_Silver_ptpjl7.jpg',
  },
  {
    title: 'Sabbat Martyr',
    publication_year: 2003,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 7,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Una nueva oleada de esperanza se extiende por todos los Mundos de Sabbat, infestado por las tropas del Caos, cuando llega la noticia de que una joven proclama ser la reencarnación de Santa Sabbat. A pesar de las dudas mostradas por el alto mando, la muchacha demuestra ser la inspiración perfecta para las acosadas tropas imperiales.Sin embargo, las siniestras fuerzas del Caos no subestiman esta nueva amenaza, y cuando ordenan a sus asesinos más letales acabar con ella, el Coronel Comisario Gaunt y sus hombres se convierten en su última línea de defensa.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083165/APISCIFI/BOOKS/Sabbat_Martyr_njh0yw.jpg',
  },
  {
    title: 'Traitor General',
    publication_year: 2004,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 8,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Mientras el destino de la campaña para recuperar los Mundos de Sabbat pende de un hilo, el éxito de la Cruzada está en manos de un oficial de estado mayor que ha sido capturado por las siniestras fuerzas del Caos. El Coronel Comisario Ibram Gaunt dirige un grupo de ataque hasta las líneas enemigas para localizar el paradero del oficial imperial prisionero, que posee conocimientos estratégicos de los planes de batalla del señor de la guerra Macaroth. La misión es muy simple: impedir que revele sus secretos al enemigo… a cualquier precio. Gaunt y su grupo son la clave de una misión que los llevará a la muerte o a la gloria.                                        Dan Abnett saca sus mejores armas cuando arroja a Gaunt y a su grupo de élite al corazón de las tinieblas en esta impresionante novela que comienza una nueva serie titulada Los Olvidados.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708084527/APISCIFI/BOOKS/traitor_general_uavnpp.jpg',
  },
  {
    title: 'His Last Command',
    publication_year: 2005,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 9,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Estamos en el vigésimo primer año de la Cruzada de los Mundos de Sabbat. Los principales grupos de batalla del Señor de la Guerra Macaroth han logrado importantes victorias y avances contra las fuerzas del Caos de Urlock Gaur. Contra todo pronóstico, el Coronel Comisario Ibram Gaunt regresa de una misión tras las líneas enemigas, pero se le ha dado por muerto y han puesto su unidad bajo el mando de un nuevo y carismático oficial.Gaunt se enfrenta a la lucha más difícil cuando intenta recuperar su antiguo mando antes del feroz contraataque de las malignas fuerzas del Caos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083817/APISCIFI/BOOKS/His_Last_Command_mgxh8t.jpg',
  },
  {
    title: 'The Armour of Contempt',
    publication_year: 2006,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 10,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En la despiadada Cruzada de los Mundos de Sabbat, el Coronel Comisario Ibram Gaunt regresa de Gereon, un planeta sometido al Caos, para enfrentarse a sus propios demonios. Todavía afectado por la larga misión tras las líneas enemigas llevada a cabo en dicho planeta, Gaunt regresa a ese planeta con el Ejército Imperial de la Cruzada para liberar a ese mundo del Caos.                         Gaunt y el Primero y Único de Tanith descubren, después de establecer contacto con fuerzas guerrilleras de élite del lugar, que la brutalidad de la «liberación» les obliga a enfrentarse a sus comandantes, quienes creen que la victoria debe conseguirse a cualquier coste, sin importar lo cruel que sea. Todo puede ocurrir cuando Gaunt y los suyos desafían de un modo directo la autoridad de sus superiores.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083735/APISCIFI/BOOKS/armour-contempt_c969ir.jpg',
  },
  {
    title: 'Only in Death',
    publication_year: 2007,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 11,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Ibram Gaunt y sus hombres deben enfrentarse al horror del presente y a los fantasmas de su pasado porque "Sólo en la muerte termina el deber".En el vigésimo tercer año de la Cruzada de los Mundos de Sabbat los principales grupos de combate del Imperio avanzan hacia el Cúmulo Carcaradon, empujando ante ellos a las fuerzas del Caos. Gaunt y sus hombres son enviados al Mundo Fortaleza de Jago, en el Sistema Cabal. Allí se les ordena ocupar y defender un bastión vital en las montañas. Su misión: detener el avance enemigo tanto como sea posible, sin importar el precio.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083156/APISCIFI/BOOKS/Only_in_Death_oodeaa.jpg',
  },
  {
    title: 'The Iron Star',
    publication_year: 2008,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 12,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Después de los eventos cataclísmicos de Only In Death, el Coronel-Comisario Ibram Gaunt lidera el Tanith First-and-Only - sus fantasmas - en la defensa de un puente en un planeta sin nombre en lo profundo de los Mundos Sabbat. Pero algo está mal: los fantasmas muertos desde hace mucho tiempo viven de nuevo, y el tiempo no está corriendo como debería. Lo peor de todo es que el cielo de carne estropeada con su estrella de hierro está afectando a Gaunt. Está exhausto y le duelen los ojos...',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083877/APISCIFI/BOOKS/iron-star_mr5m8j.jpg',
  },
  {
    title: 'Blood Pact',
    publication_year: 2009,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 13,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En la retaguardia de la Cruzada de los Mundos de Sabbat, los Primeros y Únicos de Tanith aguardan su siguiente destino. Sin embargo, la llegada de un prisionero enemigo para ser interrogado atrapa al Coronel Comisario Gaunt en una complicada y mortífera red de intrigas.                                                                                                                             ¿En quién puede confiar?¿Por qué es tan valioso el prisionero? El destino de la Cruzada depende de estas preguntas, y Gaunt debe encontrar las respuestas antes ser eliminado.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083765/APISCIFI/BOOKS/Blood_Pact_sw1bpa.jpg',
  },
  {
    title: "Salvation's Reach",
    publication_year: 2011,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 14,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'Los Primeros de Tanith han estado alejados del frente de batalla demasiado tiempo. Apáticos y sedientos de acción, reciben la oferta de una misión perfecta. El objetivo: la misteriosa Salvation´s Reach, una fortaleza distante e impenetrable que esconde secretos que podrían cambiar el curso de la Cruzada de los Mundos de Sabbat.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083203/APISCIFI/BOOKS/Salvation_s_Reach_nietqi.jpg',
  },
  {
    title: 'The Warmaster',
    publication_year: 2017,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 15,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: "Tras el éxito de su desesperada misión en Salvation's Reach, el coronel comisario Gaunt y el Primero de Tanith se dirigen al mundo forja de Urdesh, de una importancia estratégica vital y que se halla asediado por los brutales ejércitos del Anarca Sek. Sin embargo, puede que esté en juego algo más que el propio planeta. Las fuerzas imperiales han intentado dividir y vencer al enemigo, pero con el propio señor de la guerra Macaroth en persona al mando de la campaña de Urdesh, es posible que el ataque del Archienemigo tenga un propósito diferente: decapitar la estructura de mando imperial de un solo tajo. ¿Acaso el señor de la guerra se ha convertido por descuido en un objetivo? ¿Y podrán los Fantasmas de Gaunt defenderlo frente a la fuerza de asesinos y máquinas de guerra del Caos allí concentrada?",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083713/APISCIFI/BOOKS/TheWarmaster_f4zr49.jpg',
  },
  {
    title: 'The Anarch',
    publication_year: 2019,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 16,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'La batalla por Urdesh ha comenzado, y el resultado determinará el destino de la Cruzada de los Mundos del Sabbat. Ibram Gaunt, ahora mano derecha del Señor de la Guerra, y sus Fantasmas tienen la llave de la victoria, pero ¿pueden derrotar al siniestro Anarch y sus Hijos de Sek? .El arco de La Victoria concluye con un relato épico que entrelaza los hilos de la trama de toda la serie de Los Fantasmas de Gaunt y pone al Señor de la Guerra y el resto de personajes en situaciones de peligro dificiles de soportar. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083670/APISCIFI/BOOKS/TheAnarch_fjtkgc.jpg',
  },
  {
    title: 'The Vincula Insurgency',
    publication_year: 2022,
    saga: "Gaunt's Ghosts, Precuel Gaunt",
    saga_index: 17,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    resume: 'En la ciudad fronteriza en ruinas de Vincula, el recién formado Tanith First and Only y su comandante, el coronel-comisario Ibram Gaunt, son asignados para imponer una paz permanente. Sin embargo, esta acción policial ingrata resultará tan peligrosa como cualquier primera línea - algo está acechando a los Fantasmas por las calles, y pronto Tanith First aprenderá oscuros secretos sobre sí mismos que harán eco a través de su historia.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083638/APISCIFI/BOOKS/The_Vincula_Insurgency_mj4p9z.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksGauntW40K = await BookGauntW40K.find();
    if (allBooksGauntW40K.length > 0) {
      await BookGauntW40K.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksGauntW40KMap = arrayBooksGauntW40K.map((book) => new BookGauntW40K(book));
    await BookGauntW40K.insertMany(booksGauntW40KMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
