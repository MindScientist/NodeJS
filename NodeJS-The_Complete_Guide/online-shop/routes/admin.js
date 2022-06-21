const express = require('express');

const router = express.Router();

const productController = require('../controllers/products');

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

module.exports = router;