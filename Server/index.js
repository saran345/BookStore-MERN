const express=require('express');
const morgan=require("morgan");
const cookie=require("cookie-parser");
const parser=require("body-parser");
const mongodb=require('mongoose');
const dot=require("dotenv").config();
const app= express();

const PORT=process.env.PORT||5000;

const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(cookie())
app.use(morgan("dev"))


mongodb.connect("mongodb+srv://BookAdmin:bookadmin@cluster0.47bjpvd.mongodb.net/myProjectDB?retryWrites=true&w=majority&appName=Cluster0")
// mongodb.connect("mongodb://127.0.0.1:27017/BookStoreDB")
.then(()=> console.log("Database connected successfully!!!")).catch(()=> console.log("Disconnected database!!!"));

app.use("/api",require("./routes/Auth"))

app.use("/tell",require("./routes/ContactRouter"))

app.use("/book",require("./routes/bookRouter"))

app.use("/cart",require("./routes/cartRouter"))
 
app.listen(PORT, ()=> console.log(`SERVER START RUNNING..${PORT}..!!!`))

