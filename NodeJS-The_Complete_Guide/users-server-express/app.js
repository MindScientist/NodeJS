const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs.');
    next();
});
app.use('/product', (req, res, next) => {
    console.log('In the 1st middleware');
    res.send('<h1>Product page</h1>');
});
app.use('/', (req, res, next) => {
    console.log('In the 2nd middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);