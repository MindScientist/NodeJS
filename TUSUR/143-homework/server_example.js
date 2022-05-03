const http = require('http')

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  const message = url.searchParams.get('message')
  res.setHeader('Content-Type', 'text/plain')

  if (!message) {
    res.statusCode = 400
    return res.end('Передайте строку в параметре message GET-запроса')    
  }
  
  res.statusCode = 200
  res.end(message)
});

module.exports = { server }
