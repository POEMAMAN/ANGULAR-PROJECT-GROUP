const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const CountryDune = require('../../api/models/models.dune/countries.dune.model');

const arrayCountriesDune = [
  {
    name: 'Casa Vernius',
    capital: 'Ix',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Vernius es una de las Grandes Casas de Landsraad , descubierta en la serie anterior Dune escrita por Brian Herbert y Kevin J. Anderson .Los Condes de Vernius están instalados en el planeta Ix . Son los aliados de la Casa Atréides y los rivales de la Casa Richese . Su símbolo es la doble hélice de cobre y púrpura. Fue después de la desgracia de Maison Richèse, que perdió la fortaleza de Arrakis dus y el desierto de Arrakis . Entre los hombres que lo acompañan en su pelea se encuentra Gurney Halleck . Este último escapó del destino de sus compañeros y su líder Dominic al encontrar a los niños Vernius. Kailea y Rhombur están bajo la protección de la Casa Atreides y su Duque Leto .',
    picture:
      'https://res.cloudinary.com/dq_VERNIUS_mruwuv.webp',
  },
  {
    name: 'Casa Moritani',
    capital: 'Grumman',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Moritani es una de las Grandes Casas del ciclo de ficción de Dune de Frank Herbert . Aparece en la serie que precede al ciclo inicial, Before Dune , escrita por Brian Herbert y Kevin J. Anderson .El planeta de origen de esta familia es Grumman . La Casa Moritani dorn Games, 1998), el emperador decidió derrocarlo por su incapacidad para frenar una gran revuelta, y entregó su feudo a un general competente. Sin embargo, el nombre de Grumman permaneció en el planeta y era costumbre dárselo también a los Moritani.',
    picture:
      '',
  },
  {
    name: 'Bene Theilax',
    capital: 'Theilax',
    foundation_date: 'Varios cientos de anños antes de la Jihad Butleriana',
    resume: 'La Bene Tleilax es una compañía ficticia del de fantasía mundo de Dune , creado por Frank Herbert en la novela con el mismo nombre .La Bene Tleilax, cancia: en el Emperador-Dios de Dune , el Bene Tleilax proporciona los gholas de Duncan Idaho a Leto II y, en los dos volúmenes siguientes, The Heretics of Dune y La Maison des Mères , tienen un papel decisivo.',
    picture:
      'https://res.cloudinary.com/dqfaa0CASAS/bene_theilax_azkhq5.png',
  },
  {
    name: 'Casa Harkonen',
    capital: 'Giedi prime',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Harkonnen es una noble familia de ficción después del universo del ciclo Dune creado por el escritor Frank Herbert .Como parte de las Grandes Casas de Landsraad , la Casa Harkonnen está instalada en la fortaleza del planeta Giedi Prime y durante mucho tiempo administra la fortaleza de Arrakis . Los Harkonnen son los enemigos históricos de la Casa Atreides . Sus miembros, como el ba                                                          Después de recuperar a Arrakis de los Atreides y colocar a su sobrino Rabban "la Bestia" allí para obtener el máximo beneficio al "exprimir" el planeta, el barón Vladimir Harkonnen será asesinado por Alia Atreides durante la batalla de Arrakeen . Su heredero, el na- Baron Feyd-Rautha lo sucederá brevemente a la cabeza de la casa, antes de morir en un duelo contra Paul Muad Dib Atreides, que se convertirá en la cabeza del Imperio. Con la muerte de Feyd-Rautha, la Casa Harkonnen se extingue.',
    picture:
      'https://res.cloudinary.com/dqfaaonnen_Griffin.svg_gylgmb.png',
  },
  {
    name: 'Bene Gesserit',
    capital: 'Walach IX',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Orden de la Bene Gesserit es, en la serie de novelas Dune Cycle del escritor Frank Herbert , un grupo de mujeres que ejercen influencia política y religiosa a lo largo de los siglos en la sociedad del Imperio. la humanidad hacia sus propios objetivos.Este grupo, con orígenes y motivaciones misteriosas, se describe como una hermandad cuyos miembros entrenan sus cuerpos y mentes a travo control de la Orden y, posteriormente, al reinado del "Tirano" Leto II Atreides que pone de rodillas a la Bene Gesserit durante más de tres milenios sin erradicarla. , la comunidad de Hermanas prosigue con cautela su programa genético, asegurándose sobre todo de no perder el control de su proyecto para no repetir su error.',
    picture:
      'https://res.cloudinary.com/dqfaBENE_GESSERIT_txubcl.jpg',
  },
  {
    name: 'Casa Corrino',
    capital: 'Kaitan',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Casa Corrino es la primera de las Grandes Casas - poseedor del poder imperial - del ciclo de ficción de Dune , de Frank Herbert .Esta es la casa que reina sobre el Imperio desde el final de Butler Jihad , una guerra que opone a los hombres a las máquinas pensantes y que terminó con la Batalla de Corrin en el 88 ante el Gremio. Kaitain era la capital del Imperio y la Casa Corrino erete a la autoridad de Leto II y cambia su nombre a Harq al Ada. Siendo Leto II estéril, son los descendientes de Ghanima Atreides y Harq al Ada quienes forman el futuro de la Casa Atreides, adscrita al servicio del Emperador-Dios, lugar que ocupan en todos los episodios posteriores del ciclo Dune .',
    picture:
      'https://res.cloudinary.com/dqfaa272nrrino_Lion.svg_qd0ysx.webp',
  },
  {
    name: 'Casa Atreides',
    capital: 'Caladan',
    foundation_date: 'Jihad Butleriana',
    resume: 'La Maison Atreides (“  Casa Atreides  ” en la versión original) es una noble familia ficticia del universo del ciclo Dune del escritor Frank Herbert. La familia Atreid afirma tener orígenes antiguos, que se remontan a la mitología griega . De hecho, el mismo nombreel exuberante planeta oceánico llamado Caladan durante generaciones, y gobiernan su feudo con justicia y honor. No es menos eficaz en la guerra. También ha desarrollado un lenguaje de lucha específico para su casa. Los colores de los Atreidas son el verde y el negro, y su emblema es el halcón rojo.',
    picture:
      'https://res.cloudinary.com/SAS/ATREIDES_ahywnb.webp',
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
