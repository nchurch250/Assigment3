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
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
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

app.get("/read/:id", async (req, res) => {
    const id = req.params.id;

    const product = await Product.find({"id": id});

    res.json(product);

});

app.post("/create", async (req, res) => {
    const productData = req.body;

    const newProduct = new Product(productData);
    newProduct.save()
});

app.put("/update/:id", async (req, res) => {
    const price = req.body.price;
    const id = req.params.id;

    const result = await Product.updateOne({ "id": id }, { "price": price });
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    const result = await Product.deleteOne({ "id": id });

    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
});