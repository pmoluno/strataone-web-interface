const mongoose = require('mongoose');

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
    trim: true,
    default: "/images/default-blog.png"
  },
  category: {
    type: String,
    default: "Uncategorized",
    trim: true
  },
  slug: {
    type: String,
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

// Function to generate a slug from a string
const generateSlug = (title) => {
  return title.toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, '') // Remove all non-word chars
              .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with -
              .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
};

// Pre-save middleware to generate a unique slug
PostSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('title')) {
    let slug = generateSlug(this.title);
    let slugExists = await mongoose.models.Post.findOne({ slug });

    while (slugExists) {
      const uniqueIdentifier = Math.floor(Math.random() * 10000);
      slug = `${slug}-${uniqueIdentifier}`;
      slugExists = await mongoose.models.Post.findOne({ slug });
    }

    this.slug = slug;
  }
  next();
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
