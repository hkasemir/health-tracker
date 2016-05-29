/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.CaloreStore = Backbone.Collection.extend({

    model: HealthTracker.Models.CaloreStore,

//    localStorage: new Backbone.localStorage('calore-collection')

  });

})();
