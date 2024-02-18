const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookForeverWar = require('../../api/models/models.foreverWar/books.foreverWar.model');

const arrayBooksForeverWar = [
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
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksForeverWar = await BookForeverWar.find();
    if (allBooksForeverWar.length > 0) {
      await BookForeverWar.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksForeverWarMap = arrayBooksForeverWar.map((book) => new BookForeverWar(book));
    await BookForeverWar.insertMany(booksForeverWarMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
