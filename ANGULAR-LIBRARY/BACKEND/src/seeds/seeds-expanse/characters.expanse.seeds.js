const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CharacterExpanse = require('../../api/models/models.expanse/characters.expanse.model');

const arrayCharactersExpanse = [
  {
    name: 'Adolphus Murtry',
    profession: 'chief of security for Royal Charter Energy',
    rank: 'chief of security for Royal Charter Energy',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'Royal Charter Energy',
    resume: "Murtry proviene de la Tierra, y ha trabajado durante mucho tiempo como oficial de seguridad para Royal Charter Energy, llegando finalmente a la posición de jefe. Como le dice a Chandra, ha hecho una carrera derramando sangre para que las corporaciones aumenten sus ganancias, lo que a su vez aumenta sus propios pagos.El comportamiento de Murtry es frío y recogido, y a menudo se describe como un pragmático y un buscador de justicia. Esta narración auto-descrita es un velo delgado para su verdadera naturaleza, que es cruel, sanguinaria y despiadada. Como señaló Amos, Murtry es un asesino, que a menudo busca incluso las oportunidades más pequeñas para justificar sus impulsos asesinos.                                                                                                                                                                                                                                                                                    Murtry es odioso y prejuicioso, ya que en su introducción se muestra enojado porque tuvo que comprometerse con los cinturinos, a quienes considera inferiores. En numerosas ocasiones, se le ve conspirando para asesinar a los colonos cinturinos en Ilus, justificando sus planes a Chandra con la prevención de posibles conflictos futuros sobre los recursos o moralizando sobre la protección de su pueblo de posibles terroristas. En palabras de Naomi, Murtry asume la autoridad de jugar a ser juez, jurado y verdugo y no tiene reparos en abusar de su poder. Murtry también es altamente materialista, ya que finalmente le confiesa a Chandra que su razón para querer matar a los cinturinos es que, si lo hace, significará más ganancias para RCE y, por lo tanto, para sí mismo.Cuando Holden se enfrenta a Murtry por sus crímenes, Murtry ridiculiza a Holden por su creencia en la civilización y la cooperación, que él ve como partes secundarias y menores de la naturaleza humana; Murtry tiene una creencia megalómana de que el derramamiento de sangre es necesario para construir la civilización, y que es el tipo de hombre que el mundo necesita para ser civilizado. Murtry se compara con los colonizadores europeos que invadieron la tierra de los nativos americanos como un ejemplo de su 'grandeza', que Holden señala es Murtry usando genocidios pasados para justificar su brutalidad",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171646/THE%20EXPANSE/PERSONAJES/ADOLPHUS_MURTRY_S_sx29ox.png',
  },
  {
    name: 'Alex Kamal',
    profession: 'Piloto',
    rank: 'Piloto',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    resume: 'Alex Kamal es un piloto de nave espacial del Rocinante, donde también maneja el control de incendios. Alex tiene cabello negro adelgazante, una cara redonda y alegre y una coloración de piel marrón oscuro que parece ser del sur de Asia. Marciano-levantado, él tiene un marco más grueso que un cinturino pero con una cintura que se extiende.Él habla con un acento de Texas, común a los colonos del valle de Mariner, donde nació un hijo único de padres mayores.En algún momento, Alex fue a la escuela en Londres Nova. Tiene una ex esposa, Talissa.Sirvió en el MCRN durante veinte años, estacionado en Hecate Base en Olympus Mons en el bootcamp, y más tarde en el Bandon. Su trabajo más reciente fue uno de los pilotos del Canterbury, pilotando el transbordador del circuito Ceres a Saturno.                                                                         Incidente de Eros.Cuando el Cant recibió una señal de socorro del Scopuli en el asteroide CA-2216862, Alex era parte de la tripulación del Caballero formado por James Holden, Naomi Nagata, Amos Burton y Shed Garvey enviados a investigar. Poco después de que Holden y Amos encuentran el transmisor en el Scopuli, una nave invisible aparece y dispara seis torpedos al Cant. Alex vuela al Caballero de regreso al Cant, pero luego se le ordena regresar al asteroide mientras Holden continúa transmitiendo el SOS cuando el Cant es destruido. Alex luego le dice a Holden acerca de barcos sigilosos similares que eran parte de la Marina Marciana cuando lo fue.El caballero es contactado por Wallace Fritz de la Pur"n"Kleen Water Company, quien les ordena ser recogidos por la Donnager y ayudar a la MCRN y ayudarles en su investigación si la destrucción de la Cant. El Knight es seguido por seis naves.Cuando el Knight atraca en el Donnager, la tripulación es escoltada a sus cuarteles mientras Holden es interrogado. El Donnie es atacado por las seis naves que siguieron al Caballero. Al regreso de Holden a la tripulación, su habitación es perforada y Shed Garvey es asesinado. Mientras el Donnie está siendo atacado y abordado, Holden y su tripulación son escoltados a la bahía del hangar por el teniente Kelly y tres marines. Después de un tiroteo en el hangar, la tripulación escapa en la fragata ligera de clase corbeta, el Tachi.La tripulación reclama el Tachi como salvamento y Holden lo renombra Rocinante, por lo que Alex se convierte en el piloto.                                                                         Al llegar a la estación de Tycho, Fred Johnson los escolta a sus habitaciones y explica su situación. Una guerra total entre el Cinturón y Marte traería una horrible cantidad de muertes. Sin embargo, hay una manera de evitar todo derramamiento de sangre; ver la destrucción de los Canterbury y Donnager como un acto criminal en lugar de un acto de guerra que permita un juicio que incrimine a un grupo que tanto la APE como la República Congresional Marciana pueden acordar. En el caso de un juicio, Holden y su tripulación serían los testigos estrella después de haber experimentado tanto la destrucción de la nave de primera mano y dar Fred y la OPA credibilidad en el proceso. Fred se va, dándoles la libertad de Tycho, y pone todos sus gastos en su cuenta. Más tarde, Alex es visto jugando a los dardos, jactándose de las habilidades de los lanzadores de dardos marcianos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171654/THE%20EXPANSE/PERSONAJES/ALEX_KAMAL_pidor8.png',
  },
  {
    name: 'Amos Burton',
    profession: 'Mechanic',
    rank: 'Mechanic',
    birthday: '24 CENTURY',
    planet: 'eARTH',
    country: 'O.N.U.',
    resume: 'Amos Burton, anteriormente conocido como Timothy, es un mecánico de barcos originario de la Tierra. Actualmente, trabaja a bordo del Rocinante y es uno de los cuatro miembros de la tripulación. Un hábil mecánico y combatiente, es un maestro de la supervivencia en el mundo de perro-come-perro del sistema, y tiene una tendencia hacia la violencia.Amos sirvió como mecánico a bordo del camión de hielo Pur"n"Kleen, el Canterbury, que suministraba agua para el cinturón de asteroides. Es un terrícola que no habla de su pasado - pero sabe mucho sobre burdeles y Baltimore. Está extrañamente cómodo, e incluso alegre, ante la perspectiva de la violencia.                                                                                                 Amos parece haber tenido un pasado difícil con lo poco que revela. En "Rock Bottom", mientras él y Alex están en un club nocturno, Amos dice que "creció en lugares como este", y hace vaga referencia a una historia de trabajo sexual. Probablemente fue prostituido cuando era niño, lo que puede explicar tanto el impacto en él como su protección hacia los niños.Habla con un ligero acento estadounidense del Atlántico Medio común con los que crecieron en la costa este de América del Norte.Amos es un hombre con el pelo castaño que mantiene corto. Al principio de la serie, su cabello es muy corto, pero crece un poco más a medida que pasa el tiempo, junto con su sombra de cinco horas. Tiene una mandíbula sólida y angular y sus ojos son marrones.                       Amos es de altura media, pero más allá de la media en construcción. Él es muy musculoso y sólidamente construido, siendo fuerte incluso para un terrícola, lo que le da una ventaja en mano, ya que puede golpear las luces del día de cualquiera que intente puñetazos con él, como cuando fácilmente domina a Miller cuando el detective lo golpeó.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171433/THE%20EXPANSE/PERSONAJES/AMOS_BURTON_s1ry9d.png',
  },
  {
    name: 'Anderson Drawes',
    profession: 'Lider',
    rank: 'Lider',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A.',
    resume: 'Anderson Dawes era un cinturino de Ceres que dirigió la facción insurgente de la APE en esa estación.Dawes vino de una familia de saltamontes y creció increíblemente pobre. Lleva el nombre de la compañía para la que trabajaban sus padres, el propietario y homónimo de la famosa estación Anderson.La responsabilidad se le impuso a una edad muy temprana, ya que se convirtió en el jefe de su familia, con sus cuatro hermanas bajo su protección. Una de sus hermanas, Atenea, tenía una enfermedad no revelada que hacía que sus huesos fueran frágiles, y finalmente la hizo tan enferma que ya no podía viajar. Con otras tres hermanas bajo su cuidado, y con su familia incapaz de asumir la responsabilidad financiera de la enfermedad de Atenea, Dawes la mató a regañadientes y la enterró en una hermosa mina de asteroides que habían descubierto juntos. El evento lo marcó fuertemente, ya que le dijo a Miller que lloraba tan fuerte que sus lágrimas se convirtieron en sangre, pero también en gran parte dio forma a su perspectiva como líder; no importa cuánto se preocupa por un individuo, siempre coloca al colectivo primero.                                                                                                          Como cinturino, el mundo de la política nunca se le ha abierto, pero como enlace de Ceres para la Alianza de Planetas Exteriores y líder de su facción más prominente de la APE, trabaja incansablemente detrás de las escenas para reunir a los trabajadores y otros elementos menos legítimos detrás de la causa.Reclutó a muchas figuras famosas de la política belter en la APE, incluyendo Camina Drummer, Klaes Ashford, y el ex coronel de la UNN Frederick Lucius Johnson.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171449/THE%20EXPANSE/PERSONAJES/Anderson_Dawes_o28bcl.webp',
  },
  {
    name: 'Bobbier Drapper',
    profession: 'Marine',
    rank: 'Marine',
    birthday: '24 CENTURY',
    planet: 'Mars',
    country: 'M.C.R.N.',
    resume: 'Roberta "Bobbie" W. Draper, también llamado Gunny en el MMC, fue un sargento de artillería del grupo de Reconocimiento de la Fuerza (Fuerzas Especiales) del Cuerpo de Marines Marcianos (MMC). Estuvo destinada en el MCRN Scirocco y Xuesen a lo largo de su carrera. Durante la mayor parte de su vida, fue una marciana ferozmente nacionalista dedicada al sueño marciano de terraformar Marte.Draper lideraba su unidad en la estación Ganímedes después del incidente de Eros, durante el primer contacto con un híbrido protomolécula-humano. El resultado de la batalla fue una masacre, dejando a Draper como el único sobreviviente. Más tarde se refirió a la protomolécula, como "el arma". El Ministro de Defensa del MCR, Pyotr Korshunov, le otorgó el Corazón Púrpura y la convocó a la cumbre del ONU-MCR en Nueva York, para proporcionar su testimonio sobre el incidente en Ganímedes.Después de descubrir que su propósito era solo una carta de triunfo para el MCR y nada más, desertó a las Naciones Unidas en la ciudad de Nueva York, sirviendo como enlace marciano y más tarde, guardaespaldas de la subsecretaria adjunta de la ONU Chrisjen Avasarala. La gente del MCR vio su deserción como alta traición, mientras tanto Draper constantemente se recordaba a sí misma que lo que está haciendo es todo por el bien de Marte. Descubrió que la ONU y el MCR estaban involucrados en la misma conspiración, girando en torno al Proyecto Caliban. Ayudando a exponer la conspiración en ambos gobiernos, Draper fue crucial para los esfuerzos de prevenir la guerra entre ambas naciones.                                                              Después de rendirse a las autoridades de la Marina de la República del Congreso de Marte, fue absuelta de cargos de traición y reintegrada, con elogios. Debido a sus contactos dentro de los tres gobiernos principales, ahora actúa como enlace entre las diversas facciones y Chrisjen Avasarala.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171466/THE%20EXPANSE/PERSONAJES/BOBBIE_DRAPPER_S_oatcmm.png',
  },
  {
    name: 'Carmina Drummers',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    resume: 'Camina Drummer es un belter que sirve como el actual presidente de la Unión de Transporte. Anteriormente, fue subdirectora de la estación Tycho bajo Fred Johnson, así como ex capitana y comandante de la estación OPAS Behemoth/Medina. Después de renunciar a su cargo, comenzó un viaje como líder de una flota pirata que se apoderaba del territorio de Sohiro y recolectaba una parte de toda la actividad pirata. Comandó el Dewalt con su familia acompañándola en una pequeña flota, antes de separarse debido a las diferencias con respecto a la afiliación a la Marina Libre. Estuvo al mando del barco Tynan de Klaes Ashford y dirigió la Drummer Faction junto con la UNN y MCRN contra Marco Inaros en el Conflicto de la Marina Libre.                                                                                                                     Drummer nació y creció en Ceres, donde trabajó en los muelles durante muchos años, y finalmente se familiarizó con Anderson Dawes, levantándose para convertirse en un miembro de confianza y de alto rango de su facción OPA. Ella estaba presente cuando Dawes encontró a Fred Johnson en total ruina moral, emocional y financiera, y fue quien convenció a Dawes para salvar a Fred en lugar de matarlo. Después de que ayudaron a Fred a recuperarse, y él rompió con sus propios ideales y la facción de la OPA, Drummer dejó a Dawes, con quien se había desilusionado, y siguió a Fred a la estación de Tycho, donde se convirtió en su segunda al mando.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171530/THE%20EXPANSE/PERSONAJES/CAMINA_DRUMMERS_S_zzetmg.png',
  },
  {
    name: 'Chrisen Avasarala',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    resume: 'Su Excelencia, Chrisjen Avasarala, es la Secretaria General de las Naciones Unidas. Como Secretaria General, se desempeña como Jefa de Estado y Gobierno de la Tierra y Luna, y es la Directora Ejecutiva de las Naciones Unidas (ONU).Política y maniobradora, alcanzó uno de los rangos más altos del gobierno de la ONU sin presentarse a las elecciones. Ella manipula a aquellos en los puestos más altos de poder a través del cultivo cuidadoso de las relaciones con sus cónyuges, amigos y personal más cercano a ellos.Chrisjen pertenece a una aristocracia política de larga data en la Tierra, que se remonta a los primeros días de la exploración planetaria y la colonización. Los separatistas marcianos asesinaron a su padre durante un período de tensión interplanetaria. Su hijo, un marine, murió en cumplimiento del deber mientras defendía los intereses de la Tierra de los revolucionarios cinturinos.                                                                                               Se ha desempeñado como Secretaria General Adjunta de la Oficina Ejecutiva del Secretario General bajo Esteban Sorrento-Gillis, pero ascendió al cargo de Secretaria General después de la renuncia de Sorrento-Gillis y el encarcelamiento de la VicesecretariaGeneral Sadavir Errinwright acusado de traición y conspiración, tras un escándalo relacionado con la Protomolécula y Jules-Pierre Mao que envió a la Tierra a una guerra infundada con la República Congresional Marciana (MCR).Más tarde perdió la elección ante Nancy Gao, quien se desempeñaba como Subsecretaria General de Asuntos de Interior en el Grupo de Alta Dirección de Avasarala (SMG) antes de renunciar a su candidatura. Siguió siendo miembro de la Asamblea General[1] y fue nombrada por Nancy Gao miembro de la Comisión de Emigración de Anillo de las Naciones Unidas (UNREC) para facilitar la emigración a las colonias interestelares. A la muerte de Gao, Avasarala aceptó un puesto en el SMG provisional del Secretario General interino David Paster, pero renunció tras su orden de atacar a Palas en represalia por los ataques de asteroides de Inaros. Después de que Paster sea expulsado del cargo por una moción de censura de la Asamblea General (Parlamento de la ONU), Avasarala es nombrado Secretario General por el parlamento y ha servido en este cargo desde entonces.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171610/THE%20EXPANSE/PERSONAJES/CHRISEN_AVASARALA_ltwgkp.png',
  },
  {
    name: 'James Holden',
    profession: 'Diplomatica.',
    rank: 'Secretaria de la O.N.U',
    birthday: '24 CENTURY',
    planet: 'Earth',
    country: 'O.N.U',
    resume: 'James "Jim" Holden es el capitán del Rocinante. Nacido entre 30 BXT y 21 BXT en Montana en la Tierra, Holden se unió a la Marina de las Naciones Unidas, siendo luego licenciado deshonrosamente después de siete años de servicio continuo. Después de la destrucción del Canterbury, Holden, junto con Shed Garvey, Naomi Nagata, Amos Burton y Alex Kamal, se sometieron a una búsqueda para descubrir los verdaderos culpables, descubriendo conspiraciones y misterios en todo el sistema. Sus hazañas continuaron a bordo del Rocinante, con el tiempo lo elevó a todo el sistema de reconocimiento y su nombramiento como el primer presidente de la Unión de Transporte.                                                                                         Nativo de Montana, es el único hijo de ocho padres como parte de un colectivo genético. En un momento en que la población de la Tierra es de más de 30 mil millones, hay grandes incentivos para que la gente no tenga hijos y la tierra sin desarrollar es un recuerdo lejano para la mayoría de la población de la Tierra.Holden es un hijo único de 8 padres cuyo ADN se ha combinado artificialmente para crear un heredero de la lucha de sus padres para preservar uno de los últimos desiertos sin desarrollar en Montana. Cuando tenía 18 años, su padre más cercano, Elise, en un momento de culpa, le dijo que había sido criado para luchar una batalla perdida y que debía huir lo más lejos posible.                                                                 Holden se unió a la Marina de la Tierra para escapar. En la Marina de la ONU sirvió como Primer Teniente a bordo del UNN Zheng Fei. hasta que un conflicto ideológico se convirtió en una confrontación física donde Holden trató de golpear a un oficial superior. El oficial esquivó y Holden se rompió la mano en un mamparo. A Holden se le dio un consejo de guerra general, condenado y dado de baja del servicio como resultado.Después de ser dado de baja de la Marina, Holden firmó un contrato con Pur"n"Kleen (propietario del Canterbury), buscando alejarse lo más posible de su hogar y de la Tierra y la UNN.               Al principio de la serie, Holden se presenta como que ha estado disfrutando de la relativa falta de responsabilidad que viene con ser el segundo oficial en un transportador de hielo remoto. Nacido en la Tierra, se fue después de ser expulsado de la Marina de la Tierra y ha corrido a uno de los lugares más remotos del sistema solar a bordo del Canterbury.As acontecimientos se desarrollan pronto se convierte en el capitán de la Rocinante. Criado para ser moral y responsable, una vez que ha asumido una causa, se siente obligado a cumplir con el honor',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171622/THE%20EXPANSE/PERSONAJES/JAMES_HOLDEN_nhobwj.png',
  },
  {
    name: 'Fred Johson',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Tycho Station',
    country: 'O.P.A. / Tycho Manufacturing',
    resume: 'Frederick "Fred" Lucius Johnson fue el Jefe de Operaciones en la colosal plataforma de construcción móvil de la Estación Tycho. Estuvo a cargo de supervisar la construcción de estaciones espaciales, el giro de asteroides, y en los últimos años la construcción de la primera nave estelar generacional de la humanidad, la Nauvoo. Coronel retirado del Cuerpo de Infantería de Marina de las Naciones Unidas, Fred es conocido por su participación en una acción militar de la ONU que vivirá en la infamia. Desde su desgracia ha buscado consuelo y penitencia trabajando para mejorar la vida de los cinturinos en todo el sistema.                                                                                                                    Fred es un defensor abierto de la Alianza de Planetas Exteriores, un grupo de defensa de cinturones que buscan legitimidad, pero a menudo son acusados de terrorismo.Fred Johnson se hizo famoso cuando era capitán con mando sobre tres fragatas de misiles. Destruyó una docena de barcos piratas y dos bases principales, causando una caída en la piratería en el Cinturón. Johnson fue promovido y se le dio el mando sobre la división de la Coalición de Marines responsable de la vigilancia del Cinturón, donde continuó sirviendo con distinción.                                                                         Cuando la estación de Anderson fue tomada por los insurgentes, el coronel Johnson dirigió el ataque exitoso para retomar la estación, matando a 173 insurgentes armados y más de mil civiles. Esta batalla le valió la fama en los planetas interiores y la Medalla de la Libertad, el mayor honor de los Marines de la ONU. Por otro lado, en el Cinturón, se hizo conocido como "El Carnicero de Anderson Station". Lleno de disgusto, odio a sí mismo, y la incapacidad para hacer frente a las consecuencias de sus acciones, Johnson renunció al Cuerpo de Marines y se disculpó públicamente por sus acciones. Retirándose bajo tierra durante años, comenzó a frecuentar bares en el Cinturón, bebiendo mucho y metiéndose en escaramuzas con la APE, hasta que se encontró con Anderson Dawes, quien lo reclutó para la APE.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171614/THE%20EXPANSE/PERSONAJES/FRED_JOHNSON_S_nse9jy.png',
  },
  {
    name: 'Naomi Nagata',
    profession: 'Mechanic',
    rank: 'Mechanic',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A',
    resume: 'Naomi Nagata es una cinturoneana que creció en naves de prospección en el Cinturón y los planetas exteriores. Ella es una ingeniera extremadamente talentosa, y usa su experiencia para improvisar formas de mantener viva a su tripulación. Crecer en los pobres barcos mineros de Belter significaba que los primeros años de vida de Naomi se vivían al filo de un cuchillo: casi sofocantes, hambrientos y abandonados eran acontecimientos regulares a lo largo de su infancia.                     Teniendo un título de "University in the Belt", más tarde ascendió a Ingeniero Jefe a bordo del camión de hielo Canterbury (que suministra agua para los residentes del Cinturón de Asteroides), parece ser una historia de éxito de Belter modelo, aunque lleva consigo un dolor secreto. Según un archivo de MCRN sobre Naomi, ella nació en la estación Ceres y sus dos padres han fallecido. El archivo afirmaba que Naomi estaba afiliada a la célula de la Alianza de Planetas Exteriores que incluía al capitán Rokku, Marco Inaros, Cyn y Karal.Ella es cautelosa sobre su pasado, incluso con sus amigos más cercanos.               Ella aborrece la violencia, pero ha sido testigo de la injusticia suficiente para entender la necesidad de la misma. Su complicada relación con la violencia y su turbulenta historia han llevado a una amistad poco probable con el mecánico de Canterbury, Amos Burton.Naomi es cautelosa sobre su pasado, incluso con sus amigos más cercanos. Ella aborrece la violencia, pero ha sido testigo de la injusticia suficiente para entender la necesidad de la misma. Su complicada relación con la violencia y su turbulenta historia han llevado a una amistad poco probable con el mecánico de Canterbury, Amos Burton.         A pesar de su pasado problemático, Naomi es cariñosa y empática, y sirve como una lámina narrativa del pragmatismo bruto de Amos. Los dos comparten una relación no muy diferente a los hermanos, con Noemí sirviendo como guía moral de amos, y Amos como protector firme de Noemí. Ella desarrolla poderosas conexiones personales con los tres de sus compañeros de equipo de Roci, particularmente Holden- los dos comparten un amor profundo y apasionado el uno por el otro que, aunque a veces tenso, se fortalece en el transcurso de la serie.Naomi también mantiene una lealtad feroz al cinturón. Ella se ve a sí misma como una cintter primero, y a menudo toma decisiones estratégicas basadas en lo que beneficiará más a la gente de su hogar. Ella simpatiza con la APE en numerosas ocasiones, aunque no tan abiertamente como algunos de sus homólogos de la APE, incluyendo Fred Johnson, Camina Drummer, o Anderson Dawes.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171642/THE%20EXPANSE/PERSONAJES/NAOMI_NAGATA_n1ccj6.png',
  },
  {
    name: 'Klaes Ashford',
    profession: 'Oficial',
    rank: 'Oficial',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.P.A. ',
    resume: 'El comandante Klaes Ashford fue un cinturino que sirvió como primer oficial a bordo del OPAS Behemoth. Fue nombrado por Anderson Dawes, y sirvió como segundo al mando del capitán Camina Drummer.Ashford fue criado en el Cinturón, y es ampliamente conocido por su larga carrera como uno de los mejores piratas del Cinturón, por lo que ganó el apodo de "El Cuchillo Fantasma de Callisto". En algún momento de su vida, Ashford tuvo una hija, pero murió en un incendio que también dejó el lado derecho del cuerpo de Ashford marcado con quemaduras. Ashford presenció personalmente la muerte de su hija, y esto le ha afectado gravemente, y su visión de la guerra y la violencia en general.                                           Estrechamente alineado con la facción de Anderson Dawes de la APE, se le dio el rango de Comandante en un intento de formalizar la Armada de la APE, y por lo tanto hacerla parecer más legítima, y también se dijo que era responsable de diseñar el "trabajo en curso" uniformes de la marina. En su nueva posición como comandante, demostró haber conocido a Diogo Harari.                                                                                                                    Ashford sabía y tenía historia con Camina Drummer, con ambos habiendo trabajado en los muelles de Ceres en el pasado.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171634/THE%20EXPANSE/PERSONAJES/KLAES_ASHFORD_S_llxowo.png',
  },
  {
    name: 'Jose Miller',
    profession: 'Policia',
    rank: 'Inspector',
    birthday: '24 CENTURY',
    planet: 'Ceres',
    country: 'O.N.U. ',
    resume: 'Josephus "Joe" Aloisus Miller, conocido principalmente por su apellido, es un detective que trabaja en la firma de seguridad de la estación de Ceres, Star Helix Security.Miller es un belter nacido en Ceres, donde vivió en un apartamento en el octavo nivel; sólo había salido de la estación cuatro veces en su vida. Tenía una ex esposa llamada Candace; habían estado divorciados durante unos dos años y medio. Fue metodista hace muchos años, pero en sus últimos años bebía principalmente.      La primera vez que Miller mató a alguien fue en su tercer año trabajando en seguridad. Tenía veintidós años, recién casado, hablando de tener hijos. La llamada había sido de un restaurante ilegal casi en el centro de masas. Sucedió rápido. El perpetrador había salido del agujero con una pistola en una mano, arrastrando a una mujer por el pelo con la otra. El compañero de Miller, un veterano de diez años llamado Carson, había gritado la advertencia. El perpetrador se había girado, sacando el arma a distancia de los brazos como un doble en un video. Matar a otro humano se suponía que era difícil. El arma se acercó; el pistolero dejó caer a la mujer y gritó. Resultó que, al menos para Miller, no era tan difícil.                              Hace años, Miller y Sematimba de Eros, coordinaron un caso feo en particular. Un contrabandista con carga de diseñadores eufóricos había roto con su proveedor. Tres personas en Ceres habían sido atrapadas en el fuego cruzado, y el contrabandista había embarcado hacia Eros. La tradicional competitividad e insularidad de las respectivas fuerzas de seguridad de las estaciones casi había dejado escapar al perpetrador. Solo Miller y Sematimba habían estado dispuestos a coordinar fuera de los canales corporativos.Miller tenía 49 años en el momento del incidente de Eros, y trabajó como detective en la firma de seguridad de la estación Ceres, Star Helix Security durante treinta años.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171630/THE%20EXPANSE/PERSONAJES/JOSE_MILLER_p1p8rf.png',
  },

];

mongoose
  .connect('mongodb+srv://dcpousa:Cunado1978@angular-library.cnzt7z4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCharactersExpanse = await CharacterExpanse.find();
    if (allCharactersExpanse.length > 0) {
      await CharacterExpanse.collection.drop();
      console.log('Personajes borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Personajes', err);
  })
  .then(async () => {
    const charactersExpanseMap = arrayCharactersExpanse.map(
      (character) => new CharacterExpanse(character)
    );
    await CharacterExpanse.insertMany(charactersExpanseMap);
    console.log('Personajes insertados');
  })
  .catch((err) => {
    console.log('error insertando los Personajes', err);
  })
  .finally(() => mongoose.disconnect());
