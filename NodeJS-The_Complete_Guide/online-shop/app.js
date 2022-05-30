const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin', adminData.routes);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.status(404).render('404', {
    docTitle: 'Page not found!', links: {
      shop: {src: '/', title: 'Shop'},
      addProduct: {src: '/admin/add-product', title: 'Add Product'}
    }
  });
});

app.listen(3000);