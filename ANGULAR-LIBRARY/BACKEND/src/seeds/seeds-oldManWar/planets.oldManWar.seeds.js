const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PlanetOldManWar = require('../../api/models/models.oldManWar/planets.oldManWar.model');

const arrayPlanetsOldManWar = [
  {
    name: 'Earth',
    settled: 'Antiguedad',
    population: '120.000.000',
    capital: 'New York',
    location: 'Sol System',
    gravity: '1.00 g',
    country: 'No Alineado',
    moons: '1 (Moon)',
    resume: 'La Union Colonial mantiene a la tierra ocualta y incomunicada con el mundo exterior, y la mantiene como una reserva genetica para sus soldados. Permite a los mayores de 75 emigrar y los convierte en sus soldados. Y a los miembros de las naciones empobrecidas como India emigrar para nutrir sus colonias',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708028356/OldManWar/PLANETAS/terra_mitarrol_laprdx.png',
  },
  {
    name: 'Roanoke',
    settled: '',
    population: '200',
    capital: 'Roanoke',
    location: 'unknown',
    gravity: 'G',
    country: 'Colonial Union',
    moons: '1',
    resume: 'Roanoke es un planeta colonizado por la Unión Colonial con colonos de todos los planetas de la Union.Dos planetas recibieron el nombre de Roanoke. El primero fue una farsa. La Unión Colonial mostró a los líderes de las colonias y a los jefes de grupo un planeta que nunca tuvo intención de colonizar.El segundo era la verdadera colonia. Se ocultó de forma que llamara la atención del Cónclave.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271887/OLD%20MAN%20WARS/PLANETAS/Roanoke_judko2.jpg',
  },
  {
    name: 'Coral',
    settled: '',
    population: '100.000.000',
    capital: 'Coral',
    location: '',
    gravity: 'G',
    country: 'Colonial Union',
    moons: '0',
    resume: 'Coral alberga una colonia humana. Es el quinto planeta colonizado con éxito por la Humanidad, está cubierto en gran parte de agua líquida y presenta grandes formaciones coralinas, de ahí su nombre. Debido a la sensibilidad ecológica de Coral, la colonia humana está estrictamente limitada en términos de tamaño y huella tecnológica. Para ello, invaden y controlan Coral antes de que la Humanidad pueda montar una contraofensiva.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271764/OLD%20MAN%20WARS/PLANETAS/Coral_kl2ptq.jpg',
  },
  {
    name: 'Huckelberry',
    settled: '',
    population: '100.000.000',
    capital: 'Coral',
    location: '',
    gravity: 'G',
    country: 'Colonial Union',
    moons: '2',
    resume: 'Huckleberry era el mundo colonial maduro en el que vivían John Perry y Jane Sagan con su hija adoptiva Zoë Boutin Perry al principio tanto de La última colonia como de El cuento de Zoe.Originalmente fue una colonia de los Ealan que se disputaron durante varios años.Huckleberry tiene dos lunas: Sawyer y Becky.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271587/OLD%20MAN%20WARS/PLANETAS/Huckelberry_s5zjhn.jpg',
  },
  {
    name: 'Phoneix',
    settled: '',
    population: '100.000.000',
    capital: 'Phoenix City',
    location: '',
    gravity: 'G',
    country: 'Colonial Union',
    moons: '0',
    resume: 'Phoenix era la base de la Unión Colonial, a diferencia de la Tierra, el hogar de la Humanidad.Su nombre original era "Nueva Virginia" y su capital original "Clinton". Tras la destrucción de la primera colonia y la retirada de las fuerzas de la Humanidad, fue reconquistada y rebautizada como "Phoenix" para significar la ascensión de la Humanidad en las estrellas.La Unión Colonial prohibió a cualquiera que hubiera estado en Phoenix o en una de las colonias visitar la Tierra. Phoenix fue colonizada antes de la prohibición de los colonos terrícolas ricos y, como tal, contaba con una población francesa bastante numerosa.',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708271704/OLD%20MAN%20WARS/PLANETAS/Phoenix_netxnr.jpg',
  },
];

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allPlanetsOldManWar = await PlanetOldManWar.find();
    if (allPlanetsOldManWar.length > 0) {
      await PlanetOldManWar.collection.drop();
      console.log('PLanetas borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los planetas', err);
  })
  .then(async () => {
    const planetsOldManWarMap = arrayPlanetsOldManWar.map((planet) => new PlanetOldManWar(planet));
    await PlanetOldManWar.insertMany(planetsOldManWarMap);
    console.log('planetas insertados');
  })
  .catch((err) => {
    console.log('error insertando los planetas', err);
  })
  .finally(() => mongoose.disconnect());
