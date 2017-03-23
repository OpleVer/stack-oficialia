"use strict";

const detalleController = require('../controller/detalle-controller');

module.exports = class detalleRoutes {
  static init(router) {
    router
      .route('/api/detalle')
      .get(detalleController.getAll)
      .post(detalleController.createNew);

    router
      .route('/api/detalle/:id')
      .delete(detalleController.removeById);
  }
}
