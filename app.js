const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.get('/', (req, res) => res.send('<h1>Welcome to Web Dev</h1>'))
app.get('/hello', (req, res) => res.send('Hello World'))
app.listen(port)