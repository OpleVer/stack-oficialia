"use strict";

const loginController = require('../controller/login-controller');

module.exports = class loginRoutes {
  static init(router) {
    router
      .route('/api/login')
      .get(loginController.getAll)
      .post(loginController.createNew);

    router
      .route('/api/login/:id')
      .delete(loginController.removeById);
  }
}
