const Post = require('../models/post');

async function getPaginatedPosts(currentPage, postsPerPage) {
    const totalPosts = await Post.countDocuments();
    const pageCount = Math.ceil(totalPosts / postsPerPage);
    const skip = (currentPage - 1) * postsPerPage;
    const posts = await Post.find().sort({ createdAt: -1 }).skip(skip).limit(postsPerPage);

    return { posts, pageCount, totalPosts };
}

module.exports = { getPaginatedPosts };