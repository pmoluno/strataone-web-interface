const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    index: 'text',
    required: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    default: "Uncategorized",
    trim: true,
  },
  slug: {
    type: String,
    slug: "title",
    unique: true,
  },
  likes: {
    type: Number,
    default: 0,
    required: true,
  },
  shared: {
    type: Number,
    default: 0,
    required: true,
  },
  bookmarks: [{
    post: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
