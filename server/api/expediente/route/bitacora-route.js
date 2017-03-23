"use strict";

const bitacoraController = require('../controller/bitacora-controller');

module.exports = class bitacoraRoutes {
  static init(router) {
    router
      .route('/api/bitacora')
      .get(bitacoraController.getAll)
      .post(bitacoraController.createNew);

    router
      .route('/api/bitacora/:id')
      .delete(bitacoraController.removeById);
  }
}
