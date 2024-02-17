const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Book = require('../api/models/book.model');

const DB_URL = process.env.DBURL;

const arrayBooks = [
  {
    title: 'The Last Question',
    publication_year: 1956,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978163/APISCIFI/BOOKS/The%20Last%20Question.jpg',
  },
  {
    title: 'NigthFall',
    publication_year: 1941,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977496/APISCIFI/BOOKS/NigthFall.jpg',
  },
  {
    title: 'Nemesis',
    publication_year: 1989,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977851/APISCIFI/BOOKS/Nemesis.jpg',
  },
  {
    title: 'The gods themselves',
    publication_year: 1972,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977944/APISCIFI/BOOKS/Los%20Propios%20Dioses.jpg',
  },
  {
    title: 'I, Robot',
    publication_year: 1950,
    saga: 'Robot',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701976160/APISCIFI/BOOKS/Yo%20Robot.jpg',
  },
  {
    title: 'Bicentenary Man',
    publication_year: 1976,
    saga: 'Robot',
    saga_index: null,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978061/APISCIFI/BOOKS/El%20Hombre%20Bicentenario.jpg',
  },
  {
    title: 'Positronic Man',
    publication_year: 1992,
    saga: 'Robot',
    saga_index: null,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977930/APISCIFI/BOOKS/Positronic%20Man.jpg',
  },
  {
    title: 'The Complet Robot',
    publication_year: 1982,
    saga: 'Robot',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978073/APISCIFI/BOOKS/El%20Robot%20Completo.jpg',
  },
  {
    title: 'Robot´s Dreams',
    publication_year: 1986,
    saga: 'Robot',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977980/APISCIFI/BOOKS/Sue%C3%B1os%20de%20Robot.jpg',
  },
  {
    title: 'The Stars, Like Dust,',
    publication_year: 1951,
    saga: 'Galactic Empire Series',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075691/APISCIFI/BOOKS/eNLAaRENAeSTELAR_jciavn.jpg',
  },
  {
    title: 'The Currents of Space',
    publication_year: 1952,
    saga: 'Galactic Empire Series',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075615/APISCIFI/BOOKS/LasCorientsDelEspacio_zchpe5.jpg',
  },
  {
    title: 'Pebble in the Sky',
    publication_year: 1950,
    saga: 'Galactic Empire Series',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978277/APISCIFI/BOOKS/Un%20Guijarro%20En%20el%20Cielo.jpg',
  },
  {
    title: 'Blind Alley',
    publication_year: 1945,
    saga: 'Galactic Empire Series',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075759/APISCIFI/BOOKS/BlindAlley_rchnry.jpg',
  },
  {
    title: 'Robot´s Visions',
    publication_year: 1990,
    saga: 'Robot',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701979876/APISCIFI/BOOKS/Visiones%20de%20Robots.jpg',
  },
  {
    title: 'Foundation',
    publication_year: 1951,
    saga: 'Foundation Trilogy',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977725/APISCIFI/BOOKS/Fundacion.jpg',
  },
  {
    title: 'Foundation and Empire',
    publication_year: 1952,
    saga: 'Foundation Trilogy',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977697/APISCIFI/BOOKS/Fundacion%20y%20Imperio.jpg',
  },
  {
    title: 'Second Foundation',
    publication_year: 1953,
    saga: 'Foundation Trilogy',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977991/APISCIFI/BOOKS/SegundaFundacion.jpg',
  },
  {
    title: 'The Caves of Steel',
    publication_year: 1954,
    saga: 'Robot Series',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980142/APISCIFI/BOOKS/Bovedas%20de%20Acero.jpg',
  },
  {
    title: 'The Naked Sun',
    publication_year: 1957,
    saga: 'Robot Series',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978180/APISCIFI/BOOKS/El%20Sol%20Desnudo.jpg',
  },
  {
    title: 'The Robots of Dawn',
    publication_year: 1983,
    saga: 'Robot Series',
    saga_index: 3,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701976712/APISCIFI/BOOKS/Los%20Robots%20del%20Amanecer.jpg',
  },
  {
    title: '	Robots and Empire',
    publication_year: 1985,
    saga: 'Robot Series',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977968/APISCIFI/BOOKS/Robots%20e%20Imperio.jpg',
  },
  {
    title: "Foundation's Edge",
    publication_year: 1982,
    saga: 'Foundation Trilogy',
    saga_index: 4,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980274/APISCIFI/BOOKS/Los%20Limites%20de%20la%20Fundacion.jpg',
  },
  {
    title: 'Foundation and Earth',
    publication_year: 1986,
    saga: 'Foundation Trilogy',
    saga_index: 5,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977683/APISCIFI/BOOKS/Fundacion%20y%20Tierra.jpg',
  },
  {
    title: 'The End of the Eternity',
    publication_year: 1987,
    saga: 'Foundation Trilogy',
    saga_index: 6,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977628/APISCIFI/BOOKS/The%20End%20of%20the%20Eternity.jpg',
  },
  {
    title: '	Forward the Foundation',
    publication_year: 1993,
    saga: 'Foundation Trilogy',
    saga_index: 6,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978269/APISCIFI/BOOKS/Hacia%20la%20Fundacion.jpg',
  },
  {
    title: 'Prelude to Foundation',
    publication_year: 1988,
    saga: 'Foundation Trilogy',
    saga_index: 0,
    universe: 'Foundation',
    author: 'Isaac Asimov',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977712/APISCIFI/BOOKS/Preludio%20a%20la%20Fundacion.jpg',
  },
  {
    title: "Foundation's Fear",
    publication_year: 1997,
    saga: 'Foundation Secound Trilogy',
    saga_index: 1,
    universe: 'Foundation',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075894/APISCIFI/BOOKS/ElTemorDeLaFundacion_aelhuy.jpg',
  },
  {
    title: 'Foundation and Chaos',
    publication_year: 1998,
    saga: 'Foundation Secound Trilogy',
    saga_index: 2,
    universe: 'Foundation',
    author: 'Greg Bear',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708075642/APISCIFI/BOOKS/FundacionYCaos_wolkca.jpg',
  },
  {
    title: "	Foundation's Triumph",
    publication_year: 1999,
    saga: 'Foundation Secound Trilogy',
    saga_index: 3,
    universe: 'Foundation',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978124/APISCIFI/BOOKS/El%20Triunfo%20de%20la%20Fundacion.jpg',
  },
  {
    title: 'The Practice Effect',
    publication_year: 1984,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978216/APISCIFI/BOOKS/Efecto%20Practica.jpg',
  },
  {
    title: 'Earth',
    publication_year: 1990,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977603/APISCIFI/BOOKS/Earth.jpg',
  },
  {
    title: 'Startide Rising',
    publication_year: 1983,
    saga: 'Uplift Saga',
    saga_index: 2,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978052/APISCIFI/BOOKS/Marea%20Estelar.jpg',
  },
  {
    title: 'The Uplift War',
    publication_year: 1987,
    saga: 'Uplift Saga',
    saga_index: 3,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980615/APISCIFI/BOOKS/Uplift%20WAr.jpg',
  },
  {
    title: 'Brightness Reef',
    publication_year: 1995,
    saga: 'Uplift Trilogy',
    saga_index: 1,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977449/APISCIFI/BOOKS/Brightness%20Reef.jpg',
  },
  {
    title: "Infinity's Shore",
    publication_year: 1996,
    saga: 'Uplift Trilogy',
    saga_index: 2,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977752/APISCIFI/BOOKS/Infinitys%20Shore.jpg',
  },
  {
    title: "Heaven's Reach",
    publication_year: 1998,
    saga: 'Uplift Trilogy',
    saga_index: 3,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701980733/APISCIFI/BOOKS/Heavens%20Reach.jpg',
  },
  {
    title: 'Sundiver',
    publication_year: 1980,
    saga: 'Uplift Trilogy',
    saga_index: 0,
    universe: 'Uplift',
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978004/APISCIFI/BOOKS/NaveganteSolar.jpg',
  },
  {
    title: 'The Postman',
    publication_year: 1985,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'David Brin',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978205/APISCIFI/BOOKS/El%20Cartero.jpg',
  },
  {
    title: 'Leviathan Wakes',
    publication_year: 2011,
    saga: 'The Expanse',
    saga_index: 1,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977781/APISCIFI/BOOKS/Leviathan%20Wakes.jpg',
  },
  {
    title: "Caliban's War",
    publication_year: 2012,
    saga: 'The Expanse',
    saga_index: 2,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977465/APISCIFI/BOOKS/La%20Guerra%20de%20Caliban.jpg',
  },
  {
    title: "Abaddon's Gate",
    publication_year: 2013,
    saga: 'The Expanse',
    saga_index: 3,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701975544/APISCIFI/BOOKS/La%20puerta%20de%20Abadon.jpg',
  },
  {
    title: 'Cibola Burn',
    publication_year: 2014,
    saga: 'The Expanse',
    saga_index: 4,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977480/APISCIFI/BOOKS/La%20quema%20de%20Cibola.jpg',
  },
  {
    title: 'Nemesis Games',
    publication_year: 2015,
    saga: 'The Expanse',
    saga_index: 5,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701981066/APISCIFI/BOOKS/Los%20Juegos%20de%20Nemesis.jpg',
  },
  {
    title: "Babylon's Ashes",
    publication_year: 2016,
    saga: 'The Expanse',
    saga_index: 6,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701981339/APISCIFI/BOOKS/Babylon%20Ashes.jpg',
  },
  {
    title: 'Persepolis Rising',
    publication_year: 2017,
    saga: 'The Expanse',
    saga_index: 7,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977918/APISCIFI/BOOKS/Persepolis%20Rising.jpg',
  },
  {
    title: "Tiamat's Wrath",
    publication_year: 2019,
    saga: 'The Expanse',
    saga_index: 8,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978251/APISCIFI/BOOKS/La%20Colera%20de%20Tiamat.jpg',
  },
  {
    title: 'Leviathan Falls',
    publication_year: 2022,
    saga: 'The Expanse',
    saga_index: 9,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977792/APISCIFI/BOOKS/Leviathan%20Falls.jpg',
  },
  {
    title: 'Auberon',
    publication_year: 2022,
    saga: 'The Expanse',
    saga_index: null,
    universe: 'The Expanse',
    author: 'James S. A. Corey',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977123/APISCIFI/BOOKS/Auberon.jpg',
  },
  {
    title: "Old Man's War",
    publication_year: 2005,
    saga: "Old Man's War Series",
    saga_index: 1,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978190/APISCIFI/BOOKS/The%20Old%20Guard.jpg',
  },
  {
    title: 'The Ghost Brigades',
    publication_year: 2006,
    saga: "Old Man's War Series",
    saga_index: 2,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978134/APISCIFI/BOOKS/Las%20Brigadas%20Fantasmas.jpg',
  },
  {
    title: 'The Last Colony',
    publication_year: 2007,
    saga: "Old Man's War Series",
    saga_index: 3,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978172/APISCIFI/BOOKS/La%20Colonia%20Perdida.jpg',
  },
  {
    title: "Zoe's Tale",
    publication_year: 2008,
    saga: "Old Man's War Series",
    saga_index: 4,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978330/APISCIFI/BOOKS/Zoes%20Tale.jpg',
  },
  {
    title: 'The Human Division',
    publication_year: 2013,
    saga: "Old Man's War Series",
    saga_index: 5,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978144/APISCIFI/BOOKS/The%20Human%20Division.jpg',
  },
  {
    title: 'The End of All Things',
    publication_year: 2015,
    saga: "Old Man's War Series",
    saga_index: 6,
    universe: "Old Man's War",
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978103/APISCIFI/BOOKS/The%20end%20of%20All%20Things.jpg',
  },
  {
    title: 'Redshirts',
    publication_year: 2012,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977956/APISCIFI/BOOKS/Redshirts.jpg',
  },
  {
    title: 'Fuzzy Nation',
    publication_year: 2011,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977738/APISCIFI/BOOKS/Fuzy%20Nation.jpg',
  },
  {
    title: 'The Dispatcher',
    publication_year: 2016,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978093/APISCIFI/BOOKS/The%20Dispatcher.jpg',
  },
  {
    title: 'Starter Villain',
    publication_year: 2023,
    saga: null,
    saga_index: null,
    universe: null,
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978028/APISCIFI/BOOKS/Starter%20Villain.jpg',
  },
  {
    title: 'Lock In',
    publication_year: 2014,
    saga: 'Lock In Series',
    saga_index: 1,
    universe: 'Lock In',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076141/APISCIFI/BOOKS/LockIn_s1rkug.jpg',
  },
  {
    title: 'Head On',
    publication_year: 2018,
    saga: 'Lock In Series',
    saga_index: 2,
    universe: 'Lock In',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076129/APISCIFI/BOOKS/HeadOn_isemfz.jpg',
  },
  {
    title: 'Unlocked',
    publication_year: 2014,
    saga: 'Lock In Series',
    saga_index: 3,
    universe: 'Lock In',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076089/APISCIFI/BOOKS/Unlocked_cxt7po.jpg',
  },
  {
    title: 'The Collapsing Empire',
    publication_year: 2017,
    saga: 'The Interdependency Series',
    saga_index: 1,
    universe: 'The Interdependency',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076206/APISCIFI/BOOKS/TheCollapsingEmpire_fjyehs.jpg',
  },
  {
    title: 'The Consuming Fire',
    publication_year: 2018,
    saga: 'The Interdependency Series',
    saga_index: 2,
    universe: 'The Interdependency',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978081/APISCIFI/BOOKS/The%20Consuming%20Fire.jpg',
  },
  {
    title: 'The Last Emperox',
    publication_year: 2020,
    saga: 'The Interdependency Series',
    saga_index: 3,
    universe: 'The Interdependency',
    author: 'John Scalzi',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701978153/APISCIFI/BOOKS/The%20Last%20Emperox.jpg',
  },
  {
    title: 'Dune',
    publication_year: 1965,
    saga: 'Dune Chronicles',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977527/APISCIFI/BOOKS/Dune.jpg',
  },
  {
    title: 'Dune Messiah',
    publication_year: 1969,
    saga: 'Dune Chronicles',
    saga_index: 2,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701981977/APISCIFI/BOOKS/Dune%2C%20el%20Mesias.jpg',
  },
  {
    title: 'Children of Dune',
    publication_year: 1976,
    saga: 'Dune Chronicles',
    saga_index: 3,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977586/APISCIFI/BOOKS/Dune%2C%20Hijos%20de.jpg',
  },
  {
    title: 'God Emperor of Dune',
    publication_year: 1981,
    saga: 'Dune Chronicles',
    saga_index: 4,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977510/APISCIFI/BOOKS/Dune%2C%20Dios%20Emperador%20de.jpg',
  },
  {
    title: 'Heretics of Dune',
    publication_year: 1984,
    saga: 'Dune Chronicles',
    saga_index: 5,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977557/APISCIFI/BOOKS/Dune%2C%20Herejes%20de.jpg',
  },
  {
    title: 'Chapterhouse: Dune',
    publication_year: 1985,
    saga: 'Dune Chronicles',
    saga_index: 6,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701977543/APISCIFI/BOOKS/Dune%2C%20Casa%20Capitular.jpg',
  },
  {
    title: 'Dune: House Atreides',
    publication_year: 1999,
    saga: 'Prelude to Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982135/APISCIFI/BOOKS/Dune%20la%20Casa%20Atreides.jpg',
  },
  {
    title: 'Dune: House Harkonnen',
    publication_year: 2000,
    saga: 'Prelude to Dune',
    saga_index: 2,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982181/APISCIFI/BOOKS/Dune%20la%20Casa%20Harkonen.jpg',
  },
  {
    title: 'Dune: House Corrino',
    publication_year: 2001,
    saga: 'Prelude to Dune',
    saga_index: 3,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982240/APISCIFI/BOOKS/Dune%20la%20Casa%20Corrino.jpg',
  },
  {
    title: 'Dune: The Butlerian Jihad',
    publication_year: 2002,
    saga: 'Legends of Dune',
    saga_index: 1,
    universe: 'Dune',
    author: 'Frank Herbert',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1701982299/APISCIFI/BOOKS/Dune:%20The%20Butlerian%20Jihad.jpg',
  },
  {
    title: 'In the Ocean of Night',
    publication_year: 1977,
    saga: 'The Galactic Center Saga',
    saga_index: 1,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090740/APISCIFI/BOOKS/In_the_Ocean_of_Night_ix35a4.jpg',
  },
  {
    title: 'Across the Sea of Suns',
    publication_year: 1984,
    saga: 'The Galactic Center Saga',
    saga_index: 2,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090782/APISCIFI/BOOKS/Across_the_Sea_of_Suns_gyxfoz.jpg',
  },
  {
    title: 'Great Sky River',
    publication_year: 1987,
    saga: 'The Galactic Center Saga',
    saga_index: 3,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090731/APISCIFI/BOOKS/Great_Sky_River_aoi5sh.jpg',
  },
  {
    title: 'Tides of Light',
    publication_year: 1989,
    saga: 'The Galactic Center Saga',
    saga_index: 4,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090761/APISCIFI/BOOKS/wueecdoyorj5csifzgxk.jpg',
  },
  {
    title: 'Furious Gulf',
    publication_year: 1994,
    saga: 'The Galactic Center Saga',
    saga_index: 5,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090861/APISCIFI/BOOKS/FuriusGulf_zf6kki.jpg',
  },
  {
    title: 'Sailing Bright Eternity',
    publication_year: 1995,
    saga: 'The Galactic Center Saga',
    saga_index: 6,
    universe: 'Galactic Center',
    author: 'Gregory Benford',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090750/APISCIFI/BOOKS/Sailing_Bright_Eternity_ee00sg.jpg',
  },
  {
    title: "Midshipman's Hope",
    publication_year: 1994,
    saga: 'Seafort Saga',
    saga_index: 1,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089688/APISCIFI/BOOKS/Midshipmans_Hope_vultrn.jpg',
  },
  {
    title: "Challenger's Hope",
    publication_year: 1995,
    saga: 'Seafort Saga',
    saga_index: 2,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089661/APISCIFI/BOOKS/Challenger_s_Hope_j21ps4.jpg',
  },
  {
    title: "Prisoner's Hope",
    publication_year: 1995,
    saga: 'Seafort Saga',
    saga_index: 3,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089707/APISCIFI/BOOKS/Prisioner_s_Hope__omjgfq.jpg',
  },
  {
    title: "Fisherman's Hope",
    publication_year: 1996,
    saga: 'Seafort Saga',
    saga_index: 4,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089670/APISCIFI/BOOKS/Fisherman_s_Hope_y8z7pb.jpg',
  },
  {
    title: 'Voices of Hope',
    publication_year: 1996,
    saga: 'Seafort Saga',
    saga_index: 5,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089716/APISCIFI/BOOKS/Voices_of_Hope_bwlt8s.jpg',
  },
  {
    title: "Patriarch's Hope",
    publication_year: 1999,
    saga: 'Seafort Saga',
    saga_index: 6,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708089697/APISCIFI/BOOKS/Patriarch_s_Hope_ucxmix.jpg',
  },
  {
    title: 'Children of Hope',
    publication_year: 2001,
    saga: 'Seafort Saga',
    saga_index: 7,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708090308/APISCIFI/BOOKS/Children_of_Hope_ssohlv.jpg',
  },
  {
    title: 'Hope Rearmed',
    publication_year: 2008,
    saga: 'Seafort Saga',
    saga_index: 8,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture: null,
  },
  {
    title: 'First and Only',
    publication_year: 1999,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 1,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083798/APISCIFI/BOOKS/First_and_Only_w7dvoe.jpg',
  },
  {
    title: 'Ghostmaker',
    publication_year: 2000,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 2,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083808/APISCIFI/BOOKS/Ghostmaker_w2ziuk.jpg',
  },
  {
    title: 'Necropolis',
    publication_year: 2000,
    saga: "Gaunt's Ghosts, The Founding",
    saga_index: 3,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083957/APISCIFI/BOOKS/Necropolis_ssjmbs.jpg',
  },
  {
    title: 'Honour Guard',
    publication_year: 2001,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 4,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083841/APISCIFI/BOOKS/Honour_Guard_szqqqm.jpg',
  },
  {
    title: 'The Guns of Tanith',
    publication_year: 2002,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 5,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083444/APISCIFI/BOOKS/The_Guns_of_Tanith_lwdzq7.jpg',
  },
  {
    title: 'Straight Silver',
    publication_year: 2002,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 6,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083434/APISCIFI/BOOKS/Straight_Silver_ptpjl7.jpg',
  },
  {
    title: 'Sabbat Martyr',
    publication_year: 2003,
    saga: "Gaunt's Ghosts, The Saint",
    saga_index: 7,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083165/APISCIFI/BOOKS/Sabbat_Martyr_njh0yw.jpg',
  },
  {
    title: 'Traitor General',
    publication_year: 2004,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 8,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708084527/APISCIFI/BOOKS/traitor_general_uavnpp.jpg',
  },
  {
    title: 'His Last Command',
    publication_year: 2005,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 9,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083817/APISCIFI/BOOKS/His_Last_Command_mgxh8t.jpg',
  },
  {
    title: 'The Armour of Contempt',
    publication_year: 2006,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 10,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083735/APISCIFI/BOOKS/armour-contempt_c969ir.jpg',
  },
  {
    title: 'Only in Death',
    publication_year: 2007,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 11,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083156/APISCIFI/BOOKS/Only_in_Death_oodeaa.jpg',
  },
  {
    title: 'The Iron Star',
    publication_year: 2008,
    saga: "Gaunt's Ghosts, The Lost",
    saga_index: 12,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083877/APISCIFI/BOOKS/iron-star_mr5m8j.jpg',
  },
  {
    title: 'Blood Pact',
    publication_year: 2009,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 13,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083765/APISCIFI/BOOKS/Blood_Pact_sw1bpa.jpg',
  },
  {
    title: "Salvation's Reach",
    publication_year: 2011,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 14,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083203/APISCIFI/BOOKS/Salvation_s_Reach_nietqi.jpg',
  },
  {
    title: 'The Warmaster',
    publication_year: 2017,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 15,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083713/APISCIFI/BOOKS/TheWarmaster_f4zr49.jpg',
  },
  {
    title: 'The Anarch',
    publication_year: 2019,
    saga: "Gaunt's Ghosts, The Victory",
    saga_index: 16,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083670/APISCIFI/BOOKS/TheAnarch_fjtkgc.jpg',
  },
  {
    title: 'The Vincula Insurgency',
    publication_year: 2022,
    saga: "Gaunt's Ghosts, Precuel Gaunt",
    saga_index: 17,
    universe: "Gaunt's Ghosts(WARHAMMER 40,000)",
    author: 'Dan Abnett',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708083638/APISCIFI/BOOKS/The_Vincula_Insurgency_mj4p9z.jpg',
  },
  {
    title: "Ender's Game",
    publication_year: 1985,
    saga: "Ender's Saga",
    saga_index: 1,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081477/APISCIFI/BOOKS/EndersGame_giktb2.jpg',
  },
  {
    title: 'Speaker for the Dead',
    publication_year: 1986,
    saga: "Ender's Saga",
    saga_index: 2,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081798/APISCIFI/BOOKS/SpeakerOfTHeDEad_adzrxa.jpg',
  },
  {
    title: 'Xenocide',
    publication_year: 1991,
    saga: "Ender's Saga",
    saga_index: 3,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708082663/APISCIFI/BOOKS/Xenocide_vu3fvg.jpg',
  },
  {
    title: 'Children of the Mind',
    publication_year: 1996,
    saga: "Ender's Saga",
    saga_index: 4,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708082799/APISCIFI/BOOKS/ChildrenOfTheMind_a2pzz9.jpg',
  },
  {
    title: 'A war of Gifts',
    publication_year: 1998,
    saga: "Ender's Saga",
    saga_index: 5,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708082682/APISCIFI/BOOKS/AWarOfGifts_flkziu.jpg',
  },
  {
    title: "Ender's Shadow",
    publication_year: 1999,
    saga: 'Shadow Saga',
    saga_index: 1,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081487/APISCIFI/BOOKS/EndersShadoww_jeok1k.jpg',
  },
  {
    title: 'Shadow of the Hegemon',
    publication_year: 2000,
    saga: 'Shadow Saga',
    saga_index: 2,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081527/APISCIFI/BOOKS/shadow-of-the-hegemon_drdwrw.jpg',
  },
  {
    title: 'Shadow Puppets',
    publication_year: 2002,
    saga: 'Shadow Saga',
    saga_index: 3,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081551/APISCIFI/BOOKS/ShadowPuppets_fe1aig.webp',
  },
  {
    title: 'Shadow of the Giant',
    publication_year: 2005,
    saga: 'Shadow Saga',
    saga_index: 4,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081496/APISCIFI/BOOKS/ShadowOfTheGiant_oyuuse.jpg',
  },
  {
    title: 'Shadows in Flight',
    publication_year: 2012,
    saga: 'Shadow Saga',
    saga_index: 5,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708084519/APISCIFI/BOOKS/ShadowsInFlight_ljeivn.jpg',
  },
  {
    title: 'Shadows Alive',
    publication_year: 2012,
    saga: 'Shadow Saga',
    saga_index: 6,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture: null,
  },
  {
    title: 'Earth Unaware',
    publication_year: 2012,
    saga: 'Earth Saga',
    saga_index: 1,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708080905/APISCIFI/BOOKS/EarthUnaware_wep338.jpg',
  },
  {
    title: 'Earth Afire',
    publication_year: 2013,
    saga: 'Earth Saga',
    saga_index: 2,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708080606/APISCIFI/BOOKS/EarthAfire_qyas5q.jpg',
  },
  {
    title: 'Earth Awakens',
    publication_year: 2014,
    saga: 'Earth Saga',
    saga_index: 3,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708080887/APISCIFI/BOOKS/EarthAwakens_d1mnua.jpg',
  },
  {
    title: 'The Swarm',
    publication_year: 2016,
    saga: 'The Swarm',
    saga_index: 1,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708082633/APISCIFI/BOOKS/TheSwarm_t0ghot.webp',
  },
  {
    title: 'The Hive',
    publication_year: 2019,
    saga: 'The Swarm',
    saga_index: 2,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081932/APISCIFI/BOOKS/TheHive_a7aak8.webp',
  },
  {
    title: 'The Queens',
    publication_year: 2022,
    saga: 'The Swarm',
    saga_index: 3,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081932/APISCIFI/BOOKS/TheHive_a7aak8.webp',
  },
  {
    title: 'Children of the Fleet',
    publication_year: 2017,
    saga: 'Children of the Fleet',
    saga_index: 1,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708082742/APISCIFI/BOOKS/ChildrenOfTHeFleet_ilzibn.jpg',
  },
  {
    title: 'The Last Shadow',
    publication_year: 2021,
    saga: 'Children of the Fleet',
    saga_index: 2,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708081961/APISCIFI/BOOKS/TheLastShadow_ycgbtt.jpg',
  },
  {
    title: 'The Queens',
    publication_year: 2023,
    saga: 'Children of the Fleet',
    saga_index: 3,
    universe: "Ender's Game",
    author: 'Orson Scott Card',
    picture: null,
  },
  {
    title: 'Hyperion',
    publication_year: 1989,
    saga: 'Hyperion Cantos',
    saga_index: 1,
    universe: 'Hyperion',
    author: 'Dan Simmons',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708077388/APISCIFI/BOOKS/Hyperion_cokdrt.jpg',
  },
  {
    title: 'The Fall of Hyperion',
    publication_year: 1990,
    saga: 'Hyperion Cantos',
    saga_index: 2,
    universe: 'Hyperion',
    author: 'Dan Simmons',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708077286/APISCIFI/BOOKS/the-fall-of-hyperion_idhrta.jpg',
  },
  {
    title: 'Endymion',
    publication_year: 1996,
    saga: 'Hyperion Cantos',
    saga_index: 3,
    universe: 'Hyperion',
    author: 'Dan Simmons',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708077343/APISCIFI/BOOKS/Endymion_stvlin.jpg',
  },
  {
    title: 'The Rise of Endymion',
    publication_year: 1997,
    saga: 'Hyperion Cantos',
    saga_index: 4,
    universe: 'Hyperion',
    author: 'Dan Simmons',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708077334/APISCIFI/BOOKS/TheRiseofEndymion_xftbmm.jpg',
  },
  {
    title: 'The Forever War',
    publication_year: 1974,
    saga: 'Forever War Series',
    saga_index: 1,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076786/APISCIFI/BOOKS/LaGuerraInterminable_i9bvpl.jpg',
  },
  {
    title: 'Forever Free',
    publication_year: 1999,
    saga: 'Forever War Series',
    saga_index: 2,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076794/APISCIFI/BOOKS/Lalibertadinterminable_yehy3s.jpg',
  },
  {
    title: 'Forever Peace',
    publication_year: 1997,
    saga: 'Forever War Series',
    saga_index: 3,
    universe: 'Forever War',
    author: 'Joe Haldeman',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708076813/APISCIFI/BOOKS/PazInterminable_m0mnjl.jpg',
  },
  {
    title: 'On Basilisk Station',
    publication_year: 1993,
    saga: 'Honorverse-saga',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023032/HONOVERSO/LIBROS/ogyxnq00iwlxcbr4rwza_butnyi.webp',
  },
  {
    title: 'The Honor of the Queen',
    publication_year: 1993,
    saga: 'Honorverse-saga',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023017/HONOVERSO/LIBROS/hd20bzkehpippfhds6vj_izx2jk.webp',
  },
  {
    title: 'The Short Victorious War',
    publication_year: 1994,
    saga: 'Honorverse-saga',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023022/HONOVERSO/LIBROS/jjb3miacky8nw9jyandi_ubnace.webp',
  },
  {
    title: 'Field of Dishonor',
    publication_year: 1994,
    saga: 'Honorverse-saga',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023016/HONOVERSO/LIBROS/fp1kcopwjis5ho5nzxwk_kuxy4s.webp',
  },
  {
    title: 'Flag in Exile',
    publication_year: 1995,
    saga: 'Honorverse-saga',
    saga_index: 5,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023005/HONOVERSO/LIBROS/yyamalxhufjblz2ozquf_eipmyp.webp',
  },
  {
    title: 'Honor Among Enemies',
    publication_year: 1996,
    saga: 'Honorverse-saga',
    saga_index: 6,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023033/HONOVERSO/LIBROS/t0r8s7dmfkbu8cp0eapj_qwwd69.webp',
  },
  {
    title: 'In Enemy Hands',
    publication_year: 1996,
    saga: 'Honorverse-saga',
    saga_index: 7,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023020/HONOVERSO/LIBROS/hktkf1udbn6yyzacshkb_ahkyrb.webp',
  },
  {
    title: 'Echoes of Honor',
    publication_year: 1998,
    saga: 'Honorverse-saga',
    saga_index: 8,
    universe: 'Honorverse',
    author: 'David Wever',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023007/HONOVERSO/LIBROS/zthukpmnrufpcxtdvssa_nmasxc.webp',
  },
  {
    title: 'Ashes of Victory',
    publication_year: 2000,
    saga: 'Honorverse-saga',
    saga_index: 9,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022994/HONOVERSO/LIBROS/yhbnfeggagifedod7r8e_srho73.webp',
  },
  {
    title: 'War of honor',
    publication_year: 2002,
    saga: 'Honorverse-saga',
    saga_index: 10,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023028/HONOVERSO/LIBROS/mk6te1tcbbmztvazonqc_c7w1fo.webp',
  },
  {
    title: 'At All Costs',
    publication_year: 2005,
    saga: 'Honorverse-saga',
    saga_index: 11,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022992/HONOVERSO/LIBROS/v7vxdazveacwnpl3pved_wjr6sz.webp',
  },
  {
    title: 'Mission of Honor',
    publication_year: 2010,
    saga: 'Honorverse-saga',
    saga_index: 12,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023013/HONOVERSO/LIBROS/fmjap8iegyufyisgui0t_znsri3.webp',
  },
  {
    title: 'A Rising Thunder',
    publication_year: 2012,
    saga: 'Honorverse-saga',
    saga_index: 13,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023039/HONOVERSO/LIBROS/ul8ttgjastrpwqisjvjo_ux73e3.webp',
  },
  {
    title: 'Uncompromising Honor',
    publication_year: 2018,
    saga: 'Honorverse-saga',
    saga_index: 14,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023009/HONOVERSO/LIBROS/anhlra1trxrlcvfldiez_ljmhya.webp',
  },
  {
    title: 'Crown of Slaves',
    publication_year: 2003,
    saga: 'Crown of Slaves',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023024/HONOVERSO/LIBROS/kqtwdlhepstcfx1nvk7c_udhx5x.webp',
  },
  {
    title: 'Torch of Freedom',
    publication_year: 2009,
    saga: 'Crown of Slaves',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023030/HONOVERSO/LIBROS/nzypdkh5grxbyednmndh_ksr8lq.webp',
  },
  {
    title: 'Cauldron of Ghosts',
    publication_year: 2014,
    saga: 'Crown of Slaves',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022996/HONOVERSO/LIBROS/ytx8piyecq10ht75fsh2_at03c1.webp',
  },
  {
    title: 'To end in Fire',
    publication_year: 2021,
    saga: 'Crown of Slaves',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023041/HONOVERSO/LIBROS/us0ovvplvkdcyems3elk_zwkzig.webp',
  },
  {
    title: 'The Shadow of Saganami',
    publication_year: 2004,
    saga: 'Shadow',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023011/HONOVERSO/LIBROS/brtvcpvwehmvsrav0w1q_wyqhq7.webp',
  },
  {
    title: 'Storm from the Shadows',
    publication_year: 2009,
    saga: 'Shadow',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023026/HONOVERSO/LIBROS/nvjabiu3sbhyho3kdecq_qme0v0.webp',
  },
  {
    title: 'Shadow of Freedom',
    publication_year: 2013,
    saga: 'Shadow',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023037/HONOVERSO/LIBROS/u1gkpywvtdlz0g3sr8fa_yiu1hl.webp',
  },
  {
    title: 'Shadow of Victory',
    publication_year: 2014,
    saga: 'Shadow',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023035/HONOVERSO/LIBROS/t88spdthqwitxhucplat_vgliy8.webp',
  },
  {
    title: 'A Call to Duty',
    publication_year: 2014,
    saga: 'Manticory Ascendant',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_DUTY_yawhxm.jpg',
  },
  {
    title: 'A Call to Arms',
    publication_year: 2015,
    saga: 'Manticory Ascendant',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_ARMS_yvtc9v.jpg',
  },
  {
    title: 'A Call to Vengeance',
    publication_year: 2018,
    saga: 'Manticory Ascendant',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_VENGEANCE_mduxiq.jpg',
  },
  {
    title: 'A Call to Insurrection',
    publication_year: 2022,
    saga: 'Manticory Ascendant',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_INSURRECTION_fnaesn.jpg',
  },
  {
    title: 'A Betiful Friendship',
    publication_year: 2011,
    saga: 'The Star Kingdom',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107654/HONOVERSO/LIBROS/a_beatiful_friendship_fyyxwf.jpg',
  },
  {
    title: 'Fire Season',
    publication_year: 2012,
    saga: 'The Star Kingdom',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107652/HONOVERSO/LIBROS/fire_season_wwxv7h.jpg',
  },
  {
    title: 'Treecat Wars',
    publication_year: 2023,
    saga: 'The Star Kingdom',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107653/HONOVERSO/LIBROS/treecat_wrs_ezdp8m.jpg',
  },
  {
    title: 'A New Clan',
    publication_year: 2022,
    saga: 'The Star Kingdom',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture:
      'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107652/HONOVERSO/LIBROS/a_new_clan_zgnk31.jpg',
  },
  {
    title: 'Nightbringer',
    publication_year: 2002,
    saga: 'Ultramarines Series',
    saga_index: 1,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119310/APISCIFI/BOOKS/nightbringer_josyu7.jpg',
  },
  {
    title: 'Warriors of Ultramar',
    publication_year: 2003,
    saga: 'Ultramarines Series',
    saga_index: 2,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119302/APISCIFI/BOOKS/warriors_of_ultramar_bbybb5.jpg',
  },
  {
    title: 'Dead Sky, Black Sun',
    publication_year: 2004,
    saga: 'Ultramarines Series',
    saga_index: 3,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119304/APISCIFI/BOOKS/dead_sky_black_sun_h1r0r3.jpg',
  },
  {
    title: 'The Killing Ground',
    publication_year: 2006,
    saga: 'Ultramarines Series',
    saga_index: 4,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119305/APISCIFI/BOOKS/the_killing_ground_xbfbzk.jpg',
  },
  {
    title: 'Courage and Honour',
    publication_year: 2008,
    saga: 'Ultramarines Series',
    saga_index: 5,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119307/APISCIFI/BOOKS/courage_and_honor_lsmqax.jpg',
  },
  {
    title: "The Chapter's Due",
    publication_year: 2010,
    saga: 'Ultramarines Series',
    saga_index: 6,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119308/APISCIFI/BOOKS/the_chpters_due_geit6s.jpg',
  },
  {
    title: 'The Swords of Calth',
    publication_year: 2013,
    saga: 'Ultramarines Series',
    saga_index: 7,
    universe: 'Ultramarines(WARHAMMER 40,000)',
    author: 'Graham McNeill',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708119312/APISCIFI/BOOKS/the_swords_of_calth_d2sxnm.jpg',
  },
];

mongoose
  .connect(DB_URL)
    // Para que funcione hay que poner la URL en String, da fallo la importacion
  .then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length > 0) {
      await Book.collection.drop();
      console.log('deleted books');
    }
  })
  .catch((error) => console.log('error deleting Books', error))
  .then(async () => {
    const bookMap = arrayBooks.map((book) => new Book(book));
    await Book.insertMany(bookMap);
    console.log('books addins');
  })
  .catch((error) => console.log('error adding books', error))
  .finally(() => mongoose.disconnect());
