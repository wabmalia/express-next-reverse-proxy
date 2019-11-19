const basicAuth = require('express-basic-auth')
const proxy = require('http-proxy-middleware')
const express = require('express')

const app = express()
const port = 3001

app
    .use(basicAuth({ users: { 'admin': 'supersecret' }, challenge: true }))
    .get('/api/users', (_, res) => res.send({ users: [{ name: "Sweet" }, { name: "Dude" }] }))
    .use(proxy({ target: 'http://localhost:3000', changeOrigin: true }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))