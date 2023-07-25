function UserRoutes(app){
  app.get('/profile', (req, res) => {
    res.send('image')
  })
  app.get('/user', (req, res) =>{
    res.send('users page')
  })
}
module.exports = UserRoutes