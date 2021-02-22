



const mongoose= require('mongoose');
const orderSummaryModel = mongoose.Schema(
    {
        orderId: String,
        orderItems: Object,
        orderDetails: Object,
        orderAddress: Object,
        orderNotes: Object,
        totalSum: Number,
        orderDate: String
    }
)
module.exports = mongoose.model('summaries', orderSummaryModel);