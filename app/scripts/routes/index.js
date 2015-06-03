/**
 * Created by cailong on 2015/5/22.
 */
/*global define*/
'use strict';
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var IndexRoute = Backbone.Router.extend({
        routes: {
            '': 'index',
            'index': 'index'
        },
        index: function(){
            //set main view

        }
    });

    return IndexRoute;
});
