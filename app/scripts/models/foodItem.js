/*global HealthTracker, Backbone*/

HealthTracker.Models = HealthTracker.Models || {};

(function () {
  'use strict';

  HealthTracker.Models.FoodItem = Backbone.Model.extend({

    defaults: {
      quantity: 1,
      foodName: 'default',
      brand: 'default',
      servingQty: 'default',
      servingSize: 'default',
      calories: 500
    }

  });

})();
