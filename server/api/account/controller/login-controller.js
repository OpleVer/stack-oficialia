"use strict";

const login = require('../dao/login-dao');

module.exports = class loginController {
  static getAll(req, res) {
    loginDAO
      .getAll()
      .then(logins => res.status(200).json(logins))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _login = req.body;

    loginDAO
      .createNew(_login)
      .then(login => res.status(201).json(login))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    loginDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
