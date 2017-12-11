const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Order = require('../models/order'); // Order Scheam
const Cart = require('../models/cart');
const Delivery = require('../models/delivery'); // Delivery Schema

// Register
router.post('/checkout',(req, res, next) => {
    let delivery = new Delivery(); 

    delivery.fname = req.body.fname;
    delivery.lname = req.body.lname;
    delivery.phone = req.body.phone;
    delivery.email = req.body.email;
    delivery.deliveryTime = req.body.deliveryTime;
    delivery.foodNote = req.body.foodNote;
    delivery.deliveryNote = req.body.deliveryNote;
    delivery.voucher = req.body.voucher;

    delivery.save(function(err) {
        if (err) {
           res.send('failed to register');
           console.log(delivery);
        } else {
            res.redirect('/order/checkout');
            console.log(delivery);
        } 
    })
 });


router.get('/', (req, res) => { 
    res.render('order/delivery_item',{
        deliver_item:  Delivery.find({}).sort( {_id:-1})       
    });
});



 module.exports = router;


