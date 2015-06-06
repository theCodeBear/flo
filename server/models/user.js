'use strict';

var mongoose = require('mongoose');
var User;


var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  companiesBelongsTo: { type: mongoose.Schema.ObjectId, ref: 'Company' },
});


User = mongoose.model('User', userSchema);
module.exports = User;