const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Drumkit'
  })
})

module.exports = app
