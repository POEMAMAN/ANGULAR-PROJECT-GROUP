const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors")
const booksRouter = require("./src/api/routes/book.routes");
const sagasRouter = require("./src/api/routes/sagas.routes");
const universeRouter = require("./src/api/routes/universes.routes");
const authorsRouter = require("./src/api/routes/author.routes");
const awardsRouter = require("./src/api/routes/awards.routes");
const userRouter = require('./src/api/routes/user.routes');

//
const booksHonorverseRoutes = require("./src/api/routes/routes.honorverse/books.honorverse.routes");
const charactersHonorverseRoutes = require("./src/api/routes/routes.honorverse/characters.honorverse.routes");
const countriesHonorverseRoutes = require("./src/api/routes/routes.honorverse/countries.honorverse.routes");
const planetsHonorverseRoutes = require('./src/api/routes/routes.honorverse/planets.honorverse.routes');
//
dotenv.config();

const {connect} = require('./src/utils/db');
const { isAuth } = require('./src/middlewares/auth');
const PORT = process.env.PORT || 5000;

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use("/books", booksRouter);
app.use("/sagas", sagasRouter)
app.use("/author", authorsRouter)
app.use("/universes", universeRouter)
app.use("/awards", awardsRouter)
app.use('/user', userRouter);
//
app.use("/universes/honorverse/books", booksHonorverseRoutes)
app.use("/universes/honorverse/characters", charactersHonorverseRoutes)
app.use("/universes/honorverse/countries", countriesHonorverseRoutes)
app.use('/universes/honorverse/planets', planetsHonorverseRoutes);

//

app.listen(PORT, () => console.log('listening on port ' + PORT));