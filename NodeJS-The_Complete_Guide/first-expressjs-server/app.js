const express = require('express');

const app = express();

/* app.use((req, res, next) => {
    console.log(`I'm the 1st middleware!`);
    next();
});

app.use('/', (req, res, next) => {
    console.log(`I'm the 2nd middleware!`);
    res.send('<h1>Hi there!</h1>');
}); */

app.use('/users', (req, res, next) => {
    console.log(`I'm the users middleware!`);
    res.send('<h1>Hi there! You are on users page.</h1>');
});

app.use('/', (req, res, next) => {
    console.log(`I'm the home middleware!`);
    res.send('<h1>Hello from homepage!</h1>');
});

app.listen(3000);