/*global health-tracker, $*/

window.HealthTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    let searchCollection = new HealthTracker.Collections.SearchResults();
    this.Collections.calCollection = new HealthTracker.Collections.CaloreStore();
    var calStoreView = new HealthTracker.Views.CaloreStore({model: this.Collections.calCollection});
    var searchView = new HealthTracker.Views.SearchResults({model: searchCollection});
  }
};

$(document).ready(function () {
  'use strict';
  HealthTracker.init();
  });
