const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const bodyParser = require('body-parser');

const cors = require('cors');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mansichinaiwala:read@cluster0.imcdt9i.mongodb.net/mernecommerceapp?retryWrites=true&w=majority');
console.log('Server Connected');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req,res)=>{
    res.send("hello jwt");
});

app.use("/customers", require("./routes/customerRoutes"))
app.use("/categories", require("./routes/categoryRoutes"))
app.use("/products", require("./routes/productRoutes"))
app.use("/carts", require("./routes/cartRoutes"))
app.use("/orders", require("./routes/orderRoutes"))

const PORT = process.env.PORT || 4000;
app.listen(PORT);

