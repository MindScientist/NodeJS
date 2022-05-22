const fs = require('fs');


const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>My first HTML page</title></head>');
        res.write('<body><form method="post" action="/message"><input name="message" type="text"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (method === 'POST' && url === '/message') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('./dummy.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first HTML page</title></head>');
    res.write('<body><h1>Welcome to NodeJS server</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = { handler: requestHandler }