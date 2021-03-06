var express = require('express');
var app = express();
var preAuth = require('http-auth');
var basic = preAuth.basic({
        realm: "Restricted Access! Please login to proceed"
    }, function (username, password, callback) {
         callback( (username === "someuser" && password === "somepassword"));
    }
);

app.use(preAuth.connect(basic));
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname ));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('fonts', __dirname + '/fonts');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is runningrt', app.get('port'));
});
