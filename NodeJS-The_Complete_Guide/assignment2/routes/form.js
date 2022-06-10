const express = require('express');
const router = express.Router();

const usersData = require('./users');
const formData = require('./form');

router.get('/', (req, res, next) => {
  res.render('form', {
    formAction: '/add-user',
    docTitle: 'User add form',
    path: '',
    links: [
      { src: '/', title: 'Add users' },
      { src: '/users', title: 'Users list' },
    ]
  });
});

module.exports = router;