








const mongoose= require('mongoose');
const menuOrderingPricesModel=  mongoose.Schema(
    {
        
            _id : String,
            dishSize : String,
            dishPrice : Number,
            dishId : String,
            dishName : String,
            dishPicture : String,
            dishCategory : String,
            dishDescription : String,
            dishVeganOption : Boolean,
            __v : Number
        
    }
)

module.exports=mongoose.model('menuOrderingPrices', menuOrderingPricesModel);