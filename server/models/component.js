'use strict';

var mongoose = require('mongoose');
var Component;

var componentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  projectParent: { type: mongoose.Schema.ObjectId, ref: 'Project' },
  projectSuiteParent: { type: mongoose.Schema.ObjectId, ref: 'ProjectSuite' }
});

Component = mongoose.model('Component', componentSchema);
module.exports = Component;