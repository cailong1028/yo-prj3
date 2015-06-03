/**
 * Created by cailong on 2015/5/22.
 */
/*global define*/
'use strict';
define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var MainView = Backbone.Layout.extend({
        el: '#container',

    });
    return MainView;
});
