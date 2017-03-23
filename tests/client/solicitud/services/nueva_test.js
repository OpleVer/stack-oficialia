'use strict';

describe('nueva', function() {
  var _nueva;

  beforeEach(module('SIOE'));

  beforeEach(inject(function($injector) {
    _nueva = $injector.get('nueva');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _nueva).toBe('object');
	})
	  
    it('should doSomething', function() {
      _nueva.doSomething();
    });
  });
});
