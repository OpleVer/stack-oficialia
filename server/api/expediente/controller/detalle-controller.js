"use strict";

const detalle = require('../dao/detalle-dao');

module.exports = class detalleController {
  static getAll(req, res) {
    detalleDAO
      .getAll()
      .then(detalles => res.status(200).json(detalles))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _detalle = req.body;

    detalleDAO
      .createNew(_detalle)
      .then(detalle => res.status(201).json(detalle))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    detalleDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
