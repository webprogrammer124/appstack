const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    desc: String,
    image: String,
    
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product