var redis = require('redis');
var client = redis.createClient('6379', '172.19.0.2');

exports.index = function(req, res){
    res.render('index', { title: 'App-Andre' });
};

exports.saveUser = function(req, res) {
    var newUser = {};
    var d = new Date();
    var n = d.getTime();
    var userid = n;
    newUser.user = req.body['user_txt'];
    newUser.username = req.body['name_txt'];
    newUser.pass = req.body['pass_txt'];
   
    client.hset('Users', userid, newUser.user, newUser.username, newUser.pass);
    res.redirect("/");
};

exports.getUsers = function (req, res){
    var users = [];
    client.hgetall("Users", function(err, objs) {
        if(objs){
            for(var u in objs) {
                var newUser = {
                    text: objs[u],
                    id:u
                };
                users.push(newUser);
            }
        }else{
            var newUser = {
                text: "No hay usuarios",
                id:"0"
            };
            users.push(newUser);
        }
        res.render('index', {title: 'App-Andre', users: users});
    });
}