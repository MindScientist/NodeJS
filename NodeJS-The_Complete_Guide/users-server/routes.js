/**
 * routes.js
 * */
const requestHandler = (req, res) => {
    const urlRequested = req.url;
    const httpMethod = req.method;
    switch (urlRequested) {
        case '/':
            res.setHeader('Content-type', 'text/html');
            res.write('<html lang="en">' +
                '<head><title>My dummy page</title></head>' +
                '<body><h1>Welcome to my dummy page</h1></body>' +
                '<form method="post" action="/create-user">' +
                '<input type="text" name="username" placeholder="Enter user name"/>' +
                '<button type="submit">Create user</button>' +
                '</form>' +
                '</html>');
            break;
        case '/users':
            res.setHeader('Content-type', 'text/html');
            res.write('<html lang="en">' +
                '<head><title>My dummy users list</title></head>' +
                '<body><ul>' +
                '<li>User 1</li>' +
                '<li>User 2</li>' +
                '<li>User 3</li>' +
                '<li>User 4</li>' +
                '</ul></body>' +
                '</html>');
            break;
        case '/create-user':
            if (httpMethod === 'POST') {
                const body = [];
                req.on('data', (chunk) => {
                    body.push(chunk);
                });
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const userName = parsedBody.split('=')[1];
                    console.log(userName);
                });
            }
            res.statusCode = 302;
            res.setHeader('Location', '/');
            break;
        default:
            res.statusCode = 302;
            res.setHeader('Location', '/');
            break;
    }
    return res.end();
}

module.exports = { handler: requestHandler }