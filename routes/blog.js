const express = require("express");
const router = express.Router();
const Post = require('../models/post');
const { translationKeys, languages } = require('../config/localization');
const { getPaginatedPosts } = require('../services/postService');

router.get("/", async (req, res) => {
    try {
        const translations = translationKeys.reduce((acc, key) => {
            acc[key] = res.__(key);
            return acc;
        }, {});

        const currentLocale = req.cookies.locale || 'en';
        const currentLanguage = languages[currentLocale];

        const settings = {
            theme: "dark",
            language: currentLocale
        };

        const allPosts = await Post.find({});
        const postCategories = [...new Set(allPosts.map(post => post.category))];

        const currentPage = parseInt(req.query.page) || 1;
        const postsPerPage = 10;

        const { posts, pageCount, totalPosts } = await getPaginatedPosts(currentPage, postsPerPage);

        res.render('blog', {
            layout: "layouts/blog-layout",
            posts,
            pageCount,
            currentPage,
            title: "Strata One Blog - The Crypto Validator Super App",
            description: "",
            image: "/images/logo.svg",
            postCategories,
            settings,
            languages,
            currentLanguage,
            ...translations
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const translations = translationKeys.reduce((acc, key) => {
            acc[key] = res.__(key);
            return acc;
        }, {});

        const currentLocale = req.cookies.locale || 'en';
        const currentLanguage = languages[currentLocale];

        const settings = {
            theme: "dark",
            language: currentLocale
        };

        const posts = await Post.find({});
        const post = await Post.findOne({slug: req.params.id});

        if (!post) {
            return res.status(404).send('Post not found');
        }

        res.render('single-blog', {
            layout: "layouts/blog-layout",
            posts,
            post,
            title: post.title,
            description: post.description,
            image: post.image,
            settings,
            languages,
            currentLanguage,
            ...translations
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;