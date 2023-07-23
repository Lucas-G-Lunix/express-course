const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

app.get('/dashboard', (req, res) =>{
  res.send('dashboard page')
})

app.listen(3000)
console.log(`Server on port ${3000}`)



// Practice 7
// app.get('/profile', (req, res) => {
//   res.send('image')
// })
//
//
// app.use((req, res, next) => {
//   console.log(`Route ${req.url} Method: ${req.method}`)
//   next()
// })
//
// app.use((req, res, next) => {
//   if (req.query.login === 'fazt@faztweb.com'){
//     next()
//   } else {
//     res.send('No autorizado')
//   }
// })
//
// app.get('/dashboard', (req, res) =>{
//   res.send('dashboard page')
// })


// Practice 6
// // all methods
// app.all('/info', (req, res) => {
//   res.send('info')
// })
//
// app.get('/search', (req, res) => {
//   if (req.query.q === 'Javascript Books'){
//     res.send('JS Books')
//   } else {
//     res.send('Books not found')
//   }
// })

// app.get('/hello/:user', (req, res) => {
//   console.log(req.query.x)
//   console.log(req.query.text)
//   res.send(`Hello ${req.params.user}`)
// })

// app.get('/add/:x/:y', (req, res) => {
//   const {x, y} = req.params
//   res.send(`Result: ${parseInt(x) + parseInt(y)}`)
// })

// app.get('/add/:x/:y', ({params: {x, y}}, res) => {
//   res.send(`Result: ${parseInt(x) + parseInt(y)}`)
// })


// Practice 5
//
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false}))
//
// app.post('/user', (req, res) => {
//   console.log(req.body)
//   res.send('New user created')
// })

// Practice 4
// app.get('/', (req, res) => {
//   res.send('Hello World')
// })
//
// app.get('/archive', (req, res) => {
//   res.sendFile('./javascript.jpeg', {
//     root: __dirname
//   })
// })
//
// app.get('/user', (req, res) => {
//   res.json({
//     name: 'Lucas',
//     lastname: 'Gruden',
//     age: 19,
//     address: {
//       city: 'New York',
//       street: 'random street 433'
//     }
//   })
// })
//
// app.get('/isAlive', (req, res) => {
//   res.sendStatus(204)
// })



// Practice 3
// app.get('/products', (req, res) => {
//     res.send('list products')
// })
//
// app.post('/products', (req, res) => {
//     res.send('create products')
// })
//
// app.put('/products', (req, res) => {
//     res.send('updating products')
// })
//
// app.delete('/products', (req, res) => {
//     res.send('deleting products')
// })
//
// app.patch('/products', (req, res) => {
//     res.send('patching products')
// })


// Practice 2
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
//
// app.get('/about', (req, res) => {
//     res.send('About')
// })
//
// app.get('/weather', (req, res) => {
//     res.send('The actual weather is')
// })
//
// app.use((req, res) => {
//     res.status(404).send('Not found')
// })
// Practice 1
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