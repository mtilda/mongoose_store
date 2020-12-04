// set up environment
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const MONGO_STRING = process.env.MONGO_STRING;

// middleware
app.use(express.urlencoded({ extended: true }));

// set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// connect to database
mongoose.connect(MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// models
const Product = require('./models/product.js');

// routes

// index
app.get('/product', (req, res) => {
  Product.find({}, (error, allProducts) => {
    if (error) console.error(error);
    else {
      res.render('Index', {
        products: allProducts
      });
    }
  });
});

// new
app.get('/product/new', (req, res) => {
  res.render('New');
});

// create
app.post('/product', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) console.error(error);
    else res.send(createdProduct);
  });
});

// listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
