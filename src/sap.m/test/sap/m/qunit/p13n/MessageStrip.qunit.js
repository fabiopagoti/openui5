/* global QUnit, sinon */
sap.ui.define([
	"sap/m/p13n/MessageStrip",
    "sap/ui/core/InvisibleMessage",
    "sap/ui/core/Lib",
    "sap/ui/core/Core"
], function(MessageStrip, InvisibleMessage, Library, Core) {
	"use strict";

	QUnit.module("p13n.MessageStrip API tests", {
		beforeEach: function() {
		},
		afterEach: function() {
		}
	});

    QUnit.test("Check initialization (announcement enabled)", function(assert) {
        const oInvisibleMessage = InvisibleMessage.getInstance();
        const oMessageSpy = sinon.spy(oInvisibleMessage, "announce");

        const oMessageStrip = new MessageStrip({
            type: "Information",
            text: "Test"
        });
        oMessageStrip.placeAt("qunit-fixture");
        Core.applyChanges();

        const oRB = Library.getResourceBundleFor("sap.m");

        assert.ok(oMessageStrip, "MessageStrip should be initialized");

        // check if the announce method of the invisiblemessage has been called with the correct arguments using the spy
        assert.ok(oMessageSpy.calledOnce, "InvisibleMessage.announce should be called once");
        assert.ok(oMessageSpy.calledWith(oRB.getText("p13n.MESSAGE_STRIP_ANNOUNCEMENT", ["Information", "Test"])), "InvisibleMessage.announce should be called with the correct arguments");
        oInvisibleMessage.announce.restore();
    });

    QUnit.test("Check initialization (announcement disabled)", function(assert) {
        const oInvisibleMessage = InvisibleMessage.getInstance();
        const oMessageSpy = sinon.spy(oInvisibleMessage, "announce");

        const oMessageStrip = new MessageStrip({
            announceOnInit: false,
            type: "Information",
            text: "Test"
        });
        oMessageStrip.placeAt("qunit-fixture");
        Core.applyChanges();

        assert.ok(oMessageStrip, "MessageStrip should be initialized");

        // check if the announce method of the invisiblemessage has been called with the correct arguments using the spy
        assert.notOk(oMessageSpy.called, "InvisibleMessage.announce should not be called");
        oInvisibleMessage.announce.restore();
    });
});