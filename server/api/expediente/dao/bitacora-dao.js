"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const bitacoraSchema = require('../model/bitacora-model');
const _ = require('lodash');

bitacoraSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    bitacora
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

bitacoraSchema.statics.createNew = (bitacora) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(bitacora)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new bitacora(bitacora);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

bitacoraSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    bitacora
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const bitacora = mongoose.model('bitacora', bitacoraSchema);

module.exports = bitacora;
