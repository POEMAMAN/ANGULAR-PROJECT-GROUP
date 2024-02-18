const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookOldManWar = require('../../api/models/models.oldManWar/books.oldManWar.model');

const arrayBooksOldManWar = [
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
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksOldManWar = await BookOldManWar.find();
    if (allBooksOldManWar.length > 0) {
      await BookOldManWar.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksOldManWarMap = arrayBooksOldManWar.map((book) => new BookOldManWar(book));
    await BookOldManWar.insertMany(booksOldManWarMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
