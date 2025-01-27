const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
// config

app.engine('handlebars', handlebars(defaultLayout: 'main'));
app.set('view engine', 'handlebars');

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine());

app.get('/', (req, res) => {
    res.render('body');
    });


app.listen(8080, () => {
    console.log('Rodando app listening at http://localhost:8080');
  });