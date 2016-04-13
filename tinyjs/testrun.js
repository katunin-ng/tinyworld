"use strict";

var xsjs = require("sap-xsjs");
var xsjstest = require("sap-xsjs-test");

var options = xsjs.extend({
    test: {
        format: "json",
        pattern: ".*Test",
        reportdir: "./"
    },
    coverage: {
        reporting: {
	        reports: ["json"]
        },
        dir: "./"
    }
});

xsjstest(options).runTests();
