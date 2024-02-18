const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookSeaford = require('../../api/models/models.seaford/books.seaford.model');

const arrayBooksSeaford = [
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
    title: "Hope Rearmed/Galahad's Hope",
    publication_year: 'Not Published',
    saga: 'Seafort Saga',
    saga_index: 8,
    universe: 'Seafort Saga',
    author: 'David Feintuch',
    picture: null,
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksSeaford = await BookSeaford.find();
    if (allBooksSeaford.length > 0) {
      await BookSeaford.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksSeafordMap = arrayBooksSeaford.map((book) => new BookSeaford(book));
    await BookSeaford.insertMany(booksSeafordMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
