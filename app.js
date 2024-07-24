const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressEjsLayout = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const databaseConfig = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Database connection
mongoose.connect(databaseConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err));

// i18n configuration
i18n.configure({
  locales: ['en', 'es', 'zh-cn', 'ru', 'pt', 'fr', 'ja', 'ar', 'de', 'ko'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'en',
  cookie: 'locale'
});

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(i18n.init);
app.use(expressEjsLayout);
app.use(fileUpload({
  limits: { fileSize: 10000000 }, // Around 10MB
  abortOnLimit: true,
}));

// View engine setup
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'work harder',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongoUrl: process.env.MONGOURL
  })
}));

// Locale middleware
app.use((req, res, next) => {
  const locale = req.query.lang || req.cookies.locale || 'en';
  res.cookie('locale', locale);
  i18n.setLocale(req, locale);
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/auth'));
app.use('/blog', require('./routes/blog'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/platform', require('./routes/platform'));

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started on port ${PORT}`);
});