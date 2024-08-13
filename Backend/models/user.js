const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please provide a name'],
        maxlength:50,
        minlength:3
    },
    email:{
        type:String,
        required: [true, 'Please provide email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6
    },
    // supervisor_email:{
    //     type:String,
    // }
    createdAt: {
        type: Date,
        default: Date.now,
    },
      experience: {
        type: Number,
        default: 0,
      },
      verificationToken: String,
      isVerified: {
        type: Boolean,
        default: false,
      },
      verified: Date,
      passwordToken: {
        type: String,
      },
      passwordTokenExpirationDate: {
        type: Date,
      },
});

UserSchema.pre('save', async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model('User', UserSchema);