const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userSchema = new Schema({
  local: {
    email: { type: String, unique: true, sparse: true },
    password: { type: String, select: false }
  },
  googleId: String,
  fName: String,
  lName: String,
  Dob: Date,
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

mongoose.model('users', userSchema);
