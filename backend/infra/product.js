const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    
    id: Number,
    name: String,
    type: String,
    prices: Number,
    rating: Number,
    warranty_years: Number,
    available: Boolean

});

const Product = mongoose.model('products', ProductSchema);

module.exports = {Product}