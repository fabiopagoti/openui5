/* global QUnit,sinon*/

(function () {
	'use strict';

	var DOM_RENDER_LOCATION = 'qunit-fixture';

	//================================================================================
	// Properties
	//================================================================================
	QUnit.module('API', {
		beforeEach: function () {
			
		},
		afterEach: function () {
			
		}
	});

	QUnit.test('test 1', function (assert) {
		assert.ok(true, 'test 1 comment');
	});

	QUnit.test('test 2', function (assert) {
		assert.ok(true, 'test 2 comment');
	});


	QUnit.module('Properties', {
		beforeEach: function () {
			
		},
		afterEach: function () {
			
		}
	});

	QUnit.test('test 3', function (assert) {
		assert.ok(true, 'test 3 comment');
	});

})();
