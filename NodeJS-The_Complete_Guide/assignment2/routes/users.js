const express = require('express');
const router = express.Router();

const users = [];

router.post('/add-user', (req, res, next) => {
  users.push(req.body.userName);
  res.redirect('/');
});

router.get('/users', (req, res, next) => {
  res.render('users-list', {
    docTitle: 'Users list', users: users, path: '',
    links: [
      { src: '/', title: 'Add users' },
      { src: '/users', title: 'Users list' },
    ]
  });
});

module.exports = router;