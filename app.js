// variables
var express = require('express');
var app = express();
var giphy = require('giphy-api')();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// root
app.get('/', function (req, res) {
    // Thanks Ikey ))
    let searchedGiphy = req.query.term || "lamborghini"
    giphy.search(searchedGiphy, function (err, response) {
        res.render('home', { gifs: response.data })
    });
});

// CSS
app.use(express.static('public'));

// server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
