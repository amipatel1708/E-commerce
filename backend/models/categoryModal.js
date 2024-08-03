// const mongoose = require('mongoose')

// const categorySchema = mongoose.Schema({
//     category : String,
// },{
//     timestamps : true
// })


// const categoryModel = mongoose.model("category",categorySchema)

// module.exports = categoryModel
// models/categoryModel.js

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
