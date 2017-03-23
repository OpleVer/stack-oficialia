"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const detalleDAO = require(process.cwd() + '/server/api/expediente/dao/detalle-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('detalleDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    detalleDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
