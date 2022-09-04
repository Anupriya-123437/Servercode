let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/', function(req, res){
   res.send(`
    <form action="/answer" method="POST">
       <p>What color is the sky on a clear and a sunny day?</p>
       <input name="skycolor" autocomplete="off">
       <button>Submit answer</button>
    </form>
   `)
})

ourApp.post('/answer', function(req, res) {
  if (req.body.skycolor.toUpperCase() == "BLUE") {
    res.send(`
       <p>Congrats, that is the correct answer!</p>
       <a href="/">Back to homepage</a>
    `)
  } else{
   res.send(`
   <p>Sorry, that is incorrect.</p>
   <a href="/">Back to homepage</a>
   `)
  }
})

ourApp.get('/answer', function(req, res) {
  res.send("Are you lost there is nothing to see here")
})

ourApp.listen(200)

