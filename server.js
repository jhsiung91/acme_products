const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const path = require('path')
const db = require('./db')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/vendor', express.static(path.join((__dirname, 'node_modules'))));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
app.use('/products', require('./routes/products'));
app.use(function(err, req, res, next){
  res.render('error', {error: err});
});

app.get('/', function(req, res){
    var product = db.topRating();
    console.log(product.id,product.name,product.rating)
    res.render('index', {id: product.id, name: product.name});
});

app.listen(port, function(){
  console.log(`listening on port ${ port }`);
})