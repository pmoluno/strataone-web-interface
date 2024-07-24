const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: 'Select Your Gender',
    required: true,
  },
  description: {
    type: String,
    default: 'Describe Yourself :)',
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

UserSchema.statics.authenticate = async function(email, password) {
  try {
    const user = await this.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    } else {
      throw new Error('Invalid password');
    }
  } catch (error) {
    throw error;
  }
};

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;