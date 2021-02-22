




const mongoose= require('mongoose');
const forumModel=  mongoose.Schema(
    {
        postId: String,
        postEmail: String,
        postTitle: String,
        postContent: String,
        postCreator: String,
        postDate: String
    }
)

module.exports=mongoose.model('forums', forumModel);