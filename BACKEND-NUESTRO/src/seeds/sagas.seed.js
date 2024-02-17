const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Saga = require("../api/models/sagas.model");

const DB_URL = process.env.DBURL;

const arraySagas =
    [
    {
        saga: "Robot",
        books: ["65d04b83df98fdc5ccb2ea94","65d04b83df98fdc5ccb2ea95","65d04b83df98fdc5ccb2ea96","65d04b83df98fdc5ccb2ea97","65d04b83df98fdc5ccb2ea98","65d04b83df98fdc5ccb2ea9d"],
    },
    {
        saga: "Galactic Empire Series",
        books: ["65d04b83df98fdc5ccb2ea99","65d04b83df98fdc5ccb2ea9a","65d04b83df98fdc5ccb2ea9b","65d04b83df98fdc5ccb2ea9c"],
    },
    {
        saga: "Foundation Trilogy",
        books: ["65d04b83df98fdc5ccb2ea9e","65d04b83df98fdc5ccb2ea9f","65d04b83df98fdc5ccb2eaa0","65d04b83df98fdc5ccb2eaa5","65d04b83df98fdc5ccb2eaa6","65d04b83df98fdc5ccb2eaa7","65d04b83df98fdc5ccb2eaa8","65d04b83df98fdc5ccb2eaa9"],
    },
        {
        saga: "Robot Series",
        books: ["65d04b83df98fdc5ccb2eaa1","65d04b83df98fdc5ccb2eaa2","65d04b83df98fdc5ccb2eaa3","65d04b83df98fdc5ccb2eaa4"],
    },
    {
        saga: "Foundation Secound Trilogy",
        books: ["65d04b83df98fdc5ccb2eaaa","65d04b83df98fdc5ccb2eaab","65d04b83df98fdc5ccb2eaac"],
    },
    {
        saga: "Uplift Saga",
        books: ["65d04b83df98fdc5ccb2eaaf","65d04b83df98fdc5ccb2eab0"],
    },
    {
        saga: "Uplift Trilogy",
        books: ["65d04b83df98fdc5ccb2eab1","65d04b83df98fdc5ccb2eab2","65d04b83df98fdc5ccb2eab3","65d04b83df98fdc5ccb2eab4"],
    },
    {
        saga: "The Expanse",
        books: ["65d04b83df98fdc5ccb2eab6","65d04b83df98fdc5ccb2eab7","65d04b83df98fdc5ccb2eab8","65d04b83df98fdc5ccb2eab9","65d04b83df98fdc5ccb2eaba","65d04b83df98fdc5ccb2eabb","65d04b83df98fdc5ccb2eabc","65d04b83df98fdc5ccb2eabd","65d04b83df98fdc5ccb2eabe","65d04b83df98fdc5ccb2eabf"],
    },
    {
        saga: "Old Man's War Series",
        books: [,"65d04b83df98fdc5ccb2eac0","65d04b83df98fdc5ccb2eac1","65d04b83df98fdc5ccb2eac2","65d04b83df98fdc5ccb2eac3","65d04b83df98fdc5ccb2eac4","65d04b83df98fdc5ccb2eac5"],
    },
    {
        saga: "Lock In Series",
        books: ["65d04b83df98fdc5ccb2eaca","65d04b83df98fdc5ccb2eacb","65d04b83df98fdc5ccb2eacc"],
    },
    {
        saga: "The Interdependency Series",
        books: ["65d04b83df98fdc5ccb2eacd","65d04b83df98fdc5ccb2eace","65d04b83df98fdc5ccb2eacf"],
    },
    {
        saga: "Dune Chronicles",
        books: ["65d04b83df98fdc5ccb2ead0","65d04b83df98fdc5ccb2ead1","65d04b83df98fdc5ccb2ead2","65d04b83df98fdc5ccb2ead3","65d04b83df98fdc5ccb2ead4","65d04b83df98fdc5ccb2ead5"],
    },
    {
        saga: "Prelude to Dune",
        books: ["65d04b83df98fdc5ccb2ead6","65d04b83df98fdc5ccb2ead7","65d04b83df98fdc5ccb2ead8"],
    },
    {
        saga: "Legends of Dune",
        books: ["65d04b83df98fdc5ccb2ead9"],
    },
    {
        saga: "The Galactic Center Saga",
        books: ["65d04b83df98fdc5ccb2eada","65d04b83df98fdc5ccb2eadb","65d04b83df98fdc5ccb2eadc","65d04b83df98fdc5ccb2eadd","65d04b83df98fdc5ccb2eade","65d04b83df98fdc5ccb2eadf"],
    },
    {
        saga: "Seafort Saga",
        books: ["65d04b83df98fdc5ccb2eae0","65d04b83df98fdc5ccb2eae1","65d04b83df98fdc5ccb2eae2","65d04b83df98fdc5ccb2eae3","65d04b83df98fdc5ccb2eae4","65d04b83df98fdc5ccb2eae5","65d04b83df98fdc5ccb2eae6","65d04b83df98fdc5ccb2eae7"],
    },
    {
        saga: "Gaunt's Ghosts, The Founding",
        books: ["65d04b83df98fdc5ccb2eae8","65d04b83df98fdc5ccb2eae9","65d04b83df98fdc5ccb2eaea"],
    },
    {
        saga: "Gaunt's Ghosts, The Saint",
        books: ["65d04b83df98fdc5ccb2eaeb","65d04b83df98fdc5ccb2eaec","65d04b83df98fdc5ccb2eaed","65d04b83df98fdc5ccb2eaee"],
    },
    {
        saga: "Gaunt's Ghosts, The Lost",
        books: ["65d04b83df98fdc5ccb2eaef","65d04b83df98fdc5ccb2eaf0","65d04b83df98fdc5ccb2eaf1","65d04b83df98fdc5ccb2eaf2","65d04b83df98fdc5ccb2eaf3"],
    },
    {
        saga: "Gaunt's Ghosts, The Victory",
        books: ["65d04b83df98fdc5ccb2eaf4","65d04b83df98fdc5ccb2eaf5","65d04b83df98fdc5ccb2eaf6","65d04b83df98fdc5ccb2eaf7"],
    },
    {
        saga: "Gaunt's Ghosts, Precuel Gaunt",
        books: ["65d04b83df98fdc5ccb2eaf8"],
    },
    {
        saga: "Ender's Saga",
        books: ["65d04b83df98fdc5ccb2eaf9","65d04b83df98fdc5ccb2eafa","65d04b83df98fdc5ccb2eafb","65d04b83df98fdc5ccb2eafc","65d04b83df98fdc5ccb2eafd"],
    },
    {
        saga: "Shadow Saga",
        books: ["65d04b83df98fdc5ccb2eafe","65d04b83df98fdc5ccb2eaff","65d04b83df98fdc5ccb2eb00","65d04b83df98fdc5ccb2eb01","65d04b83df98fdc5ccb2eb02","65d04b83df98fdc5ccb2eb03"],
    },
    {
        saga: "Earth Saga",
        books: ["65d04b83df98fdc5ccb2eb04","65d04b83df98fdc5ccb2eb05","65d04b83df98fdc5ccb2eb06"],
    },
    {
        saga: "The Swarm",
        books: ["65d04b83df98fdc5ccb2eb07","65d04b83df98fdc5ccb2eb08","65d04b83df98fdc5ccb2eb09"],
    },
    {
        saga: "Children of the Fleet",
        books: ["65d04b83df98fdc5ccb2eb0a","65d04b83df98fdc5ccb2eb0b","65d04b83df98fdc5ccb2eb0c"],
    },
    {
        saga: "Hyperion Cantos",
        books: ["65d04b83df98fdc5ccb2eb0d","65d04b83df98fdc5ccb2eb0e","65d04b83df98fdc5ccb2eb0f","65d04b83df98fdc5ccb2eb10"]
    },
    {
        saga: "Forever War Series",
        books: ["65d04b83df98fdc5ccb2eb11","65d04b83df98fdc5ccb2eb12","65d04b83df98fdc5ccb2eb13"]
    },
    {
        saga: null,
        books: ["65d04b83df98fdc5ccb2eaad","65d04b83df98fdc5ccb2eaae","65d04b83df98fdc5ccb2eab5","65d04b83df98fdc5ccb2eac6","65d04b83df98fdc5ccb2eac7","65d04b83df98fdc5ccb2eac8","65d04b83df98fdc5ccb2eac9",""]
    },
    {
        saga: "Honorverse-saga",
        books: ["65d04b83df98fdc5ccb2eb14","65d04b83df98fdc5ccb2eb15","65d04b83df98fdc5ccb2eb16","65d04b83df98fdc5ccb2eb17","65d04b83df98fdc5ccb2eb18","65d04b83df98fdc5ccb2eb19","65d04b83df98fdc5ccb2eb1a","65d04b83df98fdc5ccb2eb1b","65d04b83df98fdc5ccb2eb1c","65d04b83df98fdc5ccb2eb1d","65d04b83df98fdc5ccb2eb1e","65d04b83df98fdc5ccb2eb1f","65d04b83df98fdc5ccb2eb20","65d04b83df98fdc5ccb2eb21"]
    },
    {
        saga: "Crown of Slaves",
        books: ["65d04b83df98fdc5ccb2eb22","65d04b83df98fdc5ccb2eb23","65d04b83df98fdc5ccb2eb24","65d04b83df98fdc5ccb2eb25"]
    },
    {
        saga: "Shadow",
        books: ["65d04b83df98fdc5ccb2eb26","65d04b83df98fdc5ccb2eb27","65d04b83df98fdc5ccb2eb28","65d04b83df98fdc5ccb2eb29"]
    },
    {
        saga: "Manticory Ascendant",
        books: ["65d04b83df98fdc5ccb2eb2a","65d04b83df98fdc5ccb2eb2b","65d04b83df98fdc5ccb2eb2c","65d04b83df98fdc5ccb2eb2d"]
    },
    {
        saga: "The Star Kingdom",
        books: ["65d04b83df98fdc5ccb2eb2e","65d04b83df98fdc5ccb2eb2f","65d04b83df98fdc5ccb2eb30","65d04b83df98fdc5ccb2eb31"]
    },
    {
        saga: "Ultramarines Series",
        books: ["65d04b83df98fdc5ccb2eb32","65d04b83df98fdc5ccb2eb33","65d04b83df98fdc5ccb2eb34","65d04b83df98fdc5ccb2eb35","65d04b83df98fdc5ccb2eb36","65d04b83df98fdc5ccb2eb37","65d04b83df98fdc5ccb2eb38"]
    },
]


mongoose.connect(DB_URL)
  // Para que funcione hay que poner la URL en String, da fallo la importacion
    .then(async () => {
        const allSagas = await Saga.find();
        if (allSagas.length > 0) {
            await Saga.collection.drop();
            console.log("deleted sagas");
        }
    })
    .catch((error) => console.log("error deleting Sagas", error))
    .then(async () => {
        const SagaMap = arraySagas.map((saga) => new Saga(saga));
        await Saga.insertMany(SagaMap);
        console.log("Sagas addins");
    })
    .catch((error) => console.log("error adding Sagas", error))
    .finally(() => mongoose.disconnect());