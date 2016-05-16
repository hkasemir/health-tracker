/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.CaloreStore = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      foodName: 'hamburger',
      calories: 1000
    },

  });

})();
