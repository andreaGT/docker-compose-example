var express = require('express'),
    http = require('http');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.getUsers);
app.post('/save', routes.saveUser);


app.listen(80, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
