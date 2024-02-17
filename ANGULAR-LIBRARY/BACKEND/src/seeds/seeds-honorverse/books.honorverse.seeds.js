const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const BookHonorverse = require('../../api/models/models.honorverse/books.honorverse.model');

const arrayBooksHonorverse = [
  {
    title: 'On Basilisk Station',
    publication_year: 1993,
    saga: 'Honorverse-saga',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023032/HONOVERSO/LIBROS/ogyxnq00iwlxcbr4rwza_butnyi.webp',
  },
  {
    title: 'The Honor of the Queen',
    publication_year: 1993,
    saga: 'Honorverse-saga',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023017/HONOVERSO/LIBROS/hd20bzkehpippfhds6vj_izx2jk.webp',
  },
  {
    title: 'The Short Victorious War',
    publication_year: 1994,
    saga: 'Honorverse-saga',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023022/HONOVERSO/LIBROS/jjb3miacky8nw9jyandi_ubnace.webp',
  },
  {
    title: 'Field of Dishonor',
    publication_year: 1994,
    saga: 'Honorverse-saga',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023016/HONOVERSO/LIBROS/fp1kcopwjis5ho5nzxwk_kuxy4s.webp',
  },
  {
    title: 'Flag in Exile',
    publication_year: 1995,
    saga: 'Honorverse-saga',
    saga_index: 5,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023005/HONOVERSO/LIBROS/yyamalxhufjblz2ozquf_eipmyp.webp',
  },
  {
    title: 'Honor Among Enemies',
    publication_year: 1996,
    saga: 'Honorverse-saga',
    saga_index: 6,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023033/HONOVERSO/LIBROS/t0r8s7dmfkbu8cp0eapj_qwwd69.webp',
  },
  {
    title: 'In Enemy Hands',
    publication_year: 1996,
    saga: 'Honorverse-saga',
    saga_index: 7,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023020/HONOVERSO/LIBROS/hktkf1udbn6yyzacshkb_ahkyrb.webp',
  },
  {
    title: 'Echoes of Honor',
    publication_year: 1998,
    saga: 'Honorverse-saga',
    saga_index: 8,
    universe: 'Honorverse',
    author: 'David Wever',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023007/HONOVERSO/LIBROS/zthukpmnrufpcxtdvssa_nmasxc.webp',
  },
  {
    title: 'Ashes of Victory',
    publication_year: 2000,
    saga: 'Honorverse-saga',
    saga_index: 9,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022994/HONOVERSO/LIBROS/yhbnfeggagifedod7r8e_srho73.webp',
  },
  {
    title: 'War of honor',
    publication_year: 2002,
    saga: 'Honorverse-saga',
    saga_index: 10,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023028/HONOVERSO/LIBROS/mk6te1tcbbmztvazonqc_c7w1fo.webp',
  },
  {
    title: 'At All Costs',
    publication_year: 2005,
    saga: 'Honorverse-saga',
    saga_index: 11,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022992/HONOVERSO/LIBROS/v7vxdazveacwnpl3pved_wjr6sz.webp',
  },
  {
    title: 'Mission of Honor',
    publication_year: 2010,
    saga: 'Honorverse-saga',
    saga_index: 12,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023013/HONOVERSO/LIBROS/fmjap8iegyufyisgui0t_znsri3.webp',
  },
  {
    title: 'A Rising Thunder',
    publication_year: 2012,
    saga: 'Honorverse-saga',
    saga_index: 13,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023039/HONOVERSO/LIBROS/ul8ttgjastrpwqisjvjo_ux73e3.webp',
  },
  {
    title: 'Uncompromising Honor',
    publication_year: 2018,
    saga: 'Honorverse-saga',
    saga_index: 14,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023009/HONOVERSO/LIBROS/anhlra1trxrlcvfldiez_ljmhya.webp',
  },
  {
    title: 'Crown of Slaves',
    publication_year: 2003,
    saga: 'Crown of Slaves',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023024/HONOVERSO/LIBROS/kqtwdlhepstcfx1nvk7c_udhx5x.webp',
  },
  {
    title: 'Torch of Freedom',
    publication_year: 2009,
    saga: 'Crown of Slaves',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023030/HONOVERSO/LIBROS/nzypdkh5grxbyednmndh_ksr8lq.webp',
  },
  {
    title: 'Cauldron of Ghosts',
    publication_year: 2014,
    saga: 'Crown of Slaves',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708022996/HONOVERSO/LIBROS/ytx8piyecq10ht75fsh2_at03c1.webp',
  },
  {
    title: 'To end in Fire',
    publication_year: 2021,
    saga: 'Crown of Slaves',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023041/HONOVERSO/LIBROS/us0ovvplvkdcyems3elk_zwkzig.webp',
  },
  {
    title: 'The Shadow of Saganami',
    publication_year: 2004,
    saga: 'Shadow',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023011/HONOVERSO/LIBROS/brtvcpvwehmvsrav0w1q_wyqhq7.webp',
  },
  {
    title: 'Storm from the Shadows',
    publication_year: 2009,
    saga: 'Shadow',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023026/HONOVERSO/LIBROS/nvjabiu3sbhyho3kdecq_qme0v0.webp',
  },
  {
    title: 'Shadow of Freedom',
    publication_year: 2013,
    saga: 'Shadow',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023037/HONOVERSO/LIBROS/u1gkpywvtdlz0g3sr8fa_yiu1hl.webp',
  },
  {
    title: 'Shadow of Victory',
    publication_year: 2014,
    saga: 'Shadow',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708023035/HONOVERSO/LIBROS/t88spdthqwitxhucplat_vgliy8.webp',
  },
  {
    title: 'A Call to Duty',
    publication_year: 2014,
    saga: 'Manticory Ascendant',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_DUTY_yawhxm.jpg',
  },
  {
    title: 'A Call to Arms',
    publication_year: 2015,
    saga: 'Manticory Ascendant',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_ARMS_yvtc9v.jpg',
  },
  {
    title: 'A Call to Vengeance',
    publication_year: 2018,
    saga: 'Manticory Ascendant',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_VENGEANCE_mduxiq.jpg',
  },
  {
    title: 'A Call to Insurrection',
    publication_year: 2022,
    saga: 'Manticory Ascendant',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708106297/HONOVERSO/LIBROS/A_CALL_TO_INSURRECTION_fnaesn.jpg',
  },
  {
    title: 'A Betiful Friendship',
    publication_year: 2011,
    saga: 'The Star Kingdom',
    saga_index: 1,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107654/HONOVERSO/LIBROS/a_beatiful_friendship_fyyxwf.jpg',
  },
  {
    title: 'Fire Season',
    publication_year: 2012,
    saga: 'The Star Kingdom',
    saga_index: 2,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107652/HONOVERSO/LIBROS/fire_season_wwxv7h.jpg',
  },
  {
    title: 'Treecat Wars',
    publication_year: 2023,
    saga: 'The Star Kingdom',
    saga_index: 3,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107653/HONOVERSO/LIBROS/treecat_wrs_ezdp8m.jpg',
  },
  {
    title: 'A New Clan',
    publication_year: 2022,
    saga: 'The Star Kingdom',
    saga_index: 4,
    universe: 'Honorverse',
    author: 'David Weber',
    picture: 'https://res.cloudinary.com/dqfaa272n/image/upload/v1708107652/HONOVERSO/LIBROS/a_new_clan_zgnk31.jpg',
  },
]
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    const allBooksHonorverse = await BookHonorverse.find();
    if (allBooksHonorverse.length > 0) {
      await BookHonorverse.collection.drop();
      console.log('Libros borrados');
    }
  })
  .catch((err) => {
    console.log('error borrando los Libros', err);
  })
  .then(async () => {
    const booksHonorverseMap = arrayBooksHonorverse.map((book) => new BookHonorverse(book));
    await BookHonorverse.insertMany(booksHonorverseMap);
    console.log('Libros insertados');
  })
  .catch((err) => {
    console.log('error insertando los Libros', err);
  })
  .finally(() => mongoose.disconnect());
