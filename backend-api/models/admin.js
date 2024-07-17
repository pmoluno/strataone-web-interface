const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  number: {
    type: String,
    default: 'Phone Number',
    trim: true
  },
  accountname: {
    type: String,
    default: 'Account Name',
    trim: true
  },
  accountnumber: {
    type: String,
    default: 'Account Number',
    trim: true
  },
  country: {
    type: String,
    default: 'Country',
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: 'Select Your Gender',
    required: true,
  },
  isSuperAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true,
  },
  description: {
    type: String,
    default: 'Describe Yourself :)',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

// Authenticate input against database
AdminSchema.statics.authenticate = async function (email, password, callback) {
  try {
    const user = await this.findOne({ email }).exec();
    if (!user) {
      const err = new Error('User not found.');
      err.status = 401;
      return callback(err);
    }
    const result = await bcrypt.compare(password, user.password);
    if (result === true) {
      return callback(null, user);
    } else {
      const err = new Error('Password mismatch.');
      err.status = 401;
      return callback(err);
    }
  } catch (err) {
    return callback(err);
  }
};

// Hashing a password before saving it to the database
AdminSchema.pre('save', async function (next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next();
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
