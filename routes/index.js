var sign = require('./sign');
var user = require('./user');
module.exports = function(app){
    app.get('/',function(req,res){
        res.redirect('/user/login');
    });
    user.routes(app);
    sign.routes(app);
    
    printAppRoutes(app);
}
function printAppRoutes(app){
    for(var method in app.routes){
      for(var key in app.routes[method]){
          var route = app.routes[method][key];
          console.log(method,route.path);
      }
    }
}
