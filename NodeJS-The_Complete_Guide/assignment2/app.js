const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
const routes = require('./routes/users');
const form = require('./routes/form');

app.use(routes);
app.use(form);

app.use((req, res, next) => {
  res.status(404).render('404', {
    docTitle: 'Page not found!', path: null,
    links: [
      { src: '/', title: 'Add users' },
      { src: '/users', title: 'Users list' },
    ]
  });
});

app.listen(3000);