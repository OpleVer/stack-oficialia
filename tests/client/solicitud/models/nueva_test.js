'use strict';

describe('nueva', function() {
  var _nueva;

  beforeEach(module('SIOE'));

  beforeEach(inject(function($injector) {
    _nueva = $injector.get('nueva');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _nueva).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _nueva();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _nueva();
      expect(m1.isValid()).toBe(false);

      var m2 = new _nueva();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _nueva();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
