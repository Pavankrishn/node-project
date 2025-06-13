const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
  name: String,
  age: Number,
  city: String
});

// Create and export the model
const MyUser = mongoose.model('users', UserSchema);
module.exports = MyUser;
