"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const detalleSchema = require('../model/detalle-model');
const _ = require('lodash');

detalleSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    detalle
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

detalleSchema.statics.createNew = (detalle) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(detalle)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new detalle(detalle);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

detalleSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    detalle
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const detalle = mongoose.model('detalle', detalleSchema);

module.exports = detalle;
