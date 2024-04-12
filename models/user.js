var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  metamaskAddress: {
    type: String,
    required: true,
    unique: true 
  }
});

module.exports = mongoose.model('User', userSchema);