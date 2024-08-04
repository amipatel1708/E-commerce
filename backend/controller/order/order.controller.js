const orderModel = require("../../models/orderProductModel")

const orderController = async (request, response) => {
    try {
        const currentUserId = request.userId
        const orderList = await orderModel.find({ userId: currentUserId })
        console.log(orderList,"orderList")
        response.json({
            data: orderList,
            message: "Order List",
            success: true
        })
    } catch (error) {
        response.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}
module.exports = orderController