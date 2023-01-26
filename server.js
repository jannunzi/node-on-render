const express = require('express')
const server = express()
const port = process.env.PORT || 4000;
server.get('/', (req, res) => res.send('<h1>Welcome to Web Dev</h1>'))
server.get('/hello', (req, res) => res.send('Hello World'))
server.listen(port)