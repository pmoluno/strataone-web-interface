const express = require("express");
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const databaseConfig = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth"));
app.use("/blog", require("./routes/blog"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/platform", require("./routes/platform"));

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`App started on port ${PORT}`);
});
