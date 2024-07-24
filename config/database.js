const dotenv = require("dotenv").config();
module.exports = {
    url: process.env.MONGOURL, 
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  };
  