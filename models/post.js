const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },
    description: {
        type: String,
        trim: true,
        maxlength: 500
    },
    content: {
        type: String,
        required: true,
        index: 'text'
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        default: "Uncategorized",
        trim: true
    },
    slug: {
        type: String,
        slug: "title",
        unique: true
    },
    likes: {
        type: Number,
        default: 0,
        min: 0
    },
    shared: {
        type: Number,
        default: 0,
        min: 0
    },
    bookmarks: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

// Add any custom methods or statics here if needed
// PostSchema.methods.customMethod = function() { ... };
// PostSchema.statics.customStaticMethod = function() { ... };

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;