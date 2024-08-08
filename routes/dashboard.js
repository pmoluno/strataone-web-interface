const express = require("express");
const router = express.Router();
const path = require("path");
const { authenticateUser } = require("../middleware/auth");
const { uploadImage } = require("../middleware/fileUpload");
const { User, Admin, Post } = require("../models");
const fs = require('fs');

// Middleware to check if user is authenticated
router.use(authenticateUser);

// Dashboard home
router.get("/", async (req, res) => {
  res.render("admin-dashboard", { layout: "layouts/dashboard-layout" });
});

// Analytics
router.get("/analytics", async (req, res) => {
  res.render("admin-analytics", { layout: "layouts/dashboard-layout" });
});

// Articles list
router.get("/articles", async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.render("admin-articles", { layout: "layouts/dashboard-layout", allPosts });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

// New article form
router.get("/new-article", async (req, res) => {
  res.render("admin-new-articles", { layout: "layouts/dashboard-layout" });
});

// Edit article form
router.get('/articles/edit/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.redirect("/dashboard/articles");
    }
    res.render('admin-edit-articles', {
      post,
      layout: "layouts/dashboard-layout"
    });
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

// Update article
router.put('/articles/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, content, category } = req.body;

    const post = await Post.findByIdAndUpdate(id, {
      title,
      description,
      content,
      category
    }, { new: true });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user settings
router.put('/settings', async (req, res) => {
  try {
    const { username, gender, description } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {
      username,
      gender,
      description
    }, { new: true });

    res.status(200).json({ message: 'Settings updated successfully', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add new article
router.post("/add-article", async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const { image } = req.files;
  const uploadDir = path.resolve(__dirname, '..', 'public/posts');
  const uploadPath = path.join(uploadDir, image.name);

  // Check if the directory exists, if not create it
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  try {
    await image.mv(uploadPath);

    const postData = {
      ...req.body,
      image: `/posts/${image.name}`
    };

    await Post.create(postData);
    res.redirect("/dashboard/articles");
  } catch (error) {
    res.status(500).send(error);
  }
});

// User settings page
router.get("/settings", async (req, res) => {
  res.render("admin-settings", { layout: "layouts/dashboard-layout", user: req.user });
});

// Delete article
router.get('/delete-post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find and delete the post by ID
    const result = await Post.findByIdAndDelete(id);

    if (!result) {
      res.redirect("/dashboard/articles");
    }

    res.redirect("/dashboard/articles");
  } catch (error) {
    console.error(error);
    res.redirect("/dashboard/articles");
  }
});

module.exports = router;