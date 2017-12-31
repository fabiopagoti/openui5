/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library sap.foo.
 */
sap.ui.define([],
	function() {

	'use strict';

	/**
	 * SAPUI5 sample library
	 *
	 * @namespace
	 * @name sap.foo
	 * @author Fábio Pagoti
	 * @version ${version}
	 * @public
	 */

	// delegate further initialization of this library to the Core
	sap.ui.getCore().initLibrary({
		name : 'sap.foo',
		version: '${version}',
		dependencies : [],
		types: [],
		interfaces: [],
		controls: [
			'sap.foo.ControlA',
		],
		elements: [
		]
	});

	return sap.foo;

});
