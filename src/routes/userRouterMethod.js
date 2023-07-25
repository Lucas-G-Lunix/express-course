const {Router} = require('express')
const router = Router()

router.get('/profile', (req, res) => {
  res.send('image')
})
router.get('/user', (req, res) =>{
  res.send('users page')
})

module.exports = router