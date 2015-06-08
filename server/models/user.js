'use strict';

var mongoose = require('mongoose');
var User;


var userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String, required: true },
  companiesBelongsTo: { type: mongoose.Schema.ObjectId, ref: 'Company' },
  createdAt: { type: Date, default: Date.now, required: true },
});


User = mongoose.model('User', userSchema);
module.exports = User;