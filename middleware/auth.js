const User = require('../models/user');

exports.authenticateUser = async (req, res, next) => {
  if (req.session && req.session.userId) {
    try {
      const user = await User.findById(req.session.userId);
      if (user) {
        req.user = user;
        return next();
      }
    } catch (error) {
      return next(error);
    }
  }
  res.redirect("/sign-in");
};