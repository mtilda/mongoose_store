// set up environment and variables
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

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// models
const Product = require('./models/product.js');

// routes

// index
app.get('/product', (req, res) => {
  Product.find({}, (error, allProducts) => {
    if (error) res.send(error);
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

// update
app.post('/product/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, (error, updatedProduct) => {
    if (error) res.send(error);
    else res.redirect('/product/' + updatedProduct.id);
  });
});

// create
app.post('/product', (req, res) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) res.send(error);
    else res.redirect('/product');
  });
});

// edit
app.get('/product/edit/:id', (req, res) => {
  Product.findById(req.params.id, (error, product) => {
    if (error) res.send(error);
    else {
      res.render('New', {
        product: product
      });
    }
  });
});

// show
app.get('/product/:id', (req, res) => {
  Product.findById(req.params.id, (error, product) => {
    if (error) res.send(error);
    else {
      res.render('Show', {
        product: product
      });
    }
  });
});

// listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
