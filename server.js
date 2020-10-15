const express = require("express");
const path = require("path")
const app = express();
const cors = require("cors");
try {
    var mongoose = require("mongoose");
} catch(e) {
    console.log(e)
};
require("dotenv").config();
const productRouter = require("./Backend/ShoppingCart");



// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.use("/products", productRouter);


// static folder
app.use(express.static(path.join(__dirname, "public")))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => {console.log("success")})
.catch(res => {console.error("error")})





const port = 8000;

app.listen(port)