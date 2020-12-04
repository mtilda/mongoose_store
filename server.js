const express = require('express');
const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: true }));

// set up view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// routes

// index
app.get('/product', (req, res) => {
  res.render('Index');
});

// new
app.get('/product/new', (req, res) => {
  res.render('New');
});

// create
app.post('/product', (req, res) => {
  res.send(req.body);
});

// listener
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
