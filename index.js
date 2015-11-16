 var express = require('express')
 var app = express()		 var app = express()
 		 
 app.set('port', (process.env.PORT || 5000))		 app.set('port', (process.env.PORT || 5000))
 app.use(express.static(__dirname + '/public'))		 app.use(express.static(__dirname + '/public'))
 		 
 app.get('/', function(request, response) {		 app.get('/', function(request, response) {
   response.send('Hello World!')		   response.send('Hello World!')
 })		 })
 		 
 app.listen(app.get('port'), function() {		 app.listen(app.get('port'), function() {
   console.log("Node app is running at localhost:" + app.get('port'))		   console.log("Node app is running at localhost:" + app.get('port'))
 })		 })
