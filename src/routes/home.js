function HomeRoutes(app){
  app.get('/dashboard', (req, res) =>{
    res.render('index')
  })
  app.get('/about', (req, res) =>{
    res.send('about page')
  })
}

module.exports = HomeRoutes
