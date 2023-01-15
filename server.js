const express = require("express");
const cors = require("cors");
const connectDB = require("./connectDB");

require("dotenv").config({ path: "./config/.env" });

var app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(__dirname + "/uploads"));
//CONNECT TO THE DATABASE
connectDB();

//Routes
app.use("/pages", require("./routes/pageRoutes"));

const port = process.env.PORT;
//Settings
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
