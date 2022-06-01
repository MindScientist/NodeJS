const express = require('express');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: adminData.products,
    docTitle: 'Shop', path: '/',
    links: {
      shop: {src: '/', title: 'Shop'},
      addProduct: {src: '/admin/add-product', title: 'Add Product'}
    }
  });
});

module.exports = router;