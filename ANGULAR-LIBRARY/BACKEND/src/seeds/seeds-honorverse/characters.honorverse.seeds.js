const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterHonorverse = require('../../api/models/models.universo/characters.model');

const arrayCharactersHonorverse = [
  {
    name: 'Honor Harrington',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '2 de octubre de 1859 PD',
    planet: 'Sphinx',
    country: 'Manticore',
    resume: 'Honor Stephanie Harrington nació el 1 de octubre de 1859 PD, o 256 AL, en Craggy Hollow, Condado Duvalier, en el Ducado de Shadow Vale en el planeta Esfinge, hija de dos médicos, el Dr. Alfred Harrington y la Dra. Allison Chou Harrington. Durante su juventud, fue adoptada por un treecat al que llamó Nimitz.                                                         De joven ingresó en la Real Academia Naval de Manticoran, en la isla de Saganami, y obtuvo el grado de oficial a finales de la década de 1870. Tras su crucero de guardiamarina a bordo del crucero pesado HMS War Maiden, pasó por varios puestos a bordo de navíos de la RMN y ascendió de rango, hasta que en 1886 PD se le dio el mando de la nave de ataque ligera HMLAC 113; una nave estelar hipercapaz, el destructor HMS Hawkwing (1897 - 1899 PD); y el crucero ligero HMS Fearless en 1900 PD. Tras ser enviada a la estación Basilisk, ella y su tripulación fueron capaces de descubrir una conspiración Havenita para apoderarse del sistema, y destruir una nave Q Havenita.Dos años más tarde, Harrington, ahora al mando del nuevo Fearless, un crucero pesado, fue enviada al Sistema Estelar de Yeltsin para ayudar a su mentor, el almirante Raoul Courvosier, en sus deliberaciones con el Protectorado de Grayson.                                                                                                      Los manticoranos pronto se vieron involucrados en la lucha de los Grayson con los vecinos masadanos, que contaban con el apoyo secreto de Haven. Al final, Harrington y su tripulación consiguieron evitar que una nave masadan bombardeara Grayson, y Harrington, que hasta entonces había sido tratada con poco respeto en Grayson debido a su género, fue nombrada Steadholder, la primera mujer noble y terrateniente de la historia del planeta. Para corresponder a su nueva condición de Steadholder Harrington, la reina Isabel III de Mantícora la creó también condesa Harrington.  ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108186/HONOVERSO/PERSONAJES/yvfcqqny7s0gjqoqopof_b0qur9.webp',
  },
  {
    name: 'Andrew LaFollet',
    profession: 'Capitán Naval',
    rank: 'Capitán de Corbeta',
    birthday: '1842 PD',
    planet: 'Grayson',
    country: 'Grayson',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108185/HONOVERSO/PERSONAJES/wxrgcdarhfkkxak3b5wg_aszji1.webp',
  },
  {
    name: 'Thomas Theisman',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1832 PD',
    planet: 'Haven',
    country: 'Haven',
    resume: 'En 1903 PD, Theisman tenía el rango de Comandante y comandaba el destructor PNS Breslau. De acuerdo con la Operación Jericó, el Comandante Theisman y parte de la tripulación del Breslau fueron retenidos en la Marina de Masada para ayudar a operar el Breslau, que pasó a llamarse oficialmente MNS Principality.Theisman había servido anteriormente con su mentor, el capitán Alfredo Yu, que le eligió para servir con él en la Operación Jericó. Solicitó refuerzos cuando Principality fue asignado a patrullar cerca de Uriel, pero el almirante Ernst Franks se lo denegó.No le gustaba trabajar con los masadianos.Su frustración con el almirante Franks se hizo patente cuando éste quiso que las naves masadanas se ocultaran tras las defensas de la base Blackbird, lo que Theisman consideró el plan más estúpido que había oído jamás.El comandante Theisman fue capaz de dañar gravemente el HMS Apollo, un crucero ligero de la Marina Real Manticorana, antes de que el Principality fuera convertido en un armatoste flotante y capturado. Fue llevado a bordo del HMS Fearless e interrogado por la capitana Honor Harrington.   Negó ser de Haven hasta que la tripulación de Harrington descubrió la placa del constructor original del Breslau.Ofreció información sobre los supervivientes del HMS Madrigal en la Base Blackbird porque creía que no estaban seguros bajo custodia de Masadan. Theisman estaba presente cuando Harrington recibió el informe de Fritz Montoya sobre las heridas de Mercedes Brigham y Mai-ling Jackson.Estaba visiblemente asqueado por el trato que los masadanes habían dado a sus cautivas, expresando su pesar y su disposición a testificar contra el capitán Williams y los demás oficiales masadanes. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022854/HONOVERSO/PERSONAJES/kdrjyg5m2pfzr6hf4nb5_wxgh1z.jpg',
  },
  {
    name: 'Hamish Alexander',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1820 PD',
    planet: 'Manticore',
    country: 'Manticoree',
    resume: 'En 1903 PD, después de que la comandante Alice Truman del HMS Apollo enviara un mensaje de emergencia al Almirantazgo, se reunió con el almirante Webster, quien le autorizó a llevar dos escuadrones ad hoc de cruceros de batalla al Estrella de Yeltsin. El comandante Truman se trasladó al buque insignia de Alexander, el HMS Reliant, para informarle. Con el fin de llegar a Grayson lo antes posible, ordenó a la flota alcanzar altas velocidades.Tras relevar a la unidad superviviente del capitán Harrington, dirigió poco después la invasión de Masada.Tras la batalla, Alexander se reunió con la capitana Harrington y la reprendió por golpear a Reginald Houseman, pero también le transmitió la gratitud de la reina Isabel III. Estuvo presente cuando Harrington fue nombrada caballero por el embajador Anthony Langtry y recibió la Estrella de Grayson y la Mayordomía del Protector Benjamin IX junto con un condado de Manticoran.                                                          Posteriormente, cambió su bandera al HMS Sphinx.Alexander se reunió con el Primer Lord Espacial, el almirante James Webster, a finales de 1904 PD en White Haven para hablar de Thomas Caparelli, a quien Alexander consideraba un estúpido, pero mejor que Edward Janacek.En 1905 PD, acababa de terminar un estudio sobre el estado de preparación de las estaciones fronterizas de Manticore a instancias del almirante Webster.Fue invitado a una reunión por el duque de Cromarty, Allen Summervale.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022858/HONOVERSO/PERSONAJES/nn8jv0pbrf1d6qnskcac_xt9g1q.webp',
  },
  {
    name: 'Horace Harkness',
    profession: 'Comandante Naval',
    rank: 'Chief Warrant Officer',
    birthday: '1832 PD',
    planet: 'Manticore',
    country: 'Manticore',
    resume: 'En 1900 ocupó el rango de suboficial y fue asignado al crucero ligero HMS Fearless para su misión en el Sistema Basilisk. En ese momento de su carrera, Harkness había sido ascendido a Suboficial Mayor doce veces, pero siguió metiéndose en problemas por luchar con los marines y el contrabando. Irónicamente, esto lo hizo perfecto para un equipo especial reunido por la contramaestre en jefe Sally MacBride bajo las órdenes del comandante Honor Harrington, para inspeccionar los buques de carga que pasan por el sistema y hacer cumplir las regulaciones aduaneras más estrictamente que cualquier tripulación naval anterior se había molestado en hacerlo. Harkness estaba teóricamente bajo el mando del alférez Prescott Tremaine, el comienzo de lo que se convertiría en una larga y algo legendaria asociación. El ojo agudo de Harkness descubrió un gran número de esquivas de contrabandistas, y Tremaine aprendió rápidamente a confiar en su juicio.                                                    Durante la Primera Batalla de Basilisco, Harkness fue parte del equipo organizado por MacBride para ir a la Sala de Misiles Dos; después de que MacBride fue herido, tomó el mando. Él y su equipo estaban en Missile One cuando Missile Two fue alcanzado por un misil enemigo, por lo que llevó al equipo de vuelta a la ingeniería.En 1903, el jefe Harkness fue asignado al nuevo HMS Fearless (CA-286). Tremaine, ahora teniente, recomendó a la alférez Carolyn Wolcott que si necesitaba consejo de alguien que no fuera un oficial, que fuera a Harkness. Más tarde se reveló a Honor Harrington que se había casado con Iris Babcock. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022847/HONOVERSO/PERSONAJES/ojhv6v8cedz9sqydsvah_ojialz.webp',
  },
  {
    name: 'Elisabeth III Winton',
    profession: 'Dirigente',
    rank: 'Reina',
    birthday: '1865 PD',
    planet: 'Manticore',
    country: 'Manticore',
    resume: 'Elizabeth nació en Mantícora en el año 1865 PD (o 260 AL), en el momento en que se descubrió la terminal Basilisk del nudo de agujeros de gusano de Mantícora. Tras la anexión del sistema, fue creada la primera Gran Duquesa de Basilisco.Fue una de las pocas niñas treecat adoptadas, al ser adoptada por su treecat Ariel a la edad de quince años en 1880 PD. Su padre fue asesinado por agentes de la República Popular de Haven, por lo que ella heredó el trono a los dieciocho años. Neutralizó inmediatamente a los conspiradores e impidió que se supiera la verdadera causa de la muerte del rey Roger, lo que habría provocado una guerra inmediata que Mantícora no podía esperar ganar.Reinado. Al asumir el trono, apoyó la aceleración de la expansión militar iniciada por su padre, así como la creación de un sistema de aliados que diera a la SKM la profundidad estratégica necesaria para enfrentarse a la PRH. En los años siguientes, dio a luz a dos hijos, asegurando así la línea de sucesión.                                                                                                                     En 1903 PD, la reina Isabel estaba dispuesta a ir muy lejos para encontrar aliados, especialmente con el Protectorado de Grayson, hizo que el gobierno enviara préstamos, equipamiento y personal para reforzar las defensas y la base industrial de ese sistema. Encontró firmes aliados internos en el Primer Ministro Summervale, jefe del Partido Centrista, y en los Leales a la Corona. El apoyo de la Cámara de los Comunes y el tenue control de la Cámara de los Lores le permitieron llevar a cabo una frenética campaña de preparación para la guerra.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022853/HONOVERSO/PERSONAJES/jfmo5us1fc4afq8xt3hc_fmg62a.webp',
  },
  {
    name: 'Aldona Anisimovna',
    profession: 'Espia',
    rank: 'Espia',
    birthday: '1882 PD',
    planet: 'Mesa',
    country: 'Mesa',
    resume: 'Como miembro del Consejo de Administración de Manpower, Anisimovna estuvo muy implicada en las operaciones de Mesa en el cluster de Talbott a finales de la década de 1910 y principios de la década de 1920 PD.                               Amandine Corvisart declaró que el Reino Estelar de Mantícora solicitaría la extradición de Aldona Anisimovna bajo acusaciones de asesinato, terrorismo y tráfico ilegal de armas. Sin embargo, se trataba de una maniobra de relaciones públicas, ya que Mesa nunca aceptaría la extradición.                                                                                               Por recomendación de su colega y amiga personal Isabel Bardasano, Albrecht Detweiler incorporó a Anisimovna plenamente al Alineamiento. Como agente de alto rango de la Seguridad de la Alianza, coordinó el extremo de Nueva Toscana de la segunda operación de la Alianza para desestabilizar la Agrupación Talbott, orquestando el Incidente de Nueva Toscana. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022849/HONOVERSO/PERSONAJES/anvibig7r7eeoxpu79ly_gkdhsn.webp',
  },
  {
    name: 'Benjamin Mayhew IX',
    profession: 'Dirigente',
    rank: 'Protector',
    birthday: '1871 PD',
    planet: 'Grayson',
    country: 'Grayson',
    resume: 'Benjamin Bernard Jason Mayhew nació el 21 de diciembre de 1871 PD en Grayson como descendiente directo de Oliver Mayhew I. En su juventud, fue enviado al campus de la Universidad de Harvard en Bogotá en la Vieja Tierra durante seis años. Fue durante este tiempo que relajó sus puntos de vista sobre los papeles de los hombres y las mujeres. Durante este tiempo, también se convirtió en un estudiante de la historia antigua de la Tierra. Se convirtió en Protector en 1898; desde entonces, el canciller Henry Prestwick fue un oponente suyo.                                                                             En 1903 PD, después de media década como jefe de la Iglesia y el gobierno Grayson, mantuvo una mente más abierta sobre el papel del género en el Reino Estelar de Manticore, sabiendo que para mantener un aliado como Manticore, tendría que dejar de lado las diferencias culturales de su sociedad con sus aliados. Informó a sus oficiales de alto rango y a otros oficiales sobre qué esperar con Manticore.                                                                                                       Creía que la alianza con Manticore era algo bueno, sintiendo que Grayson necesitaba un ejecutivo más fuerte que el canciller Prestwick en los próximos años. Consiguió la mayoría en la Cámara, y consiguió que el Consejo de Ancianos se alineara. Sin embargo, necesitaba que la Marina Espacial Grayson lo respaldara, porque estaba ganando por una mayoría muy pequeña en la Cámara. Esperaba que sus acciones no dañaran a su familia, pero sabía que la alianza ayudaría mucho a Grayson.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108185/HONOVERSO/PERSONAJES/h3cunplf1eqkej5wrkw3_eh3klf.webp',
  },
  {
    name: 'Lester Tourville',
    profession: 'Comandante Naval',
    rank: 'Almirante',
    birthday: '1881 PD',
    planet: 'Haven',
    country: 'Haven',
    resume: 'Para 1911, Tourville era ampliamente considerado uno de los mayores líderes de la Marina Popular. Como contraalmirante, comandó el victorioso grupo de tareas Havenite en la Segunda Batalla de Adler, siendo su buque insignia en ese momento el Conde PNS Tilly. No estuvo de acuerdo con el plan de Cordelia Ransom de ejecutar a Honor Harrington después de su captura. Cuando expresó su desacuerdo, él y su personal recibieron la orden de acompañar al PNS Tepes al Hades a bordo del Conde Tilly. Cuando Tepes fue destruido por el sabotaje de Horace Harkness, el almirante Tourville y Shannon Foraker fueron los únicos havenitas que se dieron cuenta de que pequeños barcos habían escapado antes de que el barco explotara, y borraron las cintas.                                                                                                                  Tourville y la tripulación del conde Tilly fueron detenidos para investigar su participación en la destrucción de Tepes. A petición de la almirante Esther McQueen, fue liberado y se le permitió regresar a la Duodécima Flota como segundo al mando del almirante Javier Giscard con el rango de vicealmirante. Al mando de la Task Force 12.2, dirigió los ataques contra Zanzíbar y Alizon, que formaban parte de la Operación Ícaro. Más tarde comandó el ataque al Sistema Solway como parte de la Operación Scylla, y se dio cuenta de que su vida colgaba de un hilo después del fallido intento de golpe del almirante McQueen. Estaba decidido a no permitir que lo llevaran de vuelta a Haven para que le dispararan. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022856/HONOVERSO/PERSONAJES/lmhck7ocnbocnqw3otup_xjk4it.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersHonorverse = await CharacterHonorverse.find();
    if (allCharactersHonorverse.length > 0) {
      await CharacterHonorverse.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersHonorverseMap = arrayCharactersHonorverse.map(
      (character) => new CharacterHonorverse(character)
    );
    await CharacterHonorverse.insertMany(charactersHonorverseMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
