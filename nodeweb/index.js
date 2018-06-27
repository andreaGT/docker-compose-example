var express = require('express'),
    http = require('http');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

if(process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
  // additional prod environemtn configuration
}
if(process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  // additional prod environemtn configuration
}

// Routes
app.get('/', routes.getUsers);
app.post('/save', routes.saveUser);


app.listen(80, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
