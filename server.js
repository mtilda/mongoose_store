// set up environment and variables
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const MONGO_URI = process.env.MONGO_URI;
const methodOverride = require('method-override');

// use heroku's port or default to 3000
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// connect to database
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// models
const Product = require('./models/product.js');

// routes

app.get('/', (req, res) => {
  res.redirect('/product');
});

// index
app.get('/product', (req, res, next) => {
  Product.find({}, (error, allProducts) => {
    if (error) next(error);
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

// delete
app.delete('/product/:id', (req, res, next) => {
  Product.findByIdAndDelete(req.params.id, (error) => {
    if (error) next(error);
    else res.redirect('/product');
  });
});

// update
app.put('/product/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedProduct) => {
    if (error) next(error);
    else res.redirect('/product/' + updatedProduct.id);
  });
});

// create
app.post('/product', (req, res, next) => {
  Product.create(req.body, (error, createdProduct) => {
    if (error) next(error);
    else res.redirect('/product');
  });
});

// edit
app.get('/product/edit/:id', (req, res, next) => {
  Product.findById(req.params.id, (error, product) => {
    if (error) next(error);
    else {
      res.render('Edit', {
        product: product
      });
    }
  });
});

// show
app.get('/product/:id', (req, res, next) => {
  Product.findById(req.params.id, (error, product) => {
    if (error) next(error);
    else {
      res.render('Show', {
        product: product
      });
    }
  });
});

// buy
app.put('/product/buy/:id', (req, res, next) => {
  Product.findById(req.params.id, 'quantity', (error, product) => {
    if (error) next(error);
    else {
      if (product.quantity > 0) {
        Product.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1 } }, { new: true }, (error, updatedProduct) => {
          if (error) res.send(error);
          else res.redirect('/product/' + updatedProduct.id);
        });
      }
    }
  });
});

// listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
