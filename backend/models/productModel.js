const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    // productName : String,
    // brandName : String,
    // category : String,
    // productImage : [],
    // description : String,
    // price : Number,
    // sellingPrice : Number
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},{
    timestamps : true
})


const productModel = mongoose.model("product",productSchema)

module.exports = productModel