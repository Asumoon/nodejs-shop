const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Order = require('../models/order');
const Cart = require('../models/cart');

// Register
router.post('/register',(req, res, next) => {
    let order = new Order(); 
    order.menuList = req.body.menuList;
    order.menuItem = req.body.menuItem;
    order.itemDescription = req.body.itemDescription;
    order.itemCost = req.body.itemCost;

    order.save(function(err) {
        if (err) {
           res.send('failed to register');
        } else {
            res.send('Data is submitted Successfully')
        } 
    })
 });


router.get('/register', (req, res) => {
    res.render('order/register');  
});

router.get('/checkout', (req, res) => {
    var cart = new Cart(req.session.cart);
    res.render('order/checkout',{        
        totalPrice: cart.totalPrice
    });  
});

router.get('/', (req, res) => { 
    res.render('order/order',{
        item_veg:  Order.find({"menuList": "Veg Staters"}).sort( {_id:-1}),
        item_non_veg:  Order.find({"menuList": "Non Veg Starters"}).sort( {_id:-1}),       
    });
});


router.get('/fullcart', (req, res) => { 
    // cart List batwa render gareko data 
    if(!req.session.cart){
        return res.render('partials/full_cart',{products: null});
    } else {
        var cart = new Cart(req.session.cart);
        res.render('partials/full_cart', {
            products: cart.generateArray(), 
            totalPrice: cart.totalPrice
        })
    }
});

router.get('/add-to-cart/:id', (req, res, next) => {
    var productId = req.params.id;

    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Order.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        else {
            cart.add(product, product.id);
            req.session.cart = cart;
            console.log(req.session.cart);
            res.redirect('/order');
        }
    });

});



 module.exports = router;


