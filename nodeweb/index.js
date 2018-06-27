var express = require('express')
var http = require('http')
var routes = require('./routes/routes')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var path = require('path')
//var errorHandler = require('errorhandler')
    
var app = express()
    
    // all environments
app.set('port', 8080)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(methodOverride())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
   
// Routes
app.get('/', routes.getUsers);
app.post('/save', routes.saveUser);
    
// error handling middleware should be loaded after the loading the routes
/*if (app.get('env') === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}*/
    
var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})