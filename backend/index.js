var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const port = "8081";
const host = "localhost";


app.listen(port, () => {
    console.log("App listening at http://%s:%s", host, port);
});

const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
}, { collection: 'fakestore_catalog' });

const Product = mongoose.model('Product', productSchema);

mongoose.connect('mongodb://127.0.0.1:27017/reactdata')
    .then(() => {
        console.log("MongoDB connected successfully!");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

app.get("/", async (req, res) => {

});

app.get("/read", async (req, res) => {

    const products = await Product.find();

    res.json(products);

});