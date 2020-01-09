var express = require('express');
var app = express();

app.get('/update.html', function (req, res, next) {
      console.log(req.query);
      if (req.query.name != undefined) {
          app.locals.name = req.query.name;
          app.locals.link = req.query.link;
          res.send('<a href="/">Successfully added, go back to home</a>');
      } else {
          next();
      }
});
app.use(express.static('static'));
app.locals.name = 'Hi All';
app.locals.link = 'https://www.google.com/';
app.get('/', function (req, res) { res.send('<a href="'+app.locals.link+'">'+app.locals.name+'</a>'); })
app.listen(3000);


