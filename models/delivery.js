const mongoose = require('mongoose');
const config = require('../config/database');

// tscArticle Schema
const deliverySchema = mongoose.Schema({
    fname:{ type: String },  
    lname:{ type: String },  
    phone:{ type: Number },  
    email:{ type: String },
    deliveryTime :{ type: Number }, 
    foodNote:{ type: String } ,
    deliveryNote:{ type: String } ,
    voucher:{ type: String } 
});

const Delivery = module.exports = mongoose.model('delivery', deliverySchema);
