'use strict';

describe('login', function() {
  var _login;

  beforeEach(module('SIOE'));

  beforeEach(inject(function($injector) {
    _login = $injector.get('login');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _login).toBe('object');
	})
	  
    it('should doSomething', function() {
      _login.doSomething();
    });
  });
});
