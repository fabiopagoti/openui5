/*!
 * ${copyright}
 */

// Provides control sap.t.SideNavigation.
sap.ui.define(['jquery.sap.global', './library', 'sap/ui/core/Control'],
	function (jQuery, library, Control) {
		'use strict';

		/**
		 * Constructor for a new ControlA.
		 *
		 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
		 * @param {object} [mSettings] Initial settings for the new control
		 *
		 * @class
		 * The ControlA control is easy example of a UI5 Control
		 * @extends sap.ui.core.Control
		 *
		 * @author Fábio Pagoti
		 * @version ${version}
		 *
		 * @constructor
		 * @public
		 * @since 1.50
		 * @alias sap.foo.ControlA
		 */
		var ControlA = Control.extend('sap.foo.ControlA', {
			metadata: {
				library: 'sap.foo',
				properties: {
					/**
					 * Specifies if the control is expanded.
					 */
					p1: {
						type: 'string',
						group: 'Misc', 
						defaultValue: null
					},
					p2: {
						type: 'boolean',
						group: 'Misc',
						defaultValue: false
					}
				},
				defaultProperty: 'p1'
			}
		});

		ControlA.prototype.init = function () {
			console.log('ControlA init');
		};

		
		/**
		 * @private
		 */
		ControlA.prototype.onBeforeRendering = function () {
			
		};

		/**
		 * @private
		 */
		ControlA.prototype.onAfterRendering = function () {
			
		};

		/**
		 * @private
		 */
		ControlA.prototype.exit = function () {
			
		};

		return ControlA;

	}, /* bExport= */ true
);