const express = require("express");
const router = express.Router();
const path = require("path");
const { authenticateUser } = require("../middleware/auth");
const { uploadImage } = require("../middleware/fileUpload");
const { User, Admin, Post } = require("../models");

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
router.post("/add-article", uploadImage, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      image: req.file ? `/posts/${req.file.filename}` : null
    });
    res.redirect("/dashboard/articles");
  } catch (error) {
    res.status(500).render("error", { error });
  }
});

// User settings page
router.get("/settings", async (req, res) => {
  res.render("admin-settings", { layout: "layouts/dashboard-layout", user: req.user });
});

module.exports = router;