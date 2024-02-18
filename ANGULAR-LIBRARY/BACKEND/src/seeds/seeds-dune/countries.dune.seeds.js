const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryDune = require('../../api/models/models.dune/countries.dune.model');

const arrayCountriesDune = [
  {
    name: 'Casa Vernius',
    capital: 'Ix',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Vernius es una de las Grandes Casas de Landsraad , descubierta en la serie anterior Dune escrita por Brian Herbert y Kevin J. Anderson .Los Condes de Vernius están instalados en el planeta Ix . Son los aliados de la Casa Atréides y los rivales de la Casa Richese . Su símbolo es la doble hélice de cobre y púrpura. Fue después de la desgracia de Maison Richèse, que perdió la fortaleza de Arrakis , que Maison Vernius comenzó a establecerse como tecnológicamente dominante, proporcionando numerosos artículos a todo el imperio.Los condes Vernius, en particular Dominic , también se destacan por su destreza en la lucha contra los enemigos de la Casa Corrino . Así es como la concubina Shando , favorita del emperador Elrood IX, le pide permiso para dejar Kaitan . El emperador acepta, pero al descubrir que Shando se ha unido al Conde Dominic Vernius , se pone celoso y mantiene un odio personal hacia el Conde.                                                                                                                                                                                                La casa Vernius tiene una gran fuerza económica gracias a Ix , su planeta capital, pero esta también fue la causa de su caída. De hecho, los Bene Tleilax antes, como parte del proyecto Amal para sintetizar la especia , se apoderaron de Ix para tomar el control de su tecnología y polígonos industriales. Los miembros de la casa tuvieron que dispersarse y declararse renegados. Shando fue derribado por Sardaukars en un planeta remoto. El renegado Conde Dominic lanzó acciones contra el Emperador desde sus bases secretas en Salusa Secundus y el desierto de Arrakis . Entre los hombres que lo acompañan en su pelea se encuentra Gurney Halleck . Este último escapó del destino de sus compañeros y su líder Dominic al encontrar a los niños Vernius. Kailea y Rhombur están bajo la protección de la Casa Atreides y su Duque Leto .',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026342/DUNE/PAISES%20-%20CASAS/CASA_VERNIUS_mruwuv.webp',
  },
  {
    name: 'Casa Moritani',
    capital: 'Grumman',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Moritani es una de las Grandes Casas del ciclo de ficción de Dune de Frank Herbert . Aparece en la serie que precede al ciclo inicial, Before Dune , escrita por Brian Herbert y Kevin J. Anderson .El planeta de origen de esta familia es Grumman . La Casa Moritani de Grumman, un aliado de los Harkonnen , está dirigida por un vizconde: Hundro Moritani .                                                                                          También es conocida por su conflicto con Maison Ecaz , luego del asesinato de un diplomático de Ecaz por un embajador de Grumman, durante una recepción ofrecida por el Conde Hasimir Fenring y su esposa Margot Fenring en Arrakis . Se inició una guerra entre las dos Casas, Moritani lanzó una incursión contra Ecaz, en violación de la Gran Convención , que resultó en el envío por parte del emperador Padishah Shaddam IV de Sardaukars en Grumman. Se firmó un alto el fuego, pero la Casa Moritani lo violó, atacó a Ecaz y capturó, luego ejecutó al hermano del Archiduque Armand Ecaz , gobernante de la Casa de Ecaz, así como a su hija.En represalia, los candidatos al título de Maestro de Esgrima de Ginaz pertenecientes a la Casa Moritani que no denunciaron los actos deshonrosos de Moritani fueron expulsados ​​de Ginaz, en particular Trin Kronos. Solo quedó Hiih Resser , compañero y amigo de Duncan Idaho . Posteriormente, aún tuvo que unirse a Grumman y ponerse al servicio del vizconde Moritani.                                                                                                                                                                  A menudo se opera la amalgama Grumman / Moritani. En verdad, el nombre de Grumman es el de la Casa original del planeta. Según Dune: Chronicles of the Imperium (Last Unicorn Games, 1998), el emperador decidió derrocarlo por su incapacidad para frenar una gran revuelta, y entregó su feudo a un general competente. Sin embargo, el nombre de Grumman permaneció en el planeta y era costumbre dárselo también a los Moritani.',
    picture:
      '',
  },
  {
    name: 'Bene Theilax',
    capital: 'Theilax',
    foundation_date: 'Varios cientos de anños antes de la Jihad Butleriana',
    resume: 'La Bene Tleilax es una compañía ficticia del de fantasía mundo de Dune , creado por Frank Herbert en la novela con el mismo nombre .La Bene Tleilax, cuya capital Bandalong, no es apreciada por el resto del Imperio y las Casas de Landsraad , por el secretismo que la rodea, provocando sospechas, pero también por la repulsión que provocan sus acciones y manipulaciones (los tanques Axolotl son un ejemplo perfecto). Larga celos de los Atreides para su avance tecnológico, los Bene Tleilax terminaron huyendo del Landsraad bajo la presión de los sacerdotes de Jadacha .                                                                                    Evocaciones simples en los primeros volúmenes de la saga Dune , los tleilaxu cobran cada vez más importancia: en el Emperador-Dios de Dune , el Bene Tleilax proporciona los gholas de Duncan Idaho a Leto II y, en los dos volúmenes siguientes, The Heretics of Dune y La Maison des Mères , tienen un papel decisivo.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026335/DUNE/PAISES%20-%20CASAS/bene_theilax_azkhq5.png',
  },
  {
    name: 'Casa Harkonen',
    capital: 'Giedi prime',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Harkonnen es una noble familia de ficción después del universo del ciclo Dune creado por el escritor Frank Herbert .Como parte de las Grandes Casas de Landsraad , la Casa Harkonnen está instalada en la fortaleza del planeta Giedi Prime y durante mucho tiempo administra la fortaleza de Arrakis . Los Harkonnen son los enemigos históricos de la Casa Atreides . Sus miembros, como el barón Vladimir Harkonnen , son crueles y codiciosos. Su mundo está a su imagen: frío y hostil, los hombres viven allí en cuasi esclavitud en gigantescas ciudades industriales, construidas de tal manera que "aplastan a la gente" , según Duncan Idaho . Al comienzo de la novela Dune , la Casa Harkonnen ocupa el planeta Arrakis en el feudo -siridar (gobernación planetaria) pero, después de haber estado durante mucho tiempo a la cabeza de este planeta único en todo el Imperio, la única fuente de Mezcla en el universo, son agradecidos por el emperador Shaddam IV que cede este feudo a la Casa Atréides . Este cambio es, de hecho, un plan ideado por el Emperador, con la ayuda del barón Vladimir Harkonnen , para deshacerse del duque Leto Atreides , que está empezando a ganar demasiada importancia en el Imperio, amenazando su trono imperial.                                                                                                                                          Los Atreidas ocupan Arrakis solo brevemente, antes de ser desalojados por sorpresa, atacados por las tropas de Harkonnen asistidas por los soldados de élite del emperador (disfrazados de Harkonnen), los Sardaukar . La Casa Atreides es luego destruida y el Duque Leto, entregado a los Harkonnen por un traidor de su propia Casa, muere al suicidarse frente al barón. Sin embargo, Paul Atréides , el heredero del duque, logra escapar con su madre Dame Jessica en el desierto de Arrakis; se presumen muertos.Paul, sometido masivamente en Arrakis a los efectos de la Especia , descubre accediendo a su memoria genética y usando sus poderes de deducción Mentat que él mismo está relacionado con los Harkonnen. De hecho, su madre, Lady Jessica, es la hija oculta del barón Vladimir Harkonnen , Jessica también ignora su fatídica ascendencia. El barón es, por tanto, el abuelo de Paul y Alia Atréides .                                                                                                                      Después de recuperar a Arrakis de los Atreides y colocar a su sobrino Rabban "la Bestia" allí para obtener el máximo beneficio al "exprimir" el planeta, el barón Vladimir Harkonnen será asesinado por Alia Atreides durante la batalla de Arrakeen . Su heredero, el na- Baron Feyd-Rautha lo sucederá brevemente a la cabeza de la casa, antes de morir en un duelo contra Paul Muad Dib Atreides, que se convertirá en la cabeza del Imperio. Con la muerte de Feyd-Rautha, la Casa Harkonnen se extingue.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026333/DUNE/PAISES%20-%20CASAS/Harkonnen_Griffin.svg_gylgmb.png',
  },
  {
    name: 'Bene Gesserit',
    capital: 'Walach IX',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Orden de la Bene Gesserit es, en la serie de novelas Dune Cycle del escritor Frank Herbert , un grupo de mujeres que ejercen influencia política y religiosa a lo largo de los siglos en la sociedad del Imperio. la humanidad hacia sus propios objetivos.Este grupo, con orígenes y motivaciones misteriosas, se describe como una hermandad cuyos miembros entrenan sus cuerpos y mentes a través de años de acondicionamiento físico y mental para obtener poderes y habilidades sobrehumanos. Las acólitas que completan la enseñanza proporcionada por la Bene Gesserit se denominan Reverendas Madres en las filas de la organización.                                                                                                                                                                                       Una organización semimística y una escuela de renombre, la Bene Gesserit y sus Hermanas son conocidas por sus habilidades específicas que han desarrollado y codificado celosamente a lo largo de los siglos, que pueden parecer mágicas para los forasteros, hasta el punto de ser apodadas las Brujas. Gesserit por sus enemigos.Debido a las habilidades únicas de que dispone la Bene Gesserit, es objeto de alianzas con otras fuerzas y mantiene su influencia educando y ofreciendo su enseñanza a las mujeres de las Grandes Casas , e instalando a algunas de sus iniciadas como esposas y concubinas en familias importantes (especialmente las de las Grandes Casas) a su favor. Sin embargo, las Hermanas Bene Gesserit solo son fieles a sí mismas. En efecto, la Bene Gesserit, para lograr sus objetivos y evitar injerencias externas, suele dar la ilusión de ser fiel a otros grupos o individuos, para maniobrarlos mejor. Cada uno de los movimientos de la Bene Gesserit se calcula según un resultado preciso determinado de antemano.                                                                                                                                                                                Uno de los secretos mejor guardados de la Orden es hacer realidad su programa genético milenario, cuyo objetivo es crear el Kwisatz Haderach , el ser supremo, que les dará las claves del pasado y el futuro de la humanidad. acceso ilimitado a la memoria genética de sus antepasados ​​masculinos y femeninos. Sin embargo, tras la inesperada llegada de Kwisatz Haderach en la persona de Paul Atréides que escapa a todo control de la Orden y, posteriormente, al reinado del "Tirano" Leto II Atreides que pone de rodillas a la Bene Gesserit durante más de tres milenios sin erradicarla. , la comunidad de Hermanas prosigue con cautela su programa genético, asegurándose sobre todo de no perder el control de su proyecto para no repetir su error.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026331/DUNE/PAISES%20-%20CASAS/BENE_GESSERIT_txubcl.jpg',
  },
  {
    name: 'Casa Corrino',
    capital: 'Kaitan',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Corrino es la primera de las Grandes Casas - poseedor del poder imperial - del ciclo de ficción de Dune , de Frank Herbert .Esta es la casa que reina sobre el Imperio desde el final de Butler Jihad , una guerra que opone a los hombres a las máquinas pensantes y que terminó con la Batalla de Corrin en el 88 ante el Gremio. Kaitain era la capital del Imperio y la Casa Corrino era temida en todo el antiguo Imperio por sus ejércitos de soldados de la Muerte, los Sardaukars.Estos terroríficos combatientes fueron entrenados en secreto, y sometidos a una verdadera selección natural, en el planeta prisión de Salusa Secundus , que Había sido la cuna de la Casa Corrino antes de que se volviera inhabitable. Tenía fama de ser una de las más hostiles a la vida humana en todo el Imperio.                                                                                                                                               81 Emperadores Padishah del Universo conocido se sucedieron en el Trono del León, hasta el último gobernante de la Casa Corrino, Shaddam IV (10134-10202). El reinado de Shaddam IV estuvo especialmente marcado por la Revuelta de Arrakis que lo obligó a abdicar en favor de una Regencia instituida en nombre de la mayor de sus hijas Irulan , a quien Paul Atreides tomó por esposa. El último emperador Corrino muere en el exilio, en Salusa Secundus.Si la Casa Corrino presidió los destinos del Imperio durante diez milenios, fue derrocada al concluir el primer libro del Ciclo de Dune . Sin embargo, todavía se habla de Maison Corrino en el tercer libro del ciclo Hijos de Dune, donde Wensicia Corrino , tercera hija de Shaddam IV, conspira contra el Imperio de los Atreides.Finalmente, el hijo de Wensicia, Farad n Corrino , nieto de Shaddam IV , se somete a la autoridad de Leto II y cambia su nombre a Harq al Ada. Siendo Leto II estéril, son los descendientes de Ghanima Atreides y Harq al Ada quienes forman el futuro de la Casa Atreides, adscrita al servicio del Emperador-Dios, lugar que ocupan en todos los episodios posteriores del ciclo Dune .',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026306/DUNE/PAISES%20-%20CASAS/Corrino_Lion.svg_qd0ysx.webp',
  },
  {
    name: 'Casa Atreides',
    capital: 'Caladan',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Maison Atreides (“  Casa Atreides  ” en la versión original) es una noble familia ficticia del universo del ciclo Dune del escritor Frank Herbert. La familia Atreid afirma tener orígenes antiguos, que se remontan a la mitología griega . De hecho, el mismo nombre de "Atreides" se refiere a Atreus , el padre de Agamenón . La novela también menciona su afiliación con la ilustre familia de los Atrides de la Antigüedad . Sus integrantes juegan un papel importante en todas las novelas de la serie. La casa Atreides es una de las Casas Mayores (o Grandes Casas) del Imperio, el imperio interestelar feudal que reina sobre el universo conocido en la saga. También es miembro de Landsraad , el parlamento que reúne a las casas mayor y menor del Imperio.                                                                                                                                                                                           Los Atreides han gobernado el exuberante planeta oceánico llamado Caladan durante generaciones, y gobiernan su feudo con justicia y honor. No es menos eficaz en la guerra. También ha desarrollado un lenguaje de lucha específico para su casa. Los colores de los Atreidas son el verde y el negro, y su emblema es el halcón rojo.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708026307/DUNE/PAISES%20-%20CASAS/ATREIDES_ahywnb.webp',
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
