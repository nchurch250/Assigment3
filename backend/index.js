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

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/reactdata');
// }

// Define a schema for your data model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
}, { collection: 'fakestore_catalog' }); // specify the collection name here

// Create a Mongoose model based on the schema
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/reactdata')
    .then(() => {
        console.log("MongoDB connected successfully!");
        // Add a new product

    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

app.post("/product", async (req, res) => {
    const newProduct = new Product({
        name: 'Sample Product',
        price: 10.99,
        category: 'Electronics'
    });

    newProduct.save();
});