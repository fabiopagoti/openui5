/*!
 * ${copyright}
 */

 sap.ui.define([],
    function () {
        'use strict';

        /**
         * ControlA renderer.
         * @namespace
         */
         var ControlARenderer = {};

        /**
         * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
         *
         * @param {sap.ui.core.RenderManager}
         *          rm the RenderManager that can be used for writing to the render output buffer
         * @param {sap.ui.core.Control}
         *          control an object representation of the control that should be rendered
         */
         ControlARenderer.render = function (rm, control) {

            this.renderContainerBegin(rm, control);

            this.renderContent(rm, control);

            this.renderContainerEnd(rm, control);

        };

        ControlARenderer.renderContainerBegin = function(rm, control){
            rm.write('<div');
            rm.writeControlData(control);
            rm.addClass('sapFooControlA');
            rm.writeClasses();
            rm.write('>');

        };

        ControlARenderer.renderContent = function(rm, control){
            var sP1 = control.getP1();
            var bP2 = control.getP2();

            if(bP2){
                rm.write('<span><b>');
                rm.write(sP1);
                rm.write('</b></span>');
            } else{
                rm.write('<span>');
                rm.write(sP1);
                rm.write('</span>');
            }

        };

        ControlARenderer.renderContainerEnd = function(rm, contro){
            rm.write('</div>');
        };


        return ControlARenderer;

    }, /* bExport= */ true);