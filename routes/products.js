const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res){
    res.render('products', {products: db.list()});
});

router.get('/:id', function(req, res){
    // var id = parseInt(req.params.id)
    // var product = db.find(id);
    //console.log(req.params.id);
    var product = db.find(req.params.id);
    console.log(db.find(req.params.id))
    res.render('product', product);
});

router.delete('/:id', function(req, res){
    var product = db.find(req.params.id);
    db.remove(id);
    res.redirect('/products');
})

router.post('/', function(req, res){
    var name = req.body.name;
    var rating = req.body.rating;
    if( name && rating) {
        db.add(name, rating);
        res.redirect('/products');
    }
    else{
        res.render('Error missing name and/or rating');
    }
});

module.exports = router;