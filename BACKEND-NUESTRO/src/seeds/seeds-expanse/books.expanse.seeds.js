const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookExpanse = require('../../api/models/models.expanse/books.expanse.model');

const arrayBooksExpanse = [
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
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksExpanse = await BookExpanse.find();
    if (allBooksExpanse.length > 0) {
      await BookExpanse.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksExpanseMap = arrayBooksExpanse.map((book) => new BookExpanse(book));
    await BookExpanse.insertMany(booksExpanseMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
