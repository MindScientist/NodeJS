const express = require('express');

const router = express.Router();

const products = [];

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    path : '/admin/add-product', docTitle: 'Add product',
    links: {
      shop: {src: '/', title: 'Shop'},
      addProduct: {src: '/admin/add-product', title: 'Add Product'}
    }
  });
});

exports.routes = router;
exports.products = products;