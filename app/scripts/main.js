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
        jquery: 'app/bower_components/jquery/dist/jquery',
        backbone: 'app/bower_components/backbone/backbone',
        underscore: 'app/bower_components/underscore/underscore',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        handlebars: 'app/bower_components/handlebars/handlebars',
        'bootstrap-sass-official': 'app/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        lodash: 'app/bower_components/lodash/dist/lodash.compat',
        modernizr: 'app/bower_components/modernizr/modernizr',
        requirejs: 'app/bower_components/requirejs/require',
        'requirejs-text': 'app/bower_components/requirejs-text/text',
        layoutmanager: 'app/bower_components/layoutmanager/backbone.layoutmanager'
    },
    packages: [

    ]
});

require([
    'underscore',
    'backbone'
], function (_, Backbone) {
    //Load modules
    var modules = [];
    require(modules, function(){
        /*_.each(_.toArray(arguments), function(module){
            module();
        });*/
        Backbone.history.start();
    });
});
