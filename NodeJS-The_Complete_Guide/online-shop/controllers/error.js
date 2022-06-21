exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    docTitle: 'Page not found!', path: '', links: {
      shop: {src: '/', title: 'Shop'},
      addProduct: {src: '/admin/add-product', title: 'Add Product'}
    }
  });
};