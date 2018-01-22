const express = require('express')
const app = express()
var mustacheExpress = require('mustache-express');

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', { title: 'api', message: 'Lorem ipsum' })
});

app.listen(3000, () => console.log('App Started'));