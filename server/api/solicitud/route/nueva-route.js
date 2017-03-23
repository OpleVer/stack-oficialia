"use strict";

const nuevaController = require('../controller/nueva-controller');

module.exports = class nuevaRoutes {
  static init(router) {
    router
      .route('/api/nueva')
      .get(nuevaController.getAll)
      .post(nuevaController.createNew);

    router
      .route('/api/nueva/:id')
      .delete(nuevaController.removeById);
  }
}
