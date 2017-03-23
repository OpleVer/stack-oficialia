"use strict";

const mongoose = require('mongoose');

const _nuevaSchema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_nuevaSchema);
