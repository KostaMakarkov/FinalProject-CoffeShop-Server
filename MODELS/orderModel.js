




const mongoose= require('mongoose');
const orderModel=  mongoose.Schema(
    {
        dishId : String,
        dishDescription: String,
        dishName: String,
        dishPrice: Number,
        dishSize: String
    }
)

module.exports=mongoose.model('orders', orderModel);