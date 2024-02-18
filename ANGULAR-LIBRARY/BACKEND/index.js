const nodemailer = require("nodemailer")
const express = require("express");
const cors = require("cors");
// Método de config cloudinary
const { configCloudinary } = require('./src/utils/cloudinary/config.js');
const { connect } = require("./src/utils/db.js");

//Rutas Componentes Principales
const booksRouter = require("./src/api/routes/book.routes");
const sagasRouter = require("./src/api/routes/sagas.routes");
const universeRouter = require("./src/api/routes/universes.routes");
const authorsRouter = require("./src/api/routes/author.routes");
const awardsRouter = require("./src/api/routes/awards.routes");

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
// OldManWar
const booksOldManWarRoutes = require("./src/api/routes/routes.oldManWar/books.oldManWar.routes");
const charactersOldManWartRoutes = require("./src/api/routes/routes.oldManWar/characters.oldManWar.routes");
const countriesOldManWarRoutes = require("./src/api/routes/routes.oldManWar/countries.oldManWar.routes");
const planetsOldManWarRoutes = require('./src/api/routes/routes.oldManWar/planets.oldManWar.routes');
const ordersOldManWarRoutes = require('./src/api/routes/routes.oldManWar/orders.oldManWar.routes');



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
app.use("/author", authorsRouter)
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
// OldManWar
app.use("/universes/oldManWar/books", booksOldManWarRoutes)
app.use("/universes/oldManWar/characters", charactersOldManWarRoutes)
app.use("/universes/oldManWar/countries", countriesOldManWarRoutes)
app.use('/universes/oldManWar/planets', planetsOldManWarRoutes)
//

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
