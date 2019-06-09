'use strict';

const mongoose = require('mogoose');

const categories = mongoose.Schema({
  name: {type: String, required: true},
});

module.exports = mongoose.model('categories', categories);