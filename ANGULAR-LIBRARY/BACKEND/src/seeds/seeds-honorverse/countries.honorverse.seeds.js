const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryHonorverse = require('../../api/models/models.honorverse/countries.honorverse.model');

const arrayCountriesHonorverse = [
  {
    name: 'Manticore',
    capital: 'Aterrizaje',
    foundation_date: 'Siglo 24',
    resume: 'El sistema binario Manticore estaba localizado a 512 años luz al norte galáctico del Sistema Solar y la Tierra. Contenía tres planetas habitables: el planeta capital de Manticore, Sphinx y Gryphon. Durante la mayor parte de su historia, el Reino Estelar fue una nación de un solo sistema. Sin embargo, a partir del siglo XIX comenzó a incorporar nuevos sistemas por razones estratégicas, principalmente para controlar los terminales de la Unión del Agujero de Gusano de Manticore, y finalmente a petición de las propias poblaciones y gobiernos de esos sistemas.      º                                                     A partir de 1922, el Reino Estelar de Manticore comprendía 7 sistemas estelares, junto a los protectorados. El Reino Estelar de Manticore consistió en tres sistemas miembros con cinco mundos miembros, tres ubicados en su sistema capital y dos ubicados en asociación con las terminales Trevor’s Star y Lynx del Cruce Manticoran Wormhole respectivamente.                              La existencia de planetas en el Sistema Manticore fue confirmada por el astrónomo Sir Frederick Clarke en 562 PD, pero no fue hasta más tarde que el sistema fue inspeccionado cuando Franchot et Fils de Old Terra envió su nave de reconocimiento, el Suffren, en el primer viaje a Manticore alrededor de 753 PD.Franchot et Fils vendió los derechos del sistema en subasta a la Manticore Colony, Ltd (MC) para 5,75 mil millones EuroDollars.                                                                 La expedición colonial Manticore partió de la Tierra el 24 de octubre de 775 a bordo de la nave de hibernación Jason. La expedición consistió en 125.000 personas con 93.000 adultos y 32.000 niños menores de edad procedentes de diversas regiones de la Tierra. El sesenta por ciento de los colonos de la expedición provenían de Europa Occidental, mientras que el resto provenía de la Federación Norteamericana, el Caribe y una minoría muy pequeña de ucranianos étnicos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022903/HONOVERSO/PAISES/r1ocnpuptlprnywcrq9l_c8ybwl.webp',
  },
  {
    name: 'Grayson',
    capital: 'Austin City',
    foundation_date: 'Siglo 23',
    resume: 'En 314 PD, un grupo de colonos de la Iglesia de la Humanidad Unchained dirigido por el reverendo Austin Grayson dejó la Tierra para el Sistema Estelar de Yeltsin. En 988, el planeta fue colonizado por estos colonos. En ese momento, el sistema y el planeta ni siquiera habían sido encuestados.Los colonos querían alejarse de los horrores de la tecnología, sin embargo, cuando llegaron al planeta, se vieron obligados a utilizar la tecnología para sobrevivir, que incluía la construcción de cúpulas.                                                                                                                      Los Primeros Ancianos destruyeron todos los dispositivos tecnológicos asociados con los viajes espaciales, incluyendo los tubos criogénicos.En 998 PD, Austin Grayson murió. El capitán Hugh Yanakov y Oliver Mayhew convencieron a los colonos que la tecnología no era mala, pero que la forma en que se estaba utilizando en la Tierra was.During la primera generación de colonos, había un promedio de un mortinato en tres. De los sobrevivientes, solo la mitad sobrevivió, mientras que el resto eran demasiado insalubres para vivir. Las mujeres de la colonia tendrían muchos hijos a costa de sus vidas y bienestar emocional para asegurar que la colonia sobreviviría. El número de nacimientos de mujeres superó al de nacimientos de hombres durante este período.Se practicaba la eutanasia, o "enviar a alguien a Dios". Había cementerios de tumbas de niños con solo fechas en ellos, y estos cementerios tuvieron que ser utilizados para cultivar durante el período colonial temprano',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022905/HONOVERSO/PAISES/vgxk2ekxyqsgxstze9jr_u42pbp.png',
  },
  {
    name: 'Haven',
    capital: 'Nuevo Paris',
    foundation_date: 'Siglo 23',
    resume: "La República de Haven, conocida como la República Popular de Haven mientras estaba gobernada por los Legislaturalistas y el Comité de Seguridad Pública (1700-1915 PD), era una nación estelar de múltiples sistemas rodeada por muchas naciones independientes de un solo sistema. El demoníaco 'Havenita' se utilizó para describir a cualquier persona, objeto o concepto asociado con la República. Durante el período en que Haven fue conocida como la República Popular de Haven (y en ocasiones a partir de entonces), también se utilizó el término informal y algo peyorativo 'Peep'.La capital de la República fue Nouveau Paris en el planeta Haven en el Sistema Haven. El Sistema Basilisco, hogar de uno de los terminales del Cruce del Agujero de Gusano Manticore, estaba al 'oeste' de Haven, junto con la Confederación de Silesia y el Imperio Anderman. El Reino Estelar de Manticore estaba al 'suroeste', y la República de Erewhon con su Unión del Agujero de Gusano de Erewhon al 'sur'.              En el momento de la Primera Guerra Havenita-Manticoran, la República de Haven incluía unos 300 sistemas estelares. [1] En el momento de la Segunda Guerra Havenita-Manticoran, Haven tenía más de 75 mundos habitados.A pesar de estar situado a más de ciento cincuenta años luz de la Tierra, Haven se asentó más de un siglo antes de Manticore gracias al desarrollo de la vela Warshawski.                                                                                                                 Haven fue excepcionalmente adecuado para la vida humana, un hecho que, junto con el apoyo financiero de una empresa conjunta de once patrocinadores corporativos con sede en Solarian League que financiaron la misión original de la colonia, aseguró una tasa de crecimiento muy rápida para la nueva colonia.Durante sus primeros siglos de existencia, la República de Haven fue uno de los mundos humanos más prósperos de la galaxia, y fue vista como una especie de 'Atenas interestelar.' Considerando la pobreza de sus ciudadanos menos favorecidos una aberración a la luz de la prosperidad de Haven, el gobierno de Havenite lanzó medidas de bienestar que, después de algunos siglos, se convirtieron en una caricatura de un estado de bienestar.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022901/HONOVERSO/PAISES/gyeymfdpkbdp0nvuqr7q_qdjc1b.webp',
  },
  {
    name: 'Liga Solariana',
    capital: 'Tierra',
    foundation_date: 'mundo natal',
    resume: '',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708108465/HONOVERSO/PAISES/g5msytkjb9pgte0bd0l0_gqlrtb.webp',
  },
  {
    name: 'Imperio Andermani',
    capital: 'Nuevo Berlin',
    foundation_date: 'Siglo 23',
    resume: 'El Imperio Andermani, en algún momento deletreado Imperio Anderman, fue una nación estelar multisistema bajo un gobierno imperial, dirigido por un emperador.Aunque más pequeño que la Liga Solariana o la República de Haven, y tecnológicamente inferior a Manticore, el Andermani fue una presencia formidable. Además de una poderosa armada, poseían un excelente servicio de inteligencia. Aunque gran parte de la población es de origen étnico chino, su idioma oficial es el alemán, y muchos aspectos de su cultura también están influenciados por el alemán.                                             La capital del Imperio Andermani era el planeta Potsdam, anteriormente conocido como Kuan Yin, ubicado en el Nuevo Sistema de Berlín. El Imperio estaba bordeado por la Confederación de Silesia al noreste, el Reino Estelar de Manticore al sureste, Midgard al noroeste y Asgard al suroeste. El Imperio Andermani fue fundado por Gustav Anderman en 1512 PD[2], un mercenario de gran éxito que tenía un astuto sentido empresarial. Durante una de sus operaciones, se encontró con el planeta Kuan Yin, establecido siglos antes por colonos de ascendencia china. El planeta parecía perfecto para la colonización en el estudio inicial, pero tenía un microorganismo nativo que resultó mortal para los cultivos terrestres. Los colonos habían llegado en una subluz "nave durmiente" y por lo tanto no podían regresar o trasladarse a un planeta diferente. Como resultado, la población de Kuan Yin se enfrentaba a la amenaza real de extinción cuando la flota de Anderman se trasladó.                             Anderman trajo microbiólogos e ingenieros genéticos modernos para producir cultivos que eran inmunes a los microorganismos, salvando a la gente de Kuan Yin, que estaba muy dispuesto a aceptarlo como emperador. También abrazaron la "herencia prusiana" de Gustav [3]: el planeta fue renombrado oficialmente Potsdam. Con esta base de población altamente leal, el Imperio Andermani nació en el siglo XVI.Tras la muerte de Gustavo I en 1546, su hijo Andrés asumió el trono como Gustavo II. Durante su primer año como emperador, sofocó una rebelión en el Sistema Tomlinson, así como un intento de golpe de su media hermana, Florence Hansen. Ese mismo año, cimentó una amistad con el Reino Estelar de Manticore a través de interacciones con Travis y Lisa Long y el medio hermano de Travis, Gavin, el Barón Winterfall.                                                                        A través de los siglos desde su fundación, el Imperio lentamente adquirió más planetas. Aunque técnicamente expansionista, solo anexó sistemas que estaban de acuerdo en unirse, ya sea por el beneficio económico y militar de unirse al Imperio, o porque estaban en algún tipo de problema. Esto estaba en contraste con la Liga Solariana o la República Popular de Haven, que rutinariamente diseñaba situaciones para apoderarse de los sistemas. Una vez que un sistema se unió al Imperio, generalmente se le permitía una autonomía considerable. Tenía una merecida reputación de gobernantes extraordinariamente competentes, aunque muchos de ellos eran algo excéntricos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022900/HONOVERSO/PAISES/ivbdfx9wzmdypt2vtjvr_nt5g1r.jpg',
  },
  {
    name: 'Confederacion Silesiana',
    capital: 'Silesia',
    foundation_date: 'Siglo 23',
    resume: 'La Confederación de Silesia era una nación estelar multisistema al lejano norte galáctico de la Liga Solariana. Era un lugar donde los conflictos de bajo nivel en curso eran la norma en lugar de la excepción.La Confederación, que consta de alrededor de sesenta sistemas estelares habitados, divididos en nueve sectores, estaba bordeada por el Imperio Anderman y la República Sidemore al suroeste galáctico, y el Sistema Basilisco al noreste.Tenía aproximadamente 105 años de diámetro y un volumen de alrededor de 600.000 años luz cúbicos.                                                                       Establecida como una confederación ilustrada de gobiernos planetarios, a principios del siglo XIX y principios del siglo XX, Silesia era una miserable mezcla de gobiernos corruptos, mercenarios a sueldo, piratería, insurrección y oportunidades comerciales.Debido a la extensa piratería, Silesia se convirtió en el campo de pruebas donde el Imperio Andermani y el Reino Estelar de Manticore enviaron a sus oficiales y tripulaciones recién acuñados a patrullar. En 1900, la Confederación fue considerada el objetivo estratégico para la expansión de la República Popular de Haven.                                       En 1921, la Confederación fue anexada por el Imperio Andermani y el Reino Estelar de Manticore. El gobierno central de Silesia asignó sus poderes a los gobiernos de Andermani y Manticoran, pero los gobiernos del sistema se mantuvieron. A cambio de un cambio de régimen no violento, el liderazgo de Silesia fue amnistiado por sus crímenes y sobornado para que dimitiera',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022909/HONOVERSO/PAISES/xle5dkqk5snlnnrkmwpx_gf9owz.png',
  },
  {
    name: 'Republica de Erewhon',
    capital: 'Erewhon',
    foundation_date: 'Siglo 23',
    resume: 'Erewhon fue establecido originalmente por un grupo de exitosos criminales interestelares. Inicialmente, el planeta y sus empresas fueron utilizados como un frente para el crimen organizado. En ese momento, un criminal exitoso era un criminal honorable, lo que llevó al desarrollo de un código de honor que existió en la era moderna. Junto con el crecimiento de la población planetaria, las industrias de apoyo y el aumento del comercio legítimo, el gobierno se convirtió en un cuerpo legítimo. Con la derrota de la Liga Solariana en 1923 PD, la República optó por alinearse con el vecino Sector Maya y fue miembro fundador del nuevo Sector Autónomo Regional Maya.                                                                    Durante la Primera Guerra Havenita-Manticoran, Erewhon fue miembro de la Alianza Manticoran. Mientras que el gobierno de Cromarty tenía buenas relaciones con Erewhon, el gobierno de High Ridge tensó las relaciones hasta el punto en que Erewhon se retiró de la Alianza al final de las hostilidades abiertas. La deserción de Erewhon a los Havenitas fue un desastre para el Reino de las Estrellas, ya que la Armada Erewhon era la tercera más grande de la Alianza, y había recibido importantes transferencias de tecnología de Manticore.                                                                                    El gobierno central de Rewhon era considerablemente menos formal que el de la mayoría de las otras naciones. Si bien había agencias centrales que manejaban los servicios y deberes (como la Marina), las políticas se determinaban de maneras que reflejaban los orígenes de Erewhon. Había un pequeño número de poderosas familias gobernantes, aunque solo un subconjunto de ellas podía ser considerado en el poder en un momento dado. Las luchas por el poder eran relativamente frecuentes, aunque no violentas, con tratos a menudo realizados en el equivalente de cuartos traseros llenos de humo.                                 Aunque formalmente era una república, Erewhon estaba controlada por un grupo de familias poderosas que tomaban todas las decisiones, usando el gobierno oficial de Erewhonese como fachada. El Jefe de Estado oficial de la República de Erewhon era el Presidente, que por lo general era el jefe de una de las familias actualmente en la parte superior del powe Erewhonese',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022907/HONOVERSO/PAISES/vpxclwngznkqqxzuwrko_hxhy0o.png',
  },
  {
    name: 'Republica de Monica',
    capital: 'Monica',
    foundation_date: 'Siglo 23',
    resume: 'La República de Mónica o Unión de Mónica fue una nación estelar ubicada en el Sistema Mónico, en el sur galáctico de los sistemas estelares Talbott Cluster.wo comprendidos por la República de Mónica - el Sistema Taylor deshabitado[1] y el Sistema Mónica capital. El Sistema Mónica incluía un primario G3, el planeta habitado de Mónica y el cinturón de asteroides Eroica con un radio orbital medio de aproximadamente diecinueve minutos luz. Mónica estaba menos desarrollada que Rembrandt. Su principal recurso eran los mercenarios, proporcionados a la Oficina de Seguridad Fronteriza. También prestó servicios a las empresas Jessyk Combine, Manpower Incorporated y Mesa.                                                                        En términos de población e industria, la República de Mónica era efectivamente un sistema político único. El Sistema Taylor tenía un par de planetas habitables, pero nadie vivía en ellos. Alrededor de la mitad del área terrestre de cada uno de los planetas fue entregada por el padre de Tyler como premios a sus partidarios, pero nunca se hizo nada para desarrollarlos, principalmente porque no había una base técnica suficiente, recursos financieros ni población para desarrollar dos mundos completamente vírgenes, así como no había habido realmente ninguna presión para hacerlo. Hubo algunas operaciones de minería de asteroides muy pequeñas y un puñado de colonos en el sistema.Mónica era una república gobernada por un presidente (hereditario de facto) de la ciudad capital de Estelle. Alrededor de 1920, Roberto Tyler ocupó ese cargo.  Su jefe de inteligencia en 1921 fue Alfonso Higgins.                                                                                                           En 1920, la OFS y Jessyk suministraron a Mónica un total de catorce cruceros de batalla de clase Indefatigable, que fueron reacondicionados en la estación de Eroica para formar una fuerza que pudiera tomar el control de la terminal de Lynx de la unión de Manticore.Antes de que la operación pudiera llevarse a cabo, doce de los nuevos cruceros de batalla fueron destruidos por el capitán Aivars Terekhov y su "escuadrón" en la Batalla de Mónica en 1921 PD. Siete días más tarde, el contralmirante Augustus Khumalo llegó con el superdreadnought HMS Hercules y varios otros buques RMN, obligando a los Monicans a rendirse.A cambio de su continua existencia, la República de Mónica firmó un pacto permanente de no agresión con el Reino Estelar de Manticore, rindiéndoles los dos cruceros de batalla supervivientes y toda evidencia de la participación de Manpower, Technodyne y Jessyk Combine en su intento de apoderarse de la terminal de Lynx.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022898/HONOVERSO/PAISES/flfu23xxk13eg6inoqxu_pgbaxb.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesHonorverse = await CountryHonorverse.find();
    if (allCountriesHonorverse.length > 0) {
      await CountryHonorverse.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesHonorverseMap = arrayCountriesHonorverse.map((country) => new CountryHonorverse(country));
    await CountryHonorverse.insertMany(countriesHonorverseMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
