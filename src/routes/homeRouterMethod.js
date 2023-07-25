const {Router} = require('express')
const path = require('path')

const router = Router()

router.get('/dashboard', (req, res) =>{
  res.render(path.join(__dirname, 'views', 'dashboard.ejs'))
})
router.get('/about', (req, res) =>{
  const title = 'Mi pagina con express'
  res.render(path.join(__dirname, 'views', 'index.ejs'), {title})
})

// console.log(path.join(__dirname, 'views'))
module.exports = router