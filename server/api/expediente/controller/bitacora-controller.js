"use strict";

const bitacora = require('../dao/bitacora-dao');

module.exports = class bitacoraController {
  static getAll(req, res) {
    bitacoraDAO
      .getAll()
      .then(bitacoras => res.status(200).json(bitacoras))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _bitacora = req.body;

    bitacoraDAO
      .createNew(_bitacora)
      .then(bitacora => res.status(201).json(bitacora))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    bitacoraDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
