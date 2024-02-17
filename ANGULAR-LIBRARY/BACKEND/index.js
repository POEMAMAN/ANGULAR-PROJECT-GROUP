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
