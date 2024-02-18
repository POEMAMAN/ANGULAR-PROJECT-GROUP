const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryOldManWar = require('../../api/models/models.oldManWar/countries.oldManWar.model');

const arrayCountriesOldManWar = [
  {
    name: 'Consu',
    capital: '',
    foundation_date: '',
    resume: 'El Consu es una especie grande parecida al cangrejo que está significativamente más avanzada en comparación con otras de su vecindario. Los Consu son una especie de fanáticos religiosos. Entablan conflictos rituales con otras razas sensibles para "bendecirlas" en su ascensión. La batalla en sí, más que la victoria, es tan importante para los Consu que utilizarán deliberadamente armas inferiores para igualar el nivel tecnológico del enemigo. Todos los Consu tienen múltiples extremidades, incluidos dos brazos especializados con filos cortantes.Otra interpretación podría ser que los Consu no son fanáticos religiosos. Están más allá del ruido de sables entre especies y simplemente les gusta luchar. No es divertido a menos que la otra entidad tenga una oportunidad.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031652/OLD%20MAN%20WARS/RAZAS/CONSU_hdkaqm.png',
  },  
  {
    name: 'Bathunga',
    capital: '',
    foundation_date: '',
    resume: 'Los Bathunga evolucionaron a partir de una ascendencia acuática y, como tales, aún conservan gran parte de la fisiología necesaria para vivir en esos entornos autóctonos. Se cree que esto también ha influido en su visión general de la cultura, la ciencia y la tecnología. Su cuerpo es de color negro intenso, debido principalmente a la necesidad de vivir en un medio acuático y absorber la máxima cantidad de luz, como muchos fitoplancton y laminariales terrestres. A simple vista, sus estructuras corporales parecen carecer de tejido sólido, como huesos o caparazón, sino que están formadas por una capa de músculo regenerativo que adopta un aspecto nudoso similar al de las raíces de los árboles a primera vista, con un conjunto de tres tallos sensores sobre lo que podría identificarse como su cabeza. Estos tallos segregan un líquido lubricante que ayuda a mantener el cuerpo húmedo fuera del agua. Dentro del agua, se cree que también contienen fuertes feromonas que utilizan para comunicarse. Los Bathunga poseen un conjunto de pinzas de langosta dentadas anidadas dentro de una vaina con un gran orificio cerca del tallo principal de su cuerpo para manipular su entorno. Su principal fuente de alimento es el plancton filtrador de los océanos que habitan.                                                                                                     Los Bathunga son un pueblo profundamente pacífico. Su cultura se remonta a cientos de miles de años. Dentro de toda esta historia y experiencia, una gran comprensión de las matemáticas ha sido el cálculo motor y la variante de solución al encontrarse con la Humanidad. A pesar de que su aspecto inicial resulta arquetípicamente aterrador para los humanos, desmiente su naturaleza pacifista. Se sabe que coexisten con entusiasmo con los humanos en varios mundos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031637/OLD%20MAN%20WARS/RAZAS/Bathunga_02_gsmrsr.webp',
  },
  {
    name: 'Vreen',
    capital: '',
    foundation_date: '',
    resume: 'Los vrenn son una de las razas responsables de la fundación del Cónclave. El Vrenn más famoso fue el general Tarsem Gau. El general Gau fue la fuerza impulsora de la fundación del Cónclave. Una vez que el Cónclave emitió su advertencia contra la actividad colonizadora no sancionada, fue Gau quien supervisó personalmente la eliminación de más de treinta colonias infractoras.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031635/OLD%20MAN%20WARS/RAZAS/VREEN_rrdsiz.png',
  },
  {
    name: 'Rraey',
    capital: '',
    foundation_date: '',
    resume: 'Los Rraey son una especie sintiente que ha destruido su propio entorno en busca de recursos. Los humanos no modificados les parecen deliciosos.La altura de los Rraey es bastante parecida a la de los humanos. Los Rraey tienen aspecto aviar y patas que se doblan hacia atrás. Sus poderosas patas son capaces de correr a gran velocidad. Tienen bandas ópticas y auditivas alrededor de la cabeza en lugar de limitarse a dos ojos y dos orejas. Sus cabezas tienen pliegues de piel que irradian calor en lugar de pelo. Sus dedos son más largos y articulados que los de los humanos.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031294/OLD%20MAN%20WARS/RAZAS/RRAEY_s38rki.png',
  },
  {
    name: 'Roanoke',
    capital: '',
    foundation_date: '',
    resume: 'Habitantes con tecnologia primitiva originarios del colonia de Roanoke, similares a los hombres lobos de la mitologia humana',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031291/OLD%20MAN%20WARS/RAZAS/ROANOKE_yzqwsa.png',
  },
  {
    name: 'Obin',
    capital: '',
    foundation_date: '',
    resume: 'Los Obin son una especie que, en lugar de desarrollar la sensibilidad de forma natural, fueron elevados o manipulados por la especie Consu. Antes de ser elevados, los Obin eran una especie omnívora depredadora que habitaba un nicho ecológico marginal.Los Obin son una especie hermafrodita con un andar grácil. Son implacables en la guerra y atacarán al enemigo hasta que hayan conseguido sus objetivos o hayan conquistado por completo a la especie enemiga. No hacen prisioneros y están dispuestos a cometer genocidio.A los Obin no les interesan otras especies inteligentes, a menos que interfieran en sus objetivos o se involucren intencionadamente en los asuntos de los Obin. No declaran la guerra ni firman tratados. Normalmente no mantienen lazos diplomáticos ni se comunican con otras especies.En la lengua de los Obin, la palabra Obin significa "carente". Los Consu elevaron a la especie Obin y la dotaron de inteligencia, pero no de conciencia individual. Los Obin carecen de creatividad y sólo poseen un lenguaje sobrio y utilitario. Son buenos ingenieros y tienen facilidad para adaptar y mejorar tecnologías de otras especies, pero no crean sus propias tecnologías.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031289/OLD%20MAN%20WARS/RAZAS/OBIN_riwuic.png',
  },
  {
    name: 'Human',
    capital: 'Earth',
    foundation_date: 'Antiguedad',
    resume: "La humanidad es el Homo sapiens sapiens, originario de la Tierra. Los protagonistas de la serie Old Man's War son humanos.La humanidad comenzó su vida en el planeta Tierra como habitantes terrestres que respiraban oxígeno. Tras la formación del gobierno de la Unión Colonial, su mundo natal se trasladó oficialmente de la Tierra a Phoenix. La Tierra sigue siendo la fuente principal tanto para los colonos como para los soldados, que crecen sin saber nada de los acontecimientos de la gran galaxia debido a los estrictos controles de información promulgados por la Unión Colonial.El siguiente paso de la evolución ya está ocurriendo. Al igual que la Tierra, la mayoría de las colonias están aisladas unas de otras. Casi todas las personas que nacen en una colonia permanecen allí toda su vida. Los humanos también se adaptan a sus nuevos hogares; ya está empezando culturalmente. Algunos de los planetas colonia más antiguos están empezando a mostrar una deriva lingüística y cultural de sus culturas y lenguas en la Tierra. Dentro de diez mil años se producirá también una deriva genética. Con el tiempo, habrá tantas especies humanas como planetas colonia. La diversidad es la clave de la supervivencia.",
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031287/OLD%20MAN%20WARS/RAZAS/HUMAN_fhljcu.png',
  },
  {
    name: 'Gehaar',
    capital: '',
    foundation_date: '',
    resume: 'Los Gehaar son una raza de alienígenas inteligentes con tentáculos que fueron una de las primeras especies alienígenas en entrar en contacto y aliarse con la Humanidad. Su piel exterior es de color azul, pero puede variar según la edad. Se sabe que consumen su comida utilizando una serie de tentáculos en su cabeza que tienen estructuras similares a nematocistos para inyectar ácidos digestivos en su comida de la que luego beben su comida líquida en sus orificios como "bocas". La mayoría de los observadores han señalado que el proceso puede ser bastante ruidoso. Sus sistemas digestivos parecen lo bastante compatibles como para consumir alimentos y líquidos de la Tierra, lo que sugiere que sus secreciones digestivas son extremadamente eficaces no sólo para descomponer los alimentos, sino también para protegerlos de bacterias y proteínas extrañas potencialmente dañinas.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708031285/OLD%20MAN%20WARS/RAZAS/Gehaar_5_vrlqo9.webp',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allCountriesOldManWar = await CountryOldManWar.find();
    if (allCountriesOldManWar.length > 0) {
      await CountryOldManWar.collection.drop();
      console.log('Paises borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los paises', err);
  })
  .then(async () => {
    const countriesOldManWarMap = arrayCountriesOldManWar.map((country) => new CountryOldManWar(country));
    await CountryOldManWar.insertMany(countriesOldManWarMap);
    console.log('paises insertados');
  })
  .catch((err) => {
    console.log('error insertando los paises', err);
  })
  .finally(() => mongoose.disconnect());
