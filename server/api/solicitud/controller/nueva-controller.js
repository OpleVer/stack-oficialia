"use strict";

const nueva = require('../dao/nueva-dao');

module.exports = class nuevaController {
  static getAll(req, res) {
    nuevaDAO
      .getAll()
      .then(nuevas => res.status(200).json(nuevas))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _nueva = req.body;

    nuevaDAO
      .createNew(_nueva)
      .then(nueva => res.status(201).json(nueva))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    nuevaDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
