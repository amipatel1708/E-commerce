const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    prodcutDetails: {
        type: Array,
        default: []
    },
    email: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    paymentDetails: {
        paymentId: {
            type: String,
            default: ""
        },
        payment_method_type: [],
        payment_status: {
            type: String,
            default: ""
        }
    },
    shipping_options: [],
    totalAmount: {
        type: String,
        default: 0
    }
},{
    timestamps: true,
})
const orderModel = mongoose.model('order',orderSchema)

module.exports = orderModel;