require.config({
	urlArgs: "bust=0.2610613638535142",
	baseUrl: "/dev",
	paths: {
		requirejs: "bower_components/requirejs/require",
		text: "bower_components/requirejs-text/text",
		"underscore.deep": "../underscore.deep",
		jquery: "bower_components/jquery/jquery",
		"requirejs-text": "bower_components/requirejs-text/text",
		underscore: "bower_components/underscore/underscore"
	},
	shim: {
		backbone: {
			exports: "Backbone",
			deps: [
				"jquery",
				"underscore"
			]
		},
		underscore: {
			exports: "_"
		}
	}
});

(function() {
    var load = window.__load || 'amd-test-runner';
    require([load], function(mod) {
        console.log('Main loading finished.');
    });
})();
