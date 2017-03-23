"use strict";

const mongoose = require('mongoose');
const expect = require('chai').expect;

  const bitacoraDAO = require(process.cwd() + '/server/api/expediente/dao/bitacora-dao');
  const setupMongoose = require('../../_helpers/db').setupMongoose;



describe('bitacoraDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    bitacoraDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
