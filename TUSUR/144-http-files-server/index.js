const data = require('http');

const directory = require('./directory-list');

const port = 2000;

const server = data.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    directory.listDirectoryContent()
        .then((data) => {
            response.end(data);
        })
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})