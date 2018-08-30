var express = require('express');
var app = express();

// hanldebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// First route
// if I do: app.get('/hello-world', it doesn't work
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });


// Second Route
// updating my route
// if I do: app.get('/hello-gif'...  NOT WORKING
// app.get('/', function (req, res) {
//     var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
//     res.render('hello-gif', { gifUrl: gifUrl })
// });


// Third Route
// If I do: app.get('/greetings/:name',... NOT WORKING
// app.get('/', function (req, res) {
//     var name = req.params.name;
//     res.render('greetings', { name: name });
// });

// Fourth Route - Home Page
app.get('/', function (req, res) {
    console.log(req.query)
    res.render('home')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});