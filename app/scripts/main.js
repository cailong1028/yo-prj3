/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        'bootstrap-sass-official': '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        modernizr: '../bower_components/modernizr/modernizr',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-text': '../bower_components/requirejs-text/text'
    },
    packages: [

    ]
});

require([
    'backbone'
], function (Backbone) {
    Backbone.history.start();
});
