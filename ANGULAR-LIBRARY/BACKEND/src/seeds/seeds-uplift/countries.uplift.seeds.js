const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryUplift = require('../../api/models/models.uplift/countries.uplift.model');

const arrayCountriesUplift = [

  {
    name: 'Qheuens',
    clan: '(ab-Zhosh)',
    foundatorSpecie: 'Zhosh',
    clientSpecie: '',
    resume: 'Tercera de las especies exiliadas en llegar a Jijo, los qheuen son una especie anfibia parecida a los crustáceos, con cinco patas y un cuerpo de caparazón quitinoso, del que se eleva una "cúpula" retráctil en lugar de cabeza, con un "ojo" en forma de cinta que ve en todas direcciones. Existen tres castas de qheuen, identificadas por el color de sus caparazones: rojo, azul y gris, siendo este último tradicionalmente la casta gobernante. Se dice que emigraron a Jijo por razones "más culturales" que las otras especies anteriores, pero los qheuen gobernaron tiránicamente el planeta durante siglos hasta que fueron derrocados por los guerreros urrish, que a su vez aterrorizaron a los humanos tras su llegada; a diferencia de los urs, parecen haber aceptado su derrota con elegancia y ya no conservan mucha tradición guerrera. Los qheuen (al menos en Jijo) tienen nombres descriptivos como "Pincer-Tip", "Blade" o "Knife-Bright Insight", que adoptan en un momento determinado tras su salida ceremonial de una "piscina de eclosión" larvaria. Los qheuen son conocidos como excelentes artesanos, que tallan utensilios de madera con gran habilidad utilizando una lengua raspadora de varias partes que emerge de su parte inferior.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065244/PUPILOS/ESPECIES/Qheuen_cr2pna.webp',
  },
  {
    name: "G'Kek",
    clan: '(ab-Drooli)',
    foundatorSpecie: 'Drooli',
    clientSpecie: '',
    resume: "La primera de las siete razas que se asentaron ilegalmente en el planeta en barbecho Jijo, los G'Kek se han extinguido desde entonces en otros lugares de la galaxia, debido a una campaña de persecución de la que intentaron escapar los exiliados jijoanos. Físicamente, son criaturas con ruedas, con ejes accionados magnéticamente y un par de patas cortas de 'empuje', que poseen un tronco compacto con dos brazos terminados en manos débiles y plumosas, y rematados por cuatro ojos muy sensibles en pedúnculos. La mayor parte de su expresión emotiva la producen estos pedúnculos oculares; juntar dos pedúnculos equivale a encogerse de hombros, mientras que tener los cuatro ojos fijos el uno en el otro connota introspección.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065239/PUPILOS/ESPECIES/G_27kek_vqweuh.webp',
  },
  {
    name: 'Tandu',
    clan: '(ab-Nght6-ul-Acceptor-ul-Episiarch-ul-Incrementor)',
    foundatorSpecie: 'Nght6',
    clientSpecie: 'Acceptor, Episiarch, Incrementor',
    resume: 'Los Tandu son una especie insectoide enjuta. Son capaces de regenerar miembros amputados e incluso cabezas. Si se ve obligado a humillarse conversando de igual a igual con un miembro de una especie alienígena, un Tandu se cortará una o dos de sus propias piernas como forma de purificación ritual. Cuando sus superiores consideran que un Tandu ha fracasado de forma imperdonable, se espera que cometa un "suicidio" cortándose la cabeza (el cuerpo sobrevive y le vuelve a crecer una nueva cabeza, pero presumiblemente la personalidad original muere con el cerebro).',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065229/PUPILOS/ESPECIES/TANDU_a2wkh8.jpg',
  },
  {
    name: 'Neo-Dolphin',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Los delfines son los segundos pupilos de los Humanos, y son los mejores pilotos de la Civilización de las Cinco Galaxias ya que sus orígenes acuáticos les dan unos excelentes instintos para maniobrar en tres dimensiones. También son importantes en la guerra planetaria, porque la mayoría de los galácticos no son conscientes del potencial estratégico del mar. Los Neo-Delfines están en la Fase dos del pupilaje, y recientemente han conseguido su propia Nave estelar, el Streaker (Los descubrimientos del Streaker más tarde causaron gran controversia entre las especies sapientes respiradoras de oxígeno).                                                                                                                           Los Neo-Delfines están en una etapa relativamente temprana de la elevación, y esto tiene varias consecuencias que son importantes en las tramas de las historias: la combinación óptima genética de los Neo-Delfines no se ha determinado todavía, y algunas de las nuevas mezclas genéticas llegan a ser peligrosas para sus colegas cuando están bajo estrés, hay diferencias significativas entre los mayores y los más jóvenes neo-delfines, en particular, a los ejemplares de mayor edad les resulta más difícil hablar, y tienen que luchar contra las tendencias a caer en comportamientos atávicos, como el sueño de la ballena y la fiebre de rescate (que los lleva a embarrar en la playa por su propia voluntad).​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065219/PUPILOS/ESPECIES/NEO-DOLPHINS_tkztvq.jpg',
  },
  {
    name: 'Neo-Chimpanzee',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Los Chimpancés son los primeros pupilos de los Humanos, y son los más completos, ya que son los que más cerca están de la completa Sapiencia. Se encuentran en el segundo grado de pupilaje, aunque comienzan el tercer grado cuando los Gubru invaden Garth.1​ A los Neo-Chimpancés les gusta la música, especialmente la percusión. Ellos se sienten avergonzados por las situaciones que les recuerdan su condición anterior como "animales inteligentes", especialmente la desnudez, trepar a los árboles y sobre todo perder su capacidad de hablar cuando están bajo estrés.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065199/PUPILOS/ESPECIES/NEO-CHIMPAZE_fritlc.jpg',
  },
  {
    name: 'Neo-Dogs',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Los perros han sido mencionados a lo largo de la novela como un posible pupilo de la Humanidad, pero su adopción final no ha sido confirmada.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065209/PUPILOS/ESPECIES/NEO-DOG_u5qlsu.jpg',
  },
  {
    name: 'Neo-Gorilas/Garthlings',
    clan: '(zor-Human-ab-Thennanin-ab-Wortl-ab-Kosh-ab-Rosh-ab-Tothtoon)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Los Neo-Gorilas estaban en una fase muy temprana de elevación, cuando el Instituto Galáctico de Elevaciones ordenó a los seres humanos detener el proceso, ya que pensaban que los humanos no podrían manejar tantos pupilos al mismo tiempo. Algunos humanos de forma secreta han continuado con el proyecto en el pequeño mundo-colonia de Garth. Los Neo-Gorilas tienen algún conocimiento de que están siendo elevados, y eligen a los Thennanin como sus "padrinos" en la ceremonia de ascensión celebrada en Garth. Esto, políticamente es muy importante, ya que los conservaduristas y escrupulosos son una potencia militar, y los Neo-Gorilas los convierten de enemigos a aliados del Clan Terrestre. Después de su adopción por los Thennanin, los Neo-Gorilas se denominan "Garthlings."1​​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065214/PUPILOS/ESPECIES/NEO-GORILA_d3s8e6.jpg',
  },
  {
    name: 'Kiqui',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Descubierta durante el libro Startide Rising, esta especie presapiente se describe como una probable futura raza cliente de la humanidad.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065204/PUPILOS/ESPECIES/KIQUI_grz9rm.jpg',
  },
  {
    name: 'Jophur/Traeki',
    clan: ' (ab-Poa)',
    foundatorSpecie: 'Poa',
    clientSpecie: '',
    resume: "Un organismo comunal compuesto por una pila de anillos de savia, cada uno con una función diferente. Esta raza pacifista fue rediseñada por los Oallie (a petición de los mecenas Poa de los traeki) en los conquistadores Jophur, excepto un grupo fugitivo que se escondió en el planeta Jijo. Bioquímicos naturales que almacenan recuerdos en forma de depósitos cerosos dentro de su núcleo, los traeki (que nunca se escriben con mayúsculas de forma intencionada) subsisten a base de mantillo y prefieren vivir en pantanos; se mueven mal en tierra, ya que sólo poseen pequeñas protuberancias con las que locomoverse, pero se desenvuelven mejor en el agua mediante el uso de aletas (creciendo un nuevo anillo para tal fin en cualquier caso). Tienen múltiples modos de reproducción, de los cuales el más inusual es el llamado 'vlen-budding'; este proceso divide varios de los anillos del individuo en una nueva pila, y afecta tanto al 'padre' en ciernes que puede cambiar su nombre como resultado, negándose a responder al nombre anterior porque ha desechado partes de su 'yo' anterior para formar la descendencia en ciernes, que también recibe un nuevo nombre. Fueron la segunda raza en asentarse ilegalmente en Jijo, en un esfuerzo por escapar de la naturaleza megalómana que se impuso a sus primos jophur; su llegada fue alarmante para los g'kek establecidos, y su presencia casi ahuyentó a los qheuen cuando llegaron, pero ambas razas pronto llegaron a conocer a los traeki como la más pacífica de las razas, incluso cuando ellos mismos temían la llegada de los temibles jophur más que a ninguna otra especie.​",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065194/PUPILOS/ESPECIES/Jophur_iqvpnu.webp',
  },
  {
    name: 'Human',
    clan: '(a-Human ul-Chimpanzee ul-Dolphin ul-Gorila ul-Dog ul-Kiqui',
    foundatorSpecie: 'Humano',
    clientSpecie: 'Neo-Dolphin,Neo-Dog,Neo-Chimpanzee,Kiqui',
    resume: 'El Clan Terrestre es el nombre que toma la Humanidad y sus "Pupilos" (especies animales o vegetales que han sido elevados) en la saga La elevación de los pupilos de David Brin. Reciben dicho nombre ya que todos habitan en el mismo mundo madre, la Tierra.En las novelas la Humanidad es una raza insignificante, sin Tutor conocido (especie responsable de elevarlos a la sapiencia), y con una tecnología en su mayoría primitiva. Los humanos tiene dos pupilos (confirmados), por lo que la denominación formal "a-Human ul-Chimpanzee ul-Dolphin". Sin embargo, sin saberlo, la Humanidad se protegió a sí misma de convertirse en pupila de otra raza más antigua, al elevar otras especies terrestres y convertirse en su tutora.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065189/PUPILOS/ESPECIES/HUMAN_lvnmrw.jpg',
  },
  {
    name: 'Hoon',
    clan: '(ab-Guthatsa-ul-Rousit)',
    foundatorSpecie: 'Guthatsa',
    clientSpecie: 'ul-Rousit',
    resume: 'Una raza conocida en las Cinco Galaxias como burócratas oficiosos. Siguiendo el consejo de un oráculo, un grupo disidente se esconde en Jijo para redescubrir algo que sus patrones les arrebataron. Los Hoon son grandes y vagamente humanoides, con características tanto de reptiles como de mamíferos; en Jijo han desarrollado una profunda afición por la navegación que se da a entender que es un instinto profundamente arraigado, olvidado por sus primos galácticos. Tienen fama de ser pensadores lentos y pacientes, con una cultura sentimental y tradicional, difíciles de enfadar pero singularmente terribles cuando se enfurecen.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065184/PUPILOS/ESPECIES/hoon_quu8eo.jpg',
  },
  {
    name: 'Bururalli',
    clan: '(ab-Nahalli)',
    foundatorSpecie: 'Nahalli',
    clientSpecie: '',
    resume: 'Los Burualli eran carnívoros elevados por los Nahalli. Tras independizarse de sus patrones, se les concedió el planeta Garth. Tras varios cientos de años, exterminaron todas las formas de vida superiores de Garth y volvieron al estado anterior a su ascensión. Llevaron el planeta al borde del colapso y fueron exterminados por los galácticos.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065174/PUPILOS/ESPECIES/Bururali_ybf1wi.webp',
  },
  {
    name: 'Urs',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Criaturas vagamente centauroides de un planeta de praderas volcánicas secas, Urchachka. Poseen un dimorfismo sexual extremo: los machos son lo bastante diminutos como para vivir en las bolsas de tipo marsupial de sus esposas, que pueden tener varios maridos a la vez, expulsando al menos valioso cuando es necesario para hacer sitio a nuevas "larvas". Una hembra adulta de urs tiene varios brazos (las bolsas están debajo de éstos), múltiples colas en forma de látigo y un cuello largo y flexible; la cabeza cónica lleva dos ojos que poseen párpados y ojeras, junto con un tercer ojo central que vigila a los insectos carroñeros mientras la urs duerme. Tienen una fosa nasal y un labio triple hendido, lo que les hace cecear cuando hablan lenguas terrestres (en consecuencia, prefieren las lenguas galácticas incluso cuando hablan con humanos); sus nombres empiezan invariablemente por "ur" o "ul". Son carnívoros exclusivos y tienen una fuerte aversión al agua, por lo que suelen beber sólo la sangre de sus presas. La última de las especies exiliadas en llegar a Jijo antes que los humanos, los urs, guerrearon extensamente con la humanidad antes del establecimiento de una "Gran Paz" entre las seis especies exiliadas restantes; su hostilidad se basaba en numerosos factores, incluyendo el hecho de que la esperanza de vida de los urs es la mitad de la de los humanos, así como diversas fricciones culturales y biológicas.                                                                                        Tras la formación de los Comunes, los urs adquirieron renombre como herreros y mensajeros entre las seis razas de Jijo, pero muchos de ellos siguieron alimentando tendencias belicosas (dirigidas especialmente contra los humanos) y no tardaron en aprovechar la oportunidad de entrar en combate tras la ruptura de la Gran Paz.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065169/PUPILOS/ESPECIES/Urs_r74wms.webp',
  },
  {
    name: 'Tymbrini',
    clan: '(absu-Caltmour-ab-Brma-ab-Krallnith-ul-Tytlal)',
    foundatorSpecie: 'Caltmour',
    clientSpecie: 'ul-Tytlal',
    resume: 'Una de las pocas razas que se alían con los humanos, los Tymbrimi son considerados por muchas de las razas galácticas como embaucadores. Los Tymbrimi tienen una especie cliente, llamada Tytlal, que antes se creía que no se podía elevar. Los Caltmour, la especie que elevó a los Tymbrimi, fueron exterminados en una guerra galáctica.Físicamente, son extremadamente humanos para ser una especie alienígena. Tienen los ojos muy abiertos y un pelaje que les cubre la cabeza en forma de pelo y que termina en un pico de viuda sobre el puente de la nariz. Sus caderas son mucho más estrechas debido a que son marsupiales, dan a luz antes que los humanos y continúan la gestación en una bolsa que contiene un segundo par de mamas. Los codos y las rodillas están situados más cerca del cuerpo. Tienen una multitud de zarcillos que irradian desde sus sienes y que sirven como órganos sensoriales para algún tipo de telepatía descrita como "glifos de empatía", además de irradiar el exceso de calor corporal.Los Tymbrimi tienen glándulas que pueden liberar enzimas para realizar cambios físicos. Esto se denomina "reacción gheer" y se utiliza para aumentar temporalmente la fuerza, la velocidad o lo que la situación requiera. Los Tymbrimi pueden incluso cambiar permanentemente su apariencia con el tiempo, pero el uso excesivo puede llevar al "agotamiento enzimático".Culturalmente, comparten muchas de las reservas que tienen los humanos sobre los efectos de la Biblioteca Galáctica en las culturas en desarrollo. Fue un golpe de suerte que los Tymbrimi fueran la primera especie descubierta por los humanos.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708264833/PUPILOS/ESPECIES/images_ehzoot.jpg',
  },
  {
    name: 'Thenanin',
    clan: '(ab-Wortl-ab-Kosh-ab-Rosh-ab-Tothtoon-ul-Paimin-ul-Rammin-ul-Ynnin-ul-Olumimun-ul-Garthling)',
    foundatorSpecie: 'Wortl',
    clientSpecie: 'ul-Paimin-ul-Rammin-ul-Ynnin-ul-Olumimun-ul-Garthling',
    resume: 'Una especie conocida por su prudente conservadurismo. Los Thennanin se convirtieron en aliados de EarthClan al ser elegidos como patrones por los neogorilas de Garth, también conocidos como Garthlings.​',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708065160/PUPILOS/ESPECIES/THENANIN_u20gzm.jpg',
  },
  {
    name: '',
    clan: '(ab-Human)',
    foundatorSpecie: 'Humano',
    clientSpecie: '',
    resume: 'Descubiecliente de la humanidad.​',
    picture:
      'https://res.cS/KIQUI_grz9rm.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesUplift = await CountryUplift.find();
    if (allCountriesUplift.length > 0) {
      await CountryUplift.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesUpliftMap = arrayCountriesUplift.map((country) => new CountryUplift(country));
    await CountryUplift.insertMany(countriesUpliftMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
