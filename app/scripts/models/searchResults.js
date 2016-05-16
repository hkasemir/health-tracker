/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.SearchResults = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      foodName: 'salad',
      calories: 500
    },

  });

})();
