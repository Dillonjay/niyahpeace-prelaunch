// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date
});


const User = mongoose.model('Users', userSchema);

// Make this module available to our application.
module.exports = User;