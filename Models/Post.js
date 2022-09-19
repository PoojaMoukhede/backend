const mongooose = require('mongoose');

const PostSchema = new mongooose.Schema({

    name: {type: String,required: true},
    location: {type: String,required: true},
    likes: {type: Number,required: true},
    description: {type: String,required: true},
    PostImage: {data: Buffer,contentType: String},
    date: {type: String,required: true}
}, {
    versionKey: false 
})

const Post = mongooose.model('posts', PostSchema);

module.exports = Post;