'use strict';

var mongoose = require('mongoose');
var Project;

var projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
  projectSuiteParent: { type: mongoose.Schema.ObjectId, ref: 'ProjectSuite' },
});

Project = mongoose.model('Project', projectSchema);
module.exports = Project;