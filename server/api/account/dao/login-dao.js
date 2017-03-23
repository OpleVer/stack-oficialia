"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const loginSchema = require('../model/login-model');
const _ = require('lodash');

loginSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    login
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

loginSchema.statics.createNew = (login) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(login)) {
      return reject(new TypeError('Todo is not a valid object.'));
    }

    let _something = new login(login);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

loginSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    login
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const login = mongoose.model('login', loginSchema);

module.exports = login;
