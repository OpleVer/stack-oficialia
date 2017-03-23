'use strict';

describe('login', function() {
  var _login;

  beforeEach(module('SIOE'));

  beforeEach(inject(function($injector) {
    _login = $injector.get('login');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _login).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _login();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _login();
      expect(m1.isValid()).toBe(false);

      var m2 = new _login();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _login();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
