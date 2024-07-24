const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const User = require('../models/user');
const Post = require('../models/post');
const fetch = require('node-fetch');
const i18n = require('i18n');

// Import configuration and data
const { translationKeys, languages } = require('../config/localization');
const { networksP, networkFAQs, validatorAddresses, networks, team } = require('../config/data');

// Import utility functions
const { getCoinPrice, getAllCoinPrices } = require('../utils/priceUtils');

// Configure i18n
i18n.configure({
  locales: Object.keys(languages),
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'en',
  cookie: 'locale'
});


// Route handlers
router.get("/", (req, res) => renderPage(req, res, 'home'));
router.get("/network", (req, res) => renderPage(req, res, 'network', true));
router.get("/calculator", (req, res) => renderPage(req, res, 'calculator', true));
router.get("/about-us", async (req, res) => {
  const posts = await Post.find({});
  renderPage(req, res, 'about', false, { posts, team });
});
router.get("/faq/:id", (req, res) => {
  const theNetworkName = req.params.id;
  const theFaq = networkFAQs.find(n => n.name === theNetworkName)?.faqs || [];
  renderPage(req, res, 'faq', false, { theNetworkName, theFaq });
});
router.get("/airdrop", (req, res) => renderPage(req, res, 'airdrop'));
router.get("/contact-us", (req, res) => renderPage(req, res, 'contact'));
router.get("/sign-in", (req, res) => renderPage(req, res, 'admin-login', false, {}, "layouts/access-layout"));
router.get("/sign-up", (req, res) => renderPage(req, res, 'register', false, {}, "layouts/access-layout"));

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

// Helper function to render pages
async function renderPage(req, res, view, fetchPrices = false, additionalData = {}, layout = "layouts/layout") {
  const translations = {};
  translationKeys.forEach(key => {
    translations[key] = res.__(key);
  });

  const currentLocale = req.cookies.locale || 'en';
  const currentLanguage = languages[currentLocale];

  const settings = {
    theme: "dark",
    language: currentLocale
  };

  let thePrice;
  if (fetchPrices) {
    try {
      thePrice = await getAllCoinPrices();
    } catch (err) {
      console.error('Error fetching prices:', err);
    }
  }

  const pageData = {
    title: "Strata One - The One Stop Crypto Platform For Crypto Validators",
    description: "Strata One is a leading crypto validator company dedicated to empowering secure and resilient blockchain networks. With our advanced validation solutions, we ensure the integrity and trustworthiness of transactions, safeguarding the future of decentralized finance.",
    networks,
    settings,
    languages,
    currentLanguage,
    ...translations,
    ...additionalData
  };

  if (thePrice) {
    pageData.thePrice = thePrice;
  }

  res.render(view, { layout, ...pageData });
}

module.exports = router;