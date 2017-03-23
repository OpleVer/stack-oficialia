"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const nuevaDAO = require(process.cwd() + '/server/api/solicitud/dao/nueva-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('nuevaDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    nuevaDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
