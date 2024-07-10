require("dotenv").config();
require("./config/dbConnect");
const express = require('express');
const cors = require('cors');
const usersRoute = require('./routes/usersRoutes');
const globalErrHandler = require("./middleware/globalErrHandler");

const app = express();


//middleware

app.use(express.json());
app.use(cors());


//users route
app.use("/api/v1/user", usersRoute);

//Global Error Handler
app.use(globalErrHandler);


//listen server
const PORT = process.env.PORT || 7000;
app.listen(PORT, console.log(`Server is running on PORT ${PORT}`));
