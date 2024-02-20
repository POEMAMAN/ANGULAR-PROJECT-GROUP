const nodemailer = require("nodemailer")
const express = require("express");
const cors = require("cors");
// Método de config cloudinary
const { configCloudinary } = require('./src/utils/cloudinary/config.js');
const { connect } = require("./src/utils/db.js");

//Rutas Componentes Principales
const booksRouter = require("./src/api/routes/book.routes.js");
const sagasRouter = require("./src/api/routes/sagas.routes");
const universeRouter = require("./src/api/routes/universes.routes");
const authorsRouter = require("./src/api/routes/author.routes");
const awardsRouter = require("./src/api/routes/awards.routes");
const userRouter = require("./src/api/users/users.routes.js");

// Rutas Componentes hijos (universos)
// Honoverse
const booksHonorverseRoutes = require("./src/api/routes/routes.honorverse/books.honorverse.routes");
const charactersHonorverseRoutes = require("./src/api/routes/routes.honorverse/characters.honorverse.routes");
const countriesHonorverseRoutes = require("./src/api/routes/routes.honorverse/countries.honorverse.routes");
const planetsHonorverseRoutes = require('./src/api/routes/routes.honorverse/planets.honorverse.routes');
// Expanse
const booksExpanseRoutes = require("./src/api/routes/routes.expanse/books.expanse.routes");
const charactersExpanseRoutes = require("./src/api/routes/routes.expanse/characters.expanse.routes");
const countriesExpanseRoutes = require("./src/api/routes/routes.expanse/countries.expanse.routes");
const planetsExpanseRoutes = require('./src/api/routes/routes.expanse/planets.expanse.routes');
// Dune
const booksDuneRoutes = require("./src/api/routes/routes.dune/books.dune.routes");
const charactersDuneRoutes = require("./src/api/routes/routes.dune/characters.dune.routes");
const countriesDuneRoutes = require("./src/api/routes/routes.dune/countries.dune.routes");
const planetsDuneRoutes = require('./src/api/routes/routes.dune/planets.dune.routes');
// ForeverWar
const booksForeverWarRoutes = require("./src/api/routes/routes.foreverWar/books.foreverWar.routes");
const charactersForeverWarRoutes = require("./src/api/routes/routes.foreverWar/characters.foreverWar.routes");
const countriesForeverWarRoutes = require("./src/api/routes/routes.foreverWar/countries.foreverWar.routes");
const planetsForeverWarRoutes = require('./src/api/routes/routes.foreverWar/planets.foreverWar.routes');
// Seaford
const booksSeafordRoutes = require("./src/api/routes/routes.seaford/books.seaford.routes");
const charactersSeafordRoutes = require("./src/api/routes/routes.seaford/characters.seaford.routes");
const countriesSeafordRoutes = require("./src/api/routes/routes.seaford/countries.seaford.routes");
const planetsSeafordRoutes = require('./src/api/routes/routes.seaford/planets.seaford.routes');
// Uplift
const booksUpliftRoutes = require("./src/api/routes/routes.uplift/books.uplift.routes");
const charactersUpliftRoutes = require("./src/api/routes/routes.uplift/characters.uplift.routes");
const countriesUpliftRoutes = require("./src/api/routes/routes.uplift/countries.uplift.routes");
const planetsUpliftRoutes = require('./src/api/routes/routes.uplift/planets.uplift.routes');
const ordersUpliftRoutes = require('./src/api/routes/routes.uplift/orders.uplift.routes');
// GauntW40K
const booksGauntW40KRoutes = require("./src/api/routes/routes.GauntW40K/books.GauntW40K.routes.js");
const charactersGauntW40KRoutes = require("./src/api/routes/routes.GauntW40K/characters.GauntW40K.routes.js");
const countriesGauntW40KRoutes = require("./src/api/routes/routes.GauntW40K/countries.GauntW40K.routes.js");
const planetsGauntW40KRoutes = require("./src/api/routes/routes.GauntW40K/planets.GauntW40K.routes.js");
// UltraW40K
const booksUltraW40KRoutes = require("./src/api/routes/routes.UltraW40K/books.UltraW40K.routes.js");
const charactersUltraW40KRoutes = require("./src/api/routes/routes.UltraW40K/characters.UltraW40K.routes.js");
const countriesUltraW40KRoutes = require("./src/api/routes/routes.UltraW40K/countries.UltraW40K.routes.js");
const planetsUltraW40KRoutes = require("./src/api/routes/routes.UltraW40K/planets.UltraW40K.routes.js");
// Fundacion
const booksFundacionRoutes = require("./src/api/routes/routes.fundacion/books.fundacion.routes.js");
const charactersFundacionRoutes = require("./src/api/routes/routes.fundacion/characters.fundacion.routes.js");
const countriesFundacionRoutes = require("./src/api/routes/routes.fundacion/countries.fundacion.routes.js");
const planetsFundacionRoutes = require("./src/api/routes/routes.fundacion/planets.fundacion.routes.js");

//Ruta a cambiar a MAIN PAGE
const ProductRoutes = require("./src/api/products/products.routes.js");

//
const UserRoutes = require('./src/api/users/users.routes.js')

connect();

const dotenv = require('dotenv');

// Ejecutamos método para usar .env
dotenv.config();
 
// Ejecutar la configuación de cloudinary
configCloudinary();

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// app.use("*", (req, res, next) => {
//   const error = new Error();
//   error.status = 404;
//   error.message = "Route not found";
//   return next(error);
// });

app.use(
  cors({
    origin: ["*"],
  })
);

//Routes
//Rutas Principales
app.use('/api/users', UserRoutes)
app.use('/api/products', ProductRoutes)
// **TO DO PDTE CAMBIAR RUTA PRODUCT**
app.use("/public", express.static("public"));
app.use("/api", (req, res, next) => "im alive");

app.use("/books", booksRouter);
app.use("/sagas", sagasRouter)
app.use("/authors", authorsRouter)
app.use("/universes", universeRouter)
app.use("/awards", awardsRouter)
app.use('/user', userRouter);
// Rutas Universos
// Honorverse
app.use("/universes/honorverse/books", booksHonorverseRoutes)
app.use("/universes/honorverse/characters", charactersHonorverseRoutes)
app.use("/universes/honorverse/countries", countriesHonorverseRoutes)
app.use('/universes/honorverse/planets', planetsHonorverseRoutes)
// Expanse
app.use("/universes/expanse/books", booksExpanseRoutes)
app.use("/universes/expanse/characters", charactersExpanseRoutes)
app.use("/universes/expanse/countries", countriesExpanseRoutes)
app.use('/universes/expanse/planets', planetsExpanseRoutes)
// Dune
app.use("/universes/dune/books", booksDuneRoutes)
app.use("/universes/dune/characters", charactersDuneRoutes)
app.use("/universes/dune/countries", countriesDuneRoutes)
app.use('/universes/dune/planets', planetsDuneRoutes)
// Forever War
app.use("/universes/foreverWar/books", booksForeverWarRoutes)
app.use("/universes/foreverWar/characters", charactersForeverWarRoutes)
app.use("/universes/foreverWar/countries", countriesForeverWarRoutes)
app.use('/universes/foreverWar/planets', planetsForeverWarRoutes)
// Seaford 
app.use("/universes/seaford/books", booksSeafordRoutes)
app.use("/universes/seaford/characters", charactersSeafordRoutes)
app.use("/universes/seaford/countries", countriesSeafordRoutes)
app.use('/universes/seaford/planets', planetsSeafordRoutes)
// Uplift
app.use("/universes/uplift/books", booksUpliftRoutes)
app.use("/universes/uplift/characters", charactersUpliftRoutes)
app.use("/universes/uplift/countries", countriesUpliftRoutes)
app.use('/universes/uplift/planets', planetsUpliftRoutes)
app.use('/universes/uplift/orders', ordersUpliftRoutes)
// GauntW40K
app.use("/universes/gauntW40K/books", booksGauntW40KRoutes)
app.use("/universes/gauntW40K/characters", charactersGauntW40KRoutes)
app.use("/universes/gauntW40K/countries", countriesGauntW40KRoutes)
app.use('/universes/gauntW40K/planets', planetsGauntW40KRoutes)
// UltraW40K
app.use("/universes/ultraW40K/books", booksUltraW40KRoutes)
app.use("/universes/ultraW40K/characters", charactersUltraW40KRoutes)
app.use("/universes/ultraW40K/countries", countriesUltraW40KRoutes)
app.use('/universes/ultraW40K/planets', planetsUltraW40KRoutes)
// Fundacion
app.use("/universes/fundacion/books", booksFundacionRoutes)
app.use("/universes/fundacion/characters", charactersFundacionRoutes)
app.use("/universes/fundacion/countries", countriesFundacionRoutes)
app.use('/universes/fundacion/planets', planetsFundacionRoutes)


const PORT = process.env.PORT || 8084;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port 🙈: ${PORT}`);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.disable('x-powered-by')

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
