"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const nuevaSchema = require('../model/nueva-model');
const _ = require('lodash');

nuevaSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    nueva
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

nuevaSchema.statics.createNew = (nueva) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(nueva)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new nueva(nueva);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

nuevaSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    nueva
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const nueva = mongoose.model('nueva', nuevaSchema);

module.exports = nueva;
