/**
 * Created by cailong on 2015/5/22.
 */
/*global define*/
'use strict';
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var App = function(){

    };

    //配置handlebars
    Backbone.Layout.configure({
        manage: true,

    });

    return App;
});
