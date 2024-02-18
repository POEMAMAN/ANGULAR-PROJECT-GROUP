const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryExpanse = require('../../api/models/models.universo/countries.expanse.model');

const arrayCountriesExpanse = [
  {
    name: 'O.N.U.',
    capital: 'New York',
    foundation_date: 'Siglo 20',
    resume: 'La Organización de las Naciones Unidas (ONU) es una federación soberana de Estados-nación anteriormente independientes que abarca varios territorios de la Tierra y la Luna, dentro del sistema solar y la Vía Láctea.Fue fundada en 1945 después de la Segunda Guerra Mundial como una organización internacional que facilita la cooperación en, entre otras áreas, el derecho internacional. A lo largo del siglo XXI, los gobiernos nacionales de la Tierra estuvieron en una continua disminución del poder administrativo. Después de que el daño causado al ecosistema del planeta alcanzó niveles extremos, las naciones del mundo decidieron finalmente dejar de lado sus intereses individuales y las diferencias internacionales y lograr la unificación global. Posteriormente, el Secretariado de la ONU se convirtió en el líder ejecutivo de toda la humanidad y permaneció así hasta que la colonia marciana obtuvo la independencia de la ONU.                                                              La Secretaría es el centro del poder ejecutivo, integrado por el Secretario General y sus subordinados inmediatos. El Consejo de Seguridad de las Naciones Unidas (CSNU) interactúa con elementos fuera de la esfera de control de la Tierra, como Marte, el Cinturón y los asentamientos en los planetas exteriores, así como las colonias interestelares independientes.                                                                                                               La ONU está asentada en la Tierra en Nueva York, pero también tiene presencia en Luna, en las instalaciones de Nueva Haya en Lovell City. Sus fuerzas armadas están integradas por la Armada de las Naciones Unidas (UNN) y el Cuerpo de Infantería de Marina de las Naciones Unidas (UNMC).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171703/THE%20EXPANSE/PAISES/ONU_gegjot.webp',
  },
  {
    name: 'Mars Congresionnl Republic',
    capital: 'Londres Nova, Mars, SOL',
    foundation_date: 'Siglo 21',
    resume: 'La República Congresional Marciana (MCR) es el órgano de gobierno que gobierna los cuatro mil millones de habitantes de Marte y es una de las dos superpotencias humanas. Su bandera recuerda a Marte y sus dos lunas, Fobos y anteriormente Deimos.La República del Congreso a menudo compite directamente con la Tierra y su órgano rector, las Naciones Unidas. Aunque Marte tiene una población significativamente menor que la Tierra, la resistencia de la gente, como resultado del medio ambiente más duro y los recursos más escasos, hace de Marte un contrapeso digno al poder de la Tierra. La Marina de la República del Congreso de Marte, aunque más pequeña que su contraparte de la ONU, se considera más avanzada tecnológicamente. El poder ejecutivo del MCR está dirigido por el Primer Ministro.                                                                     Como la Tierra, oprimen activamente al Cinturón y a su gente',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171699/THE%20EXPANSE/PAISES/Mars_Congressional_Republic_flags_nqqzoy.webp',
  },
  {
    name: 'O.P.A, Outer Planets Alliance',
    capital: 'Ceres, Belt, SOL',
    foundation_date: 'Siglo 22',
    resume: 'La Alianza de los Planetas Exteriores (APE) es una red de afiliados de préstamos o asociaciones bajo una ideología común. Comenzó su vida como un sindicato o grupo de defensa, luchando por los intereses de los habitantes del Cinturón y a menudo estaba en conflicto directo con la Armada de la Coalición Tierra-Marte de los planetas interiores. Su logotipo es un círculo dividido y facciones distintas tienen celdas basadas en cada estación en el Cinturón, incluyendo dos sitios principales Tycho Station y Ceres Station.                                                                                                 La APE se describe como un movimiento sociopolítico, según la gente que simpatiza con los cinturinos, o una red terrorista, según los planetas interiores. Debido a su estructura descentralizada y a la gama de actividades de los grupos que afirman pertenecer a ella, ambas descripciones tienen más que una pequeña base de hecho. La afirmación de que está descentralizado niega la afirmación de que tiene una sede.                                                                                Incidente de Eros.Mientras que la APE consta de varias células y movimientos asociados, como el grupo de estudiantes Far Horizons Foundation, en el momento en que se lleva a cabo Leviathan Wakes, Fred Johnson ha intentado organizar a aquellos con los que tiene influencia en un gobierno provisional y retener el puesto administrativo principal.Cuando la Tierra se retiró de Ceres, la Alianza de Planetas Exteriores anunció la inclusión de Ceres entre los bienes raíces oficiales de la APE.           Un grupo de unos cien soldados bajo el mando de Fred Johnson, con la ayuda de la tripulación del Rocinante y Miller, son capaces de hacerse cargo de Thoth Station, la estación de gestión para el Proyecto Eros.Más tarde, en un intento de dar a Miller más tiempo para convencer a la protomolécula-infectó a Julie Mao para llevar a Eros a Venus, Jim Holden tiene a Fred redirigir los misiles nucleares de la ONU hacia Eros, y luego almacenarlos después de que las crisis hayan terminado.        Tras los sucesos del incidente de Eros, Fred Johnson, representante de la APE, pronunció un discurso en la conferencia de paz sobre Ceres.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171755/THE%20EXPANSE/PAISES/OPA_logo_dr7wpf.webp',
  },
  {
    name: 'Free Navy',
    capital: 'Ceres',
    foundation_date: 'siglo 23',
    resume: 'La Marina Libre es la rama militar naval de una facción de la Alianza de Planetas Exteriores (OPA). Originalmente, se formó a partir de una organización dirigida por estudiantes. Sus miembros son a veces vistos y/o referidos como "extremistas de la APE", especialmente por el líder de la APE, Fred Johnson                                                                    La Alianza de Planetas Exteriores, o OPA no es tan unificada y sólida como muchos creen. La organización se ha vuelto aún más fracturada a medida que pasa el tiempo y se compite por un liderazgo claro. Mientras Fred Johnson asume la etiqueta externa de "líder" de la APE, varias células y sub-facciones se han escindido del núcleo del grupo APE. Además de varias pequeñas células de base como la Fundación Far Horizons, una organización dirigida por estudiantes que vino de la APE, han surgido células más grandes.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708171712/THE%20EXPANSE/PAISES/Free_navy_show_badge_s5_cdg38s.webp',
  },
  {
    name: 'Protogen',
    capital: 'Earth',
    foundation_date: 'siglo 22',
    resume: 'Protogen era una empresa privada de la Tierra. Su logotipo corporativo era verde y oro, y su lema era "First.Although conocido principalmente como la empresa de seguridad en la estación de Eros, también tenían una gran división de investigación.Después de que Marte descubriera anomalías de silicato durante un estudio de rutina en Phoebe ocho años antes de los eventos de Leviathan Wakes, se acercaron a Protogen como copatrocinador de una instalación de investigación para prever sus hallazgos. Protogen lo reconoció como un agente de origen extraterrestre, y lo llamó la protomolécula.                               Incidente de Eros. La investigación adicional sobre la protomolécula por la división de Protogen para la investigación biológica, encabezada por el vicepresidente ejecutivo Antony Dresden, culminó en el experimento a gran escala conocido como el incidente de Eros. Fueron capaces de mover el equipo antidisturbios de Star Helix Security en Ceres a Eros, en el que Protogen aparentemente había retirado su contrato de seguridad, y colocó a los convictos bajo el empleo de Carne Por la Machina, una organización de títeres.                                                                                                     Para prepararse para el experimento, la tripulación de la nave Protogen Anubis abordó el Scopuli y lo dejó como cebo en el asteroide CA-2216862, y tomó a su tripulación como prisioneros para experimentar con la protomolécula, de la que llevó una muestra. Todos los miembros de ambas tripulaciones sucumbieron a la infección, pero Julie Mao fue capaz de atar la nave al asteroide BA-834024112 y escapar en un transbordador, llevando la infección de vuelta a Eros.                                Protogen fue en este momento una de las corporaciones más poderosas de la Tierra, hasta que la APE atacó sus laboratorios de investigación en la Estación Thoth. Liderada por Fred Johnson, y con la ayuda de la tripulación del Rocinante, la APE tomó el control de Thoth y colocó a los científicos de Protogen en prisiones sin marcar, con la excepción del vicepresidente Dresden, que fue ejecutado por Miller. La última muestra de protomolécula restante de Eros cayó en manos de la APE, dándoles influencia política.                                                                                                                     El conocimiento de la participación de Protogen en el incidente de Eros se hizo público posteriormente cuando se activaron las transmisiones en vivo de Eros ',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172311/THE%20EXPANSE/PAISES/PROTOGEN_lribhr.webp',
  },
  {
    name: 'Transport Union',
    capital: '',
    foundation_date: 'siglo 21',
    resume: 'La Unión de Transporte es una organización conjunta independiente UN/MCR/Belter propuesta por primera vez después de la conclusión del Conflicto de la Marina Libre para regular el tráfico de buques a través del espacio Ring. La fundación de la Unión elevó a los cinturinos de la subclase del sistema Sol sin futuro, a uno de seguridad económica y prosperidad. Esto creó la primera paz real entre el Cinturón y los planetas interiores.                                                               El sistema comercial reestabilizó la economía de Sol y el equilibrio de poder, y mejoró la cooperación internacional entre la ONU y la MCR como estados soberanos. También supervisó el tráfico espacial del anillo para no provocar anomalías en la red del anillo.La Unión de Transporte tenía su sede en la estación de Medina y tenía una serie de estaciones que crecieron para incluir ciudades vacías y estaciones de transferencia.                                                                                 A diferencia de las armadas de Marte y la Tierra, la Unión de Transporte da contratos a los buques armados para cualquier misión/ asignación que participen. En algunos casos, los buques de propiedad independiente reciben contratos de protección obligacion.                                                                                                                    La formación de la Unión de Transporte fue discutida por primera vez en una conferencia multilateral sobre Ceres, propuesta por James Holden. La idea se formalizó allí y fue aceptada por todas las partes implicadas. Michio Pa fue elegido primer presidente de la Unión.                                                                                                                Treinta años después del bombardeo de la Tierra, una vez que el planeta se ha recuperado, la propia Unión ha establecido estaciones fuera de los pozos de gravedad y se abre a los negocios a través de una ceremonia donde el presidente Drummer preside TSL-5, estación de transferencia en Lagrange-5.Antes de la creación de la Unión, las poblaciones del Cinturón se habían reunido con la Alianza de los Planetas Exteriores a través de un sentido compartido de lucha, opresión y, en muchos casos, rebelión. Con el cambio de condiciones provocado por las puertas de anillo y el tratado que estableció la Unión, la base de poder de la APE se disuelve y muchos constituyentes fueron absorbidos en un nuevo papel dentro de la Unión. Los miembros hábiles de la antigua dirección de la APE se valieron de su capital político para una posición en la Unión.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172320/THE%20EXPANSE/PAISES/Transport_Union_Logo_2_o6vsfi.webp',
  },
  {
    name: 'Mao-Kwikowski Mercantile',
    capital: 'Earth',
    foundation_date: 'siglo 22',
    resume: 'Mao-Kwikowski Mercantile ("Mao-Kwik" o "Maokwik") es una compañía propiedad en parte de Jules-Pierre Mao, que se supone es el resultado de una fusión entre su compañía y Kwikowski Mutual Interest Group. Es una de las cincuenta corporaciones más grandes del Cinturón.La corporación fue originalmente una firma legal involucrada en el fracaso de las ciudades en la nube de Venus (que fueron programadas para ser construidas por Tycho Manufacturing and Engineering Concern) hace ocho décadas. La demanda, después de que el proyecto fracasó, duró décadas, y Mao-Kwik ganó una cantidad significativa de dinero, lo que les permitió diversificarse y expandirse, principalmente en el transporte interplanetario.                                      Incidente de Eros.Mao-Kwikowski Mercantile (MKM) fue la empresa matriz de Protogen antes del incidente de Eros. Suministraron casi todo lo que Protogen usó en Eros y para construir la Estación Thoth, como equipos médicos, salas de radiación, la infraestructura de vigilancia y cifrado.                                                                                                                        Estaban al menos parcialmente conscientes de las actividades ilegales de Protogen, ya que la esposa de Mao, Ariadne, intentó antes del incidente de Eros persuadir a su hija Julie de regresar a casa por su seguridad; luego, durante las secuelas, MKM argumentó que no sabían para qué se usaba su equipo, y no se encontró evidencia para implicarlos. Después de que Protogen fue expuesto, entregaron un terabyte de correspondencia confidencial con Protogen al comité de investigación acusado de llegar al fondo de la conspiración, implicando a otros, como Gutmansdottir y Kolp.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172315/THE%20EXPANSE/PAISES/Mao-kwik_sn7zuw.webp',
  },
  {
    name: 'M.C.R.N.',
    capital: 'Mars',
    foundation_date: 'siglo 21',
    resume: 'La Marina de la República Congresional Marciana (MCRN) es la fuerza naval de la República Congresional Marciana (MCR), y la rama más importante de su ejército. Aunque de menor tamaño que la Armada de las Naciones Unidas (UNN), es más avanzada tecnológicamente y generalmente considerada a la par con la UNN.La mayoría de los barcos marcianos más pequeños están construidos en la misma configuración básica, piso por piso desde el cono de transmisión y los reactores. Primero está la sala de máquinas, luego la bahía de carga, seguida de compartimentos especiales, luego las cabinas de la tripulación seguidas por la cocina. Siguiente cubierta es la bahía médica. La cubierta de almacenamiento y esclusa de aire seguir, con la cubierta de comando y piloto en la "parte superior". Los buques grandes (r) tendrán una configuración diferente, con Ops/ CIC posicionados en medio de las naves con cubierta particular como La Cubierta Principal. Bajo empuje, los barcos marcianos son esencialmente rascacielos, con ascensores y escaleras que conectan las diversas cubiertas.                                                  Los barcos MCRN generalmente navegan por separado, o en pares para los barcos más pequeños. Los acorazados de tercera generación están lo suficientemente bien armados como para ser considerados flotas por sí mismos. El orgullo del MCRN se centra en los acorazados de la clase Donnager. Los acorazados de la clase Donnager miden casi 500 metros de largo, o la longitud de un edificio de oficinas de 130 pisos, y se erizan con tubos de torpedo, cañones de defensa y cañones de 90 metros de largo. Sirven como buques insignia para las flotas de MCRN, y son lo suficientemente grandes como para llevar pequeñas fragatas de escolta y destructores de patrulla dentro de ellos.                                                                                    Los acorazados de segunda generación todavía tienen un lugar en el MCRN, sirviendo junto a cruceros de ataque rápido, destructores y fragatas capaces de patrullar todo el sistema Sol. Marte también tiene tecnología avanzada de sigilo, aunque los acorazados y los barcos más grandes normalmente evitan esto a favor del efecto intimidante de una postura de batalla agresiva. Los buques más grandes son básicamente bases móviles, como la clase Donnager, que transportan marines e interrogadores militares ayudados por productos farmacéuticos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172458/THE%20EXPANSE/PAISES/MCRN_logo_ch6oay.webp',
  },
  {
    name: 'Royal Charter Energy',
    capital: 'Earth',
    foundation_date: 'siglo 21',
    resume: 'Royal Charter Energy (RCE) es una corporación de la Tierra con oficinas corporativas en Luna y un grupo de trabajo en Ganymede. Su logotipo de la compañía es rojo y azul.                                                                     Historia.Después de que los anillos fueron activados, RCE se le dio una carta de las Naciones Unidas para la exploración científica en New Terra (RCE carta 24771912-F23). Lanzaron el barco Edward Israel desde Luna al planeta, en la primera expedición real a los nuevos sistemas que los anillos abrieron. El barco transportó a mil personas, entre tripulantes y científicos.                                                                                                                  RCE consideró la expedición de suma importancia, y dio un paquete de beneficios a toda la tripulación, incluyendo un bono de riesgo diario.El plan original era que los equipos científicos estudiaran el planeta durante años antes de que nadie viviera en ellos, pero antes de que Israel pudiera llegar a New Terra, la Barbapiccola y su tripulación de refugiados del incidente de Ganímedes se habían apresurado al planeta, estableció una colonia y comenzó a extraer los recursos locales de litio.                                                                                                                     Cuando llegó Israel, el RCE construyó un campamento al sur de la aldea de los colonos First Landing.RCE ha colonizado otros mundos más allá de los anillos, incluyendo Longdune y Nuevo Egipto',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708172462/THE%20EXPANSE/PAISES/Rcenewterrabadge_txvubi.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesExpanse = await CountryExpanse.find();
    if (allCountriesExpanse.length > 0) {
      await CountryExpanse.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesExpanseMap = arrayCountriesExpanse.map((country) => new CountryExpanse(country));
    await CountryExpanse.insertMany(countriesExpanseMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
