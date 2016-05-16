/*global HealthTracker, Backbone*/

HealthTracker.Collections = HealthTracker.Collections || {};

(function () {
  'use strict';

  HealthTracker.Collections.SearchResults = Backbone.Collection.extend({

    model: HealthTracker.Models.SearchResults

  });

})();
