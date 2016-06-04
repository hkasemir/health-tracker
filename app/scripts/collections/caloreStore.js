/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.CaloreStore = Backbone.Collection.extend({

    localStorage: new Backbone.LocalStorage('CalorieCollection'),

    addItem: function(model) {
      this.create({
      quantity: model.get('quantity'),
      foodName: model.get('foodName'),
      brand: model.get('brand'),
      servingQty: model.get('servingQty'),
      servingSize: model.get('servingSize'),
      calories: model.get('calories') 
    });

      this.trigger('change');
    }


  });

})();
