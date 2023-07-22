const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/archivo', (req, res) => {
  res.sendFile('./javascript.jpeg', {
    root: __dirname
  })
})

app.get('/user', (req, res) => {
  res.json({
    name: 'Lucas',
    lastname: 'Gruden',
    age: 19,
    address: {
      city: 'New York',
      street: 'random street 433'
    }
  })
})

app.get('/isAlive', (req, res) => {
  res.sendStatus(204)
})


app.listen(3000)
console.log(`Server on port ${3000}`)


// app.get('/products', (req, res) => {
//     res.send('lista productos')
// })
//
// app.post('/products', (req, res) => {
//     res.send('creando productos')
// })
//
// app.put('/products', (req, res) => {
//     res.send('actualizando productos')
// })
//
// app.delete('/products', (req, res) => {
//     res.send('eliminando productos')
// })
//
// app.patch('/products', (req, res) => {
//     res.send('parchando productos')
// })

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
//
// app.get('/about', (req, res) => {
//     res.send('About')
// })
//
// app.get('/weather', (req, res) => {
//     res.send('El clima actual es')
// })
//
// app.use((req, res) => {
//     res.status(404).send('No se encontro la pagina')
// })
// const http = require("http")
// const fs = require('fs')
//
// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })
//
// server.listen(3000)
// console.log('Server started...')