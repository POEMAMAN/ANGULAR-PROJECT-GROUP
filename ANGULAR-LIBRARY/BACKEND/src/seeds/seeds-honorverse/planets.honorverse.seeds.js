const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetHonorverse = require('../../api/models/models.honorverse/planets.honorverse.model');

const arrayPlanetsHonorverse = [
  {
    name: 'Manticore',
    settled: '1416 PD',
    population: '1,5 billion',
    capital: 'Aterrizaje',
    location: 'Sistema Manticore A',
    gravity: '1,01 G',
    country: 'Manticore',
    moons: '1 (Thorson)',
    resume: 'Manticore, oficialmente Manticore A-III, fue el tercer planeta del Sistema Manticore y el mundo capital del Reino Estelar y el Imperio Estelar de Manticore.Junto con el planeta Sphinx, Manticore orbitó la estrella primaria del Sistema Binario Manticore. El planeta era el mundo del trono del Reino Estelar de Manticore, siendo el primer mundo establecido y más desarrollado en el sistema.El planeta tenía una luna, Thorson, que era claramente visible desde la superficie.                                                                                                                Manticore tenía un día de 22.45 horas T, y un año que equivale a 1.73 años terrestres. Había 673.31 días en un año local, y 629.83 días T en un año. El año Manticore se dividió en 18 meses con 11 de 37 días, 7 de 38 días, alternando los primeros 6 y los últimos 8 meses.                                                                                                                La ciudad capital de Landing se encuentra a orillas de la bahía de Jason.La nueva región de Toscana se encuentra en el planeta. La Real Academia Naval de la Marina de Manticoran se encuentra en la isla de Saganami. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022812/HONOVERSO/PLANETAS/fs4w5hz1ccr38mfzgpva_ini48y.png',
  },
  {
    name: 'Sphinx',
    settled: '1430 PD',
    population: '1,2 billion',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,35 G',
    country: 'Manticore',
    moons: '2 (Perseus, Bellerefonte)',
    resume: 'La Esfinge, también llamada Manticore A-IV, fue uno de los tres planetas habitados del Sistema Manticore, y el planeta natal de los árboles. Orbitaba la estrella primaria del sistema junto con el planeta Manticore.Esfinge estaba más lejos de su estrella que Manticore. Como resultado, el clima estaba en el lado más frío de la norma terrana. También debido a su radio orbital más alto, el año esfinxiano fue aproximadamente cinco veces más largo que el año de la Tierra, con un aumento correspondiente en la duración de las estaciones. La gravedad del planeta era 1,35 veces más alta que la de la Tierra.         Los días de la esfinge duraron 25,62 horas-T, y hubo 1.783,28 días en un Año Esfinge. Hubo 1.903,65 días T en un año, y un año Sphinx igualó 5,22 años T. El año de la Esfinge se dividió en 46 meses, 35 de 39 días y 11 de 38 días. Los meses más cortos cayeron en meses pares del 12 al 32, con un año bisiesto cada siete años. La esfinge tenía una inclinación axial de catorce grados.                                                                                                                          El planeta tenía varios continentes, incluyendo la Tierra de Haley, Thule y Justianna. El ochenta por ciento de la superficie de la tierra estaba cubierta de bosques. Los icebergs de la esfinge eran proverbialmente inaccesibles. La esfinge tenía inviernos particularmente fríos. El océano Tannerman era un gran cuerpo de agua ubicado en el planeta. Los Copperwalls eran una cordillera. Debido a la distancia del planeta del sol de Manticore, el planeta tenía un ciclo de dióxido de carbono muy activo que ayudó a mantener la atmósfera y el medio ambiente. La atmósfera estaba compuesta por 83 por ciento de nitrógeno, 15 por ciento de oxígeno, 1 por ciento de argón y 1 por ciento de dióxido de carbono, lo que la hacía transpirable para los humanos.  El 3 de enero de 1519 tuvo lugar el descubrimiento de la duodécima especie sensible conocida por el hombre, al igual que el primer vínculo entre un humano y un árbol. En 1568 PD, después de la ratificación de la Novena Enmienda a la constitución Manticoran, los treecats recibieron derechos básicos bajo la ley Manticoran, y un tercio de la tierra en Sphinx fue protegida como hábitat treecat a perpetuidad.En 1652 PD, La princesa heredera Adrienne realizó una visita de estado al planeta y sobrevivió a un intento de asesinato, poco después de ser adoptada por un treecat.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022811/HONOVERSO/PLANETAS/uyimfkiwbgm8ie5ihsae_s32anq.webp',
  },
  {
    name: 'Gryphon',
    settled: '1492 PD',
    population: '600 millones',
    capital: 'Yawata Crossing',
    location: 'Sistema Manticore A',
    gravity: '1,05 G',
    country: 'Manticore',
    moons: '0',
    resume: 'Gryphon, también conocido como Manticore B-IV, fue el tercer planeta habitable ubicado en el Sistema Manticore, orbitando su estrella secundaria. Fue el último planeta habitado por los colonos manticoranos, siendo el menos hospitalario.El grifo tenía un eje de rotación planetario inusualmente alto a 27 grados, lo que produjo cambios climáticos drásticos a medida que avanzaba el año de Grifo. Había una broma de que la gente de Gryphon a menudo se unía a la Marina Real Manticoran para escapar del clima.                                                                                                         Gryphon tenía un día de 22.71 horas T y 650.46 días en un año. En T-Years, Gryphon tenía un día T 615.51 en un año, y un año equivale a 1.69 años T. El año de Grifo se dividió en 18 meses con 16 de 36 días y dos de 37 días. Los meses con los días extra en el noveno mes, décimo mes, y el mes 11 cada dos años locales. Gryphon fue el último planeta en el Sistema Manticore en ser colonizado por colonos, resultando en que es el que tiene la población más pequeña y el menor tráfico en los siglos venideros. El biosistema planetario es también el menos parecido a la Tierra de los mundos habitables del Reino Estelar, y el ganado original de la colonia no funcionó bien allí, sino una variante genéticamente modificada de los Plains Buffalo, importada del planeta Beowulf en 1612 PD, adaptado con un éxito fenomenal, y dos de las principales exportaciones del Reino Estelar a los planetas más antiguos son pieles de búfalo y carne.                                                                             La caballería de Grifo tiene una larga historia de apoyo incondicional a la monarquía porque gran parte de la nobleza de Grifo era demasiado conservadora socialmente, incluso para la Asociación Conservadora. Durante el reinado del rey Roger II, el gobierno planetario aprobó un referéndum pidiendo la revocación de la condición de los treecats como seres sintientes',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022809/HONOVERSO/PLANETAS/tvq5hmayj9k2m06xng31_sgyij5.webp',
  },
  {
    name: 'San Martin',
    settled: '1485 PD',
    population: '1 billion',
    capital: 'Ciudad San Marcos',
    location: 'Sistema Trevor Star',
    gravity: '2,7 G',
    country: 'Manticore',
    moons: '0',
    resume: 'San Martín fue el único planeta habitable en el Sistema Estelar de Trevor, y hogar de la República de San Martín, una nación estelar independiente que finalmente se convirtió en parte del Reino Estelar de Manticore.San Martín era un mundo muy denso, con una gravedad 2,7 veces la de la Tierra. El planeta era uno de los mundos de mayor gravedad que el hombre había establecido. Su presión atmosférica a nivel del mar era lo suficientemente alta como para producir concentraciones casi tóxicas de dióxido de carbono y nitrógeno. Este hecho limitó la población a cadenas montañosas, mesetas y otros lugares de gran altitud.Durante la ultima centuria fue conquistado por la Republica de Haven y posteriormente liberado por Manticore. tras la liberacion solicito la formal adhesion al Reino de Manticore',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022807/HONOVERSO/PLANETAS/t7m2a2iy3xux4eydr4d0_z1pqp9.webp',
  },
  {
    name: 'Grayson',
    settled: '988 PD',
    population: '3 billion',
    capital: 'Austin City',
    location: 'Sistema Grayson',
    gravity: '1,17 G',
    country: 'Grayson',
    moons: '0',
    resume: 'Grayson era el quinto planeta habitado del Sistema Estelar de Yeltsin, y el mundo capital del Protectorado de Grayson.Grayson estaba ubicado en el Sistema Estelar de Yeltsin, a 31 años luz al noreste del Sistema Manticore, a más de quinientos años luz de la Tierra, y dos días de viaje al oeste del Sistema Endicott. Era el único planeta habitable en su sistema, con una población de alrededor de cuatro mil quinientos millones de humanos alrededor de 1905 PD.  Orbitaba su estrella a una distancia de unos 13,5 minutos luz.                                                                                                     El planeta no era tan grande como la Tierra y tenía un color verde azulado debido a las enormes cantidades de clorofila. Había pocos desiertos. Grayson tenía una alta concentración de metales pesados, como arsénico y cadmio. Ninguna de la fauna y flora nativa era comestible para los humanos, y el agua era demasiado ácida para beber. Debido a la intoxicación por metales pesados y la falta de tecnología médica moderna hasta la alianza con Manticore, los habitantes de Grayson experimentaron un crecimiento físico atrofiado y una vida útil reducida. Los visitantes de otros mundos llevaban una máscara de filtración debido a la alta concentración de metales pesados en el polvo atmosférico.  La necesidad de minimizar la ingesta de metal en la dieta Grayson creó una fuerte presión para el desarrollo de granjas orbitales hasta la introducción de cúpulas de criostoplast para granjas por Grayson Sky Domes, Ltd.                                                                                                    El planeta fue establecido por la Iglesia de la Humanidad Unchained, dirigida por el reverendo Austin Grayson, a finales del siglo X PD.It fue originalmente llamado "Sión", pero poco después de la muerte del reverendo sus habitantes comenzaron a referirse a ella como "Mundo de Grayson", que finalmente se acortó a "Grayson".',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022805/HONOVERSO/PLANETAS/s9yqqhjcxvhmrpxesncl_ojbtfu.jpg',
  },
  {
    name: 'Medusa',
    settled: '',
    population: '700 millones',
    capital: 'Residencia del comisionado',
    location: 'Sistema Medusa',
    gravity: '0,85 G',
    country: 'Manticore',
    moons: '0',
    resume: 'Medusa era el único planeta habitable del Sistema Basilisco y hogar de los medusas. Estaba situado cerca de la Terminal de Basilisco de la Unión del Agujero de Gusano de Manticore, que trajo mucho tráfico al sistema y al planeta.Medusa tenía una inclinación de cuarenta grados en su eje. Desde la órbita, tenía un color gris-verde, con enormes casquetes polares. Los mares estrechos tenían un color verde grisáceo con lodo de plancton y plantas grandes. El clima del planeta fue considerado brutal incluso con una estrella primaria más fría. La vida animal se basó en la simetría trilateral (Jehrn, Bekhnor, insectos grandes). La vida floral se basaba solo en musgo - Medusa tenía alrededor de un millón de tipos diferentes de musgo y llegó en todos los tamaños, desde el tamaño de la hierba hasta el tamaño de los arbustos y el tamaño de los árboles                     Los nativos medusanos tenían una forma de gobierno de ciudad-estado para cada grupo de su tipo.                               El planeta mismo cayó bajo el liderazgo del Ministro de Asuntos Medusan. El Comisionado Residente para Asuntos Planetarios era responsable de la protección de los nativos, con su Agencia de Protección Nativa actuando como la policía planetaria. Todo el planeta fue establecido como una reserva para los medusanos. Bajo el Acta de Anexión, los medusanos ganaron auto-autonomía en el primer momento práctico.En virtud de una ley del Parlamento, a nadie se le permitió dar a los medusas algo más poderoso que la tecnología muscular. El Gobierno Havenita mantuvo un consulado a una de las ciudades-estado de Medusa en lugar de a Manticore, para que pudieran ayudar a difundir propaganda contra Manticore.                                                                                        El complejo del comisionado era la capital de facto de Medusa. El complejo era pequeño, pero tenía capacidades limitadas de control de tráfico; había sido diseñado para manejar el tráfico fuera del mundo que llegaba a Medusa. El complejo estaba ubicado en la región del Delta, y una ciudad de Medusan estaba cerca. El equipo de inspección del HMS Fearless estableció una base en el complejo',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022804/HONOVERSO/PLANETAS/qekouhi6i5sigdhqjqsx_ds7p07.webp',
  },
  {
    name: 'Mesa',
    settled: '1460 PD',
    population: '6 billions',
    capital: 'Mendel',
    location: 'Sistema Mesa',
    gravity: '1,02',
    country: 'Liga Solariana',
    moons: '0',
    resume: 'Mesa era el planeta habitado del Sistema de Mesa, y el mundo principal de la nación estelar del mismo nombre y, en secreto, el Alineamiento de Mesan.Mesa era un planeta en el Sistema de Mesa, ubicado dentro del espacio Solariano, lejos del suroeste galáctico del Sistema Solar. El Cúmulo Talbott estaba localizado al norte.El planeta era casi idéntico a la Tierra, orbitando su sol a unos 149,3 millones de kilómetros de distancia. Sin embargo, su inclinación axial era de solo nueve grados, y tenía un porcentaje ligeramente mayor de masa terrestre que el planeta natal humano. El clima era tan suave que la mayoría de los "desastres naturales" reportados en las noticias de Mesan eran en realidad artificiales, como incendios                  Mesa fue establecido en 1460 por un grupo de renegados beowulfanos, liderados por Leonard Detweiler, que rechazaron las restricciones de su viejo mundo en la ingeniería genética de los seres humanos. Así, el planeta pronto se convirtió en la sede de varias corporaciones trans-estelares, ampliamente vilipendiadas como moral y criminalmente en bancarrota, corruptas y corruptas.En secreto, también se convirtió en la sede de la Alineación Mesan, una organización encubierta de humanos genéticamente "mejorados" con el objetivo final de hacerse cargo del universo colonizado.                                      A finales de 1922, la Operación Houdini vio el traslado de todos los activos restantes del Alineamiento de Mesa al Sistema Darius. Cuando la Gran Alianza invadió el Sistema de Mesa, Albrecht Detweiler activó personalmente una serie de ojivas nucleares, matándose a sí mismo y a todo el personal restante del Alineamiento, así como cualquier señal de que alguna vez hubo un gobierno secreto en la sombra en el planeta Mesa. ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022802/HONOVERSO/PLANETAS/j6dzftqnfmtmpuduxia2_gaqi22.webp',
  },
  {
    name: 'Tierra',
    settled: 'Hogar natal',
    population: 'muchos billions',
    capital: 'Chicago',
    location: 'Sistema Solar',
    gravity: '1',
    country: 'Liga Solariana',
    moons: '1 (Luna)',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022802/HONOVERSO/PLANETAS/j6dzftqnfmtmpuduxia2_gaqi22.webp',
  },
  {
    name: 'Beowulf',
    settled: '250 PD',
    population: 'muchos billions',
    capital: 'Columbia',
    location: 'Sistema Sigma Draconis',
    gravity: '1',
    country: 'Liga Solariana',
    moons: '0',
    resume: 'Beowulf fue un planeta en el Sistema Sigma Draconis, la segunda colonia humana más antigua y uno de los mundos miembros más antiguos de la Liga Solariana. Beowulf era conocido por sus científicos, especialmente en los campos de la hiperfísica, la medicina y la genética aplicada.El clima era seco y polvoriento. Los gremlins eran una especie inteligente nativa de Beowulf. Calificaron justo por debajo de la treecat de la Esfinge en la escala Sentience, unos 10 puntos por debajo de los humanos en una escala de 0 a 100, con los humanos en 100.                                                             Varios de los emigres del planeta vinieron del Hemisferio Oriental de la TierraEn 1246 PD, los científicos del planeta desarrollaron el impulsor gravítico. Beowulf proporcionó sustancialmente a la ayuda que la Vieja Tierra recibió después de la Guerra Final, involucrando a los superhombres genéticos desarrollados en Ucrania.                                                                                                   Allison Chou era originaria del planeta. Conoció a Alfred Harrington mientras asistía a la Universidad Semmelweis en Beowulf y lo acompañó de vuelta a Manticore cuando regresó al servicio con la Marina Real Manticorana',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022799/HONOVERSO/PLANETAS/hkpwq4cvowqsii7adqgm_lojkkm.webp',
  },
  {
    name: 'Haven',
    settled: '1309 PD',
    population: 'muchos billions',
    capital: 'Nuevo Paris',
    location: 'Sistema Haven',
    gravity: '1',
    country: 'Haven',
    moons: '0',
    resume: 'Haven era el mundo de la capital de la república de Haven y del planeta primario del sistema de Haven.El día de Havenite era 24.56 horas estándar largas. El año se dividió en 412,25 días locales, con trece meses, nueve de treinta y dos días y cuatro de treinta y un días. Los meses cortos fueron el tercero, quinto, décimo y duodécimo. Cada cuatro años el tercer mes tenía treinta y dos días.El primer transbordador aterrizó en el planeta Haven en el año 1309 PD. La expedición colonial original fue extremadamente bien financiada como una empresa conjunta por once corporaciones basadas en mundos miembros de la Liga Solariana. Las formas de vida terrestres se adaptaron muy bien al entorno de Haven, y su clima era casi ideal para la vida humana. La ciudad capital de Nouveau París fue fundada durante ese tiempo también.                                           Para 1430 PD, el planeta ya tenía una población de poco menos de mil millones, y estaba empezando a enviar expediciones coloniales por su cuenta en lo que rápidamente se conoció como el Cuadrante Haven. [1] Para 1475, la economía y el gobierno havenitas habían demostrado ser eficientes y eficaces: Haven era una democracia representativa estable con una clase media fuerte, y su política económica consagraba los principios del capitalismo liberal con mínima interferencia gubernamental. Junto con las favorables circunstancias iniciales de la colonia, esta combinación de eficiencia de mercado y gobierno flexible creó un nivel de vida planetario al menos tan alto como el de la mayoría de los planetas Solarianos; se convirtió en la envidia de todos los demás mundos en el Cuadrante Haven.Sin embargo, en el siglo XVII, la economía de Haven, ahora un planeta con varios miles de millones de habitantes, comenzó a flaquear; los ricos se hicieron más ricos y los pobres se hicieron más pobres, y el gobierno comenzó a experimentar con pagos de transferencia y programas de bienestar.                                         Para 1680 PD, Haven había emitido su famosa "Carta de Derechos Económicos", que declaró que todos los ciudadanos tenían un derecho inalienable a un nivel de vida relativo definido por el gobierno. Por lo tanto, se puso en marcha una espiral interminable de inflación, mayores pagos de transferencia y un creciente gasto deficitario. La clase media fue presionada por todos lados, y la clase baja se organizó en los bloques "dolistas", lo que llevó el poder a un nuevo tipo de políticos de máquinas, los gerentes dolistas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022797/HONOVERSO/PLANETAS/heam5qdideud0bemi0pl_isyzio.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsHonorverse = await PlanetHonorverse.find();
    if (allPlanetsHonorverse.length > 0) {
      await PlanetHonorverse.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsHonorverseMap = arrayPlanetsHonorverse.map((planet) => new PlanetHonorverse(planet));
    await PlanetHonorverse.insertMany(planetsHonorverseMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
