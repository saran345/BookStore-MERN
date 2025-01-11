const express=require('express');
const morgan=require("morgan");

const parser=require("body-parser");
const mongodb=require('mongoose');
const dot=require("dotenv").config();
const app= express();

const PORT=process.env.PORT||5000;

const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use(morgan("dev"))


mongodb.connect("mongodb://127.0.0.1:27017/BookStoreDB")
.then(()=> console.log("Database connected successfully!!!")).catch(()=> console.log("Disconnected database!!!"));

app.use("/api",require("./routes/middle"))

app.use("/book",require("./routes/bookRouter"))



app.listen(PORT, ()=> console.log(`SERVER START RUNNING..${PORT}..!!!`))

