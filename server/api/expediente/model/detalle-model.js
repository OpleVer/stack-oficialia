"use strict";

const mongoose = require('mongoose');

const _detalleSchema = {
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_detalleSchema);
