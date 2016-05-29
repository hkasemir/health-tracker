/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.SearchResults = Backbone.Model.extend({

    defaults: {
      foodName: 'default',
      brand: 'default',
      servingQty: 'default',
      servingSize: 'default',
      calories: 500
    }

  });

})();
