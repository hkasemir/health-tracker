/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.CaloreStore = Backbone.Collection.extend({
  //HealthTracker.Collections.CaloreStore = Backbone.Firebase.Collection.extend({

//    model: HealthTracker.Models.CaloreStore,
    url: new Firebase('https://healthtrackerudacity.firebaseio.com/store'),

    autoSync: true,

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

//    localStorage: new Backbone.localStorage('calore-collection')

  });

})();
