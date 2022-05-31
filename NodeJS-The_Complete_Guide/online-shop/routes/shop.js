const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  res.render('shop', {
    prods: adminData.products,
    docTitle: 'Shop', path: '/',
    hasProducts: adminData.products.length > 0,
    activeAdmin: false, activeShop: true,
    adminCSS: false, shopCSS: true,
    links: {
      shop: {src: '/', title: 'Shop'},
      addProduct: {src: '/admin/add-product', title: 'Add Product'}
    }
  });
});

module.exports = router;