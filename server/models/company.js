'use strict';

var mongoose = require('mongoose');
var Company;

var companySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, required: true },
  admins: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  projectSuites: [{ type: mongoose.Schema.ObjectId, ref: 'ProjectSuite' }],
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Project' }],
  numOfUsers: { type: Number, required: true }
});

Company = mongoose.model('Company', companySchema);
module.exports = Company;