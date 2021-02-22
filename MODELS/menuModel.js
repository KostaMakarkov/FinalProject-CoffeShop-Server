




const mongoose= require('mongoose');
const menuModel=  mongoose.Schema(
    {
        dishId: String,
        dishName: String,
        dishPicture: String,
        dishCategory: String,
        dishSize: String,
        dishPrice: String,
        dishDescription: String,
        dishVeganOption: Boolean
    }
)

module.exports=mongoose.model('menus', menuModel);