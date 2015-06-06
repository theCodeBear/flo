'use strict';

var mongoose = require('mongoose');
var ProjectSuite;

var projectSuiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Project' }],
});

ProjectSuite = mongoose.model('ProjectSuite', projectSuiteSchema);
module.exports = ProjectSuite;